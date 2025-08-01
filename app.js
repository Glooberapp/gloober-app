// GLOOBER APP LOGIC
// Version: 1.0 - App originale con il tuo database
// ============================================

// Stato globale dell'app
let currentLang = 'en';
let userPreferences = {
    location: 50,
    distance: 50,
    moodX: 50,
    moodY: 50
};

// Stato del drag
let isDraggingLocation = false;
let isDraggingDistance = false;
let isDraggingMood = false;

// TRADUZIONI UI - CON TUTTE LE 7 LINGUE
const translations = {
    it: {
        tagline: "Muovi le tue vibrazioni di viaggio",
        habitatLabel: "HABITAT",
        sea: "MARE",
        city: "CITTÀ", 
        mountain: "MONTAGNA",
        rangeLabel: "RANGE",
        comfort: "COMFORT",
        curious: "CURIOUS",
        bloom: "BLOOM",
        vibesLabel: "VIBES",
        movida: "MOVIDA",
        zen: "ZEN",
        gourmet: "GOURMET",
        wild: "WILD",
        design: "DESIGN",
        glamour: "GLAMOUR",
        culture: "CULTURE",
        romantic: "رومانسي",
        gloobIt: "!Gloob it",
        gloobing: "...Gloobing",
        yourJourney: "رحلتك",
        bookNow: "احجز الآن",
        tryAgain: "Regloob"
    },
    zh: {
        tagline: "滑动你的旅行氛围",
        habitatLabel: "栖息地",
        sea: "海",
        city: "城市",
        mountain: "山",
        rangeLabel: "范围",
        comfort: "舒适",
        curious: "好奇",
        bloom: "绽放",
        vibesLabel: "氛围",
        movida: "夜生活",
        zen: "禅",
        gourmet: "美食",
        wild: "野生",
        design: "设计",
        glamour: "魅力",
        culture: "文化",
        romantic: "浪漫",
        gloobIt: "Gloob it!",
        gloobing: "Gloobing...",
        yourJourney: "您的旅程",
        bookNow: "立即预订",
        tryAgain: "Regloob"
    },
    hi: {
        tagline: "अपनी यात्रा की वाइब्स स्लाइड करें",
        habitatLabel: "निवास",
        sea: "समुद्र",
        city: "शहर",
        mountain: "पहाड़",
        rangeLabel: "रेंज",
        comfort: "आराम",
        curious: "जिज्ञासु",
        bloom: "खिलना",
        vibesLabel: "वाइब्स",
        movida: "नाइटलाइफ़",
        zen: "ज़ेन",
        gourmet: "पेटू",
        wild: "जंगली",
        design: "डिज़ाइन",
        glamour: "ग्लैमर",
        culture: "संस्कृति",
        romantic: "रोमांटिक",
        gloobIt: "Gloob it!",
        gloobing: "Gloobing...",
        yourJourney: "आपकी यात्रा",
        bookNow: "अभी बुक करें",
        tryAgain: "Regloob"
    }
};

// FUNZIONI SLIDER LOCATION
function startLocationDrag(e) {
    isDraggingLocation = true;
    dragLocation(e);
}

function dragLocation(e) {
    if (!isDraggingLocation) return;
    e.preventDefault();
    
    const slider = e.currentTarget;
    const rect = slider.getBoundingClientRect();
    const x = (e.type.includes('touch') ? e.touches[0].clientX : e.clientX) - rect.left;
    
    const percentage = Math.max(5, Math.min(95, (x / rect.width) * 100));
    
    userPreferences.location = percentage;
    document.getElementById('location-dot').style.left = percentage + '%';
    
    document.getElementById('location-labels').classList.add('active');
}

function stopLocationDrag() {
    isDraggingLocation = false;
    // Etichette rimangono visibili come richiesto
}

// FUNZIONI SLIDER DISTANCE
function startDistanceDrag(e) {
    isDraggingDistance = true;
    dragDistance(e);
}

function dragDistance(e) {
    if (!isDraggingDistance) return;
    e.preventDefault();
    
    const slider = e.currentTarget;
    const rect = slider.getBoundingClientRect();
    const x = (e.type.includes('touch') ? e.touches[0].clientX : e.clientX) - rect.left;
    
    const percentage = Math.max(5, Math.min(95, (x / rect.width) * 100));
    
    userPreferences.distance = percentage;
    document.getElementById('distance-dot').style.left = percentage + '%';
    
    document.getElementById('distance-labels').classList.add('active');
}

