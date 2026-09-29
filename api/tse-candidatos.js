/**
 * Proxy DivulgaCandContas (TSE) — Eleições 2026
 * GET /api/tse-candidatos?uf=SP&cargo=7
 *
 * cargo: 1 Presidente · 3 Governador · 5 Senador · 6 Dep. Federal · 7 Dep. Estadual · 8 Dep. Distrital
 * eleicao: 6257 (padrão 2026)
 */
export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  if (req.method === 'OPTIONS') return res.status(204).end();

  const uf = String(req.query.uf || 'SP').toUpperCase();
  const cargo = String(req.query.cargo || '7');
  const eleicao = String(req.query.eleicao || '6257');
  const tseUrl = `https://divulgacandcontas.tse.jus.br/divulga/rest/v1/candidatura/listar/2026/${uf}/${eleicao}/${cargo}/candidatos`;

  const attempts = [
    tseUrl,
    `https://r.jina.ai/http://divulgacandcontas.tse.jus.br/divulga/rest/v1/candidatura/listar/2026/${uf}/${eleicao}/${cargo}/candidatos`
  ];

  for (const url of attempts) {
    try {
      const response = await fetch(url, {
        headers: {
          Accept: 'application/json,text/plain,*/*',
          'User-Agent': 'PoliticaNacional/2.2 (tse-proxy; +https://github.com/neomaster/Politicanacional)',
          Referer: 'https://divulgacandcontas.tse.jus.br/divulga/#/home'
        }
      });
      if (!response.ok) continue;
      let text = await response.text();
      // jina envolve o JSON em markdown
      const idx = text.indexOf('{"unidadeEleitoral"');
      if (idx >= 0) text = text.slice(idx);
      const end = text.lastIndexOf('}');
      if (end > 0) text = text.slice(0, end + 1);
      const data = JSON.parse(text);
      res.setHeader('Cache-Control', 's-maxage=300, stale-while-revalidate=600');
      return res.status(200).json({
        ok: true,
        fonte: 'https://divulgacandcontas.tse.jus.br/',
        sincronizadoEm: new Date().toISOString(),
        uf,
        cargo,
        eleicao,
        data
      });
    } catch (_) {
      /* next */
    }
  }

  return res.status(502).json({
    error: 'Não foi possível obter a lista do TSE',
    uf,
    cargo,
    hint: 'Tente novamente ou consulte divulgacandcontas.tse.jus.br'
  });
}
