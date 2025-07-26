// GLOOBER APP LOGIC
// Version: 3.0 - FINALE con Trip.com
// ============================================

// Stato globale dell'app
let currentLang = 'it';
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

// TRADUZIONI UI
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
        romantic: "ROMANTIC",
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
    de: {
        tagline: "Schiebe deine Reisevibes",
        habitatLabel: "LEBENSRAUM",
        sea: "MEER",
        city: "STADT",
        mountain: "BERG",
        rangeLabel: "BEREICH",
        comfort: "KOMFORT",
        curious: "NEUGIERIG",
        bloom: "BLÜTE",
        vibesLabel: "STIMMUNG",
        movida: "NACHTLEBEN",
        zen: "ZEN",
        gourmet: "GOURMET",
        wild: "WILD",
        design: "DESIGN",
        glamour: "GLAMOUR",
        culture: "KULTUR",
        romantic: "ROMANTISCH",
        gloobIt: "Gloob it!",
        gloobing: "Gloobing...",
        yourJourney: "Deine Reise",
        bookNow: "Buchen",
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
        wild: "狂野",
        design: "设计",
        glamour: "魅力",
        culture: "文化",
        romantic: "浪漫",
        gloobIt: "Gloob it!",
        gloobing: "Gloobing...",
        yourJourney: "你的旅程",
        bookNow: "预订",
        tryAgain: "重新Gloob"
    },
    hi: {
        tagline: "अपनी यात्रा की वाइब्स को स्लाइड करें",
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
        bookNow: "बुक करें",
        tryAgain: "Regloob"
    },
    ar: {
        tagline: "حرك أجواء سفرك",
        habitatLabel: "الموطن",
        sea: "بحر",
        city: "مدينة",
        mountain: "جبل",
        rangeLabel: "النطاق",
        comfort: "راحة",
        curious: "فضولي",
        bloom: "ازدهار",
        vibesLabel: "الأجواء",
        movida: "الحياة الليلية",
        zen: "زين",
        gourmet: "ذواقة",
        wild: "بري",
        design: "تصميم",
        glamour: "سحر",
        culture: "ثقافة",
        romantic: "رومانسي",
        gloobIt: "!Gloob it",
        gloobing: "...Gloobing",
        yourJourney: "رحلتك",
        bookNow: "احجز الآن",
        tryAgain: "Regloob"
    },
    pt: {
        tagline: "Deslize suas vibrações de viagem",
        habitatLabel: "HABITAT",
        sea: "MAR",
        city: "CIDADE",
        mountain: "MONTANHA",
        rangeLabel: "ALCANCE",
        comfort: "CONFORTO",
        curious: "CURIOSO",
        bloom: "FLORESCER",
        vibesLabel: "VIBRAÇÕES",
        movida: "VIDA NOTURNA",
        zen: "ZEN",
        gourmet: "GOURMET",
        wild: "SELVAGEM",
        design: "DESIGN",
        glamour: "GLAMOUR",
        culture: "CULTURA",
        romantic: "ROMÂNTICO",
        gloobIt: "Gloob it!",
        gloobing: "Gloobing...",
        yourJourney: "Sua jornada",
        bookNow: "Reservar",
        tryAgain: "Regloob"
    },
    ru: {
        tagline: "Двигайте свои туристические вибрации",
        habitatLabel: "МЕСТО ОБИТАНИЯ",
        sea: "МОРЕ",
        city: "ГОРОД",
        mountain: "ГОРЫ",
        rangeLabel: "ДИАПАЗОН",
        comfort: "КОМФОРТ",
        curious: "ЛЮБОПЫТНЫЙ",
        bloom: "РАСЦВЕТ",
        vibesLabel: "НАСТРОЕНИЕ",
        movida: "НОЧНАЯ ЖИЗНЬ",
        zen: "ДЗЕН",
        gourmet: "ГУРМАН",
        wild: "ДИКИЙ",
        design: "ДИЗАЙН",
        glamour: "ГЛАМУР",
        culture: "КУЛЬТУРА",
        romantic: "РОМАНТИЧНЫЙ",
        gloobIt: "Gloob it!",
        gloobing: "Gloobing...",
        yourJourney: "Ваше путешествие",
        bookNow: "Забронировать",
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
    
    // Limita il movimento del pallino
    const dotWidth = window.innerWidth < 768 ? 66 : 56; // mobile vs desktop
    const minPos = 0;
    const maxPos = rect.width - dotWidth;
    const clampedX = Math.max(minPos, Math.min(maxPos, x - dotWidth/2));
    
    // Calcola la percentuale
    const percentage = (clampedX / maxPos) * 100;
    
    userPreferences.location = percentage;
    document.getElementById('location-dot').style.left = percentage + '%';
    
    // Mostra le etichette
    document.getElementById('location-labels').classList.add('active');
}

