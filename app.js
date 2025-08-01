// GLOOBER APP LOGIC
// Version: 1.1 - Con tracking Travelpayouts
// ============================================

// Stato globale dell'app
let currentLang = 'en';
let userPreferences = {
    location: 50,
    distance: 50,
    moodX: 50,
    moodY: 50
};

// Traduzioni complete per tutte le 7 lingue
const translations = {
    it: {
        tagline: "Muovi le tue vibrazioni di viaggio",
        habitatLabel: "Habitat",
        sea: "Mare",
        city: "Città", 
        mountain: "Montagna",
        distanceLabel: "Distanza",
        comfort: "Comfort",
        curious: "Curious",
        bloom: "Bloom",
        moodLabel: "Seleziona il tuo mood:",
        moods: {
            wild: "Wild",
            zen: "Zen",
            romantic: "Romantic",
            glamour: "Glamour",
            movida: "Movida",
            culture: "Culture",
            gourmet: "Gourmet",
            design: "Design"
        },
        gloobButton: "Gloob it!",
        gloobing: "Gloobing...",
        yourJourney: "Il tuo viaggio",
        bookButton: "Prenota",
        tryAgain: "Regloob"
    },
    en: {
        tagline: "Slide your travel vibes",
        habitatLabel: "Habitat", 
        sea: "Sea",
        city: "City",
        mountain: "Mountain",
        distanceLabel: "Distance",
        comfort: "Comfort",
        curious: "Curious",
        bloom: "Bloom",
        moodLabel: "Select your mood:",
        moods: {
            wild: "Wild",
            zen: "Zen",
            romantic: "Romantic",
            glamour: "Glamour",
            movida: "Movida",
            culture: "Culture",
            gourmet: "Gourmet",
            design: "Design"
        },
        gloobButton: "Gloob it!",
        gloobing: "Gloobing...",
        yourJourney: "Your journey",
        bookButton: "Book",
        tryAgain: "Regloob"
    },
    es: {
        tagline: "Desliza tus vibraciones de viaje",
        habitatLabel: "Hábitat",
        sea: "Mar",
        city: "Ciudad",
        mountain: "Montaña", 
        distanceLabel: "Distancia",
        comfort: "Confort",
        curious: "Curioso",
        bloom: "Florecer",
        moodLabel: "Selecciona tu estado de ánimo:",
        moods: {
            wild: "Salvaje",
            zen: "Zen",
            romantic: "Romántico",
            glamour: "Glamour",
            movida: "Movida",
            culture: "Cultura",
            gourmet: "Gourmet",
            design: "Diseño"
        },
        gloobButton: "¡Gloob it!",
        gloobing: "Gloobing...",
        yourJourney: "Tu viaje",
        bookButton: "Reservar",
        tryAgain: "Regloob"
    },
    fr: {
        tagline: "Faites glisser vos vibrations de voyage",
        habitatLabel: "Habitat",
        sea: "Mer",
        city: "Ville",
        mountain: "Montagne",
        distanceLabel: "Distance", 
        comfort: "Confort",
        curious: "Curieux",
        bloom: "Épanouir",
        moodLabel: "Sélectionnez votre humeur:",
        moods: {
            wild: "Sauvage",
            zen: "Zen",
            romantic: "Romantique",
            glamour: "Glamour",
            movida: "Movida",
            culture: "Culture",
            gourmet: "Gourmet",
            design: "Design"
        },
        gloobButton: "Gloob it!",
        gloobing: "Gloobing...",
        yourJourney: "Votre voyage",
        bookButton: "Réserver",
        tryAgain: "Regloob"
    },
    ar: {
        tagline: "حرك ذبذبات سفرك",
        habitatLabel: "الموطن",
        sea: "بحر",
        city: "مدينة",
        mountain: "جبل",
        distanceLabel: "المسافة",
        comfort: "راحة",
        curious: "فضولي",
        bloom: "ازدهار",
        moodLabel: "اختر مزاجك:",
        moods: {
            wild: "بري",
            zen: "زن",
            romantic: "رومانسي",
            glamour: "سحر",
            movida: "حياة ليلية",
            culture: "ثقافة",
            gourmet: "ذواقة",
            design: "تصميم"
        },
        gloobButton: "!Gloob it",
        gloobing: "...Gloobing",
        yourJourney: "رحلتك",
        bookButton: "احجز",
        tryAgain: "Regloob"
    },
    zh: {
        tagline: "滑动你的旅行氛围",
        habitatLabel: "栖息地",
        sea: "海",
        city: "城市",
        mountain: "山",
        distanceLabel: "距离",
        comfort: "舒适",
        curious: "好奇",
        bloom: "绽放",
        moodLabel: "选择你的心情:",
        moods: {
            wild: "狂野",
            zen: "禅",
            romantic: "浪漫",
            glamour: "魅力",
            movida: "夜生活",
            culture: "文化",
            gourmet: "美食",
            design: "设计"
        },
        gloobButton: "Gloob it!",
        gloobing: "Gloobing...",
        yourJourney: "你的旅程",
        bookButton: "预订",
        tryAgain: "Regloob"
    },
    hi: {
        tagline: "अपनी यात्रा की वाइब्स स्लाइड करें",
        habitatLabel: "निवास",
        sea: "समुद्र",
        city: "शहर",
        mountain: "पहाड़",
        distanceLabel: "दूरी",
        comfort: "आराम",
        curious: "जिज्ञासु",
        bloom: "खिलना",
        moodLabel: "अपना मूड चुनें:",
        moods: {
            wild: "जंगली",
            zen: "ज़ेन",
            romantic: "रोमांटिक",
            glamour: "ग्लैमर",
            movida: "नाइटलाइफ़",
            culture: "संस्कृति",
            gourmet: "पेटू",
            design: "डिज़ाइन"
        },
        gloobButton: "Gloob it!",
        gloobing: "Gloobing...",
        yourJourney: "आपकी यात्रा",
        bookButton: "बुक करें",
        tryAgain: "Regloob"
    }
};

