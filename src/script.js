const questoesArray = [
    {
        perguntas: 'Qual é o vulção mais antigo do mundo?',
        alters: [
            { texto: 'Vulcão Amazonas', resposta: true },
            { texto: 'Etna ', resposta: false },
            { texto: 'Mount Kilauea', resposta: false },
            { texto: 'Popocatépetl', resposta: false }
        ]
    },
    {
        perguntas: 'Marque a alternativa verdadeira',
        alters: [
            { texto: 'Vulcão não é uma montanha, e nem toda montanha é um vulcão. ', resposta: false },
            { texto: 'Vulcão é uma montanha, mas nem toda montanha é um vulcão.', resposta: true },
            { texto: 'Vulcão não é uma montanha, mas toda montanha é um vulcão.', resposta: false },
            { texto: 'Vulcão é uma montanha, e toda montanha é um vulcão.', resposta: false }
        ]
    },
    {
        perguntas: 'Qual o tipo de erupção vulcânica é caracterizado por uma erupção lenta, mas a lava desliza rapidamente?',
        alters: [
            { texto: 'Erupção Pliniana ', resposta: false },
            { texto: 'Erupção Valcaniana', resposta: false },
            { texto: 'Erupção Efusiva', resposta: true },
            { texto: 'Erupção Mistas', resposta: false },
        ]
    },
    {
        perguntas: 'Como se forma um vulcão?',
        alters: [
            { texto: 'Pelo atividade tectônica das placas da crosta terrestre', resposta: true },
            { texto: 'Pela erosão causada pelo vento e pela água.', resposta: false },
            { texto: 'Pela deposição de cinzas vulvãnicas em áreas montanhosas.', resposta: false },
            { texto: 'Pela acumulação de sedimentos no fundo do vulção', resposta: false }
        ]
    },
    {
        perguntas: 'Oque causa a expansão do assoalho oceânico?',
        alters: [
            { texto: 'Terremotos.', resposta: false },
            { texto: 'Erupções nos fundos dos mares.', resposta: true },
            { texto: 'Tsunamis', resposta: false },
            { texto: 'Poluição', resposta: false }
        ]
    },
    {
        perguntas: 'Por onde é expelido a lava?',
        alters: [
            { texto: 'Chaminé ', resposta: false },
            { texto: 'Subglacial', resposta: false },
            { texto: 'Buraco vulcãnico', resposta: false },
            { texto: 'Cratera', resposta: true },
        ]
    },
    {
        perguntas: 'Qual vulcão é conhecido por ser ingrime e se mantem ativo por longos períodos?',
        alters: [
            { texto: 'Ativo ', resposta: false },
            { texto: 'Caldeira', resposta: false },
            { texto: 'Estratovulcões', resposta: true },
            { texto: 'Estromboliana', resposta: false }
        ]
    },
    {
        perguntas: 'Qual é diferença entre a erupção havaiana e vulcaniana?',
        alters: [
            { texto: 'Havaiana não há descarga de gases, ao contrário da vulcaniana', resposta: true },
            { texto: 'Havaiana há descarga de gases, ao contrário da vulcaniana', resposta: false },
            { texto: 'Havaina ocorre sob o gelo, ao contrário da vulcaniana', resposta: false },
            { texto: 'Nenhuma da alternativas', resposta: false }
        ]
    },
    {
        perguntas: 'Qual das alternativas abaixo não é uma Erupção explosiva',
        alters: [
            { texto: 'A lava solidifica-se mesmo dentro da chaminé, formando agulhas vulcânicas ', resposta: false },
            { texto: 'A lava desliza rapidamente, espalhando-se por grandes distâncias', resposta: true },
            { texto: 'A lava, não chega a se derramar,contituído por estruturas circulares, às vezes chamadas de domas ou cúpulas.', resposta: false },
            { texto: 'A lava é muito viscosa e de difícil escoamento, impedindo a liberação de gases que causariam fortes explosões.', resposta: false }
        ]
    },
    {
        perguntas: '"Ele pode ejetar grandes quantidades de material ígneo que percorre longas distâncias, formando grandes montanhas semelhantes a escudos."',
        alters: [
            { texto: 'Ativo ', resposta: false },
            { texto: 'Caldeira', resposta: false },
            { texto: 'Vulcão-escudo', resposta: true },
            { texto: 'Pliniana', resposta: false }
        ]
    },
]

const perguntaEl = document.querySelector('#pergunta');
const alternativasBtns = document.querySelector('.altenativas-btns');
const proxBtn = document.querySelector('#prox');
const numQuestao = document.querySelector('#ate-questao');
const btnEmail = document.querySelector('#email');
const mostrarPontos = document.querySelector('#qtd-pontos');

let indexQuestaoAtual = 0;
let pontos = 0;

function iniciarQuiz() {
    indexQuestaoAtual = 0;
    pontos = 0;
    proxBtn.innerText = 'Próximo';
    mostrarQuestao();
    mostrarPontos.innerText = `${pontos} ponto(s)`;
}

function mostrarQuestao() {
    resetarEstado();
    let questaoAtual = questoesArray[indexQuestaoAtual];
    let contagemDaQuestao = indexQuestaoAtual + 1;
    perguntaEl.innerText = questaoAtual.perguntas;
    numQuestao.innerText = contagemDaQuestao;

    questaoAtual.alters.forEach(alternativa => {
        const button = document.createElement('button');
        button.innerHTML = alternativa.texto;
        button.classList.add('btn');
        alternativasBtns.appendChild(button);
        if (alternativa.resposta) {
            button.dataset.resposta = alternativa.resposta;
        }
        button.addEventListener('click', alterSelect);
    });
}

function resetarEstado() {
    proxBtn.style.display = 'none';
    while (alternativasBtns.firstChild) {
        alternativasBtns.removeChild(alternativasBtns.firstChild);
    }
}

function alterSelect(e) {
    const btnSelect = e.target;
    const eVdd = btnSelect.dataset.resposta === 'true';

    if (eVdd) {
        btnSelect.classList.add('verdadeira');
        pontos++;
        mostrarPontos.innerText = `${pontos} ponto(s)`;
    } else {
        btnSelect.classList.add('falsa');
    }

    Array.from(alternativasBtns.children).forEach(button => {
        if (button.dataset.resposta === 'true') {
            button.classList.add('verdadeira');
        }
        button.disabled = true;
    });
    proxBtn.style.display = 'block';
}

function mostrarPontuacao() {
    resetarEstado()
    perguntaEl.innerHTML = 'Você chegou ate o final';
    btnEmail.style.display = 'block';
    btnEmail.setAttribute('href', `mailto:rebeca.caroba@etec.sp.gov.br?subject=&cc=copia@provedor.com.br&body=Você acertou ${pontos} de ${questoesArray.length}`);
}

function eventoProxBtn() {
    indexQuestaoAtual++
    if (indexQuestaoAtual < questoesArray.length) {
        mostrarQuestao();
    } else {
        mostrarPontuacao();
    }
}

proxBtn.addEventListener('click', () => {
    if (indexQuestaoAtual < questoesArray.length) {
        eventoProxBtn();
    } else {
        btnEmail.style.display = 'none';
        iniciarQuiz();
    }
})

iniciarQuiz();