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

// TRADUZIONI UI - TUTTE LE 7 LINGUE
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
    ar: {
        tagline: "حرك ذبذبات سفرك",
        habitatLabel: "الموطن",
        sea: "بحر",
        city: "مدينة",
        mountain: "جبل",
        rangeLabel: "المدى",
        comfort: "راحة",
        curious: "فضولي",
        bloom: "ازدهار",
        vibesLabel: "الأجواء",
        movida: "الحياة الليلية",
        zen: "زين",
        gourmet: "الذواقة",
        wild: "بري",
        design: "تصميم",
        glamour: "سحر",
        culture: "ثقافة",
        romantic: "رومانسي",
        gloobIt: "!Gloob it",
        gloobing: "...جاري البحث",
        yourJourney: "رحلتك",
        bookNow: "احجز الآن",
        tryAgain: "بحث جديد"
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
        wild: "野性",
        design: "设计",
        glamour: "魅力",
        culture: "文化",
        romantic: "浪漫",
        gloobIt: "开始探索!",
        gloobing: "探索中...",
        yourJourney: "你的旅程",
        bookNow: "立即预订",
        tryAgain: "重新探索"
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
        gloobIt: "ग्लूब करें!",
        gloobing: "खोज रहे हैं...",
        yourJourney: "आपकी यात्रा",
        bookNow: "अभी बुक करें",
        tryAgain: "फिर से खोजें"
    }
};

// CITAZIONI DI VIAGGIO
const TRAVEL_QUOTES = [
    {
        quote: {
            it: "Il mondo è un libro e chi non viaggia ne legge solo una pagina.",
            en: "The world is a book and those who do not travel read only one page.",
            es: "El mundo es un libro y quienes no viajan solo leen una página.",
            fr: "Le monde est un livre et ceux qui ne voyagent pas n'en lisent qu'une page.",
            ar: "العالم كتاب ومن لا يسافر يقرأ صفحة واحدة فقط.",
            zh: "世界是一本书，不旅行的人只读了一页。",
            hi: "दुनिया एक किताब है और जो यात्रा नहीं करते वे केवल एक पृष्ठ पढ़ते हैं।"
        },
        author: "Sant'Agostino"
    },
    {
        quote: {
            it: "La vita è un viaggio e chi viaggia vive due volte.",
            en: "Life is a journey and those who travel live twice.",
            es: "La vida es un viaje y quien viaja vive dos veces.",
            fr: "La vie est un voyage et ceux qui voyagent vivent deux fois.",
            ar: "الحياة رحلة ومن يسافر يعيش مرتين.",
            zh: "人生是一场旅行，旅行的人活两次。",
            hi: "जीवन एक यात्रा है और जो यात्रा करते हैं वे दो बार जीते हैं।"
        },
        author: "Omar Khayyam"
    },
    {
        quote: {
            it: "Non tutti quelli che vagano sono perduti.",
            en: "Not all those who wander are lost.",
            es: "No todos los que vagan están perdidos.",
            fr: "Tous ceux qui errent ne sont pas perdus.",
            ar: "ليس كل من يتجول ضائع.",
            zh: "并非所有流浪的人都迷失了方向。",
            hi: "सभी भटकने वाले खोए हुए नहीं हैं।"
        },
        author: "J.R.R. Tolkien"
    }
];

// FUNZIONI SLIDER LOCATION - CON FIX PER EVITARE CHE ESCANO
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
    
    // Limita la percentuale tra 5% e 95% per evitare che il pallino esca
    const percentage = Math.max(5, Math.min(95, (x / rect.width) * 100));
    
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

// FUNZIONI SLIDER DISTANCE - CON FIX PER EVITARE CHE ESCANO
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
    
    // Limita la percentuale tra 5% e 95% per evitare che il pallino esca
    const percentage = Math.max(5, Math.min(95, (x / rect.width) * 100));
    
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
    // Nascondi le lingue quando inizia il gloob
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

