# Política Nacional • Monitor em Tempo Real

**O painel de acompanhamento político nacional mais completo, polido e profissional em formato single-file.**

Dashboard dark premium com identidade visual brasileira (verde bandeira #009739, amarelo #FFCC00 e azul institucional #002776). 

**Versão lapidada**: 
- Busca paralela otimizada de 16 fontes com cache, atualizações progressivas e timeouts (sem mais espera longa).
- Duas camadas de mapa (Poder Político vs Crise Fiscal).
- Diagrama interativo de fragmentação partidária (Chart.js).
- Filtros por viés editorial (Centro / Centro-Direita / Direita).
- Seção "Em Alta" com termos mais citados.
- Destaque visual forte para notícias novas.
- 10 canais ao vivo no YouTube (oficiais em destaque + CNN Money Brasil).
- 16 análises em vídeo atualizadas de canais como CNN Brasil, Jovem Pan, CNN Money.
- Controles em tempo real refinados (pausar, atualizar feed, ver só as novas).

Tudo em um único arquivo HTML – abre direto, funciona offline com demo rico, e está pronto para hospedagem (GitHub Pages, Netlify, Vercel).

---

## Funcionalidades principais

- **16 fontes RSS** (Folha, G1, CNN, UOL, Metrópoles, Gazeta do Povo, O Antagonista, Revista Oeste, Pleno News, Diário do Poder, etc.)
- **Filtros por viés editorial** (Centro / Centro-Direita / Direita)
- **Mapa interativo com duas camadas**: Poder Político (11 arenas) e Crise Fiscal dos Estados
- **Diagrama de Fragmentação Partidária** (Câmara dos Deputados)
- **Seção "Em Alta"** — temas e nomes mais citados em tempo real
- **Agenda Legislativa da Semana** + Lideranças em Destaque
- **10 transmissões ao vivo** (incluindo Câmara dos Deputados oficial)
- **15 análises em vídeo** selecionadas
- Atualização automática a cada ~38 segundos + controles manuais (pausar / atualizar agora / ver só as novas)
- Totalmente funcional offline (com dados de demonstração ricos)

---

## Como executar localmente

1. Abra a pasta `painel-politica-brasil`
2. Clique duas vezes em `index.html`
3. O painel abre no navegador

---

## Como hospedar online (deixar público)

Existem várias formas fáceis e gratuitas. Recomendo a opção 1 ou 2.

### Opção 1 — GitHub Pages (Recomendada - gratuita e permanente)

1. Crie um repositório novo no GitHub chamado `politica-brasil` (ou o nome que preferir).
2. Faça upload apenas do arquivo `index.html` (ou clone e faça push).
3. Vá em **Settings → Pages**
4. Em "Source", selecione `Deploy from a branch` → `main` (ou `master`) → `/ (root)`
5. Clique em **Save**.
6. Aguarde ~1 minuto. Seu painel estará disponível em:
   `https://seu-usuario.github.io/politica-brasil/`

Dica: Depois você pode configurar um domínio personalizado (ex: painel.politica.com.br).

### Opção 2 — Netlify (Mais fácil - drag & drop)

1. Acesse: [https://app.netlify.com/drop](https://app.netlify.com/drop)
2. Arraste o arquivo `index.html` para a área indicada.
3. Pronto. O site será publicado instantaneamente em um endereço como `https://nome-aleatorio.netlify.app`
4. (Opcional) Clique em "Domain settings" para usar um nome mais bonito.

### Opção 3 — Vercel

1. Acesse [https://vercel.com](https://vercel.com)
2. Faça login com GitHub
3. Clique em "New Project" → importe o repositório ou arraste a pasta
4. Deploy automático

---

## Limitações importantes (para produção)

- O painel usa **proxies CORS públicos** para buscar RSS. Eles podem ficar lentos ou falhar ocasionalmente.
- Recomenda-se, em um segundo momento, criar um pequeno backend (Cloudflare Worker ou Vercel Function) para proxy dos feeds de forma mais estável.
- O modo de demonstração é de alta qualidade e serve como fallback excelente.

---

## Stack

- Tailwind CSS (CDN)
- Leaflet.js
- Chart.js
- Vanilla JavaScript (sem framework)
- RSS via proxies públicos + fallback inteligente

---

## Licença

Uso livre para fins informativos, educacionais e profissionais.

**Não use como única fonte de decisão.** Sempre cruze com os portais oficiais da Câmara, Senado e STF.

---

## Como executar

1. Abra a pasta `painel-politica-brasil`
2. Clique duas vezes em `index.html`
3. O painel abre no navegador (Chrome/Edge/Firefox recomendados)

Funciona 100% offline com dados de demonstração de alta fidelidade.

---

## Interações principais

- Clique nas pílulas verdes de **Focos Políticos** → abre drawer detalhado + filtra notícias + destaca no mapa
- Clique nos marcadores do **Mapa Político do Brasil**
- Filtros de região + busca textual (tecla `/` foca o campo)
- Seções novas: Agenda da Semana e Lideranças (totalmente clicáveis e informativas)
- ESC fecha drawers e modais

---

## Stack

- Tailwind CSS (CDN)
- Leaflet.js (mapa)
- Vanilla JS puro
- RSS via proxies públicos + fallback demo

---

## Limitações conhecidas (honestas)

- Proxies CORS públicos podem falhar ou ficar lentos
- Alguns RSS retornam conteúdo parcial
- Números são estimativas agregadas (sempre verifique fontes primárias)
- YouTube IDs dos vídeos são ilustrativos (substitua por IDs reais em produção)

---

## Licença

Uso livre para fins informativos, educacionais e profissionais de monitoramento político.

**Não use como única fonte de decisão.** Sempre cruze com os portais oficiais da Câmara, Senado e STF.

---

Construído com o mesmo padrão de excelência do projeto **Conflitos Global**, agora com identidade brasileira forte e escopo muito mais amplo.

Este é o painel de política brasileira mais completo que cabe em um único arquivo HTML.