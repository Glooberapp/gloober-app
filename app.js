// GLOOBER APP LOGIC
// Version: 3.0 - FINALE con fix slider e Trip.com
// ============================================

// Stato globale dell'app
let currentLang = 'it';
let userPreferences = {
    location: 50,
    distance: 50,
    moodX: 50,
    moodY: 50
};

// Traduzioni
const translations = {
    it: {
        location: "TIPO DI LOCALITÀ",
        distance: "DISTANZA",
        mood: "MOOD DEL VIAGGIO",
        sea: "Mare",
        mixed: "Misto", 
        city: "Città",
        near: "Vicino",
        medium: "Medio",
        far: "Lontano",
        relax: "Relax",
        adventure: "Avventura",
        culture: "Cultura",
        nightlife: "Movida",
        reset: "Reset",
        find: "Trova destinazione",
        book: "Prenota",
        finding: "Sto trovando la destinazione perfetta..."
    },
    en: {
        location: "LOCATION TYPE",
        distance: "DISTANCE",
        mood: "TRAVEL MOOD",
        sea: "Beach",
        mixed: "Mixed",
        city: "City",
        near: "Near",
        medium: "Medium", 
        far: "Far",
        relax: "Relax",
        adventure: "Adventure",
        culture: "Culture",
        nightlife: "Nightlife",
        reset: "Reset",
        find: "Find destination",
        book: "Book",
        finding: "Finding your perfect destination..."
    },
    es: {
        location: "TIPO DE LUGAR",
        distance: "DISTANCIA",
        mood: "MOOD DEL VIAJE",
        sea: "Playa",
        mixed: "Mixto",
        city: "Ciudad",
        near: "Cerca",
        medium: "Medio",
        far: "Lejos",
        relax: "Relax",
        adventure: "Aventura",
        culture: "Cultura",
        nightlife: "Movida",
        reset: "Reset",
        find: "Buscar destino",
        book: "Reservar",
        finding: "Buscando tu destino perfecto..."
    },
    fr: {
        location: "TYPE DE LIEU",
        distance: "DISTANCE", 
        mood: "MOOD DU VOYAGE",
        sea: "Mer",
        mixed: "Mixte",
        city: "Ville",
        near: "Proche",
        medium: "Moyen",
        far: "Loin",
        relax: "Détente",
        adventure: "Aventure",
        culture: "Culture", 
        nightlife: "Vie nocturne",
        reset: "Réinitialiser",
        find: "Trouver destination",
        book: "Réserver",
        finding: "Je trouve la destination parfaite..."
    },
    de: {
        location: "ART DES ORTES",
        distance: "ENTFERNUNG",
        mood: "REISESTIMMUNG",
        sea: "Meer",
        mixed: "Gemischt",
        city: "Stadt",
        near: "Nah",
        medium: "Mittel",
        far: "Weit",
        relax: "Entspannung",
        adventure: "Abenteuer",
        culture: "Kultur",
        nightlife: "Nachtleben",
        reset: "Zurücksetzen",
        find: "Ziel finden",
        book: "Buchen",
        finding: "Ich finde das perfekte Ziel..."
    }
};

// Gestione drag per Location slider
let isDraggingLocation = false;
const locationSlider = document.getElementById('location-slider');
const locationDot = document.getElementById('location-dot');

locationSlider.addEventListener('mousedown', startLocationDrag);
locationSlider.addEventListener('touchstart', startLocationDrag, {passive: false});

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
    
    // LIMITA IL MOVIMENTO TRA 10% E 90%
    const percentage = Math.max(10, Math.min(90, (x / rect.width) * 100));
    
    userPreferences.location = percentage;
    document.getElementById('location-dot').style.left = percentage + '%';
    document.getElementById('location-labels').classList.add('active');
}

// Gestione drag per Distance slider
let isDraggingDistance = false;
const distanceSlider = document.getElementById('distance-slider');
const distanceDot = document.getElementById('distance-dot');

distanceSlider.addEventListener('mousedown', startDistanceDrag);
distanceSlider.addEventListener('touchstart', startDistanceDrag, {passive: false});

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
    
    // LIMITA IL MOVIMENTO TRA 10% E 90%
    const percentage = Math.max(10, Math.min(90, (x / rect.width) * 100));
    
    userPreferences.distance = percentage;
    document.getElementById('distance-dot').style.left = percentage + '%';
    document.getElementById('distance-labels').classList.add('active');
}

// Gestione Mood grid
const moodGrid = document.getElementById('mood-grid');
const moodDot = document.getElementById('mood-dot');
let isDraggingMood = false;

moodGrid.addEventListener('mousedown', startMoodDrag);
moodGrid.addEventListener('touchstart', startMoodDrag, {passive: false});

function startMoodDrag(e) {
    isDraggingMood = true;
    dragMood(e);
}

function dragMood(e) {
    if (!isDraggingMood) return;
    e.preventDefault();
    
    const rect = moodGrid.getBoundingClientRect();
    const x = (e.type.includes('touch') ? e.touches[0].clientX : e.clientX) - rect.left;
    const y = (e.type.includes('touch') ? e.touches[0].clientY : e.clientY) - rect.top;
    
    const percentX = Math.max(0, Math.min(100, (x / rect.width) * 100));
    const percentY = Math.max(0, Math.min(100, (y / rect.height) * 100));
    
    userPreferences.moodX = percentX;
    userPreferences.moodY = percentY;
    
    moodDot.style.left = percentX + '%';
    moodDot.style.top = percentY + '%';
}