function stopLocationDrag() {
    isDraggingLocation = false;
    setTimeout(() => {
        document.getElementById('location-labels').classList.remove('active');
    }, 1000);
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
    
    // Limita il movimento del pallino
    const dotWidth = window.innerWidth < 768 ? 66 : 56; // mobile vs desktop
    const minPos = 0;
    const maxPos = rect.width - dotWidth;
    const clampedX = Math.max(minPos, Math.min(maxPos, x - dotWidth/2));
    
    // Calcola la percentuale
    const percentage = (clampedX / maxPos) * 100;
    
    userPreferences.distance = percentage;
    document.getElementById('distance-dot').style.left = percentage + '%';
    
    // Mostra le etichette
    document.getElementById('distance-labels').classList.add('active');
}

function stopDistanceDrag() {
    isDraggingDistance = false;
    setTimeout(() => {
        document.getElementById('distance-labels').classList.remove('active');
    }, 1000);
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
    
    // Mostra etichette vicine
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
    // Mostra loading
    document.getElementById('slider-step').classList.add('hidden');
    document.getElementById('loading-step').classList.remove('hidden');
    
    // Calcola destinazione dopo 2 secondi
    setTimeout(() => {
        const destination = calculateDestination();
        showResult(destination);
    }, 2000);
}

// ALGORITMO DI MATCHING MIGLIORATO
function calculateDestination() {
    // Determina il tipo di habitat
    let habitatType;
    if (userPreferences.location < 33) {
        habitatType = 'sea';
    } else if (userPreferences.location < 67) {
        habitatType = 'city';
    } else {
        habitatType = 'mountain';
    }
    
    // Determina la distanza
    let distanceType;
    if (userPreferences.distance < 33) {
        distanceType = 'comfort';
    } else if (userPreferences.distance < 67) {
        distanceType = 'curious';
    } else {
        distanceType = 'bloom';
    }
    
    // Determina i mood principali (massimo 2)
    const moods = getMoodsFromPosition(userPreferences.moodX, userPreferences.moodY);
    
    // Filtra le destinazioni per tipo
    let candidates = DESTINATIONS_DB.filter(dest => dest.type === habitatType);
    
    // Se non ci sono candidati esatti, allarga la ricerca
    if (candidates.length === 0) {
        candidates = DESTINATIONS_DB;
    }
    
    // Calcola punteggi per ogni destinazione
    const scoredDestinations = candidates.map(dest => {
        let score = 0;
        
        // Punteggio per tipo di habitat (peso maggiore)
        if (dest.type === habitatType) {
            score += 50;
        }
        
        // Punteggio per distanza
        if (dest.distance === distanceType) {
            score += 30;
        } else if (
            (dest.distance === 'curious' && (distanceType === 'comfort' || distanceType === 'bloom')) ||
            (distanceType === 'curious' && (dest.distance === 'comfort' || dest.distance === 'bloom'))
        ) {
            score += 15; // Punteggio parziale per distanze vicine
        }
        
        // Punteggio per mood (peso importante)
        moods.forEach(mood => {
            if (dest.moods.includes(mood)) {
                score += 20;
            }
        });
        
        // Bonus per match multipli di mood
        const matchingMoods = moods.filter(mood => dest.moods.includes(mood));
        if (matchingMoods.length >= 2) {
            score += 10;
        }
        
        return {
            destination: dest,
            score: score
        };
    });
    
    // Ordina per punteggio
    scoredDestinations.sort((a, b) => b.score - a.score);
    
    // Se il punteggio migliore è troppo basso, scegline uno casuale del tipo giusto
    if (scoredDestinations[0].score < 30) {
        const typeMatches = DESTINATIONS_DB.filter(d => d.type === habitatType);
        return typeMatches[Math.floor(Math.random() * typeMatches.length)];
    }
    
    // Altrimenti restituisci il migliore
    return scoredDestinations[0].destination;
}

// Determina i mood dalla posizione nel quadrato
function getMoodsFromPosition(x, y) {
    const moods = [];
    
    // Mappa delle posizioni dei mood
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
    
    // Calcola distanze e prendi i 2 più vicini
    const distances = Object.entries(moodMap).map(([mood, pos]) => {
        const distance = Math.sqrt(Math.pow(x - pos.x, 2) + Math.pow(y - pos.y, 2));
        return { mood, distance };
    });
    
    distances.sort((a, b) => a.distance - b.distance);
    
    // Prendi i due mood più vicini
    moods.push(distances[0].mood);
    if (distances[1].distance < 40) {
        moods.push(distances[1].mood);
    }
    
    return moods;
}

// MOSTRA RISULTATO
function showResult(destination) {
    // Nascondi loading e mostra risultato
    document.getElementById('loading-step').classList.add('hidden');
    document.getElementById('result-step').classList.remove('hidden');
    
    // Popola i dati
    document.getElementById('destination-name').textContent = destination.name;
    document.getElementById('destination-tagline').textContent = destination.tagline[currentLang];
    document.getElementById('destination-country').textContent = destination.country;
    document.getElementById('destination-image').src = destination.image;
    
    // Narrativa personalizzata
    const narrative = generateNarrative(destination);
    document.getElementById('narrative-text').textContent = narrative;
    
    // Citazione casuale
    const quote = TRAVEL_QUOTES[Math.floor(Math.random() * TRAVEL_QUOTES.length)];
    document.getElementById('travel-quote').textContent = quote.quote[currentLang];
    document.getElementById('quote-author').textContent = quote.author;
}

