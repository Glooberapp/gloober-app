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
        distance: "far",
        moods: ["relax", "romance"],
        translations: {
            it: "Maldive",
            en: "Maldives", 
            es: "Maldivas",
            fr: "Maldives",
            de: "Malediven"
        }
    },
    {
        name: "Santorini",
        country: "Grecia",
        image: "https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=800",
        type: "sea",
        distance: "medium",
        moods: ["relax", "romance", "culture"],
        translations: {
            it: "Santorini",
            en: "Santorini",
            es: "Santorini", 
            fr: "Santorin",
            de: "Santorin"
        }
    },
    {
        name: "Sardegna",
        country: "Italia",
        image: "https://images.unsplash.com/photo-1589742158508-65785cf4172e?w=800",
        type: "sea",
        distance: "near",
        moods: ["relax", "nightlife"],
        translations: {
            it: "Sardegna",
            en: "Sardinia",
            es: "Cerdeña",
            fr: "Sardaigne",
            de: "Sardinien"
        }
    },
    {
        name: "Bali",
        country: "Indonesia",
        image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800",
        type: "sea",
        distance: "far",
        moods: ["adventure", "culture", "relax"],
        translations: {
            it: "Bali",
            en: "Bali",
            es: "Bali",
            fr: "Bali",
            de: "Bali"
        }
    },
    {
        name: "Ibiza",
        country: "Spagna",
        image: "https://images.unsplash.com/photo-1563784804984-9e83c036bba4?w=800",
        type: "sea",
        distance: "medium",
        moods: ["nightlife", "relax"],
        translations: {
            it: "Ibiza",
            en: "Ibiza",
            es: "Ibiza",
            fr: "Ibiza",
            de: "Ibiza"
        }
    },
    
    // CITTÀ (City) Destinations
    {
        name: "Tokyo",
        country: "Giappone",
        image: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800",
        type: "city",
        distance: "far",
        moods: ["culture", "nightlife", "adventure"],
        translations: {
            it: "Tokyo",
            en: "Tokyo",
            es: "Tokio",
            fr: "Tokyo",
            de: "Tokio"
        }
    },
    {
        name: "New York",
        country: "USA",
        image: "https://images.unsplash.com/photo-1538970272646-f61fabb3a8a2?w=800",
        type: "city",
        distance: "far",
        moods: ["culture", "nightlife", "adventure"],
        translations: {
            it: "New York",
            en: "New York",
            es: "Nueva York",
            fr: "New York",
            de: "New York"
        }
    },
    {
        name: "Parigi",
        country: "Francia",
        image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800",
        type: "city",
        distance: "near",
        moods: ["romance", "culture", "nightlife"],
        translations: {
            it: "Parigi",
            en: "Paris",
            es: "París",
            fr: "Paris",
            de: "Paris"
        }
    },
    {
        name: "Dubai",
        country: "UAE",
        image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800",
        type: "city",
        distance: "medium",
        moods: ["luxury", "adventure", "nightlife"],
        translations: {
            it: "Dubai",
            en: "Dubai",
            es: "Dubái",
            fr: "Dubaï",
            de: "Dubai"
        }
    },
    {
        name: "Londra",
        country: "UK",
        image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800",
        type: "city",
        distance: "near",
        moods: ["culture", "nightlife"],
        translations: {
            it: "Londra",
            en: "London",
            es: "Londres",
            fr: "Londres",
            de: "London"
        }
    },
    
    // MISTO (Mixed) Destinations
    {
        name: "Barcellona",
        country: "Spagna",
        image: "https://images.unsplash.com/photo-1583422409516-2895a77efded?w=800",
        type: "mixed",
        distance: "near",
        moods: ["culture", "nightlife", "relax"],
        translations: {
            it: "Barcellona",
            en: "Barcelona",
            es: "Barcelona",
            fr: "Barcelone",
            de: "Barcelona"
        }
    },
    {
        name: "Rio de Janeiro",
        country: "Brasile",
        image: "https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=800",
        type: "mixed",
        distance: "far",
        moods: ["adventure", "nightlife", "culture"],
        translations: {
            it: "Rio de Janeiro",
            en: "Rio de Janeiro",
            es: "Río de Janeiro",
            fr: "Rio de Janeiro",
            de: "Rio de Janeiro"
        }
    },
    {
        name: "Sydney",
        country: "Australia",
        image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=800",
        type: "mixed",
        distance: "far",
        moods: ["adventure", "culture", "relax"],
        translations: {
            it: "Sydney",
            en: "Sydney",
            es: "Sídney",
            fr: "Sydney",
            de: "Sydney"
        }
    },
    {
        name: "Istanbul",
        country: "Turchia",
        image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=800",
        type: "mixed",
        distance: "medium",
        moods: ["culture", "adventure"],
        translations: {
            it: "Istanbul",
            en: "Istanbul",
            es: "Estambul",
            fr: "Istanbul",
            de: "Istanbul"
        }
    },
    {
        name: "Lisbona",
        country: "Portogallo",
        image: "https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=800",
        type: "mixed",
        distance: "medium",
        moods: ["culture", "relax", "nightlife"],
        translations: {
            it: "Lisbona",
            en: "Lisbon",
            es: "Lisboa",
            fr: "Lisbonne",
            de: "Lissabon"
        }
    }
];
