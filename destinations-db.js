// GLOOBER DESTINATIONS DATABASE
// Version: 3.0 - IMMAGINI DEFINITIVE E FUNZIONANTI
// ============================================

const DESTINATIONS_DB = [
    // MARE (Sea) Destinations
    {
        name: "Maldive",
        country: "Maldive",
        image: "https://cdn.pixabay.com/photo/2017/01/20/00/30/maldives-1993704_960_720.jpg",
        type: "sea",
        distance: "bloom",
        moods: ["zen", "romantic", "wild"],
        tagline: {
            it: "Paradiso di atolli cristallini",
            en: "Paradise of crystal atolls",
            es: "Paraíso de atolones cristalinos",
            fr: "Paradis d'atolls cristallins"
        }
    },
    {
        name: "Santorini",
        country: "Grecia",
        image: "https://cdn.pixabay.com/photo/2016/08/25/19/17/santorini-1620495_960_720.jpg",
        type: "sea",
        distance: "curious",
        moods: ["romantic", "culture", "zen"],
        tagline: {
            it: "Tramonti mozzafiato sull'Egeo",
            en: "Breathtaking sunsets over the Aegean",
            es: "Atardeceres impresionantes sobre el Egeo",
            fr: "Couchers de soleil époustouflants sur la mer Égée"
        }
    },
    {
        name: "Sardegna",
        country: "Italia",
        image: "https://cdn.pixabay.com/photo/2020/06/26/17/16/capo-testa-5343453_960_720.jpg",
        type: "sea",
        distance: "comfort",
        moods: ["zen", "movida", "gourmet"],
        tagline: {
            it: "Spiagge caraibiche nel Mediterraneo",
            en: "Caribbean beaches in the Mediterranean",
            es: "Playas caribeñas en el Mediterráneo",
            fr: "Plages des Caraïbes en Méditerranée"
        }
    },
    {
        name: "Bali",
        country: "Indonesia",
        image: "https://cdn.pixabay.com/photo/2016/05/03/20/01/bali-1370051_960_720.jpg",
        type: "sea",
        distance: "bloom",
        moods: ["wild", "culture", "zen"],
        tagline: {
            it: "L'isola degli dei e delle onde perfette",
            en: "Island of gods and perfect waves",
            es: "Isla de dioses y olas perfectas",
            fr: "L'île des dieux et des vagues parfaites"
        }
    },
    {
        name: "Ibiza",
        country: "Spagna",
        image: "https://cdn.pixabay.com/photo/2020/05/11/11/23/woman-5157666_960_720.jpg",
        type: "sea",
        distance: "curious",
        moods: ["movida", "zen", "glamour"],
        tagline: {
            it: "Ritmi hippy e notti infinite",
            en: "Hippy vibes and endless nights",
            es: "Ritmos hippies y noches infinitas",
            fr: "Vibrations hippies et nuits sans fin"
        }
    },
    
    // CITTÀ (City) Destinations
    {
        name: "Tokyo",
        country: "Giappone",
        image: "https://cdn.pixabay.com/photo/2019/04/20/11/40/japan-4141585_960_720.jpg",
        type: "city",
        distance: "bloom",
        moods: ["culture", "movida", "wild", "gourmet"],
        tagline: {
            it: "Futuro e tradizione in perfetta armonia",
            en: "Future and tradition in perfect harmony",
            es: "Futuro y tradición en perfecta armonía",
            fr: "Futur et tradition en parfaite harmonie"
        }
    },
    {
        name: "New York",
        country: "USA",
        image: "https://cdn.pixabay.com/photo/2016/01/19/17/48/new-york-1149816_960_720.jpg",
        type: "city",
        distance: "bloom",
        moods: ["culture", "movida", "wild", "design"],
        tagline: {
            it: "La città che non dorme mai",
            en: "The city that never sleeps",
            es: "La ciudad que nunca duerme",
            fr: "La ville qui ne dort jamais"
        }
    },
    {
        name: "Parigi",
        country: "Francia",
        image: "https://cdn.pixabay.com/photo/2018/04/25/09/26/eiffel-tower-3349075_960_720.jpg",
        type: "city",
        distance: "comfort",
        moods: ["romantic", "culture", "gourmet", "glamour"],
        tagline: {
            it: "Romanticismo e luci sulla Senna",
            en: "Romance and lights on the Seine",
            es: "Romance y luces sobre el Sena",
            fr: "Romance et lumières sur la Seine"
        }
    },
    {
        name: "Dubai",
        country: "UAE",
        image: "https://cdn.pixabay.com/photo/2015/07/13/14/40/dubai-843462_960_720.jpg",
        type: "city",
        distance: "curious",
        moods: ["glamour", "wild", "movida", "design"],
        tagline: {
            it: "Lusso sfrenato nel deserto",
            en: "Unbridled luxury in the desert",
            es: "Lujo desenfrenado en el desierto",
            fr: "Luxe débridé dans le désert"
        }
    },
    {
        name: "Londra",
        country: "UK",
        image: "https://cdn.pixabay.com/photo/2014/11/13/23/34/palace-530055_960_720.jpg",
        type: "city",
        distance: "comfort",
        moods: ["culture", "movida", "design", "gourmet"],
        tagline: {
            it: "Storia e innovazione sul Tamigi",
            en: "History and innovation on the Thames",
            es: "Historia e innovación en el Támesis",
            fr: "Histoire et innovation sur la Tamise"
        }
    },
    
    // MONTAGNA (Mountain) Destinations
    {
        name: "Dolomiti",
        country: "Italia",
        image: "https://cdn.pixabay.com/photo/2016/08/16/09/53/dolomites-1597456_960_720.jpg",
        type: "mountain",
        distance: "comfort",
        moods: ["zen", "wild", "gourmet", "romantic"],
        tagline: {
            it: "Cattedrali di roccia rosa al tramonto",
            en: "Pink rock cathedrals at sunset",
            es: "Catedrales de roca rosa al atardecer",
            fr: "Cathédrales de roche rose au coucher du soleil"
        }
    },
    {
        name: "Zermatt",
        country: "Svizzera",
        image: "https://cdn.pixabay.com/photo/2013/01/07/12/58/matterhorn-74346_960_720.jpg",
        type: "mountain",
        distance: "curious",
        moods: ["zen", "glamour", "wild", "gourmet"],
        tagline: {
            it: "Il Cervino e cime innevate da sogno",
            en: "The Matterhorn and dreamy snowy peaks",
            es: "El Matterhorn y picos nevados de ensueño",
            fr: "Le Cervin et sommets enneigés de rêve"
        }
    },
    {
        name: "Patagonia",
        country: "Argentina/Cile",
        image: "https://cdn.pixabay.com/photo/2020/02/25/07/52/patagonia-4878203_960_720.jpg",
        type: "mountain",
        distance: "bloom",
        moods: ["wild", "zen", "culture"],
        tagline: {
            it: "Ghiacciai eterni e natura incontaminata",
            en: "Eternal glaciers and pristine nature",
            es: "Glaciares eternos y naturaleza prístina",
            fr: "Glaciers éternels et nature intacte"
        }
    },
    {
        name: "Alpi Francesi",
        country: "Francia",
        image: "https://cdn.pixabay.com/photo/2017/08/17/09/47/mountain-2650628_960_720.jpg",
        type: "mountain",
        distance: "curious",
        moods: ["glamour", "wild", "gourmet", "movida"],
        tagline: {
            it: "Neve, champagne e alta quota",
            en: "Snow, champagne and high altitude",
            es: "Nieve, champán y gran altitud",
            fr: "Neige, champagne et haute altitude"
        }
    },
    {
        name: "Himalaya",
        country: "Nepal",
        image: "https://cdn.pixabay.com/photo/2012/04/26/22/48/himalayas-43200_960_720.jpg",
        type: "mountain",
        distance: "bloom",
        moods: ["zen", "wild", "culture"],
        tagline: {
            it: "Il tetto del mondo e spiritualità",
            en: "The roof of the world and spirituality",
            es: "El techo del mundo y espiritualidad",
            fr: "Le toit du monde et spiritualité"
        }
    }
];
