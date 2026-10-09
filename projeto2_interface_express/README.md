# Nexo Tech — Tecnologia e Inteligência Artificial

Projeto acadêmico desenvolvido para a atividade **Projeto 2 — Interface Express: Do HTML ao CSS com Inteligência Artificial**, da disciplina Desenvolvimento Front-End para Web.

## Tema do projeto

Landing page sobre tecnologia, programação e inteligência artificial. A página apresenta o tema, três cards informativos e um formulário demonstrativo, usando uma identidade visual escura com detalhes em roxo e verde.

## Alterações realizadas

- O arquivo `estilo.css` foi retirado da pasta `css` e colocado na mesma pasta que o `index.html`.
- O caminho do CSS no HTML foi atualizado para apontar para o arquivo na pasta principal:

  ```html
  <link rel="stylesheet" href="./estilo.css">
  ```

- O projeto continua usando um arquivo CSS externo para organizar os estilos separadamente do HTML.

> **Atenção:** o enunciado original pede que o CSS fique em `css/estilo.css`. A organização atual funciona com `estilo.css` na pasta principal, mas, para seguir exatamente o requisito do professor, coloque o arquivo novamente dentro da pasta `css` e altere o link para `./css/estilo.css`.

## Estrutura atual dos arquivos

```text
projeto2_interface_express/
├── index.html
├── estilo.css
└── README.md
```

## Conteúdo da página

- **Cabeçalho:** nome do projeto e menu com links internos.
- **Apresentação:** título, texto explicativo e botão de chamada para ação.
- **Destaques:** três cards sobre Inteligência Artificial, Programação e Inovação Digital.
- **Participação:** formulário demonstrativo para selecionar um tema de interesse.
- **Rodapé:** identificação da atividade acadêmica.

## Recursos de HTML e CSS utilizados

- HTML5 semântico, com elementos como `header`, `nav`, `main`, `section`, `article` e `footer`.
- CSS externo conectado ao HTML por meio da tag `link`.
- Classes, identificador e seletores hierárquicos.
- Cores, fontes, fundos, bordas, margens, espaçamentos e dimensões.
- CSS Grid e Flexbox para organizar o conteúdo.
- Estados `:hover` e `:focus-visible`.
- Transições e transformações simples.
- Media queries para adaptar a interface a telas menores.

## Propriedades CSS novas exploradas

| Propriedade ou recurso | Aplicação | Finalidade |
|---|---|---|
| `box-shadow` | Botão principal e elemento gráfico central | Criar profundidade e efeito de brilho. |
| `clamp()` | Títulos da página | Ajustar o tamanho da fonte de forma flexível, com limites mínimo e máximo. |
| `backdrop-filter` | Cabeçalho | Aplicar desfoque ao conteúdo que fica atrás do cabeçalho translúcido. |

Para documentar corretamente a atividade, altere os valores dessas propriedades no arquivo CSS, compare os resultados no navegador e registre suas próprias observações.

## Prompts utilizados como apoio

**Para gerar a base HTML:**

> Crie uma landing page semântica em HTML5 sobre tecnologia e inteligência artificial. Inclua cabeçalho com menu de links internos, apresentação, três cards informativos, formulário demonstrativo e rodapé. Use nomes de classes claros e não inclua CSS nem JavaScript.

**Para aprender propriedades CSS:**

> Sugira três propriedades ou recursos CSS, explique cada um em linguagem simples, mostre um exemplo pequeno e proponha valores para eu alterar e observar o resultado. Não reescreva o projeto inteiro.

## Como abrir

1. Mantenha `index.html` e `estilo.css` na mesma pasta.
2. Abra `index.html` em um navegador atualizado.
3. Teste os links do menu, os efeitos ao passar o mouse e a adaptação da página ao reduzir a largura da janela.
4. Teste o formulário demonstrativo. Ele não envia nem armazena dados em um servidor.

## Checklist antes da entrega

- [ ] Confirmar a organização de arquivos exigida pelo professor.
- [ ] Testar a página em computador e em tela estreita.
- [ ] Alterar e testar três propriedades CSS novas.
- [ ] Manter pelo menos duas propriedades novas no projeto.
- [ ] Registrar no README os resultados observados nos testes.
- [ ] Fazer uma captura de tela da página aberta no navegador.
- [ ] Conferir que consigo explicar as principais escolhas de HTML e CSS.

---

**Projeto 2 — Interface Express | Desenvolvimento Front-End para Web | 2026/2**