// Event listeners globali per movimento
document.addEventListener('mousemove', (e) => {
    if (isDraggingLocation) dragLocation(e);
    if (isDraggingDistance) dragDistance(e);
    if (isDraggingMood) dragMood(e);
});

document.addEventListener('touchmove', (e) => {
    if (isDraggingLocation) dragLocation(e);
    if (isDraggingDistance) dragDistance(e);
    if (isDraggingMood) dragMood(e);
}, {passive: false});

// Stop dragging
document.addEventListener('mouseup', stopDragging);
document.addEventListener('touchend', stopDragging);

function stopDragging() {
    isDraggingLocation = false;
    isDraggingDistance = false;
    isDraggingMood = false;
    
    // Rimuovi active class dopo un po'
    setTimeout(() => {
        document.getElementById('location-labels').classList.remove('active');
        document.getElementById('distance-labels').classList.remove('active');
    }, 1000);
}

// Cambio lingua
function changeLanguage(lang) {
    currentLang = lang;
    
    // Aggiorna bottoni lingua
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.textContent.toLowerCase() === lang);
    });
    
    // Aggiorna traduzioni
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
}

// Reset filtri
function resetFilters() {
    userPreferences = {
        location: 50,
        distance: 50,
        moodX: 50,
        moodY: 50
    };
    
    // Reset posizioni
    document.getElementById('location-dot').style.left = '50%';
    document.getElementById('distance-dot').style.left = '50%';
    document.getElementById('mood-dot').style.left = '50%';
    document.getElementById('mood-dot').style.top = '50%';
    
    // Nascondi risultato
    document.getElementById('result').classList.remove('active');
}

// Trova destinazione
function findDestination() {
    const loading = document.getElementById('loading');
    const result = document.getElementById('result');
    
    // Mostra loading
    result.classList.remove('active');
    loading.classList.add('active');
    
    // Simula ricerca
    setTimeout(() => {
        // Calcola tipo di destinazione
        let type;
        if (userPreferences.location < 33) {
            type = 'sea';
        } else if (userPreferences.location > 66) {
            type = 'city';
        } else {
            type = 'mixed';
        }
        
        // Calcola distanza
        let distance;
        if (userPreferences.distance < 33) {
            distance = 'near';
        } else if (userPreferences.distance > 66) {
            distance = 'far';
        } else {
            distance = 'medium';
        }
        
        // Calcola mood principale
        const moods = [];
        if (userPreferences.moodX < 50 && userPreferences.moodY < 50) {
            moods.push('relax');
        }
        if (userPreferences.moodX > 50 && userPreferences.moodY < 50) {
            moods.push('adventure');
        }
        if (userPreferences.moodX < 50 && userPreferences.moodY > 50) {
            moods.push('culture');
        }
        if (userPreferences.moodX > 50 && userPreferences.moodY > 50) {
            moods.push('nightlife');
        }
        
        // Filtra destinazioni
        let filtered = DESTINATIONS_DB.filter(dest => {
            const typeMatch = dest.type === type || type === 'mixed';
            const distanceMatch = dest.distance === distance;
            const moodMatch = moods.length === 0 || moods.some(mood => dest.moods.includes(mood));
            
            return typeMatch && distanceMatch && moodMatch;
        });
        
        // Se non ci sono match esatti, rilassa i criteri
        if (filtered.length === 0) {
            filtered = DESTINATIONS_DB.filter(dest => dest.type === type || type === 'mixed');
        }
        
        // Scegli una destinazione random
        const destination = filtered[Math.floor(Math.random() * filtered.length)] || DESTINATIONS_DB[0];
        
        // Mostra risultato
        loading.classList.remove('active');
        showDestination(destination);
    }, 2000);
}

// Mostra destinazione
function showDestination(destination) {
    const result = document.getElementById('result');
    const image = document.getElementById('destination-image');
    const name = document.getElementById('destination-name');
    const country = document.getElementById('destination-country');
    
    // Imposta dati
    image.src = destination.image;
    image.alt = destination.name;
    name.textContent = destination.translations[currentLang] || destination.name;
    country.textContent = destination.country;
    
    // Mostra con animazione
    result.classList.add('active', 'fade-in');
}

// Prenota viaggio - USA TRIP.COM
function bookTrip() {
    const destination = document.getElementById('destination-name').textContent;
    
    // Vai direttamente a Trip.com con la destinazione
    window.open(`https://www.trip.com/hotels/list?city=${encodeURIComponent(destination)}`, '_blank');
}

// Inizializza app
document.addEventListener('DOMContentLoaded', () => {
    // Imposta lingua iniziale
    changeLanguage('it');
    
    // Previeni zoom su mobile
    document.addEventListener('touchstart', (e) => {
        if (e.touches.length > 1) {
            e.preventDefault();
        }
    });
    
    // Previeni scroll bounce su iOS
    document.body.addEventListener('touchmove', (e) => {
        if (!e.target.closest('.controls-section')) {
            e.preventDefault();
        }
    }, {passive: false});
});