// ALGORITMO DI MATCHING MIGLIORATO
function calculateDestination() {
    // Verifica che il database sia caricato
    if (typeof DESTINATIONS_DB === 'undefined' || !DESTINATIONS_DB || DESTINATIONS_DB.length === 0) {
        console.error('Database destinazioni non caricato!');
        return {
            name: "Errore",
            country: "Database non caricato",
            image: "",
            type: "city",
            distance: "medium",
            moods: [],
            tagline: { it: "Ricarica la pagina", en: "Reload the page" }
        };
    }
    
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
    // Debug - verifica cosa arriva
    console.log('Destinazione selezionata:', destination);
    
    // Nascondi loading e mostra risultato
    document.getElementById('loading-step').classList.add('hidden');
    document.getElementById('result-step').classList.remove('hidden');
    
    // Popola i dati
    document.getElementById('destination-name').textContent = destination.name || 'Destinazione';
    document.getElementById('destination-tagline').textContent = destination.tagline && destination.tagline[currentLang] ? destination.tagline[currentLang] : '';
    document.getElementById('destination-country').textContent = destination.country || '';
    
    // Imposta immagine
    const img = document.getElementById('destination-image');
    if (destination.image) {
        img.src = destination.image;
        img.alt = destination.name || 'Destination';
        img.style.display = 'block';
    } else {
        img.style.display = 'none';
    }
    
    // Narrativa personalizzata
    const narrative = generateNarrative(destination);
    document.getElementById('narrative-text').textContent = narrative;
    
    // Citazione casuale
    const quote = TRAVEL_QUOTES[Math.floor(Math.random() * TRAVEL_QUOTES.length)];
    document.getElementById('travel-quote').textContent = quote.quote[currentLang] || quote.quote.it;
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
        },
        ar: {
            sea: [
                `${destination.name} ينتظرك بمياهه الصافية وغروب الشمس الذي يرسم السماء. مكان يتباطأ فيه الزمن وكل موجة تحكي قصة.`,
                `دع نفسك تهدأ بإيقاع البحر في ${destination.name}. هنا، حيث تلتقي الرمال باللانهاية، ستجد السلام الذي كنت تبحث عنه.`
            ],
            city: [
                `${destination.name} ينبض بالطاقة والإمكانيات. كل شارع يخفي مفاجأة، كل زاوية مغامرة حضرية جديدة تنتظرك.`,
                `انغمس في الفوضى الإبداعية في ${destination.name}. مدينة لا تنام أبدًا، حيث تتشكل الأحلام بين ناطحات السحاب والأزقة المخفية.`
            ],
            mountain: [
                `قمم ${destination.name} تناديك إلى الأعلى، حيث الهواء نقي والصمت يتحدث. ملاذ طبيعي يوقظ الروح.`,
                `${destination.name} يقدم لك عظمة الجبال، حيث كل مسار تأمل وكل قمة إنجاز شخصي.`
            ]
        },
        zh: {
            sea: [
                `${destination.name} 以其清澈的海水和绘画天空的日落等待着您。一个时间放慢的地方，每一个波浪都在讲述一个故事。`,
                `让自己在 ${destination.name} 被大海的节奏摇篮。在这里，沙滩与无限相遇，您会找到一直在寻找的宁静。`
            ],
            city: [
                `${destination.name} 充满活力和可能性。每条街道都隐藏着惊喜，每个角落都有新的城市冒险等着您。`,
                `沉浸在 ${destination.name} 的创意混乱中。一个永不眠的大都市，梦想在摩天大楼和隐藏的小巷之间成形。`
            ],
            mountain: [
                `${destination.name} 的山峰召唤您向上，那里空气纯净，寂静在说话。一个唤醒灵魂的自然圣地。`,
                `${destination.name} 为您提供山脉的威严，每条小径都是冥想，每个山顶都是个人征服。`
            ]
        },
        hi: {
            sea: [
                `${destination.name} अपने क्रिस्टल पानी और आसमान को रंगने वाले सूर्यास्त के साथ आपका इंतजार कर रहा है। एक ऐसी जगह जहां समय धीमा हो जाता है और हर लहर एक कहानी कहती है।`,
                `${destination.name} में समुद्र की लय से खुद को शांत होने दें। यहां, जहां रेत अनंत से मिलती है, आपको वह शांति मिलेगी जिसकी आप तलाश कर रहे थे।`
            ],
            city: [
                `${destination.name} ऊर्जा और संभावनाओं से भरा है। हर सड़क एक आश्चर्य छुपाती है, हर कोना एक नया शहरी साहसिक आपका इंतजार कर रहा है।`,
                `${destination.name} की रचनात्मक अराजकता में खुद को डुबो दें। एक महानगर जो कभी नहीं सोता, जहां सपने गगनचुंबी इमारतों और छिपी गलियों के बीच आकार लेते हैं।`
            ],
            mountain: [
                `${destination.name} की चोटियां आपको ऊपर की ओर बुलाती हैं, जहां हवा शुद्ध है और मौन बोलता है। एक प्राकृतिक अभयारण्य जो आत्मा को जगाता है।`,
                `${destination.name} आपको पहाड़ों की भव्यता प्रदान करता है, जहां हर रास्ता एक ध्यान है और हर शिखर एक व्यक्तिगत विजय है।`
            ]
        }
    };
    
    // Usa narrativa italiana se la lingua non è disponibile
    const langNarratives = narratives[currentLang] || narratives.it;
    const typeNarratives = langNarratives[destination.type] || langNarratives.city;
    
    return typeNarratives[Math.floor(Math.random() * typeNarratives.length)];
}

