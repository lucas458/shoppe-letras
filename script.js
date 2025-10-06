
Math.clamp = (value, min, max) => {
    if (value < min) return min;
    if (value > max) return max;
    return value;
};



function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}



function shuffleArray( arr = [] ){
    for (let i = arr.length - 1; i >= 1; i--){
        let j = getRandomInt(0, i + 1);
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;
}







var JOGO = {
    indexFase: 0,
    moedas: 100,
    dicas: 10,
    dicasPosicoes: [],
    dicionarioIndexPagina: 0,
    dicionarioFase:[],
    dicionario: [],
    palavrasFase: [],
    tempoInicial: null,
    
    estatisticas: {
        acertos: 0,
        dicasUsadas: 0,
    },


    conquistas: [

        {nome: "acertos #1", desc: "Acerte 2 palavras", type: "increment", cond: 2, completada: false, categoria: "acertos"},
        {nome: "acertos #2", desc: "Acerte 3 palavras", type: "increment", cond: 3, completada: false, categoria: "acertos"},

        {nome: "dicas #1", desc: "Use 2 dicas", type: "increment", cond: 2, completada: false, categoria: "dicas"},
        {nome: "dicas #2", desc: "Use 3 Dicas", type: "increment", cond: 3, completada: false, categoria: "dicas"},

        {nome: "fases #1", desc: "Complete 1 Fase", type: "increment", cond: 1, completada: false, categoria: "fases"},
        {nome: "fases #2", desc: "Complete 2 Fases", type: "increment", cond: 2, completada: false, categoria: "fases"},
        
        {nome: "fases #3", desc: "Complete todas as fases", type: "oneTime", completada: false, categoria: "fases"},

    ],


    fasesCompletas: [
        // {fase: 0, tempo: 75, lista: [
        //     {texto: "ALA", dicionario: false},
        //     {texto: "BANANA", dicionario: true},
        //     {texto: "ABACATE", dicionario: true},
        // ]},
    ],

};







function criarJogo(){
    const tempJogo = localStorage.getItem("JOGO");

    if ( tempJogo == null ){
        localStorage.setItem("JOGO", JSON.stringify(JOGO));
    }
    
}


function salvarJogo(){
    localStorage.setItem("JOGO", JSON.stringify(JOGO));
}


function carregarJogo(){
    const tempJogo = localStorage.getItem("JOGO");

    if ( tempJogo == null ){
        criarJogo();
        return;
    }

    JOGO = JSON.parse(tempJogo);
}
















const FASES = [


    // {
    //     dicionario: [],
    //     teclas: [],
    //     palavras: [
    //         {texto: "ALGO", vertical: false, pos: [0, 0]},
    //     ]
    // },


    {
        dicionario: ["AVE", "AVES", "LAVE"],
        teclas: ["L", "A", "E", "S", "V"],
        palavras: [
            {texto: "ELA", vertical: false, pos: [4, 1]},
            {texto: "LEVA", vertical: false, pos: [1, 3]},
            {texto: "SALVE", vertical: false, pos: [0, 5]},
            {texto: "SELVA", vertical: true, pos: [1, 1]},
            {texto: "VELA", vertical: true, pos: [4, 0]},
            {texto: "SAL", vertical: true, pos: [6, 0]}
        ]
    },


    {
        dicionario: [],
        teclas: ["S", "P", "A", "S", "O"],
        palavras: [
            {texto: "SAO", vertical: false, pos: [0, 0]},
            {texto: "SOPA", vertical: false, pos: [1, 3]},
            {texto: "PASSO", vertical: false, pos: [0, 5]},
            {texto: "APOS", vertical: true, pos: [1, 0]},
            {texto: "SAPO", vertical: true, pos: [4, 2]}
        ]
    },
    

    {
        dicionario: ["NETA", "RETA", "TRENA", "RENTE", "TER", "ATER", "TERNA", "RENA"],
        teclas: ["N", "E", "E", "R", "T", "A"],
        palavras: [
            {texto: "ENTRE", vertical: false, pos: [0, 2]},
            {texto: "ANTE", vertical: false, pos: [2, 4]},
            {texto: "ERA", vertical: false, pos: [3, 7]},
            {texto: "ATE", vertical: false, pos: [3, 9]},
            {texto: "ETERNA", vertical: true, pos: [0, 2]},
            {texto: "ENTRA", vertical: true, pos: [2, 0]},
            {texto: "TERA", vertical: true, pos: [4, 4]},
            {texto: "ARE", vertical: true, pos: [5, 7]}
        ]
    },

    
    {
        dicionario: ["NOTE"],
        teclas: ["N", "D", "E", "E", "T", "O"],
        palavras: [
            {texto: "ONDE", vertical: false, pos: [0, 1]},
            {texto: "NETO", vertical: false, pos: [2, 3]},
            {texto: "DOENTE", vertical: false, pos: [0, 5]},
            {texto: "DOTE", vertical: true, pos: [0, 0]},
            {texto: "DENTE", vertical: true, pos: [2, 1]}
        ]
    },

    
    {
        dicionario: ["SOU"],
        teclas: ["S", "C", "R", "O", "U"],
        palavras: [
            {texto: "SUCO", vertical: false, pos: [4, 0]},
            {texto: "CURSO", vertical: false, pos: [0, 2]},
            {texto: "USO", vertical: false, pos: [6, 2]},
            {texto: "SUOR", vertical: true, pos: [4, 0]},
            {texto: "CRU", vertical: true, pos: [6, 0]},
            {texto: "COR", vertical: true, pos: [8, 1]}
        ]
    },
    
    
    {
        dicionario: ["SACO", "COA", "SOA", "CALO", "ALO"],
        teclas: ["S", "C", "A", "L", "O"],
        palavras: [
            {texto: "CALOS", vertical: false, pos: [0, 1]},
            {texto: "SAL", vertical: false, pos: [5, 2]},
            {texto: "CASO", vertical: false, pos: [2, 3]},
            {texto: "COLA", vertical: false, pos: [2, 5]},
            {texto: "OLA", vertical: false, pos: [1, 7]},
            {texto: "CAL", vertical: true, pos: [2, 5]},
            {texto: "SOCA", vertical: true, pos: [3, 0]},
            {texto: "SOLA", vertical: true, pos: [5, 2]}
        ]
    },


    {
        dicionario: [],
        teclas: ["N", "A", "E", "T", "M"],
        palavras: [
            {texto: "MENTA", vertical: false, pos: [3, 0]},
            {texto: "TEMA", vertical: false, pos: [0, 1]},
            {texto: "EMA", vertical: false, pos: [3, 3]},
            {texto: "ATE", vertical: false, pos: [2, 5]},
            {texto: "META", vertical: true, pos: [1, 0]},
            {texto: "MATE", vertical: true, pos: [3, 0]},
            {texto: "MAE", vertical: true, pos: [4, 3]},
            {texto: "NETA", vertical: true, pos: [5, 0]}
        ]
    },


    {
        dicionario: [],
        teclas: ["B", "A", "O", "N", "E", "Ç"],
        palavras: [
            {texto: "BENÇAO", vertical: false, pos: [1, 0]},
            {texto: "ANO", vertical: false, pos: [1, 2]},
            {texto: "AÇO", vertical: false, pos: [0, 4]},
            {texto: "BOA", vertical: true, pos: [1, 0]},
            {texto: "NAO", vertical: true, pos: [2, 2]},
            {texto: "ONÇA", vertical: true, pos: [6, 0]}
        ]
    },
    
    
    {
        dicionario: ["AMO", "EMA", "EMO", "GOMA", "GAMO", "GAME"],
        teclas: ["O", "E", "G", "M", "A"],
        palavras: [
            {texto: "OMEGA", vertical: false, pos: [0, 1]},
            {texto: "AGEM", vertical: false, pos: [2, 3]},
            {texto: "AME", vertical: false, pos: [3, 6]},
            {texto: "MOA", vertical: true, pos: [0, 0]},
            {texto: "MEGA", vertical: true, pos: [2, 0]},
            {texto: "GEMA", vertical: true, pos: [3, 3]},
            {texto: "EGO", vertical: true, pos: [5, 6]}
        ]
    },
    
    
    {
        dicionario: ["OVO"],
        teclas: ["L", "O", "U", "V", "R", "O"],
        palavras: [
            {texto: "OURO", vertical: false, pos: [1, 1]},
            {texto: "LOURO", vertical: false, pos: [0, 3]},
            {texto: "VOO", vertical: false, pos: [0, 6]},
            {texto: "LOUVOR", vertical: true, pos: [0, 3]},
            {texto: "LORO", vertical: true, pos: [1, 0]},
            {texto: "ROLO", vertical: true, pos: [4, 0]}
        ]
    },


    {
        dicionario: ["GIRO", "TIO", "TRIO", "GRIO"],
        teclas: ["T", "R", "G", "O", "I"],
        palavras: [
            {texto: "RITO", vertical: false, pos: [0, 2]},
            {texto: "TRIGO", vertical: false, pos: [1, 4]},
            {texto: "TRI", vertical: true, pos: [0, 1]},
            {texto: "TRIO", vertical: true, pos: [2, 2]},
            {texto: "RIO", vertical: true, pos: [3, 0]},
            {texto: "GRITO", vertical: true, pos: [5, 0]}
        ]
    },

    
    {
        dicionario: ["AMO", "OCA", "CAI", "IÇA", "COMIA"],
        teclas: ["C", "A", "M", "Ç", "O", "I"],
        palavras: [
            {texto: "MACIO", vertical: false, pos: [0, 6]},
            {texto: "COMA", vertical: false, pos: [0, 4]},
            {texto: "MAÇO", vertical: false, pos: [3, 3]},
            {texto: "AÇO", vertical: true, pos: [0, 2]},
            {texto: "CIMA", vertical: true, pos: [4, 0]},
            {texto: "MACIÇO", vertical: true, pos: [3, 3]},
            {texto: "MIO", vertical: true, pos: [0, 6]},
            {texto: "MOÇA", vertical: true, pos: [6, 2]}
        ]
    },


    {
        dicionario: ["DOM"],
        teclas: ["M", "D", "A", "G", "O"],
        palavras: [
            {texto: "MODA", vertical: false, pos: [0, 3]},
            {texto: "GOMA", vertical: false, pos: [3, 2]},
            {texto: "DOGMA", vertical: false, pos: [3, 4]},
            {texto: "AMO", vertical: false, pos: [3, 0]},
            {texto: "MAO", vertical: true, pos: [4, 0]},
            {texto: "GADO", vertical: true, pos: [3, 2]},
            {texto: "MAGO", vertical: true, pos: [5, 2]}
        ]
    },
    

    {
        dicionario: ["EITA", "ITA"],
        teclas: ["E", "A", "I", "N", "T"],
        palavras: [
            {texto: "ATE", vertical: true, pos: [0, 1]},
            {texto: "TIA", vertical: false, pos: [0, 2]},
            {texto: "IATE", vertical: true, pos: [2, 1]},
            {texto: "TEIA", vertical: false, pos: [2, 3]},
            {texto: "NETA", vertical: false, pos: [3, 0]},
            {texto: "ETNIA", vertical: true, pos: [4, 0]}
        ]
    },


    {
        dicionario: [],
        teclas: ["M", "L", "O", "O", "B"],
        palavras: [
            {texto: "BOM", vertical: true, pos: [0, 0]},
            {texto: "BOLO", vertical: false, pos: [0, 0]},
            {texto: "LOBO", vertical: true, pos: [2, 0]},
            {texto: "LOMBO", vertical: false, pos: [1, 3]}
        ]
    }


];





function getGridSizeByIndexFase( indexFase = 0 ){
    const FASE_OBJ = FASES[indexFase];

    if ( FASE_OBJ == null ){
        return false;
    }

    let gridWidth  = 0;
    let gridHeight = 0;

    FASE_OBJ.palavras.forEach((e, i) => {
        if ( e.vertical ){
            gridHeight = Math.max(gridHeight, e.pos[1] + e.texto.length);
        }else{
            gridWidth = Math.max(gridWidth, e.pos[0] + e.texto.length);
        }
    });

    return [gridWidth, gridHeight];

}











function onGanharConquista( conquista = {} ){
    console.warn("CONQUISTA REALIZADA: " + conquista.nome + " - " + conquista.desc );
    salvarJogo();
}



function verificarConquistaIncremento( valorAtual = 0, categoria = 'acertos' ){
    const listaConquistas = JOGO.conquistas.filter(e => e.categoria == categoria && e.type == "increment" && !e.completada);

    for (let i = 0; i < listaConquistas.length; i++){
        if ( valorAtual >= listaConquistas[i].cond ){
            listaConquistas[i].completada = true;
            onGanharConquista(listaConquistas[i]);
        }
    }

}




function verificarConquistaOneTime( categoria = 'fases' ){

    if ( categoria == 'fases' ){
        
        const conquista = JOGO.conquistas.find(e => e.type == 'oneTime' && e.categoria == categoria && !e.completada);

        if ( conquista == null ){
            return;
        }

        if ( JOGO.fasesCompletas.length >= FASES.length ){
            conquista.completada = true;
            onGanharConquista(conquista);
        }

        return;
    }

}

    







function enviarPalavra( texto = null ){

    if ( texto == null && entradaEnviar.classList.contains("entradaEnviarBloqueada") ){
        return;
    }

    const PALAVRA_ATUAL = (texto != null)? texto : Array.from(entradaTeclas.children).map(e => e.innerHTML).join('');
    const PALAVRA = FASES[JOGO.indexFase].palavras.find(e => e.texto == PALAVRA_ATUAL);

    if ( PALAVRA != null ){

        if ( JOGO.palavrasFase.indexOf(PALAVRA_ATUAL) >= 0 ){
            console.log("palavra, mas ja existe", PALAVRA);
            adicionarPalavra(PALAVRA.texto, PALAVRA.pos, PALAVRA.vertical);
            vibrar(200);
        }else{
            console.log('palavra nova', PALAVRA);
            JOGO.palavrasFase.push(PALAVRA_ATUAL);
            JOGO.estatisticas.acertos++;
            verificarConquistaIncremento(JOGO.estatisticas.acertos, 'acertos');
            adicionarPalavra(PALAVRA.texto, PALAVRA.pos, PALAVRA.vertical);
        }
    }else if ( FASES[JOGO.indexFase].dicionario.indexOf(PALAVRA_ATUAL) >= 0 ){

        if ( JOGO.dicionarioFase.indexOf(PALAVRA_ATUAL) >= 0 ){
            console.log('dicionario, mas ja existe');
            mostrarPalavraDicionario(PALAVRA_ATUAL);
            vibrar(200);
        }else{
            console.log('dicionario novo');
            JOGO.dicionarioFase.push(PALAVRA_ATUAL);
        }
    }else{
        console.log("errou");
        vibrar(200);
    }

    resetarEntradaPalavra();
    
    if ( JOGO.palavrasFase.length == FASES[JOGO.indexFase].palavras.length || gameGrid.querySelectorAll('.letra').length == gameGrid.children.length ){
        onGameWin();
    }

    salvarJogo();

}



function atualizarMoedas(){
    moedasValor.innerHTML = (JOGO.moedas > 9999)? "+9999" : JOGO.moedas;
    lojaMoedasQuantidade.innerHTML = (JOGO.moedas > 9999)? "+9999" : JOGO.moedas;
}


function adicionarMoeda( quantidade = 0 ){
    if ( quantidade < 0 ){
        return;
    }

    JOGO.moedas += quantidade;
    salvarJogo();
    atualizarMoedas();
}



function resetarEntradaPalavra(){
    entradaTeclas.innerHTML = "";
    document.querySelectorAll(".teclaSelecionada").forEach(e => e.classList.remove("teclaSelecionada"));
    entradaEnviar.classList.add("entradaEnviarBloqueada");
    entradaReset.classList.add("entradaResetBloqueada");
}




function isItemInArray(array, item) {
    for (var i = 0; i < array.length; i++) {
        if (array[i][0] == item[0] && array[i][1] == item[1]) {
            return true;
        }
    }
    return false;
}





function criarSlot(x, y, letra){
    letraSlot = document.createElement('div');
    letraSlot.classList.add("letraSlot");
    letraSlot.setAttribute("pos", `${x-1},${y-1}`);
    letraSlot.setAttribute("letra", letra);
    letraSlot.style.gridColumnStart = x;
    letraSlot.style.gridRowStart = y;
    gameGrid.appendChild(letraSlot);
}



function colocarLetra(x, y, isDica = false){
    const letraSlot = gameGrid.querySelector(`.letraSlot[pos="${x+','+y}"]`);

    if ( letraSlot == null ){
        return;
    }

    if ( letraSlot.firstElementChild == null ){
        letraSlot.classList.toggle("letraSlotDica", isDica);
        letraSlot.innerHTML = `<div class="letra">${letraSlot.getAttribute("letra")}</div>`;
    }
    

}




function adicionarPalavra( texto, pos = [0,0], vertical = false ){
    for (let i = 0; i < texto.length; i++){
        if ( vertical ){
            colocarLetra(pos[0], pos[1]+i, false);
        }else{
            colocarLetra(pos[0]+i, pos[1], false);
        }
    }
}







function usarDica(){
    const letraSlotVazios = gameGrid.querySelectorAll('.letraSlot:empty');

    if ( letraSlotVazios.length == 0 ){
        return;
    }

    if ( JOGO.dicas == 0 ){
        toggleScreen('loja_screen', true);
        return;
    }

    JOGO.dicas--;
    JOGO.estatisticas.dicasUsadas++;
    badgeDicas.innerHTML = JOGO.dicas;
    
    verificarConquistaIncremento(JOGO.estatisticas.dicasUsadas, 'dicas');

    const index = getRandomInt(0, letraSlotVazios.length);
    const pos = letraSlotVazios[index].getAttribute('pos').split(',').map(e => parseInt(e));
    colocarLetra(pos[0], pos[1], true);
    JOGO.dicasPosicoes.push(pos);
    salvarJogo();


    for (let indexPalavra = 0; indexPalavra < FASES[JOGO.indexFase].palavras.length; indexPalavra++){

        const PALAVRA = FASES[JOGO.indexFase].palavras[indexPalavra];

        if ( JOGO.palavrasFase.includes(PALAVRA.texto) ){
            continue;
        }

        let qtdLetras = 0;

        for (let indexLetra = 0; indexLetra < PALAVRA.texto.length; indexLetra++){

            if ( PALAVRA.vertical ){
                if ( gameGrid.querySelector(`.letraSlot[pos="${PALAVRA.pos[0] + ',' + (PALAVRA.pos[1] + indexLetra)}"] .letra`) == null ){
                    break;
                }
                qtdLetras++;
            }else{
                if ( gameGrid.querySelector(`.letraSlot[pos="${(PALAVRA.pos[0] + indexLetra) + ',' + PALAVRA.pos[1]}"] .letra`) == null ){
                    break;
                }
                qtdLetras++;
            }          

        }

        if ( qtdLetras == PALAVRA.texto.length ){
            JOGO.palavrasFase.push(PALAVRA.texto);
        }

    }



    if ( gameGrid.children.length == gameGrid.querySelectorAll(".letra").length ){
        onGameWin();
    }


}












function onGameWin(){
    const tempo = (new Date() - JOGO.tempoInicial) / 1000;
    let faseCompleta = JOGO.fasesCompletas.find(el => el.fase == JOGO.indexFase);

    if ( faseCompleta == null ){
        faseCompleta = {
            fase: JOGO.indexFase,
            tempo: 0,
            lista: []
        }
        JOGO.fasesCompletas.push(faseCompleta);
        adicionarMoeda(5);
    }else{
        adicionarMoeda(1);
    }


    if ( faseCompleta.tempo == 0 ){
        faseCompleta.tempo = tempo;
    }else{
        faseCompleta.tempo = Math.min(faseCompleta.tempo, tempo);
    }

    const dicionarioAnterior = faseCompleta.lista.filter(el => el.dicionario).map(el => el.texto);
    const novoDicionario = [...new Set(dicionarioAnterior.concat(JOGO.dicionarioFase))];
    const diff = novoDicionario.length - dicionarioAnterior.length;
    
    if ( diff > 0 ){
        adicionarMoeda(5 * diff);
    }

    faseCompleta.lista = JOGO.palavrasFase.map(el => {
        return {texto: el, dicionario: false};
    });
    
    faseCompleta.lista = faseCompleta.lista.concat(novoDicionario.map(el => {
        return {texto: el, dicionario: true};
    }));

    console.warn("fim", tempo, time_track(tempo), "diff:"+diff, JOGO.dicionarioFase, JOGO.palavrasFase);

    verificarConquistaIncremento(JOGO.fasesCompletas.length, 'fases');
    verificarConquistaOneTime('fases');
    salvarJogo();
    togglePopupFase(true);
}



function proximaFase(){
    if ( JOGO.indexFase < FASES.length-1 ){
        console.warn('proxima fase');
        gerarFase(JOGO.indexFase+1);
    }else{
        console.warn('zerou');
    }

    togglePopupFase(false);
}



function voltarMenu(){
    togglePopupFase(false);
    gerarListaFases();
    toggleScreen("game_screen", false);
}






function togglePopupFase( isOpen = true ){

    if ( isOpen ){
        const ultimaFase = (JOGO.indexFase == FASES.length-1);
        popupFase_nivel.innerHTML = `Nível ${JOGO.indexFase+1} finalizado!`;
        popupFase_controles.style.justifyContent = ultimaFase? 'center' : '';
        popupFase_controles.children[1].style.display = ultimaFase? 'none' : '';
        popupFase_screen.style.display = 'flex';

        setTimeout(() => {
            popupFase_container.style.transform = 'scale(1)';
        }, 1);

        return;
    }

    
    popupFase_container.style.transform = 'scale(0)';
    setTimeout(() => {
        popupFase_screen.style.display = 'none';
    }, 200);

}







function toggleScreen( screenID, isOpen = true ){
    toggleConfig(false);
    document.getElementById(screenID).classList.toggle("screenOpen", isOpen);
}





function fecharTelaJogo(){
    gerarListaFases();
    toggleScreen('game_screen', false);
}




function toggleConfig( isOpen ){
    configBotaoContainer.classList.toggle("configBotaoContainerOpen", isOpen);
}





function mostrarPalavraDicionario( texto = "BATATA" ){
    dicionarioPalavra.firstElementChild.innerHTML = texto.toUpperCase();
    dicionarioPalavra.classList.add("dicionarioPalavraVisivel");

    setTimeout(()=>{
        dicionarioPalavra.classList.remove("dicionarioPalavraVisivel");
    }, 1000);

}


function abrirDicionario(){
    gerarDicionario(JOGO.dicionarioIndexPagina, JOGO.dicionario);
    dicionario_screen.classList.add("dicionario_screenOpen");
}



function fecharDicionario(){
    dicionario_screen.classList.remove("dicionario_screenOpen");
}





function proximaPagina(){
    const MAX_INDEX_PAGINA = Math.trunc(JOGO.dicionarioFase.length / 12);

    if ( JOGO.dicionarioIndexPagina < MAX_INDEX_PAGINA ){
        JOGO.dicionarioIndexPagina++;
        gerarDicionario(JOGO.dicionarioIndexPagina, JOGO.dicionario);
    }
}



function voltarPagina(){
    if ( JOGO.dicionarioIndexPagina > 0 ){
        JOGO.dicionarioIndexPagina--;
        gerarDicionario(JOGO.dicionarioIndexPagina, JOGO.dicionario);
    }
}




function gerarDicionario( dicionarioIndexPagina = 0, palavrasDicionario = [] ){
    const MAX_PAGINAS = Math.ceil(palavrasDicionario.length / 12);

    dicionarioLista.querySelectorAll(".dicionarioListaGrupo").forEach(e => e.innerHTML = "");
    dicionarioHeaderSubtitle.innerHTML = "NÍVEL " + (JOGO.indexFase+1);
    dicionarioPagina.querySelectorAll(".dicionarioPaginaBotao")[0].style.opacity = Math.trunc(JOGO.dicionarioIndexPagina > 0);
    dicionarioPagina.querySelectorAll(".dicionarioPaginaBotao")[1].style.opacity = Math.trunc(JOGO.dicionarioIndexPagina < MAX_PAGINAS-1);

    if ( dicionarioIndexPagina >= MAX_PAGINAS ){
        dicionarioPaginaValor.innerHTML = 'Página 1/1';
    }else{
        dicionarioPaginaValor.innerHTML = `Página ${JOGO.dicionarioIndexPagina+1}/${MAX_PAGINAS}`;
    }

    const LISTA = palavrasDicionario.slice(dicionarioIndexPagina*12, 12*(dicionarioIndexPagina+1));

    LISTA.forEach((e, i) => {
        const dicionarioItem = document.createElement("div");
        dicionarioItem.classList.add("dicionarioItem");
        dicionarioItem.innerHTML = "• " + e;

        if ( i < 6 ){
            dicionarioLista.querySelectorAll(".dicionarioListaGrupo")[0].appendChild(dicionarioItem);
        }else{
            dicionarioLista.querySelectorAll(".dicionarioListaGrupo")[1].appendChild(dicionarioItem);
        }
    });

}






function vibrar( duration = 0 ){
    if ( configLista.children[0].classList.contains('configBotaoAtivo') ){
        navigator.vibrate(duration);
    }
}








function embaralharTeclado(){
    const teclas = Array.from(listaTeclas.getElementsByClassName("tecla"));
    shuffleArray(teclas);
    
    teclas.forEach(tecla => {
        listaTeclas.insertBefore(tecla, listaTeclas.firstChild);
    });
}





function comprarDica(quantidade = 0, valor = 0){
    if ( JOGO.moedas >= valor ){
        JOGO.moedas -= valor;
        JOGO.dicas += quantidade;
        salvarJogo();
        atualizarMoedas();
    }
}






function time_track(segundos = 0){
    var texto = "";
    var horas = Math.trunc(segundos / 3600);
    var min   = Math.trunc(segundos / 60 % 60);
    var seg   = Math.trunc(segundos % 60);
    
    // HORAS
    if (segundos >= 3600){
        texto += horas + ":";
    }

    // MINUTOS
    if ( segundos >= 600 ){
        texto += min.toString().padStart(2, 0);
    }else{
        texto += min;
    }

    // SEGUNDOS
    texto += ':' + seg.toString().padStart(2, 0);
        
    return texto;
    
}




function gerarListaFases(){

    faseLista.innerHTML = "";
    
    FASES.forEach((e, i) => {


        const fase = document.createElement('div');
        fase.classList.add("fase");
        fase.classList.toggle("faseBloqueada", i > JOGO.fasesCompletas.length);
        fase.setAttribute("fase", i+1);

        if ( i <= JOGO.fasesCompletas.length ){
            const faseCompleta = JOGO.fasesCompletas.find(el => el.fase == i);
            let faseDicionario = null;

            fase.innerHTML = `
            <div class="faseTop">
                <div class="faseDicionario" style="display: none;">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M5 0h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2 2 2 0 0 1-2 2H3a2 2 0 0 1-2-2h1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1H1a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v9a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1H3a2 2 0 0 1 2-2"></path>
                        <path d="M1 6v-.5a.5.5 0 0 1 1 0V6h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0V9h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 2.5v.5H.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1H2v-.5a.5.5 0 0 0-1 0"></path>
                    </svg>    
                </div>
                <div class="faseNumero">${i+1}</div>
            </div>
            <div class="faseTempo">${time_track(0)}</div>`;

            if ( faseCompleta != null ){
                faseDicionario = faseCompleta.lista.filter(el => el.dicionario);
                fase.querySelector(".faseTempo").innerHTML = time_track(faseCompleta.tempo);

                if ( faseCompleta.lista.filter(el => el.dicionario).length > 0 ){
                    fase.querySelector(".faseDicionario").style.display = "flex";
                }
            }


            // CLICK FASE
            fase.onclick = () => { 
                gerarFase(i);
                toggleScreen("game_screen", true);
                JOGO.tempoInicial = new Date();
                console.warn(JOGO.tempoInicial);
            };

            // CLICK DICIONARIO FASE
            fase.querySelector(".faseDicionario").onclick = (event) => {
                event.stopImmediatePropagation();

                if ( faseDicionario == null ){
                    return;
                }

                JOGO.indexFase = i;
                JOGO.dicionarioIndexPagina = 0;
                JOGO.dicionario = faseDicionario.map(el => el.texto);
                abrirDicionario();
            };
            
        }else{
            fase.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="currentColor" class="bi bi-lock-fill" viewBox="0 0 16 16">
                <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2m3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2"/>
            </svg>`;
        }
            
        faseLista.appendChild(fase); 


    });

}








function gerarTelaPalavrasDescobertas(filtroPalavra = true, filtroDicionario = true){

    lista_palavras_descobertas.innerHTML = "";

    if ( !filtroPalavra && !filtroDicionario ){
        return;
    }

    const PALAVRAS_DESCOBERTAS = JOGO.fasesCompletas.flatMap(el => el.lista).sort((a, b) => a.texto.localeCompare(b.texto));

    if ( PALAVRAS_DESCOBERTAS.length == 0 ){
        return;
    }

    

    const letrasOrdenadoras = [...new Set(PALAVRAS_DESCOBERTAS.map(el => el.texto[0]))];

    letrasOrdenadoras.forEach(letra => {
        const subLista = PALAVRAS_DESCOBERTAS.filter(el => el.texto[0] == letra).filter(el => el.dicionario != filtroPalavra || el.dicionario == filtroDicionario);

        if ( subLista.length == 0 ){
            return true;
        }

        const sublistaPalavras = document.createElement("div");
        sublistaPalavras.classList.add("sublistaPalavras");

        sublistaPalavras.innerHTML = `
        <div class="letraPalavra">${letra}</div>
        <div class="listaPalavras">${subLista.map(el => {

            if ( !el.dicionario ){
                return `<div class="palavra">${el.texto}</div>`;
            }

            return `<div class="palavra">
                ${el.texto}
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M5 0h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2 2 2 0 0 1-2 2H3a2 2 0 0 1-2-2h1a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1H1a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v9a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1H3a2 2 0 0 1 2-2"/>
                    <path d="M1 6v-.5a.5.5 0 0 1 1 0V6h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 3v-.5a.5.5 0 0 1 1 0V9h.5a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1zm0 2.5v.5H.5a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1H2v-.5a.5.5 0 0 0-1 0"/>
                </svg>
            </div>`;

        }).join('')}</div>`;


        lista_palavras_descobertas.appendChild(sublistaPalavras);
        

    });


}









function toggleTelaPalavrasDescobertas( isOpen = true ){
    
    if ( isOpen ){
        const filtroPalavra = document.querySelectorAll(".chipFiltro")[0].classList.contains("chipSelecionado");
        const filtroDicionario = document.querySelectorAll(".chipFiltro")[1].classList.contains("chipSelecionado");
        gerarTelaPalavrasDescobertas(filtroPalavra, filtroDicionario);

        toggleScreen('palavras_screen', isOpen);
        return;
    }
    
    toggleScreen('palavras_screen', isOpen);
    lista_palavras_descobertas.innerHTML = "";
}








function toggleTelaConquistas( isOpen = true ){
    lista_conquistas.innerHTML = "";
    
    if ( !isOpen ){
        toggleScreen('conquistas_screen', isOpen);
        return;
    }

    JOGO.conquistas.forEach(e => {
        const conquista = document.createElement("div");
        conquista.classList.add("conquista");
        conquista.classList.toggle("conquistaBloqueada", !e.completada);
        conquista.classList.toggle("conquistaOneTime", e.type == 'oneTime');

        conquista.innerHTML = `
        <div class="conquistaTitle">${e.nome}</div>
        <div class="conquistaSubtitle">${e.desc}</div>
        
        <div class="conquistaProgress">
            <div class="conquistaProgressFillContainer">
                <div class="conquistaProgressFill"></div>
            </div>
            <div class="conquistaProgressLabel"></div>
        </div>`;

        if ( e.type == 'increment' ){
            let atual = 0;

            switch (e.categoria) {
                case 'acertos':
                    atual = JOGO.estatisticas.acertos;
                    break;
                case 'dicas':
                    atual = JOGO.estatisticas.dicasUsadas;
                    break;
                case 'fases':
                    atual = JOGO.fasesCompletas.length;
                    break;
            }

            atual = Math.clamp(atual, 0, e.cond);
            const percent = 100 - atual / e.cond * 100;
            conquista.querySelector(".conquistaProgressLabel").innerHTML = `${atual}/${e.cond}`;
            conquista.querySelector(".conquistaProgressFill").style.transform = `translateX(${-percent}%)`;
        }else{
            conquista.querySelector(".conquistaProgress").remove();
        }

        lista_conquistas.appendChild(conquista);


    });

    toggleScreen('conquistas_screen', isOpen);

}










function gerarFase( indexFase = 0 ){
    const FASE_OBJ = FASES[indexFase];

    if ( FASE_OBJ == null ){
        return false;
    }

    JOGO.dicionario = JOGO.dicionarioFase;

    if ( JOGO.indexFase != indexFase ){
        JOGO.palavrasFase   = [];
        JOGO.dicionarioFase = [];
        JOGO.dicionario     = [];
        JOGO.dicasPosicoes  = []; 
    }else if ( JOGO.fasesCompletas.findIndex(e => e.fase == indexFase) >= 0 ){
        if ( JOGO.palavrasFase.length == FASE_OBJ.palavras.length ){
            JOGO.palavrasFase = [];
        }
    }

    JOGO.indexFase = indexFase;


    atualizarMoedas();
    faseAtual.innerHTML = "NÍVEL " + (indexFase+1);
    badgeDicas.innerHTML = JOGO.dicas;
    JOGO.dicionarioIndexPagina = 0;

    const faseCompleta = JOGO.fasesCompletas.find(el => el.fase == JOGO.indexFase);

    if ( faseCompleta != null ){
        const dicionarioAnterior = JOGO.dicionarioFase;
        JOGO.dicionarioFase = faseCompleta.lista.filter(el => el.dicionario).map(el => el.texto);
        JOGO.dicionarioFase = [... new Set(JOGO.dicionarioFase.concat(dicionarioAnterior))];
        JOGO.dicionario = JOGO.dicionarioFase;
    }



    // GERAR GRID
    const GRID_SIZE = getGridSizeByIndexFase(indexFase);
    let listaPositions = [];

    gameGrid.style.gridTemplateColumns  = `repeat(${GRID_SIZE[0]}, 1fr)`;
    gameGrid.style.gridTemplateRows     = `repeat(${GRID_SIZE[1]}, 1fr)`;
    gameGrid.innerHTML = "";

    FASE_OBJ.palavras.forEach((e, i) => {
        for (let idx = 0; idx < e.texto.length; idx++){
            let nextPostion = [0, 0];

            if ( e.vertical ){
                nextPostion = [e.pos[0], e.pos[1]+idx];
            }else{
                nextPostion = [e.pos[0]+idx, e.pos[1]];
            }

            if ( !isItemInArray(listaPositions, nextPostion) ){
                listaPositions.push(nextPostion);
                criarSlot(nextPostion[0]+1, nextPostion[1]+1, e.texto[idx]);
            }

        }
    });

    // MOSTRAR ULTIMO JOGO SALVO
    JOGO.dicasPosicoes.forEach(pos => colocarLetra(pos[0], pos[1], true));
    JOGO.palavrasFase.forEach(e => enviarPalavra(e));



    // GERAR TECLAS
    entradaTeclas.innerHTML = "";
    listaTeclas.innerHTML = "";

    if ( FASE_OBJ.teclas.length <= 5 ){
        listaTeclas.style.width = (32 * 4) + 'px';
    }else{
        listaTeclas.style.width = (32 * 5) + 'px';
    }

    
    FASE_OBJ.teclas.forEach((tecla, teclaIndex) => {
        const teclaElemento = document.createElement("div");
        teclaElemento.classList.add("tecla");
        teclaElemento.setAttribute("index", teclaIndex);
        teclaElemento.innerHTML = tecla.toUpperCase();

        teclaElemento.onclick = () => {
            const selecionado = teclaElemento.classList.toggle("teclaSelecionada");

            if ( selecionado ){
                const entradaTecla = document.createElement("div");
                entradaTecla.classList.add("entradaTecla");
                entradaTecla.setAttribute("index", teclaIndex);
                entradaTecla.innerHTML = tecla.toUpperCase();
                entradaTeclas.appendChild(entradaTecla);


                entradaTecla.onclick = () => {
                    entradaTecla.remove();
                    teclaElemento.classList.remove("teclaSelecionada");
                };

            }else{
                const entradaTecla = entradaTeclas.querySelector(`.entradaTecla[index="${teclaIndex}"]`);
                
                if ( entradaTecla != null ){
                    entradaTecla.remove();
                }
            }


            entradaEnviar.classList.toggle("entradaEnviarBloqueada", entradaTeclas.children.length <= 2);
            entradaReset.classList.toggle("entradaResetBloqueada", entradaTeclas.children.length <= 0);

        };

        listaTeclas.appendChild(teclaElemento);
    });

    salvarJogo();
    return true;

}





document.querySelectorAll(".chipFiltro").forEach(e => {
    e.onclick = () => {
        e.classList.toggle("chipSelecionado");
        const filtroPalavra = document.querySelectorAll(".chipFiltro")[0].classList.contains("chipSelecionado");
        const filtroDicionario = document.querySelectorAll(".chipFiltro")[1].classList.contains("chipSelecionado");
        gerarTelaPalavrasDescobertas(filtroPalavra, filtroDicionario);
    }
});




document.querySelectorAll(".configBotao").forEach((e, i) => {
    e.onclick = () => {
        e.classList.toggle("configBotaoAtivo");

        if ( i == 0 ){
            navigator.vibrate(300);
            return;
        }

        if ( i == 1 ){
            return;
        }

        if ( i == 2 ){

        }

    };
});




onload = () => {
    carregarJogo();
    atualizarMoedas();
    gerarListaFases();
};