/**
 * Proxy opcional de RSS (Vercel/Netlify serverless).
 * Uso: /api/rss?url=https://g1.globo.com/rss/g1/politica/
 */
export default async function handler(req, res) {
  const url = req.query?.url || (req.url && new URL(req.url, 'http://x').searchParams.get('url'));
  if (!url) {
    return res.status(400).json({ error: 'Missing url parameter' });
  }

  try {
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (compatible; PoliticaNacional/2.0; +https://github.com/neomaster/Politicanacional)',
        Accept: 'application/rss+xml, application/xml, text/xml, */*'
      }
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.status}`);
    }

    const text = await response.text();
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Content-Type', 'application/xml; charset=utf-8');
    res.setHeader('Cache-Control', 's-maxage=120, stale-while-revalidate=300');
    return res.status(200).send(text);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}
