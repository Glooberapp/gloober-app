// GLOOBER DESTINATIONS DATABASE
// Version: 2.0 - Con foto Unsplash reali
// ============================================

const DESTINATIONS = [
    // MARE (Sea) Destinations
    {
        name: "Maldive",
        country: "Maldive",
        image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800",
        type: "sea",
        distance: "bloom",
        moods: ["romantic", "zen", "glamour"],
        tagline: {
            it: "Paradiso di atolli cristallini",
            en: "Crystal atoll paradise",
            es: "Paraíso de atolones cristalinos",
            fr: "Paradis d'atolls cristallins",
            de: "Kristallklares Atoll-Paradies",
            zh: "水晶环礁天堂",
            hi: "क्रिस्टल एटोल स्वर्ग",
            ar: "جنة الجزر المرجانية",
            pt: "Paraíso de atóis cristalinos",
            ru: "Кристальный атолловый рай"
        }
    },
    {
        name: "Santorini",
        country: "Grecia",
        image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800",
        type: "sea",
        distance: "curious",
        moods: ["romantic", "design", "gourmet"],
        tagline: {
            it: "Dove il blu incontra il bianco",
            en: "Where blue meets white",
            es: "Donde el azul se encuentra con el blanco",
            fr: "Où le bleu rencontre le blanc",
            de: "Wo Blau auf Weiß trifft",
            zh: "蓝白相遇之地",
            hi: "जहाँ नीला सफेद से मिलता है",
            ar: "حيث يلتقي الأزرق بالأبيض",
            pt: "Onde o azul encontra o branco",
            ru: "Где синий встречает белый"
        }
    },
    {
        name: "Cinque Terre",
        country: "Italia",
        image: "https://images.unsplash.com/photo-1533637308045-97e99229e5d2?w=800",
        type: "sea",
        distance: "comfort",
        moods: ["romantic", "gourmet", "culture"],
        tagline: {
            it: "Colori pastello sul mare",
            en: "Pastel colors by the sea",
            es: "Colores pastel junto al mar",
            fr: "Couleurs pastel au bord de mer",
            de: "Pastellfarben am Meer",
            zh: "海边的柔和色彩",
            hi: "समुद्र के किनारे पेस्टल रंग",
            ar: "ألوان الباستيل على البحر",
            pt: "Cores pastel à beira-mar",
            ru: "Пастельные цвета у моря"
        }
    },
    {
        name: "Bali",
        country: "Indonesia",
        image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800",
        type: "sea",
        distance: "bloom",
        moods: ["zen", "wild", "culture"],
        tagline: {
            it: "L'isola degli dei",
            en: "Island of the gods",
            es: "Isla de los dioses",
            fr: "L'île des dieux",
            de: "Insel der Götter",
            zh: "众神之岛",
            hi: "देवताओं का द्वीप",
            ar: "جزيرة الآلهة",
            pt: "Ilha dos deuses",
            ru: "Остров богов"
        }
    },

    // CITTÀ (City) Destinations
    {
        name: "Tokyo",
        country: "Giappone",
        image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800",
        type: "city",
        distance: "bloom",
        moods: ["movida", "design", "gourmet"],
        tagline: {
            it: "Futuro che incontra tradizione",
            en: "Future meets tradition",
            es: "El futuro se encuentra con la tradición",
            fr: "Le futur rencontre la tradition",
            de: "Zukunft trifft Tradition",
            zh: "未来与传统相遇",
            hi: "भविष्य परंपरा से मिलता है",
            ar: "المستقبل يلتقي بالتقاليد",
            pt: "Futuro encontra tradição",
            ru: "Будущее встречает традицию"
        }
    },
    {
        name: "New York",
        country: "USA",
        image: "https://images.unsplash.com/photo-1490644658840-3f2e3f8c5625?w=800",
        type: "city",
        distance: "bloom",
        moods: ["movida", "glamour", "culture"],
        tagline: {
            it: "La città che non dorme mai",
            en: "The city that never sleeps",
            es: "La ciudad que nunca duerme",
            fr: "La ville qui ne dort jamais",
            de: "Die Stadt, die niemals schläft",
            zh: "不夜城",
            hi: "वह शहर जो कभी नहीं सोता",
            ar: "المدينة التي لا تنام أبداً",
            pt: "A cidade que nunca dorme",
            ru: "Город, который никогда не спит"
        }
    },
    {
        name: "Parigi",
        country: "Francia",
        image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800",
        type: "city",
        distance: "curious",
        moods: ["romantic", "gourmet", "culture"],
        tagline: {
            it: "La ville lumière",
            en: "The city of lights",
            es: "La ciudad de las luces",
            fr: "La ville lumière",
            de: "Stadt der Lichter",
            zh: "光之城",
            hi: "रोशनी का शहर",
            ar: "مدينة الأنوار",
            pt: "A cidade das luzes",
            ru: "Город огней"
        }
    },
    {
        name: "Roma",
        country: "Italia",
        image: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=800",
        type: "city",
        distance: "comfort",
        moods: ["culture", "gourmet", "romantic"],
        tagline: {
            it: "La città eterna",
            en: "The eternal city",
            es: "La ciudad eterna",
            fr: "La ville éternelle",
            de: "Die ewige Stadt",
            zh: "永恒之城",
            hi: "शाश्वत शहर",
            ar: "المدينة الخالدة",
            pt: "A cidade eterna",
            ru: "Вечный город"
        }
    },
    {
        name: "Dubai",
        country: "Emirati Arabi",
        image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800",
        type: "city",
        distance: "bloom",
        moods: ["glamour", "design", "movida"],
        tagline: {
            it: "Lusso nel deserto",
            en: "Luxury in the desert",
            es: "Lujo en el desierto",
            fr: "Luxe dans le désert",
            de: "Luxus in der Wüste",
            zh: "沙漠中的奢华",
            hi: "रेगिस्तान में विलासिता",
            ar: "الفخامة في الصحراء",
            pt: "Luxo no deserto",
            ru: "Роскошь в пустыне"
        }
    },
    {
        name: "Barcellona",
        country: "Spagna",
        image: "https://images.unsplash.com/photo-1583422409516-2895a77efded?w=800",
        type: "city",
        distance: "curious",
        moods: ["movida", "design", "gourmet"],
        tagline: {
            it: "Arte e mare si fondono",
            en: "Where art meets the sea",
            es: "Donde el arte se encuentra con el mar",
            fr: "Où l'art rencontre la mer",
            de: "Wo Kunst auf Meer trifft",
            zh: "艺术与海洋交汇",
            hi: "जहाँ कला समुद्र से मिलती है",
            ar: "حيث يلتقي الفن بالبحر",
            pt: "Onde a arte encontra o mar",
            ru: "Где искусство встречает море"
        }
    },

    // MONTAGNA (Mountain) Destinations
    {
        name: "Dolomiti",
        country: "Italia",
        image: "https://images.unsplash.com/photo-1541870295896-8fe7a8981e59?w=800",
        type: "mountain",
        distance: "comfort",
        moods: ["zen", "wild", "romantic"],
        tagline: {
            it: "Cattedrali di roccia",
            en: "Rock cathedrals",
            es: "Catedrales de roca",
            fr: "Cathédrales de roche",
            de: "Felsenkathedralen",
            zh: "岩石大教堂",
            hi: "चट्टान के गिरजाघर",
            ar: "كاتدرائيات الصخور",
            pt: "Catedrais de rocha",
            ru: "Каменные соборы"
        }
    },
    {
        name: "Alpi Svizzere",
        country: "Svizzera",
        image: "https://images.unsplash.com/photo-1531973576160-7125cd663d86?w=800",
        type: "mountain",
        distance: "curious",
        moods: ["zen", "glamour", "wild"],
        tagline: {
            it: "Perfezione alpina",
            en: "Alpine perfection",
            es: "Perfección alpina",
            fr: "Perfection alpine",
            de: "Alpine Perfektion",
            zh: "阿尔卑斯完美",
            hi: "अल्पाइन पूर्णता",
            ar: "الكمال الألبي",
            pt: "Perfeição alpina",
            ru: "Альпийское совершенство"
        }
    },
    {
        name: "Nepal",
        country: "Nepal",
        image: "https://images.unsplash.com/photo-1558799401-1dcba79e728e?w=800",
        type: "mountain",
        distance: "bloom",
        moods: ["zen", "wild", "culture"],
        tagline: {
            it: "Il tetto del mondo",
            en: "The roof of the world",
            es: "El techo del mundo",
            fr: "Le toit du monde",
            de: "Das Dach der Welt",
            zh: "世界屋脊",
            hi: "दुनिया की छत",
            ar: "سقف العالم",
            pt: "O teto do mundo",
            ru: "Крыша мира"
        }
    },
    {
        name: "Patagonia",
        country: "Argentina/Cile",
        image: "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?w=800",
        type: "mountain",
        distance: "bloom",
        moods: ["wild", "zen", "romantic"],
        tagline: {
            it: "Natura selvaggia e incontaminata",
            en: "Wild untamed nature",
            es: "Naturaleza salvaje e indómita",
            fr: "Nature sauvage et indomptée",
            de: "Wilde unberührte Natur",
            zh: "狂野未驯的自然",
            hi: "जंगली अछूती प्रकृति",
            ar: "طبيعة برية لم تُروض",
            pt: "Natureza selvagem e intocada",
            ru: "Дикая нетронутая природа"
        }
    },
    {
        name: "Islanda",
        country: "Islanda",
        image: "https://images.unsplash.com/photo-1520769669658-f07657f5a307?w=800",
        type: "mountain",
        distance: "bloom",
        moods: ["wild", "zen", "design"],
        tagline: {
            it: "Terra di ghiaccio e fuoco",
            en: "Land of ice and fire",
            es: "Tierra de hielo y fuego",
            fr: "Terre de glace et de feu",
            de: "Land aus Eis und Feuer",
            zh: "冰与火之地",
            hi: "बर्फ और आग की भूमि",
            ar: "أرض الجليد والنار",
            pt: "Terra de gelo e fogo",
            ru: "Земля льда и огня"
        }
    }
];

