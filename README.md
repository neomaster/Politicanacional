# Política Nacional • Monitor Fiscal e dos Três Poderes

**v2.0** — Painel de acompanhamento político nacional com **finanças públicas da União sincronizadas**, publicações da **Transparência Brasil** e feed em tempo real dos três poderes.

Identidade visual brasileira (verde #009739, amarelo #FFCC00, azul #002776). UX de serviços rápidos e cartões KPI inspirada em portais de transparência municipal como [piracanjuba.ai](https://piracanjuba.ai/).

---

## Novidades v2.0

| Módulo | O que faz | Fonte |
|--------|-----------|--------|
| **Finanças Públicas da União** | KPIs de receita prevista vs arrecadada, categorias econômicas, composição de despesas, Selic/IPCA ao vivo | [Portal da Transparência — Receitas](https://portaldatransparencia.gov.br/receitas) + [BCB SGS](https://www.bcb.gov.br/) |
| **Publicações TB** | Cartões com relatórios recentes (emendas, teto, AGU, medicamentos) | [transparencia.org.br/publicacoes](https://www.transparencia.org.br/publicacoes/) |
| **Serviços rápidos** | Atalhos oficiais (Receitas, Despesas, Câmara, Senado, STF, TB) | Estilo piracanjuba.ai |
| **Sync no mesmo ciclo** | Atualizar feed também re-sincroniza o painel fiscal (~42s) | Front-end |

---

## Funcionalidades

- **Painel fiscal síncrono** — snapshot oficial + tentativas de re-sync + Selic/IPCA via API aberta do Banco Central  
- **16+ fontes RSS** com filtros por região e viés editorial  
- **Mapa** com camadas Poder Político e Crise Fiscal  
- **Fragmentação partidária**, agenda legislativa, lideranças, “Em Alta”  
- **10 canais ao vivo** no YouTube + análises em vídeo  
- Funciona offline com demo + snapshot fiscal embutido  

---

## Como executar

1. Abra a pasta `Politicanacional`
2. Clique duas vezes em `index.html` **ou** sirva via HTTP:

```bash
# Python
python -m http.server 8080

# Node
npx serve .
```

3. Acesse `http://localhost:8080`

> Dica: servir via HTTP melhora CORS e proxies em relação a `file://`.

---

## Estrutura

```
Politicanacional/
├── index.html              # App completo (single-file + Tailwind CDN)
├── data/
│   ├── fiscal-snapshot.json    # Snapshot receitas/despesas (manter atualizado)
│   └── publicacoes-tb.json     # Catálogo Transparência Brasil
├── api/
│   ├── fiscal.js               # Proxy opcional API CGU (chave necessária)
│   └── rss.js                  # Proxy opcional de RSS
├── README.md
└── COMO-HOSPEDAR.md
```

---

## Dados fiscais — como funciona

1. **Snapshot curado** (`data/fiscal-snapshot.json` + embutido no `index.html`) com números do painel de Receitas do Portal (exercício corrente).  
2. **Ciclo síncrono**: a cada ~42s (ou no botão “Atualizar” / “Sincronizar agora”) o painel:
   - busca **Selic** e **IPCA** na API aberta do BCB;
   - tenta re-ler o HTML do Portal via proxies (o site é SPA — falha com frequência);
   - mantém o snapshot se o Portal não responder.  
3. **Proxy com chave** (opcional, produção): configure `PORTAL_TRANSPARENCIA_API_KEY` e faça deploy de `api/fiscal.js` (Vercel/Netlify). Cadastro da chave: [API de Dados do Portal](https://portaldatransparencia.gov.br/api-de-dados).

**Valores de referência (coletados do Portal — Receitas 2026):**

| Indicador | Valor |
|-----------|--------|
| Orçamento da receita (previsto) | R$ 6,34 trilhões |
| Receita realizada (arrecadado) | R$ 3,12 trilhões |
| Receitas correntes | 53,27% do arrecadado |
| Receitas de capital | 45,46% do arrecadado |

Sempre confira no [Portal da Transparência](https://portaldatransparencia.gov.br/receitas).

---

## Hospedagem

- **GitHub Pages** — Settings → Pages → branch `main` → `/ (root)`  
- **Netlify Drop** — arraste `index.html` (ou a pasta)  
- **Vercel** — importe o repositório; functions em `api/` se quiser proxy  

Detalhes em [COMO-HOSPEDAR.md](./COMO-HOSPEDAR.md).

---

## Stack

- Tailwind CSS (CDN)  
- Leaflet.js  
- Chart.js  
- Vanilla JS  
- BCB SGS (indicadores ao vivo)  
- RSS via proxies + cache  

---

## Limitações (honestas)

- A API REST da CGU **exige chave** e não pode ser chamada de forma segura só no browser.  
- O Portal renderiza muito conteúdo via SPA; scraping por proxy é **melhor esforço**.  
- Proxies CORS públicos de RSS podem falhar.  
- Composição de despesas por função é **tipológica** (orientação visual) — detalhe no Portal.  
- Números do snapshot devem ser **revisados periodicamente** em `data/fiscal-snapshot.json`.  

**Não use como única fonte de decisão.** Cruze com Portal da Transparência, Câmara, Senado, STF e Tesouro.

---

## Referências de produto

- [Portal da Transparência — Receitas](https://portaldatransparencia.gov.br/receitas)  
- [Transparência Brasil — Publicações](https://www.transparencia.org.br/publicacoes/)  
- [piracanjuba.ai](https://piracanjuba.ai/) — referência de UX para transparência pública com dados oficiais  

---

## Licença

Uso livre para fins informativos, educacionais e de controle social.

Repositório: [github.com/neomaster/Politicanacional](https://github.com/neomaster/Politicanacional)
