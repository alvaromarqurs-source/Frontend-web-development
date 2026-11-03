# Projeto 3 - JavaScript

**Descubra seu caminho no Front-End** · Painel Interativo com JavaScript
Disciplina: Desenvolvimento Front-End para Web · Universidade Cruzeiro do Sul · 2026/2

## Descrição

Página interativa em que o visitante informa o **nome**, escolhe uma **área de interesse** (HTML, CSS ou JavaScript) e recebe uma **orientação personalizada de estudos**, exibida na própria página.

Principais funcionalidades:

- **Validação do nome:** se o campo estiver vazio (ou só com espaços), a página mostra uma mensagem de erro e devolve o foco ao campo.
- **Orientação personalizada:** o JavaScript lê o nome e a área escolhida e monta uma mensagem diferente para HTML, CSS e JavaScript.
- **Tema claro e escuro:** o botão "Alterar tema" alterna uma classe CSS (`tema-escuro`) no `body`, redefinindo as variáveis de cor.
- **Atalho de teclado:** pressionar Enter no campo de nome também gera a orientação.
- **Layout responsivo:** a página se adapta a telas pequenas por meio de media query.

## Tecnologias utilizadas

- **HTML5** - estrutura semântica (`header`, `main`, `footer`, `label`, `input`, `select`, `button`)
- **CSS3** - variáveis CSS, Flexbox, Grid, media queries e temas claro/escuro
- **JavaScript (ES6)** - `getElementById`, `addEventListener`, `if/else`, `switch`, template strings, `textContent` e `classList.toggle()`

## Estrutura do projeto

```
projeto3_javascript/
├── index.html
├── README.md
├── css/
│   └── estilo.css
└── js/
    └── script.js
```

## Como abrir o projeto

1. Baixe ou clone o repositório e mantenha a estrutura de pastas acima.
2. Abra a pasta `projeto3_javascript`.
3. Dê um duplo clique em `index.html` para abri-lo no navegador (Chrome, Edge, Firefox etc.).
4. Digite seu nome, escolha uma área de interesse e clique em **Gerar orientação**.
5. Clique em **Alterar tema** para alternar entre o modo claro e o escuro.

Não é necessário instalar nada nem usar servidor: basta um navegador.

## Autor

**Alvaro Marques De Araujo**
