// ==========================================================
// Projeto 3 – Painel Interativo com JavaScript
// Fluxo: localizar elementos -> ouvir cliques -> ler dados ->
//        validar -> decidir -> mostrar mensagem na página.
// ==========================================================

// 1) SELEÇÃO DOS ELEMENTOS (getElementById)
const campoNome = document.getElementById('nome');
const selectInteresse = document.getElementById('interesse');
const botaoGerar = document.getElementById('btnGerar');
const botaoTema = document.getElementById('btnTema');
const areaResultado = document.getElementById('resultado');

// 2) FUNÇÃO QUE EXIBE A MENSAGEM NA PÁGINA (textContent)
// O parâmetro "ehErro" controla qual classe visual será aplicada.
function mostrarMensagem(texto, ehErro) {
  areaResultado.textContent = texto;
  areaResultado.classList.remove('resultado--vazio');
  areaResultado.classList.toggle('resultado--erro', ehErro);
  campoNome.classList.toggle('campo--invalido', ehErro);
}

// 3) FUNÇÃO QUE ESCOLHE A ORIENTAÇÃO (switch + template string)
function criarOrientacao(nome, interesse) {
  let mensagem;

  switch (interesse) {
    case 'html':
      mensagem = `Olá, ${nome}! Comece pela estrutura: tags semânticas (header, main, footer), títulos, listas, links, imagens e formulários bem rotulados.`;
      break;
    case 'css':
      mensagem = `Olá, ${nome}! Continue praticando cores, espaçamentos, Flexbox, Grid e responsividade com media queries.`;
      break;
    case 'javascript':
      mensagem = `Olá, ${nome}! Pratique variáveis, eventos, condições e funções, e treine alterar a página com o DOM.`;
      break;
    default:
      mensagem = `Olá, ${nome}! Escolha uma área de interesse para receber sua orientação.`;
  }

  return mensagem;
}

// 4) FUNÇÃO PRINCIPAL: LER, VALIDAR E MOSTRAR
function gerarOrientacao() {
  const nome = campoNome.value.trim(); // trim() remove espaços das pontas
  const interesse = selectInteresse.value;

  // Validação: nome vazio (ou só com espaços) impede o envio
  if (nome === '') {
    mostrarMensagem('Digite seu nome para receber a orientação.', true);
    campoNome.focus();
  } else {
    mostrarMensagem(criarOrientacao(nome, interesse), false);
  }
}

// 5) FUNÇÃO QUE ALTERNA O TEMA (classList.toggle)
function alternarTema() {
  // toggle devolve true se a classe foi adicionada e false se foi removida
  const escuro = document.body.classList.toggle('tema-escuro');
  botaoTema.setAttribute('aria-pressed', escuro);
}

// 6) EVENTOS DE CLIQUE (addEventListener)
botaoGerar.addEventListener('click', gerarOrientacao);
botaoTema.addEventListener('click', alternarTema);

// Extra de usabilidade: Enter no campo de nome também gera a orientação
campoNome.addEventListener('keydown', function (evento) {
  if (evento.key === 'Enter') {
    gerarOrientacao();
  }
});
