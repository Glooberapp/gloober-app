// GLOOBER DESTINATIONS DATABASE
// Version: 1.0 - Con le tue 15 destinazioni
// ============================================

const DESTINATIONS_DB = [
    // MARE (Sea) Destinations
    {
        name: "Faroe Islands",
        country: "Denmark",
        image: "images/faroe.jpg",
        type: "sea",
        distance: "curious",
        moods: ["wild", "zen", "culture"],
        tagline: {
            it: "Scogliere drammatiche e cascate nel Nord Atlantico",
            en: "Dramatic cliffs and waterfalls in the North Atlantic",
            es: "Acantilados dramáticos y cascadas en el Atlántico Norte",
            fr: "Falaises dramatiques et cascades dans l'Atlantique Nord"
        }
    },
    {
        name: "Socotra Island",
        country: "Yemen",
        image: "images/Socotra.jpg",
        type: "sea",
        distance: "bloom",
        moods: ["wild", "culture", "zen"],
        tagline: {
            it: "Isola aliena con alberi del sangue di drago",
            en: "Alien island with dragon blood trees",
            es: "Isla alienígena con árboles de sangre de dragón",
            fr: "Île extraterrestre avec des arbres de sang de dragon"
        }
    },
    {
        name: "Lofoten Islands",
        country: "Norway",
        image: "images/lofoten.jpg",
        type: "sea",
        distance: "curious",
        moods: ["wild", "zen", "romantic"],
        tagline: {
            it: "Villaggi di pescatori e aurore boreali",
            en: "Fishing villages and northern lights",
            es: "Pueblos pesqueros y auroras boreales",
            fr: "Villages de pêcheurs et aurores boréales"
        }
    },
    {
        name: "Gili Nanggu",
        country: "Indonesia",
        image: "images/gili.jpg",
        type: "sea",
        distance: "bloom",
        moods: ["zen", "romantic", "wild"],
        tagline: {
            it: "Paradiso tropicale con acque cristalline",
            en: "Tropical paradise with crystal waters",
            es: "Paraíso tropical con aguas cristalinas",
            fr: "Paradis tropical aux eaux cristallines"
        }
    },
    {
        name: "Comporta",
        country: "Portugal",
        image: "images/comporta.jpeg",
        type: "sea",
        distance: "comfort",
        moods: ["zen", "glamour", "gourmet"],
        tagline: {
            it: "Rifugio costiero chic con dune infinite",
            en: "Chic coastal retreat with endless dunes",
            es: "Refugio costero chic con dunas infinitas",
            fr: "Retraite côtière chic avec dunes infinies"
        }
    },
    
    // CITTÀ (City) Destinations
    {
        name: "Tbilisi",
        country: "Georgia",
        image: "https://via.placeholder.com/800x600/8B4513/FFFFFF?text=Tbilisi",
        type: "city",
        distance: "curious",
        moods: ["culture", "gourmet", "movida"],
        tagline: {
            it: "Balconi colorati e bagni di zolfo",
            en: "Colorful balconies and sulfur baths",
            es: "Balcones coloridos y baños de azufre",
            fr: "Balcons colorés et bains de soufre"
        }
    },
    {
        name: "Valparaíso",
        country: "Chile",
        image: "https://via.placeholder.com/800x600/FF6347/FFFFFF?text=Valparaiso",
        type: "city",
        distance: "bloom",
        moods: ["culture", "design", "movida"],
        tagline: {
            it: "Street art e funicolari sul Pacifico",
            en: "Street art and funiculars on the Pacific",
            es: "Arte callejero y funiculares en el Pacífico",
            fr: "Street art et funiculaires sur le Pacifique"
        }
    },
    {
        name: "Ljubljana",
        country: "Slovenia",
        image: "images/ljubljana.jpg",
        type: "city",
        distance: "comfort",
        moods: ["culture", "romantic", "gourmet"],
        tagline: {
            it: "Capitale verde con draghi e castello",
            en: "Green capital with dragons and castle",
            es: "Capital verde con dragones y castillo",
            fr: "Capitale verte avec dragons et château"
        }
    },
    {
        name: "Oaxaca",
        country: "Mexico",
        image: "images/oaxaca.jpg",
        type: "city",
        distance: "bloom",
        moods: ["culture", "gourmet", "wild"],
        tagline: {
            it: "Mezcal, mercati e Giorno dei Morti",
            en: "Mezcal, markets and Day of the Dead",
            es: "Mezcal, mercados y Día de Muertos",
            fr: "Mezcal, marchés et Jour des Morts"
        }
    },
    {
        name: "Porto",
        country: "Portugal",
        image: "images/porto.jpg",
        type: "city",
        distance: "comfort",
        moods: ["gourmet", "culture", "romantic"],
        tagline: {
            it: "Vino porto e azulejos sul fiume",
            en: "Port wine and azulejos by the river",
            es: "Vino Oporto y azulejos junto al río",
            fr: "Vin de Porto et azulejos au bord du fleuve"
        }
    },
    
    // MONTAGNA (Mountain) Destinations
    {
        name: "Svaneti",
        country: "Georgia",
        image: "https://via.placeholder.com/800x600/708090/FFFFFF?text=Svaneti",
        type: "mountain",
        distance: "bloom",
        moods: ["wild", "culture", "zen"],
        tagline: {
            it: "Torri medievali tra le montagne del Caucaso",
            en: "Medieval towers in the Caucasus mountains",
            es: "Torres medievales en las montañas del Cáucaso",
            fr: "Tours médiévales dans les montagnes du Caucase"
        }
    },
    {
        name: "Valbona Valley",
        country: "Albania",
        image: "https://via.placeholder.com/800x600/228B22/FFFFFF?text=Valbona+Valley",
        type: "mountain",
        distance: "curious",
        moods: ["wild", "zen", "culture"],
        tagline: {
            it: "Valle alpina incontaminata nei Balcani",
            en: "Pristine alpine valley in the Balkans",
            es: "Valle alpino prístino en los Balcanes",
            fr: "Vallée alpine intacte dans les Balkans"
        }
    },
    {
        name: "Huaraz",
        country: "Peru",
        image: "images/Huaraz.jpg",
        type: "mountain",
        distance: "bloom",
        moods: ["wild", "culture", "zen"],
        tagline: {
            it: "Porta d'accesso alla Cordillera Blanca",
            en: "Gateway to the Cordillera Blanca",
            es: "Puerta de entrada a la Cordillera Blanca",
            fr: "Porte d'entrée de la Cordillère Blanche"
        }
    },
    {
        name: "Lyngen Alps",
        country: "Norway",
        image: "images/lyngen.jpg",
        type: "mountain",
        distance: "curious",
        moods: ["wild", "zen", "glamour"],
        tagline: {
            it: "Fiordi e montagne con vista aurora",
            en: "Fjords and mountains with aurora views",
            es: "Fiordos y montañas con vistas de aurora",
            fr: "Fjords et montagnes avec vue sur les aurores"
        }
    },
    {
        name: "Sinaia",
        country: "Romania",
        image: "images/Sinaia.jpg",
        type: "mountain",
        distance: "comfort",
        moods: ["culture", "romantic", "glamour"],
        tagline: {
            it: "Castello di Peleș tra le montagne dei Carpazi",
            en: "Peleș Castle in the Carpathian mountains",
            es: "Castillo de Peleș en las montañas de los Cárpatos",
            fr: "Château de Peleș dans les montagnes des Carpates"
        }
    }
];

// Esporta la variabile destinations per compatibilità
window.destinations = DESTINATIONS_DB;
