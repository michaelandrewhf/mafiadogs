# Máfia Dog's

Landing page estática da hamburgueria Máfia Dog's.

## Stack

- HTML semântico
- Tailwind CSS
- JavaScript vanilla
- GitHub Pages

## Estrutura

- `index.html`: página principal
- `src/input.css`: fonte do Tailwind e utilitários customizados mínimos
- `src/main.js`: header sticky, menu mobile, scroll reveal e ano automático
- `assets/styles.css`: CSS compilado e pronto para o GitHub Pages servir
- `assets/images/`: imagens da marca e dos produtos
- `tailwind.config.js`: tema, fontes e cores da landing
- `.nojekyll`: garante deploy estático limpo no GitHub Pages

## Desenvolvimento local

Instale as dependências:

```bash
npm install
```

Rode o watcher do Tailwind:

```bash
npm run dev
```

Para visualizar localmente em um servidor estático:

```bash
npm run preview
```

## Build

Gere o CSS final:

```bash
npm run build
```

O arquivo gerado fica em `assets/styles.css`.

## Deploy no GitHub Pages


Arquivos essenciais para o deploy:

- `index.html`
- `assets/styles.css`
- `src/main.js`
- `assets/images/`
- `.nojekyll`

## Personalização

- Textos, links e SEO: `index.html`
- Cores, componentes e pequenos utilitários: `src/input.css`
- Interações: `src/main.js`
- Imagens: `assets/images/`

## Contatos configurados

- WhatsApp: `(41) 98779-3052`
- Instagram: `@mafiadogs1`
- Cardápio online: `pedido.brendi.com.br/mafia-dogs-campo-de-santana`
- Endereço: `R. Marcos Bertoldi, 116 - Campo de Santana, Curitiba - PR`