function stopDistanceDrag() {
    isDraggingDistance = false;
    // Etichette rimangono visibili come richiesto
}

// FUNZIONI MOOD SELECTOR
function startDragging(e) {
    isDraggingMood = true;
    dragGlobe(e);
}

function dragGlobe(e) {
    if (!isDraggingMood) return;
    e.preventDefault();
    
    const selector = document.getElementById('mood-selector');
    const rect = selector.getBoundingClientRect();
    const x = (e.type.includes('touch') ? e.touches[0].clientX : e.clientX) - rect.left;
    const y = (e.type.includes('touch') ? e.touches[0].clientY : e.clientY) - rect.top;
    
    const percentX = Math.max(0, Math.min(100, (x / rect.width) * 100));
    const percentY = Math.max(0, Math.min(100, (y / rect.height) * 100));
    
    userPreferences.moodX = percentX;
    userPreferences.moodY = percentY;
    
    const globe = document.getElementById('mood-globe');
    globe.style.left = percentX + '%';
    globe.style.top = percentY + '%';
    
    updateMoodLabels(percentX, percentY);
}

function stopDragging() {
    isDraggingMood = false;
    setTimeout(() => {
        document.querySelectorAll('.mood-label').forEach(label => {
            label.classList.remove('visible');
        });
    }, 1000);
}

function updateMoodLabels(x, y) {
    const labels = document.querySelectorAll('.mood-label');
    labels.forEach(label => {
        let labelX = 50;
        let labelY = 50;
        
        if (label.classList.contains('left')) labelX = 0;
        if (label.classList.contains('right')) labelX = 100;
        if (label.classList.contains('top')) labelY = 0;
        if (label.classList.contains('bottom')) labelY = 100;
        
        if (label.classList.contains('top-left')) {
            labelX = 25;
            labelY = 25;
        }
        if (label.classList.contains('top-right')) {
            labelX = 75;
            labelY = 25;
        }
        if (label.classList.contains('bottom-left')) {
            labelX = 25;
            labelY = 75;
        }
        if (label.classList.contains('bottom-right')) {
            labelX = 75;
            labelY = 75;
        }
        
        const distance = Math.sqrt(Math.pow(x - labelX, 2) + Math.pow(y - labelY, 2));
        
        if (distance < 40) {
            label.classList.add('visible');
        } else {
            label.classList.remove('visible');
        }
    });
}

// FUNZIONE PRINCIPALE GLOOB
function gloobIt() {
    // Nascondi le lingue durante loading e risultati
    document.querySelector('.lang-selector').style.display = 'none';
    
    // Mostra loading
    document.getElementById('slider-step').classList.add('hidden');
    document.getElementById('loading-step').classList.remove('hidden');
    
    // Calcola destinazione dopo 2 secondi
    setTimeout(() => {
        const destination = calculateDestination();
        showResult(destination);
    }, 2000);
}

// ALGORITMO DI MATCHING CORRETTO PER IL NUOVO DATABASE
function calculateDestination() {
    // Verifica che il database sia caricato
    if (typeof DESTINATIONS_DB === 'undefined' || !DESTINATIONS_DB || DESTINATIONS_DB.length === 0) {
        console.error('❌ Database destinazioni non caricato!');
        return null;
    }
    
    // Normalizza i valori delle preferenze da 0-100 a 0-1
    const normalizedLocation = userPreferences.location / 100;
    const normalizedDistance = userPreferences.distance / 100;
    const normalizedMoodX = userPreferences.moodX / 100;
    const normalizedMoodY = userPreferences.moodY / 100;
    
    // Calcola il punteggio per ogni destinazione
    let bestScore = -1;
    let bestDestination = null;
    
    DESTINATIONS_DB.forEach(dest => {
        let score = 0;
        
        // Score basato sulla location (peso 40%)
        const locationDiff = Math.abs(normalizedLocation - dest.location);
        score += (1 - locationDiff) * 40;
        
        // Score basato sulla distanza (peso 30%)
        const distanceDiff = Math.abs(normalizedDistance - dest.distance_value);
        score += (1 - distanceDiff) * 30;
        
        // Score basato sul mood (peso 30%)
        const moodDistance = Math.sqrt(
            Math.pow(normalizedMoodX - dest.mood.x, 2) + 
            Math.pow(normalizedMoodY - dest.mood.y, 2)
        );
        score += (1 - moodDistance / Math.sqrt(2)) * 30;
        
        // Salva se è il migliore
        if (score > bestScore) {
            bestScore = score;
            bestDestination = dest;
        }
    });
    
    console.log('Destinazione selezionata:', bestDestination.name, 'con score:', bestScore);
    return bestDestination;
}

