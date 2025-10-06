

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
