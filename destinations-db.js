// GLOOBER DESTINATIONS DATABASE
// Version: 3.0 - Database con foto selezionate dall'utente
// ============================================

const DESTINATIONS_DB = [
    // MARE (Sea) Destinations
    {
        name: "Maldive",
        country: "Maldive",
        image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800",
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
        image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800",
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
        image: "https://images.unsplash.com/photo-1569526381287-97ec81df4245?w=800",
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
        image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800",
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
        image: "https://images.unsplash.com/photo-1558538097-3d09ad4096f7?w=800",
        type: "sea",
        distance: "curious",
        moods: ["movida", "zen", "glamour"],
        tagline: {
            it: "Ritmi hippy e notti infinite",
            en: "Hippy rhythms and endless nights",
            es: "Ritmos hippies y noches infinitas",
            fr: "Rythmes hippies et nuits sans fin"
        }
    },
    
    // CITTÀ (City) Destinations
    {
        name: "Tokyo",
        country: "Giappone",
        image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800",
        type: "city",
        distance: "bloom",
        moods: ["culture", "movida", "wild", "gourmet"],
        tagline: {
            it: "Dove il futuro incontra la tradizione",
            en: "Where future meets tradition",
            es: "Donde el futuro se encuentra con la tradición",
            fr: "Où le futur rencontre la tradition"
        }
    },
    {
        name: "New York",
        country: "USA",
        image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800",
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
        image: "https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?w=800",
        type: "city",
        distance: "comfort",
        moods: ["romantic", "culture", "gourmet", "glamour"],
        tagline: {
            it: "L'eterna città dell'amore",
            en: "The eternal city of love",
            es: "La ciudad eterna del amor",
            fr: "L'éternelle ville de l'amour"
        }
    },
    {
        name: "Dubai",
        country: "UAE",
        image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800",
        type: "city",
        distance: "curious",
        moods: ["glamour", "wild", "movida", "design"],
        tagline: {
            it: "Dove l'impossibile diventa realtà",
            en: "Where the impossible becomes reality",
            es: "Donde lo imposible se hace realidad",
            fr: "Où l'impossible devient réalité"
        }
    },
    {
        name: "Londra",
        country: "UK",
        image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800",
        type: "city",
        distance: "comfort",
        moods: ["culture", "movida", "design"],
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
        image: "https://images.unsplash.com/photo-1558637845-c8b7ead71a3e?w=800",
        type: "mountain",
        distance: "comfort",
        moods: ["zen", "wild", "gourmet"],
        tagline: {
            it: "Le montagne rosa al tramonto",
            en: "Pink mountains at sunset",
            es: "Montañas rosadas al atardecer",
            fr: "Montagnes roses au coucher du soleil"
        }
    },
    {
        name: "Interlaken",
        country: "Svizzera",
        image: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=800",
        type: "mountain",
        distance: "curious",
        moods: ["wild", "zen", "romantic"],
        tagline: {
            it: "Tra laghi alpini e vette innevate",
            en: "Between alpine lakes and snowy peaks",
            es: "Entre lagos alpinos y picos nevados",
            fr: "Entre lacs alpins et sommets enneigés"
        }
    },
    {
        name: "Patagonia",
        country: "Argentina/Cile",
        image: "https://images.unsplash.com/photo-1484804959297-65e7c19d7c9f?w=800",
        type: "mountain",
        distance: "bloom",
        moods: ["wild", "zen"],
        tagline: {
            it: "L'ultima frontiera selvaggia",
            en: "The last wild frontier",
            es: "La última frontera salvaje",
            fr: "La dernière frontière sauvage"
        }
    },
    {
        name: "Himalaya",
        country: "Nepal",
        image: "https://images.unsplash.com/photo-1589825592501-0c7c7d9d9285?w=800",
        type: "mountain",
        distance: "bloom",
        moods: ["zen", "culture", "wild"],
        tagline: {
            it: "Il tetto del mondo",
            en: "The roof of the world",
            es: "El techo del mundo",
            fr: "Le toit du monde"
        }
    },
    {
        name: "Alpi Francesi",
        country: "Francia",
        image: "https://images.unsplash.com/photo-1518002054494-3a6f94352e9d?w=800",
        type: "mountain",
        distance: "curious",
        moods: ["glamour", "wild", "gourmet"],
        tagline: {
            it: "Neve esclusiva e charme alpino",
            en: "Exclusive snow and alpine charm",
            es: "Nieve exclusiva y encanto alpino",
            fr: "Neige exclusive et charme alpin"
        }
    }
];