// GENERA NARRATIVA
function generateNarrative(destination) {
    const narratives = {
        it: {
            sea: [
                `${destination.name} ti aspetta con le sue acque cristalline e tramonti che dipingono il cielo. Un luogo dove il tempo rallenta e ogni onda racconta una storia.`,
                `Lasciati cullare dal ritmo del mare a ${destination.name}. Qui, dove la sabbia incontra l'infinito, troverai la pace che cercavi.`
            ],
            city: [
                `${destination.name} pulsa di energia e possibilità. Ogni strada nasconde una sorpresa, ogni angolo una nuova avventura urbana che ti aspetta.`,
                `Immergiti nel caos creativo di ${destination.name}. Una metropoli che non dorme mai, dove i sogni prendono forma tra grattacieli e vicoli nascosti.`
            ],
            mountain: [
                `Le vette di ${destination.name} ti chiamano verso l'alto, dove l'aria è pura e il silenzio parla. Un santuario naturale che risveglia l'anima.`,
                `${destination.name} ti offre la maestosità della montagna, dove ogni sentiero è una meditazione e ogni cima una conquista personale.`
            ]
        },
        en: {
            sea: [
                `${destination.name} awaits you with crystal waters and sunsets that paint the sky. A place where time slows down and every wave tells a story.`,
                `Let yourself be lulled by the rhythm of the sea in ${destination.name}. Here, where sand meets infinity, you'll find the peace you were looking for.`
            ],
            city: [
                `${destination.name} pulses with energy and possibilities. Every street hides a surprise, every corner a new urban adventure waiting for you.`,
                `Immerse yourself in the creative chaos of ${destination.name}. A metropolis that never sleeps, where dreams take shape between skyscrapers and hidden alleys.`
            ],
            mountain: [
                `The peaks of ${destination.name} call you upward, where the air is pure and silence speaks. A natural sanctuary that awakens the soul.`,
                `${destination.name} offers you the majesty of the mountains, where every path is a meditation and every summit a personal conquest.`
            ]
        },
        es: {
            sea: [
                `${destination.name} te espera con aguas cristalinas y atardeceres que pintan el cielo. Un lugar donde el tiempo se ralentiza y cada ola cuenta una historia.`,
                `Déjate arrullar por el ritmo del mar en ${destination.name}. Aquí, donde la arena se encuentra con el infinito, encontrarás la paz que buscabas.`
            ],
            city: [
                `${destination.name} palpita con energía y posibilidades. Cada calle esconde una sorpresa, cada esquina una nueva aventura urbana que te espera.`,
                `Sumérgete en el caos creativo de ${destination.name}. Una metrópolis que nunca duerme, donde los sueños toman forma entre rascacielos y callejones ocultos.`
            ],
            mountain: [
                `Las cumbres de ${destination.name} te llaman hacia arriba, donde el aire es puro y el silencio habla. Un santuario natural que despierta el alma.`,
                `${destination.name} te ofrece la majestuosidad de la montaña, donde cada sendero es una meditación y cada cima una conquista personal.`
            ]
        },
        fr: {
            sea: [
                `${destination.name} vous attend avec ses eaux cristallines et ses couchers de soleil qui peignent le ciel. Un lieu où le temps ralentit et chaque vague raconte une histoire.`,
                `Laissez-vous bercer par le rythme de la mer à ${destination.name}. Ici, où le sable rencontre l'infini, vous trouverez la paix que vous cherchiez.`
            ],
            city: [
                `${destination.name} vibre d'énergie et de possibilités. Chaque rue cache une surprise, chaque coin une nouvelle aventure urbaine qui vous attend.`,
                `Plongez dans le chaos créatif de ${destination.name}. Une métropole qui ne dort jamais, où les rêves prennent forme entre gratte-ciels et ruelles cachées.`
            ],
            mountain: [
                `Les sommets de ${destination.name} vous appellent vers le haut, où l'air est pur et le silence parle. Un sanctuaire naturel qui réveille l'âme.`,
                `${destination.name} vous offre la majesté de la montagne, où chaque sentier est une méditation et chaque sommet une conquête personnelle.`
            ]
        }
    };
    
    // Usa narrativa italiana se la lingua non è disponibile
    const langNarratives = narratives[currentLang] || narratives.it;
    const typeNarratives = langNarratives[destination.type];
    
    return typeNarratives[Math.floor(Math.random() * typeNarratives.length)];
}

// GESTIONE PRENOTAZIONE CON TRIP.COM
function bookTrip() {
    const destination = document.getElementById('destination-name').textContent;
    
    // Apri Trip.com con la destinazione
    window.open(`https://www.trip.com/hotels/list?city=${encodeURIComponent(destination)}`, '_blank');
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
    
    // Inizializza con italiano
    changeLanguage('it');
});
