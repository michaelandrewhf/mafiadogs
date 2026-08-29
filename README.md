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

- Marmitaria: `09:00` às `16:00`
- Hamburgueria: `17:00` à `01:00`
- Pizzaria: `17:00` à `01:00`

Fuso utilizado no JavaScript: `America/Sao_Paulo`.

## Arquitetura atual

O projeto foi mantido propositalmente simples e sem dependência de build para produção.

As responsabilidades estão separadas da seguinte forma:

- `index.html`: estrutura semântica, conteúdo, metadados SEO e JSON-LD
- `assets/styles.css`: todo o visual e comportamento responsivo
- `src/main.js`: lógica de disponibilidade das operações e atualização automática dos cards
- `assets/cards/`: logo, favicon e fotos usadas na landing page
- `robots.txt`: regras de rastreamento
- `sitemap.xml`: URL principal para mecanismos de busca
- `CNAME`: domínio personalizado do GitHub Pages

### Estrutura principal

```text
.
├── index.html
├── CNAME
├── robots.txt
├── sitemap.xml
├── .nojekyll
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

O GitHub Pages serve os arquivos diretamente; nenhuma compilação é necessária para publicar a versão atual.

## CSS

Todo o estilo visual está em `assets/styles.css`.

A separação foi feita sem mudança visual intencional. O CSS mantém exatamente os mesmos seletores, paleta, medidas, breakpoints, cards, estados de aberto/fechado e responsividade que existiam quando os estilos estavam embutidos no `index.html`.

A paleta principal é:

- Vermelho: `#93282C`
- Verde: `#154734`
- Creme: `#F5E1A4`
- Fundo: `#140C0D`

## JavaScript

A lógica de interface está em `src/main.js`.

Responsabilidades atuais:

- obter o horário em `America/Sao_Paulo`
- determinar se cada operação está aberta
- alternar classes `open` e `closed`
- atualizar o texto de status
- habilitar ou desabilitar links de pedido
- repetir a verificação a cada 60 segundos

O arquivo é carregado com `defer`, portanto não bloqueia o parsing do HTML.

## Tailwind CSS

O projeto possui arquivos antigos relacionados ao Tailwind/npm, mas **a versão atual não depende do Tailwind para funcionar**.

Para este estado do projeto, CSS tradicional foi mantido porque já existe um layout fechado e isso evita introduzir build, dependências e risco de alteração visual apenas para reorganizar responsabilidades.

Esses arquivos legados podem ser removidos futuramente em uma limpeza separada, depois de confirmar que não são mais necessários para nenhuma outra versão do projeto.

## SEO e busca local

O `index.html` mantém:

- título e descrição focados em Curitiba
- `meta robots` e `googlebot`
- URL canônica
- localização `BR-PR / Curitiba`
- Open Graph
- Twitter Card
- JSON-LD com as três operações da marca
- endereço em Campo de Santana
- telefones, horários, imagens e cardápios estruturados

O JSON-LD permanece propositalmente no HTML, pois ele faz parte dos metadados da página e não da lógica JavaScript da interface.

O `robots.txt` libera a indexação e informa o caminho do sitemap. O `sitemap.xml` usa o domínio oficial como URL canônica.

## Contatos e localização

- Instagram: `@mafiadogs1`
- Pizzaria: `(41) 99623-4376`
- Hamburgueria e Marmitaria: `(41) 98779-3052`
- Endereço: `R. Marcos Bertoldi, 116 - Campo de Santana, Curitiba - PR`

## Deploy

O deploy é feito automaticamente pelo GitHub Pages a partir da branch `main`.

Alterações em `index.html`, `assets/styles.css`, `src/main.js`, imagens, `robots.txt`, `sitemap.xml` ou demais arquivos publicados entram no próximo deploy do Pages.
