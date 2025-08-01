// Translation system
const translations = {
    en: {
        tagline: "Slide Your Travel Vibes",
        habitatLabel: "Habitat",
        sea: "SEA",
        city: "CITY", 
        mountain: "MOUNTAIN",
        distanceLabel: "Distance",
        comfort: "COMFORT",
        curious: "CURIOUS",
        bloom: "BLOOM",
        moodLabel: "Mood Selector",
        selectMood: "Select your travel mood",
        gloobIt: "Gloob it!",
        gloobing: "Gloobing...",
        yourJourney: "Your Journey",
        bookNow: "Book Now",
        tryAgain: "Regloob",
        far: "far",
        kmAway: "km away"
    },
    it: {
        tagline: "Scorri le Tue Vibrazioni di Viaggio",
        habitatLabel: "Habitat",
        sea: "MARE",
        city: "CITTÀ",
        mountain: "MONTAGNA",
        distanceLabel: "Distanza",
        comfort: "COMFORT",
        curious: "CURIOSO",
        bloom: "SBOCCIA",
        moodLabel: "Selettore Mood",
        selectMood: "Seleziona il tuo mood di viaggio",
        gloobIt: "Gloob it!",
        gloobing: "Gloobing...",
        yourJourney: "Il Tuo Viaggio",
        bookNow: "Prenota Ora",
        tryAgain: "Regloob",
        far: "lontano",
        kmAway: "km di distanza"
    },
    fr: {
        tagline: "Glissez Vos Vibrations de Voyage",
        habitatLabel: "Habitat",
        sea: "MER",
        city: "VILLE",
        mountain: "MONTAGNE",
        distanceLabel: "Distance",
        comfort: "CONFORT",
        curious: "CURIEUX",
        bloom: "ÉPANOUI",
        moodLabel: "Sélecteur d'Humeur",
        selectMood: "Sélectionnez votre humeur de voyage",
        gloobIt: "Gloob it!",
        gloobing: "Gloobing...",
        yourJourney: "Votre Voyage",
        bookNow: "Réserver",
        tryAgain: "Regloob",
        far: "loin",
        kmAway: "km de distance"
    },
    es: {
        tagline: "Desliza Tus Vibras de Viaje",
        habitatLabel: "Hábitat",
        sea: "MAR",
        city: "CIUDAD",
        mountain: "MONTAÑA",
        distanceLabel: "Distancia",
        comfort: "CONFORT",
        curious: "CURIOSO",
        bloom: "FLORECER",
        moodLabel: "Selector de Estado de Ánimo",
        selectMood: "Selecciona tu estado de ánimo de viaje",
        gloobIt: "Gloob it!",
        gloobing: "Gloobing...",
        yourJourney: "Tu Viaje",
        bookNow: "Reservar Ahora",
        tryAgain: "Regloob",
        far: "lejos",
        kmAway: "km de distancia"
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
        moodLabel: "محدد المزاج",
        selectMood: "حدد مزاج سفرك",
        gloobIt: "!Gloob it",
        gloobing: "...Gloobing",
        yourJourney: "رحلتك",
        bookNow: "احجز الآن",
        tryAgain: "Regloob",
        far: "بعيد",
        kmAway: "كم بعيداً"
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
        moodLabel: "心情选择器",
        selectMood: "选择你的旅行心情",
        gloobIt: "Gloob it!",
        gloobing: "Gloobing...",
        yourJourney: "你的旅程",
        bookNow: "立即预订",
        tryAgain: "Regloob",
        far: "远",
        kmAway: "公里远"
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
        moodLabel: "मूड चयनकर्ता",
        selectMood: "अपना यात्रा मूड चुनें",
        gloobIt: "Gloob it!",
        gloobing: "Gloobing...",
        yourJourney: "आपकी यात्रा",
        bookNow: "अभी बुक करें",
        tryAgain: "Regloob",
        far: "दूर",
        kmAway: "किमी दूर"
    }
};

let currentLang = 'en';

function setLanguage(lang) {
    currentLang = lang;
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    
    // Update active language indicator
    document.querySelectorAll('.lang-selector a').forEach(link => {
        link.classList.toggle('active', link.getAttribute('data-lang') === lang);
    });
}

// Language selector event listeners
document.querySelectorAll('.lang-selector a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const lang = e.target.getAttribute('data-lang');
        setLanguage(lang);
    });
});