// Determina i mood dalla posizione nel quadrato
function getMoodsFromPosition(x, y) {
    const moods = [];
    
    const moodMap = {
        movida: { x: 50, y: 0 },
        zen: { x: 50, y: 100 },
        gourmet: { x: 0, y: 50 },
        wild: { x: 100, y: 50 },
        design: { x: 25, y: 25 },
        glamour: { x: 75, y: 25 },
        culture: { x: 25, y: 75 },
        romantic: { x: 75, y: 75 }
    };
    
    const distances = Object.entries(moodMap).map(([mood, pos]) => {
        const distance = Math.sqrt(Math.pow(x - pos.x, 2) + Math.pow(y - pos.y, 2));
        return { mood, distance };
    });
    
    distances.sort((a, b) => a.distance - b.distance);
    
    moods.push(distances[0].mood);
    if (distances[1].distance < 40) {
        moods.push(distances[1].mood);
    }
    
    return moods;
}

// MOSTRA RISULTATO - CORRETTA PER IL NUOVO DATABASE
function showResult(destination) {
    if (!destination) {
        console.error('Nessuna destinazione trovata!');
        location.reload();
        return;
    }
    
    // Nascondi loading e mostra risultato
    document.getElementById('loading-step').classList.add('hidden');
    document.getElementById('result-step').classList.remove('hidden');
    
    // Popola i dati base
    document.getElementById('destination-name').textContent = destination.name;
    document.getElementById('destination-country').textContent = destination.country;
    
    // Nascondi la tagline che non esiste nel nuovo database
    const taglineElement = document.getElementById('destination-tagline');
    if (taglineElement) {
        taglineElement.style.display = 'none';
    }
    
    // Imposta immagine
    const img = document.getElementById('destination-image');
    img.src = destination.image;
    img.alt = destination.name;
    
    // Usa la narrativa e citazione dal database per la lingua corrente
    const narrativeKey = `narrative_${currentLang}`;
    const quoteKey = `quote_${currentLang}`;
    
    // Se la lingua corrente non ha traduzione, usa inglese come fallback
    const narrative = destination[narrativeKey] || destination.narrative_en;
    const quote = destination[quoteKey] || destination.quote_en;
    
    document.getElementById('narrative-text').textContent = narrative;
    document.getElementById('travel-quote').textContent = quote;
    
    // Nascondi l'autore della citazione perché non c'è nel nuovo DB
    const authorElement = document.getElementById('quote-author');
    if (authorElement) {
        authorElement.parentElement.style.display = 'none';
    }
}

// GESTIONE PRENOTAZIONE CON IL NUOVO DATABASE
function bookTrip() {
    const destinationName = document.getElementById('destination-name').textContent;
    
    // Trova la destinazione nel database
    const destination = DESTINATIONS_DB.find(d => d.name === destinationName);
    
    if (destination && destination.tripUrl) {
        window.open(destination.tripUrl, '_blank');
    } else {
        // Fallback generico
        window.open(`https://www.trip.com/hotels/list?searchWord=${encodeURIComponent(destinationName)}`, '_blank');
    }
}

// GESTIONE CAMBIO LINGUA
function changeLanguage(lang) {
    currentLang = lang;
    
    // Aggiorna classi attive
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.lang === lang) {
            btn.classList.add('active');
        }
    });
    
    // Aggiorna testi
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.dataset.translate;
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
}