// URL Trip.com per ogni destinazione
const TRIPCOM_URLS = {
    // MARE
    "Faroe Islands": "https://www.trip.com/hotels/list?city=8115",
    "Lofoten": "https://www.trip.com/hotels/list?city=51694",
    "Amalfi Coast": "https://www.trip.com/hotels/list?city=26495",
    "Comporta": "https://www.trip.com/hotels/list?city=58655",
    "Gili Islands": "https://www.trip.com/hotels/list?city=26337",
    
    // CITTÀ
    "Ljubljana": "https://www.trip.com/hotels/list?city=502",
    "Porto": "https://www.trip.com/hotels/list?city=372",
    "Bruges": "https://www.trip.com/hotels/list?city=138",
    "Salzburg": "https://www.trip.com/hotels/list?city=461",
    "Ubud": "https://www.trip.com/hotels/list?city=3241",
    
    // MONTAGNA
    "Madeira": "https://www.trip.com/hotels/list?city=1767",
    "Slovenia Alps": "https://www.trip.com/hotels/list?city=56712",
    "Val d'Orcia": "https://www.trip.com/hotels/list?city=58511",
    "Hallstatt": "https://www.trip.com/hotels/list?city=3533",
    "Sinaia": "https://www.trip.com/hotels/list?city=3082"
};

// Drag & Drop per Location
let isDraggingLocation = false;
let isDraggingDistance = false;

function startLocationDrag(e) {
    isDraggingLocation = true;
    document.getElementById('location-labels').classList.add('active');
    updateLocationPosition(e);
}

function stopLocationDrag() {
    isDraggingLocation = false;
    // Etichette rimangono visibili
}

function updateLocationPosition(e) {
    if (!isDraggingLocation) return;
    
    const slider = document.getElementById('location-slider');
    const rect = slider.getBoundingClientRect();
    const x = e.clientX || e.touches[0].clientX;
    const percentage = Math.max(0, Math.min(100, ((x - rect.left) / rect.width) * 100));
    
    userPreferences.location = percentage;
    document.getElementById('location-fill').style.width = percentage + '%';
    document.getElementById('location-handle').style.left = percentage + '%';
}

// Drag & Drop per Distance  
function startDistanceDrag(e) {
    isDraggingDistance = true;
    document.getElementById('distance-labels').classList.add('active');
    updateDistancePosition(e);
}

function stopDistanceDrag() {
    isDraggingDistance = false;
    // Etichette rimangono visibili
}

function updateDistancePosition(e) {
    if (!isDraggingDistance) return;
    
    const slider = document.getElementById('distance-slider');
    const rect = slider.getBoundingClientRect();
    const x = e.clientX || e.touches[0].clientX;
    const percentage = Math.max(0, Math.min(100, ((x - rect.left) / rect.width) * 100));
    
    userPreferences.distance = percentage;
    document.getElementById('distance-fill').style.width = percentage + '%';
    document.getElementById('distance-handle').style.left = percentage + '%';
}

