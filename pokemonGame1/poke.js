// const bod = document.querySelector('h1')

// for (let x = 1; x < 151; x++) {
//     let pok = document.createElement('img')
//     pok.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${x}.png`
//     bod.appendChild(pok);
// }

const pokedex = {
    1: 'Bulbasaur',
    2: 'Ivysaur',
    3: 'Venusaur',
    4: 'Charmander',
    5: 'Charmeleon',
    6: 'Charizard',
    7: 'Squirtle',
    8: 'Wartortle',
    9: 'Blastoise',
    10: 'Caterpie',
    11: 'Metapod',
    12: 'Butterfree',
    13: 'Weedle',
    14: 'Kakuna',
    15: 'Beedrill',
    16: 'Pidgey',
    17: 'Pidgeotto',
    18: 'Pidgeot',
    19: 'Rattata',
    20: 'Raticate',
    21: 'Spearow',
    22: 'Fearow',
    23: 'Ekans',
    24: 'Arbok',
    25: 'Pikachu',
    26: 'Raichu',
    27: 'Sandshrew',
    28: 'Sandslash',
    29: 'Nidoran \u2640',
    30: 'Nidorina',
    31: 'Nidoqueen',
    32: 'Nidoran \u2642',
    33: 'Nidorino',
    34: 'Nidoking',
    35: 'Clefairy',
    36: 'Clefable',
    37: 'Vulpix',
    38: 'Ninetales',
    39: 'Jigglypuff',
    40: 'Wigglytuff',
    41: 'Zubat',
    42: 'Golbat',
    43: 'Oddish',
    44: 'Gloom',
    45: 'Vileplume',
    46: 'Paras',
    47: 'Parasect',
    48: 'Venonat',
    49: 'Venomoth',
    50: 'Diglett',
    51: 'Dugtrio',
    52: 'Meowth',
    53: 'Persian',
    54: 'Psyduck',
    55: 'Golduck',
    56: 'Mankey',
    57: 'Primeape',
    58: 'Growlithe',
    59: 'Arcanine',
    60: 'Poliwag',
    61: 'Poliwhirl',
    62: 'Poliwrath',
    63: 'Abra',
    64: 'Kadabra',
    65: 'Alakazam',
    66: 'Machop',
    67: 'Machoke',
    68: 'Machamp',
    69: 'Bellsprout',
    70: 'Weepinbell',
    71: 'Victreebel',
    72: 'Tentacool',
    73: 'Tentacruel',
    74: 'Geodude',
    75: 'Graveler',
    76: 'Golem',
    77: 'Ponyta',
    78: 'Rapidash',
    79: 'Slowpoke',
    80: 'Slowbro',
    81: 'Magnemite',
    82: 'Magneton',
    83: 'Farfetch\'d',
    84: 'Doduo',
    85: 'Dodrio',
    86: 'Seel',
    87: 'Dewgong',
    88: 'Grimer',
    89: 'Muk',
    90: 'Shellder',
    91: 'Cloyster',
    92: 'Gastly',
    93: 'Haunter',
    94: 'Gengar',
    95: 'Onix',
    96: 'Drowzee',
    97: 'Hypno',
    98: 'Krabby',
    99: 'Kingler',
    100: 'Voltorb',
    101: 'Electrode',
    102: 'Exeggcute',
    103: 'Exeggutor',
    104: 'Cubone',
    105: 'Marowak',
    106: 'Hitmonlee',
    107: 'Hitmonchan',
    108: 'Lickitung',
    109: 'Koffing',
    110: 'Weezing',
    111: 'Rhyhorn',
    112: 'Rhydon',
    113: 'Chansey',
    114: 'Tangela',
    115: 'Kangaskhan',
    116: 'Horsea',
    117: 'Seadra',
    118: 'Goldeen',
    119: 'Seaking',
    120: 'Staryu',
    121: 'Starmie',
    122: 'Mr. Mime',
    123: 'Scyther',
    124: 'Jynx',
    125: 'Electabuzz',
    126: 'Magmar',
    127: 'Pinsir',
    128: 'Tauros',
    129: 'Magikarp',
    130: 'Gyarados',
    131: 'Lapras',
    132: 'Ditto',
    133: 'Eevee',
    134: 'Vaporeon',
    135: 'Jolteon',
    136: 'Flareon',
    137: 'Porygon',
    138: 'Omanyte',
    139: 'Omastar',
    140: 'Kabuto',
    141: 'Kabutops',
    142: 'Aerodactyl',
    143: 'Snorlax',
    144: 'Articuno',
    145: 'Zapdos',
    146: 'Moltres',
    147: 'Dratini',
    148: 'Dragonair',
    149: 'Dragonite',
    150: 'Mewtwo',
    151: 'Mew',
    152: 'Chikorita',
    153: 'Bayleef',
    154: 'Meganium',
    155: 'Cyndaquil',
    156: 'Quilava',
    157: 'Typhlosion',
    158: 'Totodile',
    159: 'Croconaw',
    160: 'Feraligatr',
    161: 'Sentret',
    162: 'Furret',
    163: 'Hoothoot',
    164: 'Noctowl',
    165: 'Ledyba',
    166: 'Ledian',
    167: 'Spinarak',
    168: 'Ariados',
    169: 'Crobat',
    170: 'Chinchou',
    171: 'Lanturn',
    172: 'Pichu',
    173: 'Cleffa',
    174: 'Igglybuff',
    175: 'Togepi',
    176: 'Togetic',
    177: 'Natu',
    178: 'Xatu',
    179: 'Mareep',
    180: 'Flaaffy',
    181: 'Ampharos',
    182: 'Bellossom',
    183: 'Marill',
    184: 'Azumarill',
    185: 'Sudowoodo',
    186: 'Politoed',
    187: 'Hoppip',
    188: 'Skiploom',
    189: 'Jumpluff',
    190: 'Aipom',
    191: 'Sunkern',
    192: 'Sunflora',
    193: 'Yanma',
    194: 'Wooper',
    195: 'Quagsire',
    196: 'Espeon',
    197: 'Umbreon',
    198: 'Murkrow',
    199: 'Slowking',
    200: 'Misdreavus',
    201: 'Unown',
    202: 'Wobbuffet',
    203: 'Girafarig',
    204: 'Pineco',
    205: 'Forretress',
    206: 'Dunsparce',
    207: 'Gligar',
    208: 'Steelix',
    209: 'Snubbull',
    210: 'Granbull',
    211: 'Qwilfish',
    212: 'Scizor',
    213: 'Shuckle',
    214: 'Heracross',
    215: 'Sneasel',
    216: 'Teddiursa',
    217: 'Ursaring',
    218: 'Slugma',
    219: 'Magcargo',
    220: 'Swinub',
    221: 'Piloswine',
    222: 'Corsola',
    223: 'Remoraid',
    224: 'Octillery',
    225: 'Delibird',
    226: 'Mantine',
    227: 'Skarmory',
    228: 'Houndour',
    229: 'Houndoom',
    230: 'Kingdra',
    231: 'Phanpy',
    232: 'Donphan',
    233: 'Porygon2',
    234: 'Stantler',
    235: 'Smeargle',
    236: 'Tyrogue',
    237: 'Hitmontop',
    238: 'Smoochum',
    239: 'Elekid',
    240: 'Magby',
    241: 'Miltank',
    242: 'Blissey',
    243: 'Raikou',
    244: 'Entei',
    245: 'Suicune',
    246: 'Larvitar',
    247: 'Pupitar',
    248: 'Tyranitar',
    249: 'Lugia',
    250: 'Ho-oh',
    251: 'Celebi'
}


let pokemon = document.querySelector('img');

let pokemonName = document.querySelector('.pokename');

let searcher = document.querySelector('button');

let current = Math.floor(Math.random() * 251)

function newone() {
    let newcurr = Math.floor(Math.random() * 251 + 1)
    let newest = pokedex[newcurr]
    newest = newest.toLowerCase();
    pokemon.src = `https://projectpokemon.org/images/normal-sprite/${newest}.gif`
    pokemonName.innerHTML = pokedex[newcurr]
    //https://projectpokemon.org/images/normal-sprite/bulbasaur.gif
    //`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${newcurr}.png`
}

searcher.addEventListener('click', newone)

//pokemon.src = currpokemon;




//console.log(pokemon.src)


window.addEventListener('keydown', function (e) {
    switch (e.key) {
        case 'w':
            console.log("W");
            break;
        case 'a':
            console.log('A');
            break;
        case 's':
            console.log('S');
            break;
        case 'd':
            console.log('d');
            break;
    }
})

//https://pokemondb.net/pokedex/ivysaur

/*
*/ 