// INIZIALIZZAZIONE
document.addEventListener('DOMContentLoaded', () => {
    // Setup language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            changeLanguage(btn.dataset.lang);
        });
    });
    
    // Inizializza con inglese
    changeLanguage('en');
    
    // Debug - verifica che le funzioni siano disponibili
    console.log('App initialized!');
    console.log('Database loaded:', typeof DESTINATIONS_DB !== 'undefined' ? DESTINATIONS_DB.length + ' destinations' : 'ERROR');
});

// Rendi le funzioni globali per l'HTML
window.startLocationDrag = startLocationDrag;
window.dragLocation = dragLocation;
window.stopLocationDrag = stopLocationDrag;
window.startDistanceDrag = startDistanceDrag;
window.dragDistance = dragDistance;
window.stopDistanceDrag = stopDistanceDrag;
window.startDragging = startDragging;
window.dragGlobe = dragGlobe;
window.stopDragging = stopDragging;
window.gloobIt = gloobIt;
window.bookTrip = bookTrip;ROMANTIC",
        gloobIt: "Gloob it!",
        gloobing: "Gloobing...",
        yourJourney: "Il tuo viaggio",
        bookNow: "Prenota",
        tryAgain: "Regloob"
    },
    en: {
        tagline: "Slide your travel vibes",
        habitatLabel: "HABITAT",
        sea: "SEA",
        city: "CITY",
        mountain: "MOUNTAIN", 
        rangeLabel: "RANGE",
        comfort: "COMFORT",
        curious: "CURIOUS",
        bloom: "BLOOM",
        vibesLabel: "VIBES",
        movida: "NIGHTLIFE",
        zen: "ZEN",
        gourmet: "GOURMET",
        wild: "WILD",
        design: "DESIGN",
        glamour: "GLAMOUR",
        culture: "CULTURE",
        romantic: "ROMANTIC",
        gloobIt: "Gloob it!",
        gloobing: "Gloobing...",
        yourJourney: "Your journey",
        bookNow: "Book Now",
        tryAgain: "Regloob"
    },
    es: {
        tagline: "Desliza tus vibras de viaje",
        habitatLabel: "HÁBITAT",
        sea: "MAR",
        city: "CIUDAD",
        mountain: "MONTAÑA",
        rangeLabel: "RANGO",
        comfort: "CONFORT",
        curious: "CURIOSO",
        bloom: "FLORACIÓN",
        vibesLabel: "VIBRAS",
        movida: "MOVIDA",
        zen: "ZEN",
        gourmet: "GOURMET",
        wild: "SALVAJE",
        design: "DISEÑO",
        glamour: "GLAMOUR",
        culture: "CULTURA",
        romantic: "ROMÁNTICO",
        gloobIt: "¡Gloob it!",
        gloobing: "Gloobeando...",
        yourJourney: "Tu viaje",
        bookNow: "Reservar",
        tryAgain: "Regloob"
    },
    fr: {
        tagline: "Glissez vos vibrations de voyage",
        habitatLabel: "HABITAT",
        sea: "MER",
        city: "VILLE",
        mountain: "MONTAGNE",
        rangeLabel: "GAMME",
        comfort: "CONFORT",
        curious: "CURIEUX",
        bloom: "ÉPANOUISSEMENT",
        vibesLabel: "VIBRATIONS",
        movida: "VIE NOCTURNE",
        zen: "ZEN",
        gourmet: "GOURMET",
        wild: "SAUVAGE",
        design: "DESIGN",
        glamour: "GLAMOUR",
        culture: "CULTURE",
        romantic: "ROMANTIQUE",
        gloobIt: "Gloob it!",
        gloobing: "Gloobing...",
        yourJourney: "Votre voyage",
        bookNow: "Réserver",
        tryAgain: "Regloob"
    },
    ar: {
        tagline: "حرك ذبذبات سفرك",
        habitatLabel: "الموطن",
        sea: "بحر",
        city: "مدينة",
        mountain: "جبل",
        rangeLabel: "نطاق",
        comfort: "راحة",
        curious: "فضولي",
        bloom: "ازدهار",
        vibesLabel: "ذبذبات",
        movida: "حياة ليلية",
        zen: "زن",
        gourmet: "طعام فاخر",
        wild: "بري",
        design: "تصميم",
        glamour: "سحر",
        culture: "ثقافة",
        romantic: "
