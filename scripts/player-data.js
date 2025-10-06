
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