// GLOOBER DESTINATIONS DATABASE
// Version: 2.0 - Con foto Unsplash reali
// ============================================

const DESTINATIONS_DB = [
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
        image: "https://images.unsplash.com/photo