// MAPPATURA URL TRIP.COM PER OGNI DESTINAZIONE
const TRIPCOM_URLS = {
    // MARE
    "Faroe Islands": "https://www.trip.com/hotels/list?city=-1&provinceId=0&countryId=283&districtId=C&searchWord=Faroe%20Islands",
    "Socotra Island": "https://www.trip.com/hotels/list?city=5822&cityName=Socotra&provinceId=11988&countryId=102",
    "Lofoten Islands": "https://www.trip.com/hotels/list?city=0&provinceId=10205&countryId=76&searchWord=Lofoten",
    "Gili Nanggu": "https://www.trip.com/hotels/list?city=158115&cityName=Sekotong%20Barat&provinceId=11531&countryId=108&searchWord=Gili%20Nanggu",
    "Comporta": "https://www.trip.com/hotels/list?city=54322&cityName=Comporta&provinceId=97857&countryId=77",
    
    // CITTÀ
    "Tbilisi": "https://www.trip.com/hotels/list?city=7612&cityName=Tbilisi&provinceId=0&countryId=180",
    "Valparaíso": "https://www.trip.com/hotels/list?city=9178&cityName=Valparaiso&provinceId=10410&countryId=115",
    "Ljubljana": "https://www.trip.com/hotels/list?city=1266&cityName=Ljubljana&provinceId=0&countryId=84",
    "Oaxaca": "https://www.trip.com/hotels/list?city=36449&cityName=Oaxaca&provinceId=10687&countryId=72",
    "Porto": "https://www.trip.com/hotels/list?city=826&cityName=Porto&provinceId=97868&countryId=77",
    
    // MONTAGNA
    "Svaneti": "https://www.trip.com/hotels/list?city=-1&provinceId=112101&countryId=180&searchWord=Samegrelo-Zemo%20Svaneti",
    "Valbona Valley": "https://www.trip.com/hotels/list?city=649473&cityName=Valbone&provinceId=12713&countryId=5",
    "Huaraz": "https://www.trip.com/hotels/list?city=9728&cityName=Huaraz&provinceId=10791&countryId=69",
    "Lyngen Alps": "https://www.trip.com/hotels/list?city=297939&cityName=Nord-lenangen&provinceId=10751&countryId=76&searchWord=Lyngen%20Alps",
    "Sinaia": "https://www.trip.com/hotels/list?city=3743&cityName=Sinaia&provinceId=10213&countryId=63"
};

// GESTIONE PRENOTAZIONE CON TRIP.COM
function bookTrip() {
    const destination = document.getElementById('destination-name').textContent;
    
    // Usa l'URL specifico per ogni destinazione
    const tripUrl = TRIPCOM_URLS[destination];
    
    if (tripUrl) {
        // Aggiungi parametri comuni a tutti gli URL
        const fullUrl = tripUrl + "&locale=en-US&curr=EUR";
        window.open(fullUrl, '_blank');
    } else {
        // Fallback se la destinazione non è mappata
        window.open(`https://www.trip.com/hotels/list?city=${encodeURIComponent(destination)}&locale=en-US&curr=EUR`, '_blank');
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
window.bookTrip = bookTrip;
