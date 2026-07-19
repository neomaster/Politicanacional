/**
 * Proxy opcional para a API do Portal da Transparência (CGU).
 * Deploy: Vercel/Netlify serverless function.
 *
 * Requer variável de ambiente:
 *   PORTAL_TRANSPARENCIA_API_KEY  (chave obtida em portaldatransparencia.gov.br)
 *
 * Exemplos de uso:
 *   /api/fiscal?tipo=receitas&ano=2026
 *   /api/fiscal?tipo=despesas&ano=2026
 *
 * Documentação oficial:
 *   https://api.portaldatransparencia.gov.br/swagger-ui/index.html
 *   https://portaldatransparencia.gov.br/api-de-dados
 */

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  const key = process.env.PORTAL_TRANSPARENCIA_API_KEY;
  if (!key) {
    return res.status(503).json({
      error: 'PORTAL_TRANSPARENCIA_API_KEY não configurada',
      hint: 'Cadastre a chave em portaldatransparencia.gov.br/api-de-dados e defina no ambiente do deploy.',
      fallback: 'O front-end usa snapshot curado + BCB SGS sem esta chave.'
    });
  }

  const tipo = (req.query.tipo || 'receitas').toLowerCase();
  const ano = req.query.ano || new Date().getFullYear();
  const pagina = req.query.pagina || '1';

  // Endpoints REST oficiais (podem variar — confira o Swagger)
  const paths = {
    receitas: `/api-de-dados/receitas?ano=${ano}&pagina=${pagina}`,
    despesas: `/api-de-dados/despesas/recursos-recebidos?mesAnoInicio=01/${ano}&mesAnoFim=12/${ano}&pagina=${pagina}`,
    orgaos: `/api-de-dados/orgaos-siafi`
  };

  const path = paths[tipo];
  if (!path) {
    return res.status(400).json({
      error: 'tipo inválido',
      tipos: Object.keys(paths)
    });
  }

  try {
    const url = `https://api.portaldatransparencia.gov.br${path}`;
    const response = await fetch(url, {
      headers: {
        'chave-api-dados': key,
        Accept: 'application/json',
        'User-Agent': 'PoliticaNacional/2.0 (transparencia-fiscal)'
      }
    });

    if (!response.ok) {
      const text = await response.text();
      return res.status(response.status).json({
        error: 'Falha na API do Portal da Transparência',
        status: response.status,
        body: text.slice(0, 500)
      });
    }

    const data = await response.json();
    res.setHeader('Cache-Control', 's-maxage=300, stale-while-revalidate=600');
    return res.status(200).json({
      ok: true,
      tipo,
      ano,
      fonte: 'https://portaldatransparencia.gov.br',
      sincronizadoEm: new Date().toISOString(),
      data
    });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