// Get slider values
function getSliderValue(ball, track) {
    const ballRect = ball.getBoundingClientRect();
    const trackRect = track.getBoundingClientRect();
    const ballCenter = ballRect.left + ballRect.width / 2;
    const position = (ballCenter - trackRect.left) / trackRect.width;
    return Math.max(0, Math.min(1, position));
}

// Get mood position
function getMoodPosition() {
    const pointer = document.getElementById('mood-pointer');
    const track = document.getElementById('mood-track');
    const rect = track.getBoundingClientRect();
    const pointerRect = pointer.getBoundingClientRect();
    
    const x = (pointerRect.left + pointerRect.width / 2 - rect.left) / rect.width;
    const y = (pointerRect.top + pointerRect.height / 2 - rect.top) / rect.height;
    
    return { x, y };
}

// Calculate destination
function calculateDestination() {
    const location = getSliderValue(
        document.getElementById('location-ball'),
        document.getElementById('location-track')
    );
    
    const distance = getSliderValue(
        document.getElementById('distance-ball'),
        document.getElementById('distance-track')
    );
    
    const mood = getMoodPosition();
    
    // Find best matching destination
    let bestMatch = null;
    let bestScore = -1;
    
    destinations.forEach(dest => {
        // Location score (0-1)
        const locationScore = 1 - Math.abs(dest.location - location);
        
        // Distance score (0-1)
        const distanceScore = 1 - Math.abs(dest.distance - distance);
        
        // Mood score (0-1)
        const moodDistance = Math.sqrt(
            Math.pow(dest.mood.x - mood.x, 2) + 
            Math.pow(dest.mood.y - mood.y, 2)
        );
        const moodScore = 1 - Math.min(moodDistance, 1);
        
        // Combined score with weights
        const totalScore = (locationScore * 0.35) + (distanceScore * 0.35) + (moodScore * 0.3);
        
        if (totalScore > bestScore) {
            bestScore = totalScore;
            bestMatch = dest;
        }
    });
    
    return bestMatch;
}

// Show result
function showResult(destination) {
    const t = translations[currentLang];
    
    // Update destination info
    document.getElementById('destination-name').textContent = destination.name;
    
    // Distance text based on language
    const distanceText = destination.distance < 0.5 ? 
        `2,000km ${t.kmAway}` : 
        destination.distance < 0.8 ? 
        `5,000km ${t.kmAway}` : 
        `10,000km+ - ${t.far}`;
    
    document.getElementById('destination-info').textContent = distanceText;
    document.getElementById('destination-country').textContent = destination.country;
    document.getElementById('destination-image').src = destination.image;
    
    // Use appropriate narrative based on language
    const narrativeKey = `narrative_${currentLang}`;
    const narrative = destination[narrativeKey] || destination.narrative_en;
    document.getElementById('destination-narrative').textContent = narrative;
    
    const quoteKey = `quote_${currentLang}`;
    const quote = destination[quoteKey] || destination.quote_en;
    document.getElementById('destination-quote').textContent = `"${quote}"`;
    
    // Update booking link with Trip.com URL for the destination
    const bookLink = document.getElementById('book-link');
    bookLink.href = destination.tripUrl || 'https://www.trip.com';
}

// Gloob function
function gloobIt() {
    // Hide language selector during loading
    document.querySelector('.lang-selector').style.display = 'none';
    
    // Show loading
    document.getElementById('slider-step').classList.add('hidden');
    document.getElementById('loading-step').style.display = 'flex';
    
    // Calculate destination
    const destination = calculateDestination();
    
    // Show result after animation
    setTimeout(() => {
        document.getElementById('loading-step').style.display = 'none';
        document.getElementById('result-step').classList.remove('hidden');
        showResult(destination);
    }, 3000);
}

// Reload button
document.getElementById('reload-button').addEventListener('click', () => {
    // Reset everything
    document.getElementById('result-step').classList.add('hidden');
    document.getElementById('slider-step').classList.remove('hidden');
    document.querySelector('.lang-selector').style.display = ''; // Show language selector again
    
    // Reset sliders to center
    document.getElementById('location-ball').style.left = '50%';
    document.getElementById('distance-ball').style.left = '50%';
    document.getElementById('mood-pointer').style.left = '50%';
    document.getElementById('mood-pointer').style.top = '50%';
});