// Selezione Mood
function selectMood(mood) {
    // Rimuovi selezione precedente
    document.querySelectorAll('.mood-item').forEach(item => {
        item.classList.remove('selected');
    });
    
    // Aggiungi selezione
    const selectedItem = document.querySelector(`.mood-item[data-mood="${mood}"]`);
    if (selectedItem) {
        selectedItem.classList.add('selected');
    }
    
    // Salva mood nelle preferenze
    const moodPositions = {
        'wild': { x: 0, y: 100 },
        'zen': { x: 100, y: 100 },
        'romantic': { x: 0, y: 0 },
        'glamour': { x: 100, y: 0 },
        'movida': { x: 25, y: 50 },
        'culture': { x: 75, y: 50 },
        'gourmet': { x: 50, y: 25 },
        'design': { x: 50, y: 75 }
    };
    
    if (moodPositions[mood]) {
        userPreferences.moodX = moodPositions[mood].x;
        userPreferences.moodY = moodPositions[mood].y;
    }
}

// Algoritmo di matching
function findBestDestination() {
    const locationValue = userPreferences.location;
    const distanceValue = userPreferences.distance;
    const moodX = userPreferences.moodX;
    const moodY = userPreferences.moodY;
    
    let bestMatch = null;
    let bestScore = -1;
    
    DESTINATIONS_DB.forEach(destination => {
        let score = 0;
        
        // Location match (peso 35%)
        let locationScore = 0;
        if (locationValue <= 33 && destination.type === 'sea') locationScore = 100;
        else if (locationValue >= 67 && destination.type === 'mountain') locationScore = 100;
        else if (locationValue > 33 && locationValue < 67 && destination.type === 'city') locationScore = 100;
        else if (locationValue <= 33 && destination.type === 'city') locationScore = 50;
        else if (locationValue >= 67 && destination.type === 'city') locationScore = 50;
        
        score += locationScore * 0.35;
        
        // Distance match (peso 25%)
        let distanceScore = 0;
        if (distanceValue <= 33 && destination.distance === 'comfort') distanceScore = 100;
        else if (distanceValue >= 67 && destination.distance === 'bloom') distanceScore = 100;
        else if (distanceValue > 33 && distanceValue < 67 && destination.distance === 'curious') distanceScore = 100;
        
        score += distanceScore * 0.25;
        
        // Mood match (peso 40%)
        const selectedMood = document.querySelector('.mood-item.selected');
        if (selectedMood) {
            const mood = selectedMood.dataset.mood;
            if (destination.moods && destination.moods.includes(mood)) {
                score += 40;
            }
        }
        
        if (score > bestScore) {
            bestScore = score;
            bestMatch = destination;
        }
    });
    
    return bestMatch || DESTINATIONS_DB[0];
}

// Funzione principale Gloob
function gloobIt() {
    // Nascondi lingue durante il Gloobing
    const langSelector = document.querySelector('.lang-selector');
    if (langSelector) {
        langSelector.style.display = 'none';
    }
    
    // Mostra loading
    document.getElementById('slider-step').classList.add('hidden');
    document.getElementById('loading-step').classList.remove('hidden');
    
    // Simula elaborazione
    setTimeout(() => {
        const destination = findBestDestination();
        showResult(destination);
    }, 3000);
}

// Mostra risultato
function showResult(destination) {
    document.getElementById('loading-step').classList.add('hidden');
    document.getElementById('result-step').classList.remove('hidden');
    
    // Rimuovi il prefisso "images/" dal percorso per la visualizzazione
    const imagePath = destination.image.replace('images/', '');
    
    document.getElementById('destination-name').textContent = destination.name;
    document.getElementById('destination-country').textContent = destination.country;
    document.getElementById('destination-tagline').textContent = destination.tagline[currentLang] || destination.tagline['en'];
    document.getElementById('destination-image').src = destination.image;
    
    // Genera narrativa (per ora placeholder)
    const narrative = generateNarrative(destination);
    document.getElementById('destination-narrative').textContent = narrative;
}

