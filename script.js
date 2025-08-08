

const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você é um(a) confeiteiro(a) que adora fazer bolos de pote e quer vender mais. O que você faz para começar a se destacar?",
        alternativas: [
            {
                texto: "Usa uma receita de bolo de pote de um site famoso para garantir uma massa perfeita.",
                afirmacao: "Você decidiu seguir uma receita confiável, garantindo um produto de alta qualidade desde o início."
            },
            {
                texto: "Tenta criar sua própria receita, com ingredientes diferentes, para ter um sabor exclusivo.",
                afirmacao: "Você optou por ser criativo(a) e inovar, buscando um diferencial no sabor do seu bolo de pote."
            }
        ]
    },
    {
        enunciado: "Com a receita definida, você precisa de sabores incríveis para atrair mais clientes. Qual sua estratégia?",
        alternativas: [
            {
                texto: "Pede sugestões de novos sabores em um grupo de confeiteiros nas redes sociais.",
                afirmacao: "Você buscou inspiração na comunidade, o que te ajudou a descobrir tendências e novas combinações."
            },
            {
                texto: "Tira um dia inteiro para fazer testes e descobrir um sabor que ninguém mais tem.",
                afirmacao: "Sua dedicação em testes e experimentação te levou a criar um sabor verdadeiramente único e memorável."
            }
        ]
    },
    {
        enunciado: "Com os bolos prontos e deliciosos, você precisa de marketing para que as pessoas os conheçam. Como você divulga seus produtos?",
        alternativas: [
            {
                texto: "Usa as redes sociais para tirar fotos incríveis dos bolos e escrever textos sobre eles.",
                afirmacao: "Você utilizou o poder do marketing digital para criar uma marca visualmente atraente e alcançar um público maior."
            },
            {
                texto: "Oferece alguns bolos para os amigos e pede que eles indiquem seu trabalho para outras pessoas.",
                afirmacao: "Você apostou no marketing boca a boca, construindo uma base de clientes leais e engajados."
            }
        ]
    },
    {
        enunciado: "Seus bolos de pote fazem o maior sucesso e você precisa de uma solução para as entregas. Qual sua escolha?",
        alternativas: [
            {
                texto: "Contrata um entregador para levar os bolos de moto ou carro.",
                afirmacao: "Você priorizou a eficiência e a rapidez na entrega, investindo em um serviço profissional."
            },
            {
                texto: "Pede a ajuda de um amigo ou familiar para entregar os bolos de bicicleta e, assim, economizar.",
                afirmacao: "Você optou por uma solução econômica e sustentável, fortalecendo laços e reduzindo custos."
            }
        ]
    },
    {
        enunciado: "O negócio cresce e você se pergunta qual deve ser o próximo passo para sua confeitaria. O que você decide fazer?",
        alternativas: [
            {
                texto: "Criar um cardápio com novos doces e sobremesas, além dos bolos de pote.",
                afirmacao: "Você expandiu seu negócio, diversificando o cardápio e atraindo novos tipos de clientes."
            },
            {
                texto: "Ensinar a receita dos seus bolos de pote em workshops para outras pessoas que querem começar a vender.",
                afirmacao: "Você se tornou um(a) mentor(a), compartilhando seus conhecimentos e inspirando outros a empreender."
            }
        ]
    },
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

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "O futuro do seu negócio...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
