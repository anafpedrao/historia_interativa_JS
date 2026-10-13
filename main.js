const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
  {
    enunciado: "A cidade tem pouco dinheiro. Onde investir primeiro?",
    alternativas: [
      {
        texto: "Educação.",
        afirmacao: "A cidade investiu em educação, melhorando a aprendizagem dos alunos e criando oportunidades para o futuro."
      },
      {
        texto: "Saúde.",
        afirmacao: "A cidade priorizou a saúde, ampliando o atendimento médico e melhorando a qualidade de vida da população."
      }
    ]
  },
  {
    enunciado: "A cidade enfrenta falta de água.",
    alternativas: [
      {
        texto: "Investir em infraestrutura.",
        afirmacao: "A cidade investiu em infraestrutura hídrica, reduzindo o desperdício e melhorando o abastecimento de água."
      },
      {
        texto: "Criar campanhas de conscientização.",
        afirmacao: "A cidade promoveu campanhas de conscientização, incentivando a população a economizar água e adotar hábitos sustentáveis."
      }
    ]
  },
  {
    enunciado: "Há muito lixo nas ruas.",
    alternativas: [
      {
        texto: "Aumentar a coleta.",
        afirmacao: "A cidade ampliou a coleta de resíduos, deixando as ruas mais limpas e reduzindo os problemas causados pelo descarte inadequado."
      },
      {
        texto: "Investir em reciclagem.",
        afirmacao: "A cidade fortaleceu a reciclagem, diminuiu a quantidade de resíduos enviados aos aterros e gerou oportunidades de trabalho."
      }
    ]
  },
  {
    enunciado: "O trânsito está piorando.",
    alternativas: [
      {
        texto: "Melhorar o transporte público.",
        afirmacao: "A cidade melhorou o transporte público, incentivando seu uso, reduzindo a quantidade de carros nas ruas e diminuindo a poluição."
      },
      {
        texto: "Construir novas vias.",
        afirmacao: "A cidade construiu novas vias, facilitando inicialmente a circulação de veículos, mas aumentando os custos e a necessidade de planejamento ambiental."
      }
    ]
  },
  {
    enunciado: "Depois de quatro anos:",
    alternativas: [
      {
        texto: "A cidade ficou mais sustentável.",
        afirmacao: "Ao final de quatro anos, a cidade se tornou mais sustentável, com melhores serviços públicos, menos desperdício e maior preocupação ambiental."
      },
      {
        texto: "A cidade melhorou economicamente, mas ainda enfrenta problemas ambientais.",
        afirmacao: "Ao final de quatro anos, a economia da cidade cresceu, mas os investimentos priorizaram o desenvolvimento econômico e alguns problemas ambientais continuaram sem solução."
      }
    ]
  }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
  if (atual >= perguntas.length) {
    mostraResultado();
    return;
  }

  perguntaAtual = perguntas[atual];
  caixaPerguntas.textContent = perguntaAtual.enunciado;
  caixaAlternativas.textContent = "";
  mostraAlternativas();
}

function mostraAlternativas() {
  for (const alternativa of perguntaAtual.alternativas) {
    const botaoAlternativa = document.createElement("button");
    botaoAlternativa.textContent = alternativa.texto;
    botaoAlternativa.addEventListener("click", () => respostaSelecionada(alternativa));
    caixaAlternativas.appendChild(botaoAlternativa);
  }
}

function respostaSelecionada(opcaoSelecionada) {
  const afirmacao = opcaoSelecionada.afirmacao;
  historiaFinal += afirmacao + " ";
  atual++;
  mostraPergunta();
}

function mostraResultado() {
  caixaPerguntas.textContent = "Em 2030...";
  textoResultado.textContent = historiaFinal;
  caixaAlternativas.textContent = "";
}

mostraPergunta();