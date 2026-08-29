# Máfia Dog's

Landing page oficial da Máfia Dog's, criada para concentrar os canais de pedido da operação em Campo de Santana, Curitiba - PR.

O projeto reúne em uma única página as frentes de **Pizzaria**, **Hamburgueria** e **Marmitaria**, com acesso rápido ao iFood, 99Food, cardápios online, WhatsApp e Instagram.

## Site

Domínio principal:

- `https://mafiadogs.com.br/`

Hospedagem:

- GitHub Pages
- Domínio personalizado configurado via `CNAME`
- DNS gerenciado pela Cloudflare

## Objetivo

A página foi pensada como uma landing page mobile-first para uso principalmente em bio do Instagram, compartilhamento por WhatsApp e busca local.

O conteúdo e os metadados dão prioridade a pesquisas relacionadas a:

- Máfia Dog's Curitiba
- Pizzaria em Curitiba
- Hamburgueria em Curitiba
- Marmitaria em Curitiba
- Pizza em Campo de Santana
- Hambúrguer em Campo de Santana
- Marmita em Campo de Santana

## Recursos atuais

- Layout responsivo e mobile-first
- Identidade visual baseada na paleta oficial da marca
- Cards independentes para Pizzaria, Hamburgueria e Marmitaria
- Fotos reais dos produtos
- Logo e favicon próprios
- Links para iFood, 99Food, cardápios e WhatsApp
- Status automático de aberto/fechado conforme horário de cada operação
- Horário calculado no fuso `America/Sao_Paulo`
- 99Food da Pizzaria marcado como `Em breve`
- SEO local voltado para Curitiba
- Canonical URL para `mafiadogs.com.br`
- Open Graph e Twitter Cards
- Dados estruturados Schema.org em JSON-LD
- `robots.txt`
- `sitemap.xml`
- GitHub Pages com domínio personalizado

## Horários configurados

- Marmitaria: `11:00` às `15:00`
- Pizzaria: `18:00` às `23:30`
- Hamburgueria: `19:00` às `23:30`

Fuso utilizado no JavaScript: `America/Sao_Paulo`.

## Estrutura principal

```text
.
├── index.html
├── CNAME
├── robots.txt
├── sitemap.xml
├── .nojekyll
├── .gitignore
├── assets/
│   ├── styles.css
│   └── cards/
│       ├── logo.png
│       ├── favicon.png
│       ├── pizza.jpeg
│       ├── Hamburgueria.jpeg
│       └── Marmitaria.jpeg
├── src/
│   └── main.js
└── README.md
```

## Responsabilidades dos arquivos

- `index.html`: estrutura semântica, conteúdo, metadados sociais e SEO estruturado.
- `assets/styles.css`: identidade visual, layout, responsividade e estados visuais.
- `src/main.js`: cálculo dos horários e controle do estado aberto/fechado dos cards.
- `assets/cards/`: imagens utilizadas na versão publicada.
- `robots.txt` e `sitemap.xml`: suporte à indexação pelos mecanismos de busca.
- `CNAME`: domínio personalizado do GitHub Pages.
- `.nojekyll`: publicação estática direta pelo GitHub Pages.

O site é estático e não depende de Node.js, npm, Tailwind ou etapa de build para funcionar.

## SEO e busca local

O `index.html` contém:

- título e descrição focados em Curitiba
- `meta robots` e `googlebot`
- URL canônica
- localização `BR-PR / Curitiba`
- Open Graph
- Twitter Card
- JSON-LD com as três operações da marca
- endereço em Campo de Santana
- telefones, horários, imagens e cardápios estruturados

O `robots.txt` libera a indexação e informa o caminho do sitemap. O `sitemap.xml` usa o domínio oficial como URL canônica.

## Contatos e localização

- Instagram: `@mafiadogs1`
- Pizzaria: `(41) 99623-4376`
- Hamburgueria e Marmitaria: `(41) 98779-3052`
- Endereço: `R. Marcos Bertoldi, 116 - Campo de Santana, Curitiba - PR`

## Deploy

O deploy é feito automaticamente pelo GitHub Pages a partir da branch `main`.

Alterações no `index.html`, CSS, JavaScript, imagens, `robots.txt`, `sitemap.xml` ou demais arquivos publicados entram no próximo deploy do Pages.