// Genera narrativa
function generateNarrative(destination) {
    const narratives = {
        it: `${destination.name} ti sta aspettando. Un luogo dove le tue vibrazioni di viaggio trovano la loro perfetta risonanza.`,
        en: `${destination.name} is waiting for you. A place where your travel vibes find their perfect resonance.`,
        es: `${destination.name} te está esperando. Un lugar donde tus vibraciones de viaje encuentran su resonancia perfecta.`,
        fr: `${destination.name} vous attend. Un lieu où vos vibrations de voyage trouvent leur résonance parfaite.`,
        ar: `${destination.name} في انتظارك. مكان حيث تجد ذبذبات سفرك صداها المثالي.`,
        zh: `${destination.name} 在等着你。一个你的旅行氛围找到完美共鸣的地方。`,
        hi: `${destination.name} आपका इंतज़ार कर रहा है। एक जगह जहाँ आपकी यात्रा की वाइब्स अपनी सही गूंज पाती हैं।`
    };
    
    return narratives[currentLang] || narratives['en'];
}

// Prenota viaggio - CON IL TUO CODICE AFFILIATE TRAVELPAYOUTS
function bookTrip() {
    const destination = document.getElementById('destination-name').textContent;
    const tripUrl = TRIPCOM_URLS[destination];
    
    if (tripUrl) {
        // TRACKING TRAVELPAYOUTS - Il tuo codice affiliate: 430916
        const fullUrl = tripUrl + "&locale=en-US&curr=EUR&shmarker=430916";
        window.open(fullUrl, '_blank');
    }
}

// Reset app
function resetApp() {
    // Mostra lingue di nuovo
    const langSelector = document.querySelector('.lang-selector');
    if (langSelector) {
        langSelector.style.display = '';
    }
    
    document.getElementById('result-step').classList.add('hidden');
    document.getElementById('slider-step').classList.remove('hidden');
    
    // Reset sliders
    userPreferences = {
        location: 50,
        distance: 50,
        moodX: 50,
        moodY: 50
    };
    
    document.getElementById('location-fill').style.width = '50%';
    document.getElementById('location-handle').style.left = '50%';
    document.getElementById('distance-fill').style.width = '50%';
    document.getElementById('distance-handle').style.left = '50%';
    
    // Reset mood selection
    document.querySelectorAll('.mood-item').forEach(item => {
        item.classList.remove('selected');
    });
}

// Cambia lingua
function changeLang(lang) {
    currentLang = lang;
    updateTranslations();
}

// Aggiorna traduzioni
function updateTranslations() {
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        
        if (key.startsWith('mood-')) {
            const moodKey = key.replace('mood-', '');
            element.textContent = translations[currentLang].moods[moodKey];
        } else {
            element.textContent = translations[currentLang][key];
        }
    });
    
    // Aggiorna tagline se siamo nella pagina risultati
    const taglineElement = document.getElementById('destination-tagline');
    if (taglineElement && !document.getElementById('result-step').classList.contains('hidden')) {
        const destinationName = document.getElementById('destination-name').textContent;
        const destination = DESTINATIONS_DB.find(d => d.name === destinationName);
        if (destination) {
            taglineElement.textContent = destination.tagline[currentLang] || destination.tagline['en'];
        }
    }
}

// Event Listeners
document.addEventListener('DOMContentLoaded', function() {
    // Location slider - Mouse events
    const locationSlider = document.getElementById('location-slider');
    locationSlider.addEventListener('mousedown', startLocationDrag);
    
    // Distance slider - Mouse events
    const distanceSlider = document.getElementById('distance-slider');
    distanceSlider.addEventListener('mousedown', startDistanceDrag);
    
    // Global mouse events
    document.addEventListener('mousemove', function(e) {
        updateLocationPosition(e);
        updateDistancePosition(e);
    });
    
    document.addEventListener('mouseup', function() {
        stopLocationDrag();
        stopDistanceDrag();
    });
    
    // Touch events per mobile
    locationSlider.addEventListener('touchstart', startLocationDrag);
    locationSlider.addEventListener('touchmove', updateLocationPosition);
    locationSlider.addEventListener('touchend', stopLocationDrag);
    
    distanceSlider.addEventListener('touchstart', startDistanceDrag);
    distanceSlider.addEventListener('touchmove', updateDistancePosition);
    distanceSlider.addEventListener('touchend', stopDistanceDrag);
    
    // Fix per rimuovere active class
    const upHandler = function() {
        isDraggingLocation = false;
        document.getElementById('location-labels').classList.remove('active');
    };
    
    const distanceUpHandler = function() {
        isDraggingDistance = false;
        document.getElementById('distance-labels').classList.remove('active');
    };
    
    // Sovrascrivi handlers
    window.upHandler = upHandler;
    window.distanceUpHandler = distanceUpHandler;
});