// TRAVEL QUOTES DATABASE
const TRAVEL_QUOTES = [
    {
        quote: {
            it: "Il mondo è un libro e chi non viaggia ne legge solo una pagina.",
            en: "The world is a book and those who do not travel read only one page.",
            es: "El mundo es un libro y aquellos que no viajan leen solo una página.",
            fr: "Le monde est un livre et ceux qui ne voyagent pas n'en lisent qu'une page.",
            de: "Die Welt ist ein Buch und wer nicht reist, liest nur eine Seite.",
            zh: "世界是一本书，不旅行的人只读了一页。",
            hi: "दुनिया एक किताब है और जो यात्रा नहीं करते वे केवल एक पृष्ठ पढ़ते हैं।",
            ar: "العالم كتاب ومن لا يسافر يقرأ صفحة واحدة فقط.",
            pt: "O mundo é um livro e aqueles que não viajam leem apenas uma página.",
            ru: "Мир - это книга, и те, кто не путешествует, читают только одну страницу."
        },
        author: "Sant'Agostino"
    },
    {
        quote: {
            it: "Viaggiare è vivere.",
            en: "To travel is to live.",
            es: "Viajar es vivir.",
            fr: "Voyager c'est vivre.",
            de: "Reisen ist leben.",
            zh: "旅行就是生活。",
            hi: "यात्रा करना जीना है।",
            ar: "السفر هو الحياة.",
            pt: "Viajar é viver.",
            ru: "Путешествовать значит жить."
        },
        author: "Hans Christian Andersen"
    },
    {
        quote: {
            it: "Non tutti quelli che vagano sono perduti.",
            en: "Not all those who wander are lost.",
            es: "No todos los que vagan están perdidos.",
            fr: "Tous ceux qui errent ne sont pas perdus.",
            de: "Nicht alle, die wandern, sind verloren.",
            zh: "并非所有流浪的人都迷失了。",
            hi: "सभी भटकने वाले खोए नहीं होते।",
            ar: "ليس كل من يتجول ضائعاً.",
            pt: "Nem todos os que vagueiam estão perdidos.",
            ru: "Не все, кто блуждает, потеряны."
        },
        author: "J.R.R. Tolkien"
    },
    {
        quote: {
            it: "La vita è un viaggio, non una destinazione.",
            en: "Life is a journey, not a destination.",
            es: "La vida es un viaje, no un destino.",
            fr: "La vie est un voyage, pas une destination.",
            de: "Das Leben ist eine Reise, kein Ziel.",
            zh: "生活是一场旅程，而非目的地。",
            hi: "जीवन एक यात्रा है, गंतव्य नहीं।",
            ar: "الحياة رحلة وليست وجهة.",
            pt: "A vida é uma jornada, não um destino.",
            ru: "Жизнь - это путешествие, а не пункт назначения."
        },
        author: "Ralph Waldo Emerson"
    }
];
