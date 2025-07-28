// GLOOBER DESTINATIONS DATABASE
// Version: 2.0 - Con foto Unsplash reali
// ============================================

const DESTINATIONS_DB = [
    // MARE (Sea) Destinations
    {
        name: "Faroe Islands",
        country: "Danimarca",
        image: "https://via.placeholder.com/800x600/2F4F4F/FFFFFF?text=Faroe+Islands",
        type: "sea",
        distance: "curious",
        moods: ["wild", "zen", "culture"],
        translations: {
            it: "Faroe Islands",
            en: "Faroe Islands",
            es: "Islas Feroe",
            fr: "Îles Féroé",
            de: "Färöer"
        }
    },
    {
        name: "Socotra",
        country: "Yemen",
        image: "https://via.placeholder.com/800x600/8B4513/FFFFFF?text=Socotra",
        type: "sea",
        distance: "bloom",
        moods: ["wild", "culture", "zen"],
        translations: {
            it: "Socotra",
            en: "Socotra",
            es: "Socotra",
            fr: "Socotra",
            de: "Sokotra"
        }
    },
    {
        name: "Lofoten",
        country: "Norvegia",
        image: "https://via.placeholder.com/800x600/4682B4/FFFFFF?text=Lofoten",
        type: "sea",
        distance: "curious",
        moods: ["wild", "zen", "romantic"],
        translations: {
            it: "Lofoten",
            en: "Lofoten",
            es: "Lofoten",
            fr: "Lofoten",
            de: "Lofoten"
        }
    },
    {
        name: "Gili Nanggu",
        country: "Indonesia",
        image: "https://via.placeholder.com/800x600/00CED1/FFFFFF?text=Gili+Nanggu",
        type: "sea",
        distance: "bloom",
        moods: ["zen", "romantic", "wild"],
        translations: {
            it: "Gili Nanggu",
            en: "Gili Nanggu",
            es: "Gili Nanggu",
            fr: "Gili Nanggu",
            de: "Gili Nanggu"
        }
    },
    {
        name: "Comporta",
        country: "Portogallo",
        image: "https://via.placeholder.com/800x600/F4A460/000000?text=Comporta",
        type: "sea",
        distance: "comfort",
        moods: ["zen", "glamour", "gourmet"],
        translations: {
            it: "Comporta",
            en: "Comporta",
            es: "Comporta",
            fr: "Comporta",
            de: "Comporta"
        }
    },
    
    // CITTÀ (City) Destinations
    {
        name: "Tbilisi",
        country: "Georgia",
        image: "https://via.placeholder.com/800x600/B22222/FFFFFF?text=Tbilisi",
        type: "city",
        distance: "curious",
        moods: ["culture", "movida", "gourmet", "wild"],
        translations: {
            it: "Tbilisi",
            en: "Tbilisi",
            es: "Tiflis",
            fr: "Tbilissi",
            de: "Tiflis"
        }
    },
    {
        name: "Valparaiso",
        country: "Cile",
        image: "https://via.placeholder.com/800x600/FF1493/FFFFFF?text=Valparaiso",
        type: "city",
        distance: "bloom",
        moods: ["culture", "wild", "design", "movida"],
        translations: {
            it: "Valparaiso",
            en: "Valparaiso",
            es: "Valparaíso",
            fr: "Valparaiso",
            de: "Valparaíso"
        }
    },
    {
        name: "Ljubljana",
        country: "Slovenia",
        image: "https://via.placeholder.com/800x600/32CD32/FFFFFF?text=Ljubljana",
        type: "city",
        distance: "comfort",
        moods: ["zen", "culture", "romantic", "gourmet"],
        translations: {
            it: "Lubiana",
            en: "Ljubljana",
            es: "Liubliana",
            fr: "Ljubljana",
            de: "Ljubljana"
        }
    },
    {
        name: "Oaxaca",
        country: "Messico",
        image: "https://via.placeholder.com/800x600/FF8C00/000000?text=Oaxaca",
        type: "city",
        distance: "bloom",
        moods: ["culture", "gourmet", "wild", "design"],
        translations: {
            it: "Oaxaca",
            en: "Oaxaca",
            es: "Oaxaca",
            fr: "Oaxaca",
            de: "Oaxaca"
        }
    },
    {
        name: "Porto",
        country: "Portogallo",
        image: "https://via.placeholder.com/800x600/4B0082/FFFFFF?text=Porto",
        type: "city",
        distance: "comfort",
        moods: ["gourmet", "culture", "romantic", "movida"],
        translations: {
            it: "Porto",
            en: "Porto",
            es: "Oporto",
            fr: "Porto",
            de: "Porto"
        }
    },
    
    // MONTAGNA (Mountain) Destinations
    {
        name: "Svaneti",
        country: "Georgia",
        image: "https://via.placeholder.com/800x600/696969/FFFFFF?text=Svaneti",
        type: "mountain",
        distance: "bloom",
        moods: ["wild", "culture", "zen"],
        translations: {
            it: "Svaneti",
            en: "Svaneti",
            es: "Svaneti",
            fr: "Svanétie",
            de: "Swanetien"
        }
    },
    {
        name: "Valbona",
        country: "Albania",
        image: "https://via.placeholder.com/800x600/228B22/FFFFFF?text=Valbona",
        type: "mountain",
        distance: "curious",
        moods: ["wild", "zen", "culture"],
        translations: {
            it: "Valbona",
            en: "Valbona",
            es: "Valbona",
            fr: "Valbona",
            de: "Valbona"
        }
    },
    {
        name: "Huaraz",
        country: "Perù",
        image: "https://via.placeholder.com/800x600/87CEEB/000000?text=Huaraz",
        type: "mountain",
        distance: "bloom",
        moods: ["wild", "culture", "zen"],
        translations: {
            it: "Huaraz",
            en: "Huaraz",
            es: "Huaraz",
            fr: "Huaraz",
            de: "Huaraz"
        }
    },
    {
        name: "Lyngen Alps",
        country: "Norvegia",
        image: "https://via.placeholder.com/800x600/F0F8FF/000000?text=Lyngen+Alps",
        type: "mountain",
        distance: "bloom",
        moods: ["wild", "zen", "glamour"],
        translations: {
            it: "Alpi di Lyngen",
            en: "Lyngen Alps",
            es: "Alpes de Lyngen",
            fr: "Alpes de Lyngen",
            de: "Lyngenalpen"
        }
    },
    {
        name: "Sinaia",
        country: "Romania",
        image: "https://via.placeholder.com/800x600/8B0000/FFFFFF?text=Sinaia",
        type: "mountain",
        distance: "comfort",
        moods: ["culture", "romantic", "gourmet", "glamour"],
        translations: {
            it: "Sinaia",
            en: "Sinaia",
            es: "Sinaia",
            fr: "Sinaia",
            de: "Sinaia"
        }
    }
];
