# Como Deixar o POLÍTICA NACIONAL Online (Passo a Passo)

Este painel é um único arquivo principal (`index.html`), com dados auxiliares em `data/` e proxies opcionais em `api/`.

## Método Mais Rápido (sem instalar nada)

### 1. Netlify Drop (Recomendado para começar)

1. Abra o navegador e acesse: **https://app.netlify.com/drop**
2. Arraste o arquivo `index.html` para dentro da página.
3. Aguarde o upload (leva poucos segundos).
4. Pronto! Você receberá um link como:
   - `https://nome-aleatorio.netlify.app`

Você pode depois clicar em "Domain settings" para mudar o nome do site.

---

### 2. Vercel (Também muito fácil)

1. Acesse: **https://vercel.com**
2. Faça login com sua conta do GitHub (ou Google).
3. Clique em **"New Project"**.
4. Arraste a pasta `painel-politica-brasil` inteira para dentro da janela.
5. Clique em Deploy.

---

## Método Recomendado para Longo Prazo: GitHub Pages

1. Crie um repositório no GitHub chamado `politica-brasil` (pode ser público ou privado).
2. Faça upload do arquivo `index.html` para o repositório.
3. No repositório, vá em:
   - **Settings** → **Pages** (no menu da esquerda)
4. Em "Source", selecione:
   - Branch: `main`
   - Folder: `/ (root)`
5. Clique em **Save**.
6. Aguarde 1 minuto. Seu site estará disponível em:
   `https://seu-usuario.github.io/politica-brasil`

---

## Dicas Importantes

- O painel usa proxies públicos para buscar notícias. Funciona bem, mas ocasionalmente pode ficar lento. O modo de demonstração é de alta qualidade.
- Depois de hospedado, você pode compartilhar o link livremente.
- Se quiser um domínio personalizado (ex: painel.politica.com.br), tanto Netlify quanto GitHub Pages permitem isso de forma gratuita.

---

Qualquer dúvida, pode voltar aqui e perguntar. O arquivo está 100% pronto para ser publicado.