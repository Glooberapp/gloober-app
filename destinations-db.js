// GLOOBER DESTINATIONS DATABASE
// Version: 2.1 - Database aggiornato con categorie corrette
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
        image: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=800",
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
        image: "https://images.unsplash.com/photo-1589742158508-65785cf4172e?w=800",
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
        image: "https://images.unsplash.com/photo-1563784804984-9e83c036bba4?w=800",
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
        image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800",
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
        image: "https://images.unsplash.com/photo-1538970272646-f61fabb3a8a2?w=800",
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
        image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800",
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
        image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800",
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
        image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800",
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
        image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800",
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
        image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800",
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
        image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=800",
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
        image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800",
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
        image: "https://images.unsplash.com/photo-1515245696852-ae418832c28e?w=800",
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
