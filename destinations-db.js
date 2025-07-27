// GLOOBER DESTINATIONS DATABASE
// Version: 5.1 - DATABASE COMPLETO E CORRETTO
// ============================================

const DESTINATIONS_DB = [
    // ========== MARE (20 destinazioni) ==========
    {
        name: "Maldive",
        country: "Maldive",
        image: "https://via.placeholder.com/800x600/00CED1/FFFFFF?text=Maldive",
        type: "sea",
        distance: "bloom",
        moods: ["zen", "romantic", "wild"],
        tagline: {
            it: "Paradiso di atolli cristallini",
            en: "Paradise of crystal atolls",
            es: "Paraíso de atolones cristalinos",
            fr: "Paradis d'atolls cristallins",
            de: "Paradies der kristallklaren Atolle",
            zh: "水晶环礁天堂",
            hi: "क्रिस्टल एटोल का स्वर्ग",
            ar: "جنة الجزر المرجانية الكريستالية",
            pt: "Paraíso dos atóis cristalinos",
            ru: "Рай кристальных атоллов"
        }
    },
    {
        name: "Santorini",
        country: "Grecia",
        image: "https://via.placeholder.com/800x600/6495ED/FFFFFF?text=Santorini",
        type: "sea",
        distance: "curious",
        moods: ["romantic", "culture", "zen"],
        tagline: {
            it: "Tramonti mozzafiato sull'Egeo",
            en: "Breathtaking sunsets over the Aegean",
            es: "Atardeceres impresionantes sobre el Egeo",
            fr: "Couchers de soleil époustouflants sur la mer Égée",
            de: "Atemberaubende Sonnenuntergänge über der Ägäis",
            zh: "爱琴海上的壮丽日落",
            hi: "एजियन पर लुभावनी सूर्यास्त",
            ar: "غروب الشمس الخلاب فوق بحر إيجه",
            pt: "Pôr do sol deslumbrante sobre o Egeu",
            ru: "Захватывающие закаты над Эгейским морем"
        }
    },
    {
        name: "Sardegna",
        country: "Italia",
        image: "https://via.placeholder.com/800x600/40E0D0/FFFFFF?text=Sardegna",
        type: "sea",
        distance: "comfort",
        moods: ["zen", "movida", "gourmet"],
        tagline: {
            it: "Spiagge caraibiche nel Mediterraneo",
            en: "Caribbean beaches in the Mediterranean",
            es: "Playas caribeñas en el Mediterráneo",
            fr: "Plages des Caraïbes en Méditerranée",
            de: "Karibische Strände im Mittelmeer",
            zh: "地中海的加勒比海滩",
            hi: "भूमध्य सागर में कैरेबियन समुद्र तट",
            ar: "شواطئ كاريبية في البحر المتوسط",
            pt: "Praias caribenhas no Mediterrâneo",
            ru: "Карибские пляжи в Средиземноморье"
        }
    },
    {
        name: "Bali",
        country: "Indonesia",
        image: "https://via.placeholder.com/800x600/98FB98/000000?text=Bali",
        type: "sea",
        distance: "bloom",
        moods: ["wild", "culture", "zen"],
        tagline: {
            it: "L'isola degli dei e delle onde perfette",
            en: "Island of gods and perfect waves",
            es: "Isla de dioses y olas perfectas",
            fr: "L'île des dieux et des vagues parfaites",
            de: "Insel der Götter und perfekten Wellen",
            zh: "众神之岛与完美海浪",
            hi: "देवताओं और परफेक्ट लहरों का द्वीप",
            ar: "جزيرة الآلهة والأمواج المثالية",
            pt: "Ilha dos deuses e ondas perfeitas",
            ru: "Остров богов и идеальных волн"
        }
    },
    {
        name: "Ibiza",
        country: "Spagna",
        image: "https://via.placeholder.com/800x600/FF69B4/FFFFFF?text=Ibiza",
        type: "sea",
        distance: "curious",
        moods: ["movida", "zen", "glamour"],
        tagline: {
            it: "Ritmi hippy e notti infinite",
            en: "Hippy vibes and endless nights",
            es: "Ritmos hippies y noches infinitas",
            fr: "Vibrations hippies et nuits sans fin",
            de: "Hippie-Vibes und endlose Nächte",
            zh: "嬉皮氛围与无尽之夜",
            hi: "हिप्पी वाइब्स और अंतहीन रातें",
            ar: "إيقاعات الهيبي والليالي التي لا تنتهي",
            pt: "Vibrações hippies e noites infinitas",
            ru: "Хиппи-вайбы и бесконечные ночи"
        }
    },
    {
        name: "Seychelles",
        country: "Seychelles",
        image: "https://via.placeholder.com/800x600/00FA9A/FFFFFF?text=Seychelles",
        type: "sea",
        distance: "bloom",
        moods: ["zen", "romantic", "wild"],
        tagline: {
            it: "Granito rosa e tartarughe giganti",
            en: "Pink granite and giant tortoises",
            es: "Granito rosa y tortugas gigantes",
            fr: "Granit rose et tortues géantes",
            de: "Rosa Granit und Riesenschildkröten",
            zh: "粉红花岗岩与巨龟",
            hi: "गुलाबी ग्रेनाइट और विशाल कछुए",
            ar: "الجرانيت الوردي والسلاحف العملاقة",
            pt: "Granito rosa e tartarugas gigantes",
            ru: "Розовый гранит и гигантские черепахи"
        }
    },
    {
        name: "Zanzibar",
        country: "Tanzania",
        image: "https://via.placeholder.com/800x600/FFE4B5/000000?text=Zanzibar",
        type: "sea",
        distance: "bloom",
        moods: ["culture", "zen", "wild"],
        tagline: {
            it: "Spezie, dhow e tramonti africani",
            en: "Spices, dhows and African sunsets",
            es: "Especias, dhows y atardeceres africanos",
            fr: "Épices, boutres et couchers de soleil africains",
            de: "Gewürze, Dhaus und afrikanische Sonnenuntergänge",
            zh: "香料、独桅帆船与非洲日落",
            hi: "मसाले, धोव और अफ्रीकी सूर्यास्त",
            ar: "التوابل والمراكب الشراعية وغروب الشمس الأفريقي",
            pt: "Especiarias, dhows e pôr do sol africano",
            ru: "Специи, доу и африканские закаты"
        }
    },
    {
        name: "Phuket",
        country: "Thailandia",
        image: "https://via.placeholder.com/800x600/20B2AA/FFFFFF?text=Phuket",
        type: "sea",
        distance: "bloom",
        moods: ["movida", "wild", "gourmet"],
        tagline: {
            it: "Spiagge da sogno e street food incredibile",
            en: "Dream beaches and incredible street food",
            es: "Playas de ensueño y comida callejera increíble",
            fr: "Plages de rêve et street food incroyable",
            de: "Traumstrände und unglaubliches Street Food",
            zh: "梦幻海滩与美味街头小吃",
            hi: "सपनों के समुद्र तट और अविश्वसनीय स्ट्रीट फूड",
            ar: "شواطئ الأحلام وطعام الشارع المذهل",
            pt: "Praias dos sonhos e comida de rua incrível",
            ru: "Пляжи мечты и невероятная уличная еда"
        }
    },
    {
        name: "Cancun",
        country: "Messico",
        image: "https://via.placeholder.com/800x600/00CED1/FFFFFF?text=Cancun",
        type: "sea",
        distance: "curious",
        moods: ["movida", "culture", "wild"],
        tagline: {
            it: "Piramidi Maya e mare turchese",
            en: "Mayan pyramids and turquoise sea",
            es: "Pirámides mayas y mar turquesa",
            fr: "Pyramides mayas et mer turquoise",
            de: "Maya-Pyramiden und türkisfarbenes Meer",
            zh: "玛雅金字塔与碧绿海水",
            hi: "माया पिरामिड और फ़िरोज़ा समुद्र",
            ar: "أهرامات المايا والبحر الفيروزي",
            pt: "Pirâmides maias e mar turquesa",
            ru: "Пирамиды майя и бирюзовое море"
        }
    },
    {
        name: "Bora Bora",
        country: "Polinesia Francese",
        image: "https://via.placeholder.com/800x600/48D1CC/FFFFFF?text=Bora+Bora",
        type: "sea",
        distance: "bloom",
        moods: ["romantic", "zen", "glamour"],
        tagline: {
            it: "La perla del Pacifico",
            en: "The Pearl of the Pacific",
            es: "La perla del Pacífico",
            fr: "La perle du Pacifique",
            de: "Die Perle des Pazifiks",
            zh: "太平洋明珠",
            hi: "प्रशांत का मोती",
            ar: "لؤلؤة المحيط الهادئ",
            pt: "A pérola do Pacífico",
            ru: "Жемчужина Тихого океана"
        }
    },
    {
        name: "Mykonos",
        country: "Grecia",
        image: "https://via.placeholder.com/800x600/87CEEB/000000?text=Mykonos",
        type: "sea",
        distance: "curious",
        moods: ["movida", "glamour", "culture"],
        tagline: {
            it: "Mulini a vento e beach club esclusivi",
            en: "Windmills and exclusive beach clubs",
            es: "Molinos de viento y beach clubs exclusivos",
            fr: "Moulins à vent et beach clubs exclusifs",
            de: "Windmühlen und exklusive Beach Clubs",
            zh: "风车与奢华海滩俱乐部",
            hi: "पवनचक्की और एक्सक्लूसिव बीच क्लब",
            ar: "طواحين الهواء ونوادي الشاطئ الحصرية",
            pt: "Moinhos de vento e beach clubs exclusivos",
            ru: "Ветряные мельницы и эксклюзивные пляжные клубы"
        }
    },
    {
        name: "Bahamas",
        country: "Bahamas",
        image: "https://via.placeholder.com/800x600/AFEEEE/000000?text=Bahamas",
        type: "sea",
        distance: "curious",
        moods: ["zen", "wild", "glamour"],
        tagline: {
            it: "Maiali nuotatori e spiagge rosa",
            en: "Swimming pigs and pink beaches",
            es: "Cerdos nadadores y playas rosadas",
            fr: "Cochons nageurs et plages roses",
            de: "Schwimmende Schweine und rosa Strände",
            zh: "游泳的猪与粉红海滩",
            hi: "तैरते सूअर और गुलाबी समुद्र तट",
            ar: "الخنازير السابحة والشواطئ الوردية",
            pt: "Porcos nadadores e praias rosa",
            ru: "Плавающие свиньи и розовые пляжи"
        }
    },
    {
        name: "Mauritius",
        country: "Mauritius",
        image: "https://via.placeholder.com/800x600/5F9EA0/FFFFFF?text=Mauritius",
        type: "sea",
        distance: "bloom",
        moods: ["zen", "romantic", "gourmet"],
        tagline: {
            it: "Lagune turchesi e melting pot culturale",
            en: "Turquoise lagoons and cultural melting pot",
            es: "Lagunas turquesas y crisol cultural",
            fr: "Lagons turquoise et melting-pot culturel",
            de: "Türkisfarbene Lagunen und kultureller Schmelztiegel",
            zh: "碧绿潟湖与文化大熔炉",
            hi: "फ़िरोज़ा लैगून और सांस्कृतिक मेल्टिंग पॉट",
            ar: "البحيرات الفيروزية وبوتقة الثقافات",
            pt: "Lagoas turquesa e caldeirão cultural",
            ru: "Бирюзовые лагуны и культурный плавильный котел"
        }
    },
    {
        name: "Corsica",
        country: "Francia",
        image: "https://via.placeholder.com/800x600/B0C4DE/000000?text=Corsica",
        type: "sea",
        distance: "comfort",
        moods: ["wild", "zen", "gourmet"],
        tagline: {
            it: "Montagne che tuffano nel mare",
            en: "Mountains diving into the sea",
            es: "Montañas que se sumergen en el mar",
            fr: "Montagnes plongeant dans la mer",
            de: "Berge, die ins Meer tauchen",
            zh: "山脉潜入大海",
            hi: "समुद्र में गोता लगाते पहाड़",
            ar: "جبال تغوص في البحر",
            pt: "Montanhas mergulhando no mar",
            ru: "Горы, ныряющие в море"
        }
    },
    {
        name: "Malta",
        country: "Malta",
        image: "https://via.placeholder.com/800x600/F0E68C/000000?text=Malta",
        type: "sea",
        distance: "comfort",
        moods: ["culture", "zen", "gourmet"],
        tagline: {
            it: "Cavalieri, templi e acque cristalline",
            en: "Knights, temples and crystal waters",
            es: "Caballeros, templos y aguas cristalinas",
            fr: "Chevaliers, temples et eaux cristallines",
            de: "Ritter, Tempel und kristallklares Wasser",
            zh: "骑士、神庙与晶莹海水",
            hi: "शूरवीर, मंदिर और क्रिस्टल पानी",
            ar: "الفرسان والمعابد والمياه الكريستالية",
            pt: "Cavaleiros, templos e águas cristalinas",
            ru: "Рыцари, храмы и кристальные воды"
        }
    },
    {
        name: "Amalfi",
        country: "Italia",
        image: "https://via.placeholder.com/800x600/FFB6C1/000000?text=Amalfi",
        type: "sea",
        distance: "comfort",
        moods: ["romantic", "gourmet", "culture"],
        tagline: {
            it: "Limoni, curve mozzafiato e dolce vita",
            en: "Lemons, breathtaking curves and dolce vita",
            es: "Limones, curvas impresionantes y dolce vita",
            fr: "Citrons, virages époustouflants et dolce vita",
            de: "Zitronen, atemberaubende Kurven und Dolce Vita",
            zh: "柠檬、惊险弯道与甜蜜生活",
            hi: "नींबू, लुभावने मोड़ और डोल्चे वीटा",
            ar: "الليمون والمنحنيات الخلابة والحياة الحلوة",
            pt: "Limões, curvas deslumbrantes e dolce vita",
            ru: "Лимоны, захватывающие повороты и дольче вита"
        }
    },
    {
        name: "Algarve",
        country: "Portogallo",
        image: "https://via.placeholder.com/800x600/FFDAB9/000000?text=Algarve",
        type: "sea",
        distance: "comfort",
        moods: ["zen", "wild", "gourmet"],
        tagline: {
            it: "Scogliere dorate e villaggi bianchi",
            en: "Golden cliffs and white villages",
            es: "Acantilados dorados y pueblos blancos",
            fr: "Falaises dorées et villages blancs",
            de: "Goldene Klippen und weiße Dörfer",
            zh: "金色悬崖与白色村庄",
            hi: "सुनहरी चट्टानें और सफेद गाँव",
            ar: "المنحدرات الذهبية والقرى البيضاء",
            pt: "Falésias douradas e aldeias brancas",
            ru: "Золотые скалы и белые деревни"
        }
    },
    {
        name: "Gold Coast",
        country: "Australia",
        image: "https://via.placeholder.com/800x600/FFD700/000000?text=Gold+Coast",
        type: "sea",
        distance: "bloom",
        moods: ["wild", "movida", "zen"],
        tagline: {
            it: "Surf, grattacieli e koala",
            en: "Surf, skyscrapers and koalas",
            es: "Surf, rascacielos y koalas",
            fr: "Surf, gratte-ciels et koalas",
            de: "Surfen, Wolkenkratzer und Koalas",
            zh: "冲浪、摩天大楼与考拉",
            hi: "सर्फ, गगनचुंबी इमारतें और कोआला",
            ar: "ركوب الأمواج وناطحات السحاب والكوالا",
            pt: "Surf, arranha-céus e coalas",
            ru: "Серфинг, небоскребы и коалы"
        }
    },
    {
        name: "Tulum",
        country: "Messico",
        image: "https://via.placeholder.com/800x600/40E0D0/000000?text=Tulum",
        type: "sea",
        distance: "curious",
        moods: ["zen", "culture", "glamour"],
        tagline: {
            it: "Rovine Maya sulla spiaggia caraibica",
            en: "Mayan ruins on Caribbean beach",
            es: "Ruinas mayas en playa caribeña",
            fr: "Ruines mayas sur plage des Caraïbes",
            de: "Maya-Ruinen am Karibikstrand",
            zh: "加勒比海滩上的玛雅遗址",
            hi: "कैरेबियन समुद्र तट पर माया खंडहर",
            ar: "أطلال المايا على شاطئ الكاريبي",
            pt: "Ruínas maias na praia caribenha",
            ru: "Руины майя на карибском пляже"
        }
    },
    {
        name: "Malibu",
        country: "USA",
        image: "https://via.placeholder.com/800x600/FFA07A/000000?text=Malibu",
        type: "sea",
        distance: "bloom",
        moods: ["glamour", "wild", "zen"],
        tagline: {
            it: "Surf, star e tramonti californiani",
            en: "Surf, stars and California sunsets",
            es: "Surf, estrellas y atardeceres californianos",
            fr: "Surf, stars et couchers de soleil californiens",
            de: "Surfen, Stars und kalifornische Sonnenuntergänge",
            zh: "冲浪、明星与加州日落",
            hi: "सर्फ, सितारे और कैलिफोर्निया सूर्यास्त",
            ar: "ركوب الأمواج والنجوم وغروب الشمس في كاليفورنيا",
            pt: "Surf, estrelas e pôr do sol californiano",
            ru: "Серфинг, звезды и калифорнийские закаты"
        }
    },

    // ========== CITTÀ (20 destinazioni) ==========
    {
        name: "Tokyo",
        country: "Giappone",
        image: "https://via.placeholder.com/800x600/FF1493/FFFFFF?text=Tokyo",
        type: "city",
        distance: "bloom",
        moods: ["culture", "movida", "wild", "gourmet"],
        tagline: {
            it: "Futuro e tradizione in perfetta armonia",
            en: "Future and tradition in perfect harmony",
            es: "Futuro y tradición en perfecta armonía",
            fr: "Futur et tradition en parfaite harmonie",
            de: "Zukunft und Tradition in perfekter Harmonie",
            zh: "未来与传统的完美和谐",
            hi: "भविष्य और परंपरा पूर्ण सामंजस्य में",
            ar: "المستقبل والتقاليد في انسجام تام",
            pt: "Futuro e tradição em perfeita harmonia",
            ru: "Будущее и традиции в идеальной гармонии"
        }
    },
    {
        name: "New York",
        country: "USA",
        image: "https://via.placeholder.com/800x600/4169E1/FFFFFF?text=New+York",
        type: "city",
        distance: "bloom",
        moods: ["culture", "movida", "wild", "design"],
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
        image: "https://via.placeholder.com/800x600/DDA0DD/000000?text=Parigi",
        type: "city",
        distance: "comfort",
        moods: ["romantic", "culture", "gourmet", "glamour"],
        tagline: {
            it: "Romanticismo e luci sulla Senna",
            en: "Romance and lights on the Seine",
            es: "Romance y luces sobre el Sena",
            fr: "Romance et lumières sur la Seine",
            de: "Romantik und Lichter an der Seine",
            zh: "塞纳河上的浪漫与灯光",
            hi: "सीन पर रोमांस और रोशनी",
            ar: "الرومانسية والأضواء على نهر السين",
            pt: "Romance e luzes sobre o Sena",
            ru: "Романтика и огни на Сене"
        }
    },
    {
        name: "Dubai",
        country: "UAE",
        image: "https://via.placeholder.com/800x600/FFD700/000000?text=Dubai",
        type: "city",
        distance: "curious",
        moods: ["glamour", "wild", "movida", "design"],
        tagline: {
            it: "Lusso sfrenato nel deserto",
            en: "Unbridled luxury in the desert",
            es: "Lujo desenfrenado en el desierto",
            fr: "Luxe débridé dans le désert",
            de: "Zügelloser Luxus in der Wüste",
            zh: "沙漠中的奢华",
            hi: "रेगिस्तान में बेलगाम विलासिता",
            ar: "الرفاهية الجامحة في الصحراء",
            pt: "Luxo desenfreado no deserto",
            ru: "Безудержная роскошь в пустыне"
        }
    },
    {
        name: "Londra",
        country: "UK",
        image: "https://via.placeholder.com/800x600/DC143C/FFFFFF?text=Londra",
        type: "city",
        distance: "comfort",
        moods: ["culture", "movida", "design", "gourmet"],
        tagline: {
            it: "Storia e innovazione sul Tamigi",
            en: "History and innovation on the Thames",
            es: "Historia e innovación en el Támesis",
            fr: "Histoire et innovation sur la Tamise",
            de: "Geschichte und Innovation an der Themse",
            zh: "泰晤士河畔的历史与创新",
            hi: "टेम्स पर इतिहास और नवाचार",
            ar: "التاريخ والابتكار على نهر التايمز",
            pt: "História e inovação no Tâmisa",
            ru: "История и инновации на Темзе"
        }
    },
    {
        name: "Singapore",
        country: "Singapore",
        image: "https://via.placeholder.com/800x600/32CD32/FFFFFF?text=Singapore",
        type: "city",
        distance: "bloom",
        moods: ["design", "gourmet", "culture", "glamour"],
        tagline: {
            it: "Giardino futuristico dell'Asia",
            en: "Asia's futuristic garden",
            es: "Jardín futurista de Asia",
            fr: "Jardin futuriste de l'Asie",
            de: "Asiens futuristischer Garten",
            zh: "亚洲的未来花园",
            hi: "एशिया का भविष्यवादी उद्यान",
            ar: "حديقة آسيا المستقبلية",
            pt: "Jardim futurista da Ásia",
            ru: "Футуристический сад Азии"
        }
    },
    {
        name: "Hong Kong",
        country: "Cina",
        image: "https://via.placeholder.com/800x600/FF6347/FFFFFF?text=Hong+Kong",
        type: "city",
        distance: "bloom",
        moods: ["movida", "gourmet", "design", "culture"],
        tagline: {
            it: "Grattacieli, dim sum e tradizioni",
            en: "Skyscrapers, dim sum and traditions",
            es: "Rascacielos, dim sum y tradiciones",
            fr: "Gratte-ciels, dim sum et traditions",
            de: "Wolkenkratzer, Dim Sum und Traditionen",
            zh: "摩天大楼、点心与传统",
            hi: "गगनचुंबी इमारतें, डिम सम और परंपराएं",
            ar: "ناطحات السحاب والديم سوم والتقاليد",
            pt: "Arranha-céus, dim sum e tradições",
            ru: "Небоскребы, димсамы и традиции"
        }
    },
    {
        name: "Bangkok",
        country: "Thailandia",
        image: "https://via.placeholder.com/800x600/FF8C00/000000?text=Bangkok",
        type: "city",
        distance: "bloom",
        moods: ["culture", "gourmet", "movida", "wild"],
        tagline: {
            it: "Templi dorati e street food divino",
            en: "Golden temples and divine street food",
            es: "Templos dorados y comida callejera divina",
            fr: "Temples dorés et street food divine",
            de: "Goldene Tempel und göttliches Street Food",
            zh: "金色寺庙与美味街头小吃",
            hi: "सुनहरे मंदिर और दिव्य स्ट्रीट फूड",
            ar: "المعابد الذهبية وطعام الشارع الإلهي",
            pt: "Templos dourados e comida de rua divina",
            ru: "Золотые храмы и божественная уличная еда"
        }
    },
    {
        name: "Seoul",
        country: "Corea del Sud",
        image: "https://via.placeholder.com/800x600/9370DB/FFFFFF?text=Seoul",
        type: "city",
        distance: "bloom",
        moods: ["design", "movida", "gourmet", "culture"],
        tagline: {
            it: "K-pop, kimchi e tecnologia",
            en: "K-pop, kimchi and technology",
            es: "K-pop, kimchi y tecnología",
            fr: "K-pop, kimchi et technologie",
            de: "K-Pop, Kimchi und Technologie",
            zh: "韩流、泡菜与科技",
            hi: "के-पॉप, किमची और प्रौद्योगिकी",
            ar: "الكيبوب والكيمتشي والتكنولوجيا",
            pt: "K-pop, kimchi e tecnologia",
            ru: "K-pop, кимчи и технологии"
        }
    },
    {
        name: "Miami",
        country: "USA",
        image: "https://via.placeholder.com/800x600/FF69B4/FFFFFF?text=Miami",
        type: "city",
        distance: "curious",
        moods: ["movida", "glamour", "design", "gourmet"],
        tagline: {
            it: "Art Deco e ritmi latini",
            en: "Art Deco and Latin rhythms",
            es: "Art Déco y ritmos latinos",
            fr: "Art déco et rythmes latins",
            de: "Art Deco und lateinamerikanische Rhythmen",
            zh: "装饰艺术与拉丁节奏",
            hi: "आर्ट डेको और लैटिन लय",
            ar: "آرت ديكو والإيقاعات اللاتينية",
            pt: "Art Déco e ritmos latinos",
            ru: "Арт-деко и латинские ритмы"
        }
    },
    {
        name: "Las Vegas",
        country: "USA",
        image: "https://via.placeholder.com/800x600/FFD700/000000?text=Las+Vegas",
        type: "city",
        distance: "bloom",
        moods: ["movida", "glamour", "wild", "design"],
        tagline: {
            it: "La città del peccato nel deserto",
            en: "Sin City in the desert",
            es: "La ciudad del pecado en el desierto",
            fr: "La ville du péché dans le désert",
            de: "Die Sündenstadt in der Wüste",
            zh: "沙漠中的罪恶之城",
            hi: "रेगिस्तान में पाप का शहर",
            ar: "مدينة الخطيئة في الصحراء",
            pt: "A cidade do pecado no deserto",
            ru: "Город греха в пустыне"
        }
    },
    {
        name: "Roma",
        country: "Italia",
        image: "https://via.placeholder.com/800x600/CD853F/FFFFFF?text=Roma",
        type: "city",
        distance: "comfort",
        moods: ["culture", "romantic", "gourmet", "glamour"],
        tagline: {
            it: "L'eternità a portata di mano",
            en: "Eternity at your fingertips",
            es: "La eternidad al alcance de la mano",
            fr: "L'éternité à portée de main",
            de: "Die Ewigkeit zum Greifen nah",
            zh: "触手可及的永恒",
            hi: "आपकी उंगलियों पर अनंत काल",
            ar: "الأبدية في متناول يدك",
            pt: "A eternidade ao alcance das mãos",
            ru: "Вечность на расстоянии вытянутой руки"
        }
    },
    {
        name: "Madrid",
        country: "Spagna",
        image: "https://via.placeholder.com/800x600/FF4500/FFFFFF?text=Madrid",
        type: "city",
        distance: "comfort",
        moods: ["movida", "culture", "gourmet", "design"],
        tagline: {
            it: "Tapas, flamenco e notti infinite",
            en: "Tapas, flamenco and endless nights",
            es: "Tapas, flamenco y noches infinitas",
            fr: "Tapas, flamenco et nuits sans fin",
            de: "Tapas, Flamenco und endlose Nächte",
            zh: "小吃、弗拉明戈与无尽之夜",
            hi: "तापस, फ्लेमेंको और अंतहीन रातें",
            ar: "التاباس والفلامنكو والليالي التي لا تنتهي",
            pt: "Tapas, flamenco e noites infinitas",
            ru: "Тапас, фламенко и бесконечные ночи"
        }
    },
    {
        name: "Amsterdam",
        country: "Olanda",
        image: "https://via.placeholder.com/800x600/FF8C00/000000?text=Amsterdam",
        type: "city",
        distance: "comfort",
        moods: ["culture", "movida", "design", "zen"],
        tagline: {
            it: "Canali, bici e libertà",
            en: "Canals, bikes and freedom",
            es: "Canales, bicicletas y libertad",
            fr: "Canaux, vélos et liberté",
            de: "Kanäle, Fahrräder und Freiheit",
            zh: "运河、自行车与自由",
            hi: "नहरें, बाइक और स्वतंत्रता",
            ar: "القنوات والدراجات والحرية",
            pt: "Canais, bicicletas e liberdade",
            ru: "Каналы, велосипеды и свобода"
        }
    },
    {
        name: "Vienna",
        country: "Austria",
        image: "https://via.placeholder.com/800x600/8B4513/FFFFFF?text=Vienna",
        type: "city",
        distance: "comfort",
        moods: ["culture", "romantic", "gourmet", "glamour"],
        tagline: {
            it: "Valzer, caffè e palazzi imperiali",
            en: "Waltzes, coffee and imperial palaces",
            es: "Valses, café y palacios imperiales",
            fr: "Valses, café et palais impériaux",
            de: "Walzer, Kaffee und Kaiserpaläste",
            zh: "华尔兹、咖啡与皇宫",
            hi: "वाल्ट्ज़, कॉफी और शाही महल",
            ar: "الفالس والقهوة والقصور الإمبراطورية",
            pt: "Valsas, café e palácios imperiais",
            ru: "Вальсы, кофе и императорские дворцы"
        }
    },
    {
        name: "Prague",
        country: "Repubblica Ceca",
        image: "https://via.placeholder.com/800x600/B22222/FFFFFF?text=Prague",
        type: "city",
        distance: "comfort",
        moods: ["culture", "romantic", "zen", "gourmet"],
        tagline: {
            it: "Fiaba boema sul fiume dorato",
            en: "Bohemian fairy tale on the golden river",
            es: "Cuento de hadas bohemio en el río dorado",
            fr: "Conte de fées bohème sur la rivière dorée",
            de: "Böhmisches Märchen am goldenen Fluss",
            zh: "金色河畔的波西米亚童话",
            hi: "सुनहरी नदी पर बोहेमियन परी कथा",
            ar: "حكاية خرافية بوهيمية على النهر الذهبي",
            pt: "Conto de fadas boêmio no rio dourado",
            ru: "Богемская сказка на золотой реке"
        }
    },
    {
        name: "Marrakech",
        country: "Marocco",
        image: "https://via.placeholder.com/800x600/D2691E/FFFFFF?text=Marrakech",
        type: "city",
        distance: "curious",
        moods: ["culture", "wild", "gourmet", "glamour"],
        tagline: {
            it: "Spezie, souk e magia berbera",
            en: "Spices, souks and Berber magic",
            es: "Especias, zocos y magia bereber",
            fr: "Épices, souks et magie berbère",
            de: "Gewürze, Souks und Berber-Magie",
            zh: "香料、市集与柏柏尔魔法",
            hi: "मसाले, बाज़ार और बर्बर जादू",
            ar: "التوابل والأسواق والسحر الأمازيغي",
            pt: "Especiarias, souks e magia berbere",
            ru: "Специи, базары и берберская магия"
        }
    },
    {
        name: "Cape Town",
        country: "Sudafrica",
        image: "https://via.placeholder.com/800x600/4682B4/FFFFFF?text=Cape+Town",
        type: "city",
        distance: "bloom",
        moods: ["wild", "culture", "gourmet", "zen"],
        tagline: {
            it: "Dove due oceani si incontrano",
            en: "Where two oceans meet",
            es: "Donde se encuentran dos océanos",
            fr: "Où deux océans se rencontrent",
            de: "Wo zwei Ozeane aufeinandertreffen",
            zh: "两洋交汇之地",
            hi: "जहाँ दो महासागर मिलते हैं",
            ar: "حيث يلتقي محيطان",
            pt: "Onde dois oceanos se encontram",
            ru: "Где встречаются два океана"
        }
    },
    {
        name: "Melbourne",
        country: "Australia",
        image: "https://via.placeholder.com/800x600/708090/FFFFFF?text=Melbourne",
        type: "city",
        distance: "bloom",
        moods: ["culture", "gourmet", "design", "movida"],
        tagline: {
            it: "Caffè, arte e multiculturalismo",
            en: "Coffee, art and multiculturalism",
            es: "Café, arte y multiculturalismo",
            fr: "Café, art et multiculturalisme",
            de: "Kaffee, Kunst und Multikulturalismus",
            zh: "咖啡、艺术与多元文化",
            hi: "कॉफी, कला और बहुसंस्कृतिवाद",
            ar: "القهوة والفن والتعددية الثقافية",
            pt: "Café, arte e multiculturalismo",
            ru: "Кофе, искусство и мультикультурализм"
        }
    },
    {
        name: "San Francisco",
        country: "USA",
        image: "https://via.placeholder.com/800x600/FF6347/FFFFFF?text=San+Francisco",
        type: "city",
        distance: "bloom",
        moods: ["design", "culture", "wild", "gourmet"],
        tagline: {
            it: "Innovazione tra nebbia e colline",
            en: "Innovation between fog and hills",
            es: "Innovación entre niebla y colinas",
            fr: "Innovation entre brouillard et collines",
            de: "Innovation zwischen Nebel und Hügeln",
            zh: "雾与山丘间的创新",
            hi: "कोहरे और पहाड़ियों के बीच नवाचार",
            ar: "الابتكار بين الضباب والتلال",
            pt: "Inovação entre neblina e colinas",
            ru: "Инновации между туманом и холмами"
        }
    },

    // ========== MONTAGNA (20 destinazioni) ==========
    {
        name: "Dolomiti",
        country: "Italia",
        image: "https://via.placeholder.com/800x600/8FBC8F/000000?text=Dolomiti",
        type: "mountain",
        distance: "comfort",
        moods: ["zen", "wild", "gourmet", "romantic"],
        tagline: {
            it: "Cattedrali di roccia rosa al tramonto",
            en: "Pink rock cathedrals at sunset",
            es: "Catedrales de roca rosa al atardecer",
            fr: "Cathédrales de roche rose au coucher du soleil",
            de: "Rosa Felskathedralen bei Sonnenuntergang",
            zh: "日落时的粉红岩石大教堂",
            hi: "सूर्यास्त में गुलाबी चट्टान के गिरजाघर",
            ar: "كاتدرائيات الصخور الوردية عند الغروب",
            pt: "Catedrais de rocha rosa ao pôr do sol",
            ru: "Розовые скальные соборы на закате"
        }
    },
    {
        name: "Zermatt",
        country: "Svizzera",
        image: "https://via.placeholder.com/800x600/87CEEB/000000?text=Zermatt",
        type: "mountain",
        distance: "curious",
        moods: ["zen", "glamour", "wild", "gourmet"],
        tagline: {
            it: "Il Cervino e cime innevate da sogno",
            en: "The Matterhorn and dreamy snowy peaks",
            es: "El Matterhorn y picos nevados de ensueño",
            fr: "Le Cervin et sommets enneigés de rêve",
            de: "Das Matterhorn und traumhafte Schneegipfel",
            zh: "马特洪峰与梦幻雪峰",
            hi: "मैटरहॉर्न और सपनों की बर्फीली चोटियाँ",
            ar: "ماترهورن وقمم ثلجية حالمة",
            pt: "O Matterhorn e picos nevados de sonho",
            ru: "Маттерхорн и сказочные снежные вершины"
        }
    },
    {
        name: "Patagonia",
        country: "Argentina/Cile",
        image: "https://via.placeholder.com/800x600/4682B4/FFFFFF?text=Patagonia",
        type: "mountain",
        distance: "bloom",
        moods: ["wild", "zen", "culture"],
        tagline: {
            it: "Ghiacciai eterni e natura incontaminata",
            en: "Eternal glaciers and pristine nature",
            es: "Glaciares eternos y naturaleza prístina",
            fr: "Glaciers éternels et nature intacte",
            de: "Ewige Gletscher und unberührte Natur",
            zh: "永恒冰川与原始自然",
            hi: "शाश्वत ग्लेशियर और प्राचीन प्रकृति",
            ar: "الأنهار الجليدية الأبدية والطبيعة البكر",
            pt: "Glaciares eternos e natureza intocada",
            ru: "Вечные ледники и первозданная природа"
        }
    },
    {
        name: "Alpi Francesi",
        country: "Francia",
        image: "https://via.placeholder.com/800x600/F0F8FF/000000?text=Alpi+Francesi",
        type: "mountain",
        distance: "curious",
        moods: ["glamour", "wild", "gourmet", "movida"],
        tagline: {
            it: "Neve, champagne e alta quota",
            en: "Snow, champagne and high altitude",
            es: "Nieve, champán y gran altitud",
            fr: "Neige, champagne et haute altitude",
            de: "Schnee, Champagner und Höhenlage",
            zh: "雪、香槟与高海拔",
            hi: "बर्फ, शैंपेन और ऊंचाई",
            ar: "الثلج والشمبانيا والارتفاع الشاهق",
            pt: "Neve, champanhe e altitude elevada",
            ru: "Снег, шампанское и высокогорье"
        }
    },
    {
        name: "Himalaya",
        country: "Nepal",
        image: "https://via.placeholder.com/800x600/B0E0E6/000000?text=Himalaya",
        type: "mountain",
        distance: "bloom",
        moods: ["zen", "wild", "culture"],
        tagline: {
            it: "Il tetto del mondo e spiritualità",
            en: "The roof of the world and spirituality",
            es: "El techo del mundo y espiritualidad",
            fr: "Le toit du monde et spiritualité",
            de: "Das Dach der Welt und Spiritualität",
            zh: "世界屋脊与灵性",
            hi: "दुनिया की छत और आध्यात्मिकता",
            ar: "سقف العالم والروحانية",
            pt: "O teto do mundo e espiritualidade",
            ru: "Крыша мира и духовность"
        }
    },
    {
        name: "Aspen",
        country: "USA",
        image: "https://via.placeholder.com/800x600/FFFAFA/000000?text=Aspen",
        type: "mountain",
        distance: "bloom",
        moods: ["glamour", "wild", "gourmet", "movida"],
        tagline: {
            it: "Glamour e polvere fresca del Colorado",
            en: "Glamour and fresh powder in Colorado",
            es: "Glamour y nieve fresca en Colorado",
            fr: "Glamour et poudreuse fraîche du Colorado",
            de: "Glamour und frischer Pulverschnee in Colorado",
            zh: "科罗拉多的魅力与新雪",
            hi: "कोलोराडो में ग्लैमर और ताज़ा बर्फ",
            ar: "السحر والثلج الطازج في كولورادو",
            pt: "Glamour e neve fresca no Colorado",
            ru: "Гламур и свежий снег в Колорадо"
        }
    },
    {
        name: "Chamonix",
        country: "Francia",
        image: "https://via.placeholder.com/800x600/E0FFFF/000000?text=Chamonix",
        type: "mountain",
        distance: "curious",
        moods: ["wild", "zen", "gourmet", "culture"],
        tagline: {
            it: "La culla dell'alpinismo mondiale",
            en: "The cradle of world mountaineering",
            es: "La cuna del alpinismo mundial",
            fr: "Le berceau de l'alpinisme mondial",
            de: "Die Wiege des Weltbergsteigens",
            zh: "世界登山运动的摇篮",
            hi: "विश्व पर्वतारोहण का पालना",
            ar: "مهد تسلق الجبال العالمي",
            pt: "O berço do alpinismo mundial",
            ru: "Колыбель мирового альпинизма"
        }
    },
    {
        name: "Interlaken",
        country: "Svizzera",
        image: "https://via.placeholder.com/800x600/00BFFF/FFFFFF?text=Interlaken",
        type: "mountain",
        distance: "curious",
        moods: ["wild", "zen", "romantic", "glamour"],
        tagline: {
            it: "Paradiso tra due laghi alpini",
            en: "Paradise between two Alpine lakes",
            es: "Paraíso entre dos lagos alpinos",
            fr: "Paradis entre deux lacs alpins",
            de: "Paradies zwischen zwei Alpenseen",
            zh: "两个高山湖泊间的天堂",
            hi: "दो अल्पाइन झीलों के बीच स्वर्ग",
            ar: "الجنة بين بحيرتين جبليتين",
            pt: "Paraíso entre dois lagos alpinos",
            ru: "Рай между двумя альпийскими озерами"
        }
    },
    {
        name: "Queenstown",
        country: "Nuova Zelanda",
        image: "https://via.placeholder.com/800x600/1E90FF/FFFFFF?text=Queenstown",
        type: "mountain",
        distance: "bloom",
        moods: ["wild", "zen", "glamour", "gourmet"],
        tagline: {
            it: "Capitale mondiale dell'avventura",
            en: "World capital of adventure",
            es: "Capital mundial de la aventura",
            fr: "Capitale mondiale de l'aventure",
            de: "Welthauptstadt des Abenteuers",
            zh: "世界冒险之都",
            hi: "साहसिक की विश्व राजधानी",
            ar: "عاصمة المغامرة العالمية",
            pt: "Capital mundial da aventura",
            ru: "Мировая столица приключений"
        }
    },
    {
        name: "Banff",
        country: "Canada",
        image: "https://via.placeholder.com/800x600/00CED1/FFFFFF?text=Banff",
        type: "mountain",
        distance: "bloom",
        moods: ["wild", "zen", "romantic", "culture"],
        tagline: {
            it: "Laghi turchesi e orsi grizzly",
            en: "Turquoise lakes and grizzly bears",
            es: "Lagos turquesas y osos grizzly",
            fr: "Lacs turquoise et grizzlis",
            de: "Türkisfarbene Seen und Grizzlybären",
            zh: "碧绿湖泊与灰熊",
            hi: "फ़िरोज़ा झीलें और ग्रिज़ली भालू",
            ar: "البحيرات الفيروزية والدببة الرمادية",
            pt: "Lagos turquesa e ursos grizzly",
            ru: "Бирюзовые озера и медведи гризли"
        }
    },
    {
        name: "St. Moritz",
        country: "Svizzera",
        image: "https://via.placeholder.com/800x600/F5F5DC/000000?text=St+Moritz",
        type: "mountain",
        distance: "curious",
        moods: ["glamour", "zen", "gourmet", "design"],
        tagline: {
            it: "Jet set e sole alpino garantito",
            en: "Jet set and guaranteed Alpine sun",
            es: "Jet set y sol alpino garantizado",
            fr: "Jet-set et soleil alpin garanti",
            de: "Jetset und garantierte Alpensonne",
            zh: "名流聚集地与阿尔卑斯阳光",
            hi: "जेट सेट और गारंटीड अल्पाइन सूरज",
            ar: "النخبة والشمس الألبية المضمونة",
            pt: "Jet set e sol alpino garantido",
            ru: "Джет-сет и гарантированное альпийское солнце"
        }
    },
    {
        name: "Innsbruck",
        country: "Austria",
        image: "https://via.placeholder.com/800x600/FFE4E1/000000?text=Innsbruck",
        type: "mountain",
        distance: "comfort",
        moods: ["culture", "zen", "gourmet", "romantic"],
        tagline: {
            it: "Città imperiale abbracciata dalle Alpi",
            en: "Imperial city embraced by the Alps",
            es: "Ciudad imperial abrazada por los Alpes",
            fr: "Ville impériale embrassée par les Alpes",
            de: "Kaiserstadt umgeben von den Alpen",
            zh: "被阿尔卑斯山环抱的帝国城市",
            hi: "आल्प्स से घिरा शाही शहर",
            ar: "مدينة إمبراطورية تحتضنها جبال الألب",
            pt: "Cidade imperial abraçada pelos Alpes",
            ru: "Императорский город в объятиях Альп"
        }
    },
    {
        name: "Vail",
        country: "USA",
        image: "https://via.placeholder.com/800x600/FAFAD2/000000?text=Vail",
        type: "mountain",
        distance: "bloom",
        moods: ["glamour", "wild", "gourmet", "movida"],
        tagline: {
            it: "Villaggio alpino nel cuore del Colorado",
            en: "Alpine village in the heart of Colorado",
            es: "Pueblo alpino en el corazón de Colorado",
            fr: "Village alpin au cœur du Colorado",
            de: "Alpendorf im Herzen Colorados",
            zh: "科罗拉多心脏地带的高山村庄",
            hi: "कोलोराडो के दिल में अल्पाइन गांव",
            ar: "قرية جبلية في قلب كولورادو",
            pt: "Vila alpina no coração do Colorado",
            ru: "Альпийская деревня в сердце Колорадо"
        }
    },
    {
        name: "Whistler",
        country: "Canada",
        image: "https://via.placeholder.com/800x600/F0FFFF/000000?text=Whistler",
        type: "mountain",
        distance: "bloom",
        moods: ["wild", "movida", "gourmet", "zen"],
        tagline: {
            it: "Due montagne, infinite possibilità",
            en: "Two mountains, infinite possibilities",
            es: "Dos montañas, infinitas posibilidades",
            fr: "Deux montagnes, possibilités infinies",
            de: "Zwei Berge, unendliche Möglichkeiten",
            zh: "两座山，无限可能",
            hi: "दो पहाड़, अनंत संभावनाएं",
            ar: "جبلان، إمكانيات لا نهائية",
            pt: "Duas montanhas, infinitas possibilidades",
            ru: "Две горы, бесконечные возможности"
        }
    },
    {
        name: "Courmayeur",
        country: "Italia",
        image: "https://via.placeholder.com/800x600/FFFAF0/000000?text=Courmayeur",
        type: "mountain",
        distance: "comfort",
        moods: ["glamour", "zen", "gourmet", "romantic"],
        tagline: {
            it: "Ai piedi del Monte Bianco",
            en: "At the foot of Mont Blanc",
            es: "A los pies del Mont Blanc",
            fr: "Au pied du Mont-Blanc",
            de: "Am Fuße des Mont Blanc",
            zh: "勃朗峰脚下",
            hi: "मोंट ब्लांक के चरणों में",
            ar: "عند سفح مونت بلانك",
            pt: "Aos pés do Mont Blanc",
            ru: "У подножия Монблана"
        }
    },
    {
        name: "Verbier",
        country: "Svizzera",
        image: "https://via.placeholder.com/800x600/FFF8DC/000000?text=Verbier",
        type: "mountain",
        distance: "curious",
        moods: ["glamour", "wild", "movida", "gourmet"],
        tagline: {
            it: "Paradiso dello sci e del après-ski",
            en: "Paradise for skiing and après-ski",
            es: "Paraíso del esquí y el après-ski",
            fr: "Paradis du ski et de l'après-ski",
            de: "Paradies für Ski und Après-Ski",
            zh: "滑雪与滑雪后派对天堂",
            hi: "स्कीइंग और आफ्टर-स्की का स्वर्ग",
            ar: "جنة التزلج وما بعد التزلج",
            pt: "Paraíso do esqui e après-ski",
            ru: "Рай для лыж и апре-ски"
        }
    },
    {
        name: "Davos",
        country: "Svizzera",
        image: "https://via.placeholder.com/800x600/F5FFFA/000000?text=Davos",
        type: "mountain",
