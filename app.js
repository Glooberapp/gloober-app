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

// Traduzioni
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

// Narrative per ogni destinazione
const DESTINATION_NARRATIVES = {
    // MARE
    "Faroe Islands": {
        it: "Le Faroe sono isole di vento e nebbia, dove le pecore superano gli abitanti e l'oceano detta il ritmo della vita. Qui il tempo non esiste: in estate il sole non tramonta mai completamente, mentre in inverno la luce danza timida tra le nuvole. I villaggi sembrano caduti dal cielo, con casette colorate che si aggrappano a scogliere impossibili. Preparati a guidare attraverso tunnel sottomarini che collegano mondi, a camminare su prati che terminano nel vuoto dell'oceano, a scoprire che la solitudine può essere la migliore compagnia.",
        en: "The Faroes are islands of wind and fog, where sheep outnumber inhabitants and the ocean dictates life's rhythm. Time doesn't exist here: in summer the sun never fully sets, while in winter light dances shyly between clouds. Villages seem fallen from the sky, with colorful houses clinging to impossible cliffs. Prepare to drive through underwater tunnels connecting worlds, walk on meadows ending in ocean void, and discover that solitude can be the best company.",
        es: "Las Feroe son islas de viento y niebla, donde las ovejas superan a los habitantes y el océano dicta el ritmo de la vida. Aquí el tiempo no existe: en verano el sol nunca se pone completamente, mientras en invierno la luz danza tímida entre las nubes. Los pueblos parecen caídos del cielo, con casitas coloridas agarradas a acantilados imposibles. Prepárate para conducir a través de túneles submarinos que conectan mundos, caminar sobre prados que terminan en el vacío del océano, descubrir que la soledad puede ser la mejor compañía.",
        fr: "Les Féroé sont des îles de vent et de brouillard, où les moutons sont plus nombreux que les habitants et où l'océan dicte le rythme de la vie. Ici, le temps n'existe pas : en été, le soleil ne se couche jamais complètement, tandis qu'en hiver, la lumière danse timidement entre les nuages. Les villages semblent tombés du ciel, avec des maisons colorées accrochées à des falaises impossibles. Préparez-vous à conduire à travers des tunnels sous-marins reliant des mondes, à marcher sur des prairies se terminant dans le vide de l'océan, à découvrir que la solitude peut être la meilleure compagnie.",
        ar: "جزر فارو هي جزر الرياح والضباب، حيث يفوق عدد الأغنام عدد السكان ويملي المحيط إيقاع الحياة. الوقت لا وجود له هنا: في الصيف لا تغرب الشمس تمامًا، بينما في الشتاء يرقص الضوء بخجل بين الغيوم. تبدو القرى وكأنها سقطت من السماء، مع منازل ملونة تتشبث بمنحدرات مستحيلة. استعد للقيادة عبر أنفاق تحت الماء تربط العوالم، والمشي على المروج التي تنتهي في فراغ المحيط، واكتشف أن العزلة يمكن أن تكون أفضل رفيق.",
        zh: "法罗群岛是风和雾的岛屿，这里羊比居民多，海洋主宰着生活的节奏。时间在这里不存在：夏天太阳永不完全落下，冬天光线在云间羞涩地舞动。村庄仿佛从天而降，彩色小屋紧贴着不可能的悬崖。准备驾车穿越连接世界的海底隧道，在终结于海洋虚空的草地上漫步，发现孤独可以是最好的伴侣。",
        hi: "फ़ैरो द्वीप हवा और कोहरे के द्वीप हैं, जहाँ भेड़ें निवासियों से अधिक हैं और समुद्र जीवन की लय तय करता है। यहाँ समय का अस्तित्व नहीं है: गर्मियों में सूरज कभी पूरी तरह से नहीं डूबता, जबकि सर्दियों में प्रकाश बादलों के बीच शर्मीला नृत्य करता है। गाँव आसमान से गिरे हुए लगते हैं, रंगीन घर असंभव चट्टानों से चिपके हुए हैं। दुनियाओं को जोड़ने वाली पानी के नीचे की सुरंगों से गुज़रने, समुद्र के शून्य में समाप्त होने वाले घास के मैदानों पर चलने, और यह खोजने के लिए तैयार रहें कि एकांत सबसे अच्छा साथी हो सकता है।"
    },
    "Lofoten": {
        it: "Lofoten emerge dal Mare di Norvegia come una spina dorsale di granito, un muro di montagne che sfida l'Artico. I pescatori vivono in rorbuer rossi sospesi sull'acqua, mentre le aquile di mare volteggiano sopra spiagge di sabbia bianca che sembrano caraibiche, se non fosse per la temperatura. In estate il sole di mezzanotte trasforma la notte in un sogno dorato, in inverno l'aurora boreale danza verde nel cielo. Qui imparerai che il merluzzo è oro, che il silenzio ha mille sfumature, e che la natura non ha bisogno di filtri.",
        en: "Lofoten emerges from the Norwegian Sea like a granite spine, a wall of mountains challenging the Arctic. Fishermen live in red rorbuer suspended over water, while sea eagles circle above white sand beaches that seem Caribbean, if not for the temperature. In summer the midnight sun transforms night into a golden dream, in winter the northern lights dance green in the sky. Here you'll learn that cod is gold, that silence has a thousand shades, and that nature needs no filters.",
        es: "Lofoten emerge del Mar de Noruega como una espina dorsal de granito, un muro de montañas que desafía al Ártico. Los pescadores viven en rorbuer rojos suspendidos sobre el agua, mientras las águilas marinas sobrevuelan playas de arena blanca que parecen caribeñas, si no fuera por la temperatura. En verano el sol de medianoche transforma la noche en un sueño dorado, en invierno la aurora boreal baila verde en el cielo. Aquí aprenderás que el bacalao es oro, que el silencio tiene mil matices, y que la naturaleza no necesita filtros.",
        fr: "Lofoten émerge de la mer de Norvège comme une épine dorsale de granit, un mur de montagnes défiant l'Arctique. Les pêcheurs vivent dans des rorbuer rouges suspendus au-dessus de l'eau, tandis que les aigles de mer tournoient au-dessus de plages de sable blanc qui semblent caribéennes, si ce n'était la température. En été, le soleil de minuit transforme la nuit en rêve doré, en hiver, les aurores boréales dansent en vert dans le ciel. Ici, vous apprendrez que la morue est de l'or, que le silence a mille nuances et que la nature n'a pas besoin de filtres.",
        ar: "تظهر لوفوتين من بحر النرويج مثل عمود فقري من الجرانيت، جدار من الجبال يتحدى القطب الشمالي. يعيش الصيادون في أكواخ حمراء معلقة فوق الماء، بينما تحلق النسور البحرية فوق شواطئ الرمال البيضاء التي تبدو كاريبية، لولا درجة الحرارة. في الصيف، تحول شمس منتصف الليل الليل إلى حلم ذهبي، وفي الشتاء، ترقص الأضواء الشمالية خضراء في السماء. هنا ستتعلم أن سمك القد ذهب، وأن للصمت ألف ظل، وأن الطبيعة لا تحتاج إلى مرشحات.",
        zh: "罗弗敦群岛像花岗岩脊柱一样从挪威海中浮现，一堵挑战北极的山墙。渔民住在悬在水上的红色渔屋里，海鹰在白沙滩上空盘旋，如果不是因为温度，这些海滩看起来就像加勒比海。夏天，午夜太阳将夜晚变成金色的梦，冬天，北极光在天空中绿色舞动。在这里你会学到鳕鱼是金子，沉默有千种色调，大自然不需要滤镜。",
        hi: "लोफोटेन नॉर्वेजियन सागर से ग्रेनाइट रीढ़ की तरह उभरता है, आर्कटिक को चुनौती देती पहाड़ों की दीवार। मछुआरे पानी के ऊपर लटके लाल रोरबुएर में रहते हैं, जबकि समुद्री चील सफेद रेत के समुद्र तटों के ऊपर चक्कर लगाते हैं जो कैरिबियन लगते हैं, अगर तापमान न हो तो। गर्मियों में मध्यरात्रि सूर्य रात को सुनहरे सपने में बदल देता है, सर्दियों में उत्तरी रोशनी आसमान में हरी नाचती है। यहाँ आप सीखेंगे कि कॉड सोना है, कि मौन के हज़ार रंग हैं, और प्रकृति को फ़िल्टर की ज़रूरत नहीं है।"
    },
    "Amalfi Coast": {
        it: "La Costiera Amalfitana è un teatro naturale dove il Mediterraneo è protagonista assoluto. Le case si arrampicano sulla roccia come in un presepe verticale, dipinte dei colori dei limoni e del mare. Ogni curva della strada rivela una nuova cartolina: Positano che scende a cascata verso il mare, Ravello sospesa tra cielo e acqua, Amalfi con la sua storia di repubblica marinara. Qui la vita è dolce come il limoncello, intensa come il profumo dei gelsomini, verticale come i terrazzamenti dei limoni. Preparati a vivere in verticale, a mangiare vista mare e a capire perché gli dei scelsero questa costa.",
        en: "The Amalfi Coast is a natural theater where the Mediterranean is the absolute protagonist. Houses climb the rock like in a vertical nativity scene, painted in the colors of lemons and sea. Every curve of the road reveals a new postcard: Positano cascading down to the sea, Ravello suspended between sky and water, Amalfi with its history as a maritime republic. Here life is sweet as limoncello, intense as jasmine perfume, vertical as lemon terraces. Prepare to live vertically, eat with sea views, and understand why the gods chose this coast.",
        es: "La Costa Amalfitana es un teatro natural donde el Mediterráneo es protagonista absoluto. Las casas trepan por la roca como en un belén vertical, pintadas de los colores de los limones y del mar. Cada curva de la carretera revela una nueva postal: Positano cayendo en cascada hacia el mar, Ravello suspendida entre cielo y agua, Amalfi con su historia de república marinera. Aquí la vida es dulce como el limoncello, intensa como el perfume de jazmines, vertical como los bancales de limones. Prepárate para vivir en vertical, comer con vistas al mar y entender por qué los dioses eligieron esta costa.",
        fr: "La côte amalfitaine est un théâtre naturel où la Méditerranée est le protagoniste absolu. Les maisons grimpent sur le rocher comme dans une crèche verticale, peintes aux couleurs des citrons et de la mer. Chaque virage de la route révèle une nouvelle carte postale : Positano dévalant vers la mer, Ravello suspendue entre ciel et eau, Amalfi avec son histoire de république maritime. Ici, la vie est douce comme le limoncello, intense comme le parfum du jasmin, verticale comme les terrasses de citronniers. Préparez-vous à vivre verticalement, à manger avec vue sur la mer et à comprendre pourquoi les dieux ont choisi cette côte.",
        ar: "ساحل أمالفي هو مسرح طبيعي حيث البحر الأبيض المتوسط هو البطل المطلق. تتسلق المنازل الصخور كما في مشهد ميلاد عمودي، مطلية بألوان الليمون والبحر. كل منحنى في الطريق يكشف عن بطاقة بريدية جديدة: بوسيتانو تنحدر نحو البحر، رافيلو معلقة بين السماء والماء، أمالفي بتاريخها كجمهورية بحرية. هنا الحياة حلوة مثل الليمونشيلو، مكثفة مثل عطر الياسمين، عمودية مثل مدرجات الليمون. استعد للعيش عموديًا، وتناول الطعام مع إطلالات على البحر، وفهم لماذا اختارت الآلهة هذا الساحل.",
        zh: "阿马尔菲海岸是一个自然剧场，地中海是绝对的主角。房屋像垂直的耶稣诞生场景一样攀爬在岩石上，涂着柠檬和大海的颜色。道路的每个弯道都展现出新的明信片：波西塔诺倾泻而下到海边，拉韦洛悬浮在天空和水之间，阿马尔菲有着海上共和国的历史。这里的生活甜如柠檬酒，浓烈如茉莉花香，垂直如柠檬梯田。准备垂直生活，面朝大海用餐，理解为什么众神选择了这片海岸。",
        hi: "अमाल्फी तट एक प्राकृतिक रंगमंच है जहाँ भूमध्य सागर पूर्ण नायक है। घर चट्टान पर चढ़ते हैं जैसे एक ऊर्ध्वाधर जन्म दृश्य में, नींबू और समुद्र के रंगों में चित्रित। सड़क का हर मोड़ एक नया पोस्टकार्ड प्रकट करता है: पोसिटानो समुद्र की ओर झरना, रावेलो आकाश और पानी के बीच निलंबित, अमाल्फी अपने समुद्री गणराज्य के इतिहास के साथ। यहाँ जीवन लिमोन्सेलो जैसा मीठा है, चमेली के इत्र जैसा तीव्र, नींबू की छतों जैसा ऊर्ध्वाधर। ऊर्ध्वाधर रूप से जीने, समुद्र के दृश्यों के साथ खाने, और समझने के लिए तैयार रहें कि देवताओं ने इस तट को क्यों चुना।"
    },
    "Comporta": {
        it: "Comporta è il segreto meglio custodito del Portogallo, dove il tempo scorre al ritmo delle maree. Dune di sabbia proteggono risaie che si specchiano nell'Atlantico, mentre cicogne bianche nidificano sui tetti di paglia. È un luogo di contrasti sottili: pescatori che diventano chef stellati, capanne che nascondono design contemporaneo, semplicità che sussurra lusso. Le spiagge infinite sono battute dal vento e dalle onde, perfette per chi cerca l'essenziale. Qui imparerai che il vero lusso è lo spazio, che il riso può crescere vicino al mare, che la bellezza migliore è quella che non grida.",
        en: "Comporta is Portugal's best-kept secret, where time flows with the rhythm of tides. Sand dunes protect rice fields that mirror the Atlantic, while white storks nest on thatched roofs. It's a place of subtle contrasts: fishermen becoming starred chefs, huts hiding contemporary design, simplicity whispering luxury. The endless beaches are beaten by wind and waves, perfect for those seeking the essential. Here you'll learn that true luxury is space, that rice can grow near the sea, that the best beauty is the one that doesn't shout.",
        es: "Comporta es el secreto mejor guardado de Portugal, donde el tiempo fluye al ritmo de las mareas. Dunas de arena protegen arrozales que se reflejan en el Atlántico, mientras cigüeñas blancas anidan en techos de paja. Es un lugar de contrastes sutiles: pescadores que se convierten en chefs estrellados, cabañas que esconden diseño contemporáneo, simplicidad que susurra lujo. Las playas infinitas son azotadas por viento y olas, perfectas para quienes buscan lo esencial. Aquí aprenderás que el verdadero lujo es el espacio, que el arroz puede crecer cerca del mar, que la mejor belleza es la que no grita.",
        fr: "Comporta est le secret le mieux gardé du Portugal, où le temps s'écoule au rythme des marées. Les dunes de sable protègent les rizières qui se reflètent dans l'Atlantique, tandis que les cigognes blanches nichent sur les toits de chaume. C'est un lieu de contrastes subtils : des pêcheurs devenant chefs étoilés, des cabanes cachant du design contemporain, une simplicité qui murmure le luxe. Les plages infinies sont battues par le vent et les vagues, parfaites pour ceux qui recherchent l'essentiel. Ici, vous apprendrez que le vrai luxe est l'espace, que le riz peut pousser près de la mer, que la plus belle beauté est celle qui ne crie pas.",
        ar: "كومبورتا هي سر البرتغال الأفضل حفظًا، حيث يتدفق الوقت مع إيقاع المد والجزر. تحمي الكثبان الرملية حقول الأرز التي تعكس المحيط الأطلسي، بينما تعشش اللقالق البيضاء على أسطح القش. إنه مكان التناقضات الدقيقة: الصيادون يصبحون طهاة نجوم، الأكواخ تخفي التصميم المعاصر، البساطة تهمس بالفخامة. الشواطئ اللانهائية تضربها الرياح والأمواج، مثالية لأولئك الذين يبحثون عن الأساسي. هنا ستتعلم أن الرفاهية الحقيقية هي المساحة، وأن الأرز يمكن أن ينمو بالقرب من البحر، وأن أفضل جمال هو الذي لا يصرخ.",
        zh: "孔波尔塔是葡萄牙保守最好的秘密，时间随着潮汐的节奏流动。沙丘保护着映照大西洋的稻田，白鹳在茅草屋顶上筑巢。这是一个微妙对比的地方：渔民成为米其林厨师，小屋隐藏着当代设计，简约低语着奢华。无尽的海滩被风浪拍打，完美适合寻求本质的人。在这里你会学到真正的奢侈是空间，稻米可以在海边生长，最好的美是不张扬的美。",
        hi: "कॉम्पोर्टा पुर्तगाल का सबसे अच्छी तरह से रखा गया रहस्य है, जहाँ समय ज्वार की लय के साथ बहता है। रेत के टीले चावल के खेतों की रक्षा करते हैं जो अटलांटिक को प्रतिबिंबित करते हैं, जबकि सफेद सारस फूस की छतों पर घोंसला बनाते हैं। यह सूक्ष्म विरोधाभासों का स्थान है: मछुआरे स्टार शेफ बनते हैं, झोपड़ियाँ समकालीन डिज़ाइन छुपाती हैं, सादगी विलासिता की फुसफुसाहट करती है। अंतहीन समुद्र तट हवा और लहरों से पीटे जाते हैं, उन लोगों के लिए एकदम सही जो आवश्यक की तलाश करते हैं। यहाँ आप सीखेंगे कि सच्ची विलासिता स्थान है, कि चावल समुद्र के पास उग सकता है, कि सबसे अच्छी सुंदरता वह है जो चिल्लाती नहीं है।"
    },
    "Gili Islands": {
        it: "Le Gili sono tre puntini nell'oceano dove le automobili sono bandite e il tempo si misura in tramonti. Tartarughe marine nuotano tra coralli colorati, mentre sulla spiaggia i cavalli trasportano viaggiatori e sogni. È un paradiso in miniatura dove la semplicità regna sovrana: capanne sulla spiaggia, pesce alla griglia, stelle cadenti sopra l'equatore. Ogni isola ha la sua personalità: Trawangan festaiola, Meno intima, Air equilibrata. Qui scoprirai che il paradiso non ha bisogno di lusso, che le tartarughe sono sagge, che a volte tre piccole isole possono contenere un universo intero.",
        en: "The Gilis are three dots in the ocean where cars are banned and time is measured in sunsets. Sea turtles swim among colorful corals, while on the beach horses transport travelers and dreams. It's a miniature paradise where simplicity reigns supreme: beach huts, grilled fish, shooting stars above the equator. Each island has its personality: party Trawangan, intimate Meno, balanced Air. Here you'll discover that paradise doesn't need luxury, that turtles are wise, that sometimes three small islands can contain an entire universe.",
        es: "Las Gili son tres puntitos en el océano donde los coches están prohibidos y el tiempo se mide en atardeceres. Tortugas marinas nadan entre corales coloridos, mientras en la playa los caballos transportan viajeros y sueños. Es un paraíso en miniatura donde la simplicidad reina suprema: cabañas en la playa, pescado a la parrilla, estrellas fugaces sobre el ecuador. Cada isla tiene su personalidad: Trawangan fiestera, Meno íntima, Air equilibrada. Aquí descubrirás que el paraíso no necesita lujo, que las tortugas son sabias, que a veces tres pequeñas islas pueden contener un universo entero.",
        fr: "Les Gili sont trois points dans l'océan où les voitures sont interdites et où le temps se mesure en couchers de soleil. Les tortues de mer nagent parmi les coraux colorés, tandis que sur la plage, les chevaux transportent voyageurs et rêves. C'est un paradis miniature où la simplicité règne en maître : cabanes sur la plage, poisson grillé, étoiles filantes au-dessus de l'équateur. Chaque île a sa personnalité : Trawangan festive, Meno intime, Air équilibrée. Ici, vous découvrirez que le paradis n'a pas besoin de luxe, que les tortues sont sages, que parfois trois petites îles peuvent contenir un univers entier.",
        ar: "جزر جيلي هي ثلاث نقاط في المحيط حيث تُحظر السيارات ويُقاس الوقت بغروب الشمس. تسبح السلاحف البحرية بين الشعاب المرجانية الملونة، بينما على الشاطئ تنقل الخيول المسافرين والأحلام. إنها جنة مصغرة حيث تسود البساطة: أكواخ على الشاطئ، سمك مشوي، نجوم متساقطة فوق خط الاستواء. لكل جزيرة شخصيتها: تراوانجان الحفلات، مينو الحميمة، إير المتوازنة. هنا ستكتشف أن الجنة لا تحتاج إلى رفاهية، وأن السلاحف حكيمة، وأن ثلاث جزر صغيرة يمكن أن تحتوي أحيانًا على كون بأكمله.",
        zh: "吉利群岛是海洋中的三个点，这里禁止汽车，时间以日落来衡量。海龟在彩色珊瑚间游泳，而海滩上的马匹运送着旅行者和梦想。这是一个微型天堂，简约至上：海滩小屋、烤鱼、赤道上空的流星。每个岛都有自己的个性：派对的德拉旺岸、亲密的美诺、平衡的艾尔。在这里你会发现天堂不需要奢华，海龟是智慧的，有时三个小岛可以包含整个宇宙。",
        hi: "गिली तीन बिंदु हैं समुद्र में जहाँ कारें प्रतिबंधित हैं और समय सूर्यास्त में मापा जाता है। समुद्री कछुए रंगीन प्रवालों के बीच तैरते हैं, जबकि समुद्र तट पर घोड़े यात्रियों और सपनों को ले जाते हैं। यह एक लघु स्वर्ग है जहाँ सादगी सर्वोच्च है: समुद्र तट की झोपड़ियाँ, ग्रिल्ड मछली, भूमध्य रेखा के ऊपर टूटते तारे। प्रत्येक द्वीप का अपना व्यक्तित्व है: पार्टी त्रवंगन, अंतरंग मेनो, संतुलित एयर। यहाँ आप खोजेंगे कि स्वर्ग को विलासिता की आवश्यकता नहीं है, कि कछुए बुद्धिमान हैं, कि कभी-कभी तीन छोटे द्वीप एक पूरे ब्रह्मांड को समा सकते हैं।"
    },
    // CITTÀ
    "Ljubljana": {
        it: "Ljubljana è una città che sembra uscita da una fiaba, con draghi sui ponti e un castello che veglia dall'alto. Il fiume Ljubljanica serpeggia tra caffè all'aperto e mercati colorati, mentre gli studenti in bicicletta animano vicoli medievali. È una capitale a misura d'uomo, verde e vivibile, dove l'architettura di Plečnik dialoga con artisti di strada. Qui scoprirai che piccolo è bello, che i draghi portano fortuna, che una città può essere una sala da concerto a cielo aperto. Ljubljana ti insegna che non serve essere grandi per essere indimenticabili.",
        en: "Ljubljana is a city that seems straight out of a fairy tale, with dragons on bridges and a castle watching from above. The Ljubljanica River winds between outdoor cafés and colorful markets, while students on bicycles animate medieval alleys. It's a human-sized capital, green and livable, where Plečnik's architecture dialogues with street artists. Here you'll discover that small is beautiful, that dragons bring luck, that a city can be an open-air concert hall. Ljubljana teaches you that you don't need to be big to be unforgettable.",
        es: "Ljubljana es una ciudad que parece salida de un cuento de hadas, con dragones en los puentes y un castillo que vigila desde lo alto. El río Ljubljanica serpentea entre cafés al aire libre y mercados coloridos, mientras estudiantes en bicicleta animan callejones medievales. Es una capital a escala humana, verde y habitable, donde la arquitectura de Plečnik dialoga con artistas callejeros. Aquí descubrirás que pequeño es hermoso, que los dragones traen suerte, que una ciudad puede ser una sala de conciertos al aire libre. Ljubljana te enseña que no necesitas ser grande para ser inolvidable.",
        fr: "Ljubljana est une ville qui semble sortie d'un conte de fées, avec des dragons sur les ponts et un château qui veille d'en haut. La rivière Ljubljanica serpente entre cafés en plein air et marchés colorés, tandis que les étudiants à vélo animent les ruelles médiévales. C'est une capitale à taille humaine, verte et vivable, où l'architecture de Plečnik dialogue avec les artistes de rue. Ici, vous découvrirez que petit est beau, que les dragons portent chance, qu'une ville peut être une salle de concert à ciel ouvert. Ljubljana vous apprend qu'il n'est pas nécessaire d'être grand pour être inoubliable.",
        ar: "ليوبليانا مدينة تبدو وكأنها خرجت من قصة خرافية، مع تنانين على الجسور وقلعة تراقب من الأعلى. ينحني نهر ليوبليانيتسا بين المقاهي المفتوحة والأسواق الملونة، بينما ينشط الطلاب على الدراجات في الأزقة القروسطية. إنها عاصمة بحجم إنساني، خضراء وصالحة للعيش، حيث تتحاور عمارة بليتشنيك مع فناني الشوارع. هنا ستكتشف أن الصغير جميل، وأن التنانين تجلب الحظ، وأن المدينة يمكن أن تكون قاعة حفلات في الهواء الطلق. ليوبليانا تعلمك أنك لا تحتاج أن تكون كبيرًا لتكون لا تُنسى.",
        zh: "卢布尔雅那是一座仿佛从童话中走出的城市，桥上有龙，城堡从高处守望。卢布尔雅尼察河在露天咖啡馆和彩色市场间蜿蜒，骑自行车的学生让中世纪小巷充满活力。这是一个人性化的首都，绿色宜居，普列奇尼克的建筑与街头艺术家对话。在这里你会发现小即是美，龙带来好运，一座城市可以是露天音乐厅。卢布尔雅那教会你不需要很大就能令人难忘。",
        hi: "ल्युब्लजाना एक ऐसा शहर है जो परी कथा से निकला लगता है, पुलों पर ड्रैगन और ऊपर से देखता एक महल। ल्युब्लजानिका नदी खुली कैफे और रंगीन बाज़ारों के बीच घूमती है, जबकि साइकिल पर छात्र मध्ययुगीन गलियों को जीवंत करते हैं। यह मानव आकार की राजधानी है, हरी और रहने योग्य, जहाँ प्लेच्निक की वास्तुकला सड़क कलाकारों के साथ संवाद करती है। यहाँ आप खोजेंगे कि छोटा सुंदर है, कि ड्रैगन भाग्य लाते हैं, कि एक शहर खुली हवा में कॉन्सर्ट हॉल हो सकता है। ल्युब्लजाना आपको सिखाता है कि अविस्मरणीय होने के लिए बड़ा होना ज़रूरी नहीं है।"
    },
    "Porto": {
        it: "Porto è una città che si arrampica sulle colline come un anfiteatro sul Douro, con case colorate che sembrano scatole impilate da un bambino gigante. Il vino porto invecchia in cantine secolari mentre i tram d'epoca sferragliano su binari impossibili. È una città di contrasti: azulejos barocchi e street art contemporanea, francesinha pesanti e chef innovativi, fado malinconico e notti vivaci. Il ponte Dom Luís I unisce non solo due sponde ma due anime. Qui imparerai che la saudade non si traduce, che il fiume sa di mare, che la bellezza può essere decadente e proprio per questo irresistibile.",
        en: "Porto is a city that climbs the hills like an amphitheater over the Douro, with colorful houses that look like boxes stacked by a giant child. Port wine ages in centuries-old cellars while vintage trams rattle on impossible tracks. It's a city of contrasts: baroque azulejos and contemporary street art, heavy francesinhas and innovative chefs, melancholic fado and lively nights. The Dom Luís I bridge connects not just two banks but two souls. Here you'll learn that saudade doesn't translate, that the river tastes of sea, that beauty can be decadent and precisely for this reason irresistible.",
        es: "Oporto es una ciudad que trepa por las colinas como un anfiteatro sobre el Duero, con casas coloridas que parecen cajas apiladas por un niño gigante. El vino de Oporto envejece en bodegas centenarias mientras los tranvías antiguos traquetean sobre rieles imposibles. Es una ciudad de contrastes: azulejos barrocos y arte callejero contemporáneo, francesinhas pesadas y chefs innovadores, fado melancólico y noches animadas. El puente Dom Luís I une no solo dos orillas sino dos almas. Aquí aprenderás que saudade no se traduce, que el río sabe a mar, que la belleza puede ser decadente y precisamente por eso irresistible.",
        fr: "Porto est une ville qui grimpe sur les collines comme un amphithéâtre sur le Douro, avec des maisons colorées qui ressemblent à des boîtes empilées par un enfant géant. Le vin de Porto vieillit dans des caves séculaires tandis que les tramways d'époque ferraillent sur des rails impossibles. C'est une ville de contrastes : azulejos baroques et street art contemporain, francesinhas lourdes et chefs innovants, fado mélancolique et nuits animées. Le pont Dom Luís I relie non seulement deux rives mais deux âmes. Ici, vous apprendrez que la saudade ne se traduit pas, que le fleuve a le goût de la mer, que la beauté peut être décadente et justement pour cela irrésistible.",
        ar: "بورتو مدينة تتسلق التلال مثل مدرج فوق نهر دورو، مع منازل ملونة تبدو مثل صناديق مكدسة من قبل طفل عملاق. نبيذ البورت يتقادم في أقبية عمرها قرون بينما تقعقع الترام القديمة على مسارات مستحيلة. إنها مدينة التناقضات: الأزوليجوس الباروكية والفن الشارعي المعاصر، الفرانسيزينها الثقيلة والطهاة المبتكرون، الفادو الحزين والليالي الحية. جسر دوم لويس الأول يربط ليس فقط ضفتين بل روحين. هنا ستتعلم أن السودادي لا تترجم، وأن النهر له طعم البحر، وأن الجمال يمكن أن يكون منحطًا ولهذا السبب بالضبط لا يقاوم.",
        zh: "波尔图是一座像圆形剧场一样爬上杜罗河山丘的城市，五颜六色的房子看起来像巨型孩子堆叠的盒子。波特酒在百年酒窖中陈酿，而复古电车在不可能的轨道上咔嗒作响。这是一座对比之城：巴洛克瓷砖和当代街头艺术，厚重的法式三明治和创新厨师，忧郁的法朵和热闹的夜晚。路易一世大桥不仅连接两岸，还连接两个灵魂。在这里你会学到saudade无法翻译，河流有海的味道，美可以是颓废的，正因如此才不可抗拒。",
        hi: "पोर्टो एक ऐसा शहर है जो डोरो के ऊपर एक एम्फीथिएटर की तरह पहाड़ियों पर चढ़ता है, रंगीन घरों के साथ जो एक विशाल बच्चे द्वारा स्टैक किए गए बक्से की तरह दिखते हैं। पोर्ट वाइन सदियों पुराने तहखानों में पुरानी होती है जबकि विंटेज ट्राम असंभव पटरियों पर खड़खड़ाती हैं। यह विरोधाभासों का शहर है: बारोक अज़ुलेजोस और समकालीन स्ट्रीट आर्ट, भारी फ्रांसेसिन्हा और नवीन शेफ, उदास फाडो और जीवंत रातें। डोम लुइस I पुल न केवल दो किनारों को बल्कि दो आत्माओं को जोड़ता है। यहाँ आप सीखेंगे कि सौदाद का अनुवाद नहीं होता, कि नदी में समुद्र का स्वाद है, कि सुंदरता पतनशील हो सकती है और ठीक इसी कारण से अप्रतिरोध्य।"
    },
    "Bruges": {
        it: "Bruges è una città sospesa nel tempo, dove i cigni scivolano su canali che riflettono case medievali perfettamente conservate. Le campane del Belfort scandiscono ore che sembrano appartenere a un altro secolo, mentre i cavalli trainano carrozze su ponti di pietra. È un libro di fiabe in mattoni e acqua, con cioccolaterie che profumano vicoli lastricati e birrai che custodiscono ricette monastiche. Ma Bruges non è solo nostalgia: è viva, con musei d'avanguardia nascosti in facciate gotiche. Qui scoprirai che il tempo può fermarsi senza morire, che il cioccolato è una forma d'arte, che a volte la perfezione esiste davvero.",
        en: "Bruges is a city suspended in time, where swans glide on canals reflecting perfectly preserved medieval houses. The Belfort bells mark hours that seem to belong to another century, while horses pull carriages over stone bridges. It's a fairy tale book in bricks and water, with chocolate shops perfuming cobbled alleys and brewers guarding monastic recipes. But Bruges isn't just nostalgia: it's alive, with avant-garde museums hidden in Gothic facades. Here you'll discover that time can stop without dying, that chocolate is an art form, that sometimes perfection really exists.",
        es: "Brujas es una ciudad suspendida en el tiempo, donde los cisnes se deslizan por canales que reflejan casas medievales perfectamente conservadas. Las campanas del Belfort marcan horas que parecen pertenecer a otro siglo, mientras los caballos tiran de carruajes sobre puentes de piedra. Es un libro de cuentos en ladrillos y agua, con chocolaterías perfumando callejones empedrados y cerveceros que guardan recetas monásticas. Pero Brujas no es solo nostalgia: está viva, con museos de vanguardia escondidos en fachadas góticas. Aquí descubrirás que el tiempo puede detenerse sin morir, que el chocolate es una forma de arte, que a veces la perfección realmente existe.",
        fr: "Bruges est une ville suspendue dans le temps, où les cygnes glissent sur des canaux reflétant des maisons médiévales parfaitement conservées. Les cloches du Beffroi marquent des heures qui semblent appartenir à un autre siècle, tandis que les chevaux tirent des calèches sur des ponts de pierre. C'est un livre de contes de fées en briques et en eau, avec des chocolateries parfumant les ruelles pavées et des brasseurs gardant des recettes monastiques. Mais Bruges n'est pas que nostalgie : elle est vivante, avec des musées d'avant-garde cachés dans des façades gothiques. Ici, vous découvrirez que le temps peut s'arrêter sans mourir, que le chocolat est une forme d'art, que parfois la perfection existe vraiment.",
        ar: "بروج مدينة معلقة في الزمن، حيث تنزلق البجع على القنوات التي تعكس منازل القرون الوسطى المحفوظة بشكل مثالي. أجراس بلفورت تحدد ساعات تبدو وكأنها تنتمي إلى قرن آخر، بينما تسحب الخيول العربات فوق الجسور الحجرية. إنه كتاب قصص خرافية من الطوب والماء، مع محلات الشوكولاتة التي تعطر الأزقة المرصوفة بالحصى وصانعو البيرة الذين يحرسون الوصفات الرهبانية. لكن بروج ليست مجرد حنين: إنها حية، مع متاحف طليعية مخبأة في واجهات قوطية. هنا ستكتشف أن الوقت يمكن أن يتوقف دون أن يموت، وأن الشوكولاتة شكل من أشكال الفن، وأن الكمال موجود حقًا أحيانًا.",
        zh: "布鲁日是一座悬浮在时间中的城市，天鹅在运河上滑行，倒映着保存完好的中世纪房屋。钟楼的钟声标记着似乎属于另一个世纪的时刻，而马匹在石桥上拉着马车。这是一本用砖块和水写成的童话书，巧克力店为鹅卵石小巷增添香味，酿酒师守护着修道院的配方。但布鲁日不仅仅是怀旧：它是活着的，前卫博物馆隐藏在哥特式外墙中。在这里你会发现时间可以停止而不死亡，巧克力是一种艺术形式，有时完美真的存在。",
        hi: "ब्रुज एक ऐसा शहर है जो समय में निलंबित है, जहाँ हंस नहरों पर तैरते हैं जो पूरी तरह से संरक्षित मध्ययुगीन घरों को प्रतिबिंबित करती हैं। बेलफोर्ट की घंटियाँ ऐसे घंटे चिह्नित करती हैं जो दूसरी सदी के लगते हैं, जबकि घोड़े पत्थर के पुलों पर गाड़ियाँ खींचते हैं। यह ईंटों और पानी में एक परी कथा की किताब है, चॉकलेट की दुकानों से कोब्ल्ड गलियों में सुगंध आती है और शराब बनाने वाले मठवासी व्यंजनों की रक्षा करते हैं। लेकिन ब्रुज केवल पुरानी यादें नहीं है: यह जीवित है, गोथिक अग्रभागों में छिपे अवांट-गार्डे संग्रहालयों के साथ। यहाँ आप खोजेंगे कि समय मरे बिना रुक सकता है, कि चॉकलेट एक कला रूप है, कि कभी-कभी पूर्णता वास्तव में मौजूद होती है।"
    },
    "Salzburg": {
        it: "Salzburg è musica pietrificata in architettura, dove Mozart nacque e The Sound of Music vive ancora. La fortezza Hohensalzburg domina una città che sembra un palcoscenico barocco, con chiese che sono concerti di pietra e giardini che sono sinfonie verdi. Il fiume Salzach divide ma non separa: da una parte la città vecchia patrimonio UNESCO, dall'altra la vita moderna che pulsa discreta. D'inverno sa di pan di zenzero e vin brulé, d'estate risuona di festival che attirano il mondo. Qui capirai che la bellezza può essere disciplina, che le montagne possono entrare in città, che alcune città nascono per la grandezza.",
        en: "Salzburg is music petrified into architecture, where Mozart was born and The Sound of Music still lives. Hohensalzburg fortress dominates a city that looks like a baroque stage, with churches that are stone concerts and gardens that are green symphonies. The Salzach river divides but doesn't separate: on one side the UNESCO old town, on the other modern life pulsing discretely. In winter it tastes of gingerbread and mulled wine, in summer it resonates with festivals that attract the world. Here you'll understand that beauty can be discipline, that mountains can enter the city, that some cities are born for greatness.",
        es: "Salzburgo es música petrificada en arquitectura, donde nació Mozart y The Sound of Music aún vive. La fortaleza Hohensalzburg domina una ciudad que parece un escenario barroco, con iglesias que son conciertos de piedra y jardines que son sinfonías verdes. El río Salzach divide pero no separa: de un lado la ciudad vieja patrimonio UNESCO, del otro la vida moderna que late discreta. En invierno sabe a pan de jengibre y vino caliente, en verano resuena con festivales que atraen al mundo. Aquí entenderás que la belleza puede ser disciplina, que las montañas pueden entrar en la ciudad, que algunas ciudades nacen para la grandeza.",
        fr: "Salzbourg est de la musique pétrifiée en architecture, où Mozart est né et où The Sound of Music vit encore. La forteresse de Hohensalzburg domine une ville qui ressemble à une scène baroque, avec des églises qui sont des concerts de pierre et des jardins qui sont des symphonies vertes. La rivière Salzach divise mais ne sépare pas : d'un côté la vieille ville patrimoine de l'UNESCO, de l'autre la vie moderne qui bat discrètement. En hiver, elle a le goût du pain d'épices et du vin chaud, en été, elle résonne de festivals qui attirent le monde. Ici, vous comprendrez que la beauté peut être discipline, que les montagnes peuvent entrer dans la ville, que certaines villes sont nées pour la grandeur.",
        ar: "سالزبورغ هي موسيقى متحجرة في العمارة، حيث ولد موزارت وحيث لا يزال صوت الموسيقى يعيش. قلعة هوهنسالزبورغ تهيمن على مدينة تبدو مثل مسرح باروكي، مع كنائس هي حفلات موسيقية حجرية وحدائق هي سيمفونيات خضراء. نهر سالزاخ يقسم لكن لا يفصل: من جانب المدينة القديمة التراث العالمي لليونسكو، من الجانب الآخر الحياة الحديثة التي تنبض بهدوء. في الشتاء طعمها مثل خبز الزنجبيل والنبيذ الساخن، في الصيف تتردد مع المهرجانات التي تجذب العالم. هنا ستفهم أن الجمال يمكن أن يكون انضباطًا، وأن الجبال يمكن أن تدخل المدينة، وأن بعض المدن تولد للعظمة.",
        zh: "萨尔茨堡是石化成建筑的音乐，莫扎特在这里出生，《音乐之声》仍然活着。霍亨萨尔茨堡要塞俯瞰着一座看起来像巴洛克舞台的城市，教堂是石头音乐会，花园是绿色交响乐。萨尔察赫河分割但不分离：一边是联合国教科文组织世界遗产老城，另一边是低调跳动的现代生活。冬天有姜饼和热红酒的味道，夏天响彻吸引世界的音乐节。在这里你会明白美可以是纪律，山脉可以进入城市，有些城市生来就是为了伟大。",
        hi: "साल्ज़बर्ग वास्तुकला में पत्थर बनी संगीत है, जहाँ मोज़ार्ट का जन्म हुआ और द साउंड ऑफ़ म्यूज़िक अभी भी जीवित है। होहेनसाल्ज़बर्ग किला एक ऐसे शहर पर हावी है जो बारोक मंच की तरह दिखता है, चर्च जो पत्थर के संगीत कार्यक्रम हैं और बगीचे जो हरी सिम्फनी हैं। साल्ज़ाच नदी विभाजित करती है लेकिन अलग नहीं करती: एक तरफ यूनेस्को पुराना शहर, दूसरी तरफ आधुनिक जीवन जो चुपचाप धड़कता है। सर्दियों में इसका स्वाद जिंजरब्रेड और मुल्ड वाइन जैसा होता है, गर्मियों में यह उत्सवों से गूंजता है जो दुनिया को आकर्षित करते हैं। यहाँ आप समझेंगे कि सुंदरता अनुशासन हो सकती है, कि पहाड़ शहर में प्रवेश कर सकते हैं, कि कुछ शहर महानता के लिए पैदा होते हैं।"
    },
    "Ubud": {
        it: "Ubud è il cuore spirituale di Bali, dove le risaie a terrazza sembrano scale verso il cielo e le scimmie custodiscono templi millenari. È un luogo di contrasti: yogi al mattino e party la sera, tradizione e innovazione, sacro e profano che danzano insieme come in una cerimonia balinese. Gli artisti trovano ispirazione tra frangipani e incenso, mentre i guaritori tradizionali convivono con retreat di lusso. Qui il tempo scorre diverso, misurato in offerte agli dei e sorrisi sinceri. Ubud ti insegna che la spiritualità può essere quotidiana, che il paradiso ha odore di gelsomino e sa di nasi goreng.",
        en: "Ubud is Bali's spiritual heart, where terraced rice fields look like stairs to heaven and monkeys guard millenary temples. It's a place of contrasts: yogis in the morning and parties at night, tradition and innovation, sacred and profane dancing together like in a Balinese ceremony. Artists find inspiration among frangipani and incense, while traditional healers coexist with luxury retreats. Here time flows differently, measured in offerings to gods and sincere smiles. Ubud teaches you that spirituality can be daily, that paradise smells of jasmine and tastes of nasi goreng.",
        es: "Ubud es el corazón espiritual de Bali, donde los arrozales en terrazas parecen escaleras al cielo y los monos custodian templos milenarios. Es un lugar de contrastes: yoguis por la mañana y fiestas por la noche, tradición e innovación, sagrado y profano que bailan juntos como en una ceremonia balinesa. Los artistas encuentran inspiración entre frangipanis e incienso, mientras los sanadores tradicionales conviven con retiros de lujo. Aquí el tiempo fluye diferente, medido en ofrendas a los dioses y sonrisas sinceras. Ubud te enseña que la espiritualidad puede ser cotidiana, que el paraíso huele a jazmín y sabe a nasi goreng.",
        fr: "Ubud est le cœur spirituel de Bali, où les rizières en terrasses ressemblent à des escaliers vers le ciel et où les singes gardent des temples millénaires. C'est un lieu de contrastes : yogis le matin et fêtes le soir, tradition et innovation, sacré et profane dansant ensemble comme dans une cérémonie balinaise. Les artistes trouvent l'inspiration parmi les frangipaniers et l'encens, tandis que les guérisseurs traditionnels coexistent avec des retraites de luxe. Ici, le temps s'écoule différemment, mesuré en offrandes aux dieux et en sourires sincères. Ubud vous apprend que la spiritualité peut être quotidienne, que le paradis sent le jasmin et a le goût du nasi goreng.",
        ar: "أوبود هي القلب الروحي لبالي، حيث تبدو حقول الأرز المدرجة مثل سلالم إلى السماء والقرود تحرس المعابد الألفية. إنه مكان التناقضات: اليوغيون في الصباح والحفلات في الليل، التقليد والابتكار، المقدس والدنيوي يرقصان معًا كما في احتفال بالي. يجد الفنانون الإلهام بين الفرانجيباني والبخور، بينما يتعايش المعالجون التقليديون مع الخلوات الفاخرة. هنا يتدفق الوقت بشكل مختلف، يُقاس بالقرابين للآلهة والابتسامات الصادقة. أوبود تعلمك أن الروحانية يمكن أن تكون يومية، وأن الجنة لها رائحة الياسمين وطعم الناسي جورينج.",
        zh: "乌布是巴厘岛的精神中心，梯田看起来像通往天堂的阶梯，猴子守护着千年寺庙。这是一个充满对比的地方：早上的瑜伽修行者和晚上的派对，传统与创新，神圣与世俗像巴厘岛仪式一样共舞。艺术家在鸡蛋花和香火中寻找灵感，而传统治疗师与豪华静修中心共存。这里时间流逝不同，以对神的供品和真诚的微笑来衡量。乌布教会你灵性可以是日常的，天堂闻起来像茉莉花，尝起来像印尼炒饭。",
        hi: "उबुद बाली का आध्यात्मिक हृदय है, जहाँ सीढ़ीदार चावल के खेत स्वर्ग की सीढ़ियों की तरह दिखते हैं और बंदर सहस्राब्दी मंदिरों की रक्षा करते हैं। यह विरोधाभासों का स्थान है: सुबह योगी और रात में पार्टियाँ, परंपरा और नवाचार, पवित्र और अपवित्र एक बाली समारोह की तरह एक साथ नृत्य करते हैं। कलाकार फ्रांगीपानी और धूप के बीच प्रेरणा पाते हैं, जबकि पारंपरिक चिकित्सक विलासिता रिट्रीट के साथ सह-अस्तित्व में हैं। यहाँ समय अलग तरह से बहता है, देवताओं को चढ़ावे और ईमानदार मुस्कान में मापा जाता है। उबुद आपको सिखाता है कि आध्यात्मिकता दैनिक हो सकती है, कि स्वर्ग में चमेली की गंध है और नासी गोरेंग का स्वाद है।"
    },
    // MONTAGNA
    "Madeira": {
        it: "Madeira è un giardino galleggiante nell'Atlantico, dove la primavera è eterna e le montagne toccano le nuvole. Le levadas, antichi canali d'irrigazione, sono diventate sentieri che attraversano foreste di laurisilva preistoriche. Funchal si arrampica su pendii impossibili, mentre i vigneti eroici producono vino che sa di sole e oceano. È un'isola di microclimi, dove puoi nuotare nell'oceano al mattino e camminare tra le nuvole al pomeriggio. Qui scoprirai che il paradiso non è piatto, che i fiori possono crescere tutto l'anno, che a volte le isole sono mondi completi.",
        en: "Madeira is a floating garden in the Atlantic, where spring is eternal and mountains touch the clouds. The levadas, ancient irrigation channels, have become paths crossing prehistoric laurisilva forests. Funchal climbs impossible slopes, while heroic vineyards produce wine that tastes of sun and ocean. It's an island of microclimates, where you can swim in the ocean in the morning and walk among clouds in the afternoon. Here you'll discover that paradise isn't flat, that flowers can grow all year, that sometimes islands are complete worlds.",
        es: "Madeira es un jardín flotante en el Atlántico, donde la primavera es eterna y las montañas tocan las nubes. Las levadas, antiguos canales de riego, se han convertido en senderos que atraviesan bosques prehistóricos de laurisilva. Funchal trepa por pendientes imposibles, mientras los viñedos heroicos producen vino que sabe a sol y océano. Es una isla de microclimas, donde puedes nadar en el océano por la mañana y caminar entre las nubes por la tarde. Aquí descubrirás que el paraíso no es plano, que las flores pueden crecer todo el año, que a veces las islas son mundos completos.",
        fr: "Madère est un jardin flottant dans l'Atlantique, où le printemps est éternel et où les montagnes touchent les nuages. Les levadas, anciens canaux d'irrigation, sont devenus des sentiers traversant des forêts préhistoriques de laurisilva. Funchal grimpe sur des pentes impossibles, tandis que les vignobles héroïques produisent du vin qui a le goût du soleil et de l'océan. C'est une île de microclimats, où vous pouvez nager dans l'océan le matin et marcher parmi les nuages l'après-midi. Ici, vous découvrirez que le paradis n'est pas plat, que les fleurs peuvent pousser toute l'année, que parfois les îles sont des mondes complets.",
        ar: "ماديرا هي حديقة عائمة في المحيط الأطلسي، حيث الربيع أبدي والجبال تلامس السحب. أصبحت الليفاداس، قنوات الري القديمة، مسارات تعبر غابات لوريسيلفا ما قبل التاريخ. فونشال تتسلق منحدرات مستحيلة، بينما تنتج كروم العنب البطولية نبيذًا له طعم الشمس والمحيط. إنها جزيرة من المناخات المحلية، حيث يمكنك السباحة في المحيط في الصباح والسير بين الغيوم في فترة ما بعد الظهر. هنا ستكتشف أن الجنة ليست مسطحة، وأن الزهور يمكن أن تنمو طوال العام، وأن الجزر أحيانًا تكون عوالم كاملة.",
        zh: "马德拉是大西洋上的漂浮花园，这里春天永恒，山脉触及云端。古老的灌溉渠道莱瓦达斯已成为穿越史前月桂森林的小径。丰沙尔攀爬在不可能的斜坡上，而英勇的葡萄园生产出带有阳光和海洋味道的葡萄酒。这是一个微气候岛屿，你可以早上在海里游泳，下午在云中漫步。在这里你会发现天堂不是平的，花可以全年生长，有时岛屿是完整的世界。",
        hi: "मडेरा अटलांटिक में एक तैरता हुआ बगीचा है, जहाँ वसंत शाश्वत है और पहाड़ बादलों को छूते हैं। लेवाडास, प्राचीन सिंचाई चैनल, प्रागैतिहासिक लॉरिसिल्वा जंगलों को पार करने वाले रास्ते बन गए हैं। फुंचल असंभव ढलानों पर चढ़ता है, जबकि वीर अंगूर के बाग शराब का उत्पादन करते हैं जिसका स्वाद सूरज और समुद्र जैसा है। यह माइक्रोक्लाइमेट का द्वीप है, जहाँ आप सुबह समुद्र में तैर सकते हैं और दोपहर में बादलों के बीच चल सकते हैं। यहाँ आप खोजेंगे कि स्वर्ग सपाट नहीं है, कि फूल पूरे साल उग सकते हैं, कि कभी-कभी द्वीप पूर्ण दुनिया होते हैं।"
    },
    "Slovenia Alps": {
        it: "Le Alpi Slovene sono un segreto sussurrato tra giganti più famosi. Qui il Triglav veglia su valli dove il tempo scorre lento come la Soča smeraldina. I villaggi alpini sembrano presepi abitati, con chiese che suonano campane antiche e mucche che portano fiori. Il lago di Bled con la sua isola è una cartolina vivente, ma le vere magie sono nascoste: gole segrete, cascate che cantano, rifugi dove la grappa cura tutto. In inverno la neve trasforma tutto in silenzio bianco, in estate i prati esplodono di colori. Qui capirai che non serve essere famosi per essere straordinari.",
        en: "The Slovenian Alps are a secret whispered among more famous giants. Here Triglav watches over valleys where time flows as slow as the emerald Soča. Alpine villages look like inhabited nativity scenes, with churches ringing ancient bells and cows wearing flowers. Lake Bled with its island is a living postcard, but the real magic is hidden: secret gorges, singing waterfalls, refuges where grappa cures everything. In winter snow transforms everything into white silence, in summer meadows explode with colors. Here you'll understand that you don't need to be famous to be extraordinary.",
        es: "Los Alpes Eslovenos son un secreto susurrado entre gigantes más famosos. Aquí el Triglav vigila valles donde el tiempo fluye tan lento como el esmeralda Soča. Los pueblos alpinos parecen belenes habitados, con iglesias que tocan campanas antiguas y vacas que llevan flores. El lago Bled con su isla es una postal viviente, pero las verdaderas magias están escondidas: gargantas secretas, cascadas que cantan, refugios donde la grappa lo cura todo. En invierno la nieve transforma todo en silencio blanco, en verano los prados explotan de colores. Aquí entenderás que no necesitas ser famoso para ser extraordinario.",
        fr: "Les Alpes slovènes sont un secret murmuré parmi des géants plus célèbres. Ici, le Triglav veille sur des vallées où le temps s'écoule aussi lentement que la Soča émeraude. Les villages alpins ressemblent à des crèches habitées, avec des églises qui sonnent des cloches anciennes et des vaches qui portent des fleurs. Le lac de Bled avec son île est une carte postale vivante, mais la vraie magie est cachée : gorges secrètes, cascades qui chantent, refuges où la grappa guérit tout. En hiver, la neige transforme tout en silence blanc, en été, les prairies explosent de couleurs. Ici, vous comprendrez qu'il n'est pas nécessaire d'être célèbre pour être extraordinaire.",
        ar: "جبال الألب السلوفينية هي سر يُهمس به بين العمالقة الأكثر شهرة. هنا يراقب تريغلاف الوديان حيث يتدفق الوقت ببطء مثل نهر سوتشا الزمردي. تبدو القرى الألبية مثل مشاهد ميلاد مأهولة، مع كنائس تقرع أجراسًا قديمة وأبقار ترتدي الزهور. بحيرة بليد بجزيرتها هي بطاقة بريدية حية، لكن السحر الحقيقي مخفي: مضائق سرية، شلالات تغني، ملاجئ حيث الغرابا تشفي كل شيء. في الشتاء يحول الثلج كل شيء إلى صمت أبيض، في الصيف تنفجر المروج بالألوان. هنا ستفهم أنك لا تحتاج أن تكون مشهورًا لتكون استثنائيًا.",
        zh: "斯洛文尼亚阿尔卑斯山是在更著名的巨人之间低语的秘密。这里特里格拉夫守望着山谷，时间像翡翠色的索察河一样缓慢流淌。高山村庄看起来像有人居住的耶稣诞生场景，教堂敲响古老的钟声，奶牛戴着花朵。布莱德湖及其岛屿是一张活的明信片，但真正的魔法是隐藏的：秘密峡谷、歌唱的瀑布、格拉巴酒治愈一切的避难所。冬天雪将一切变成白色的寂静，夏天草地绽放色彩。在这里你会明白不需要出名就能非凡。",
        hi: "स्लोवेनियाई आल्प्स अधिक प्रसिद्ध दिग्गजों के बीच फुसफुसाया गया रहस्य हैं। यहाँ त्रिग्लाव घाटियों पर नज़र रखता है जहाँ समय पन्ना सोचा की तरह धीमा बहता है। अल्पाइन गाँव बसे हुए जन्म दृश्यों की तरह दिखते हैं, चर्च प्राचीन घंटियाँ बजाते हैं और गायें फूल पहनती हैं। अपने द्वीप के साथ ब्लेड झील एक जीवित पोस्टकार्ड है, लेकिन असली जादू छिपा है: गुप्त घाटियाँ, गाती झरने, शरणस्थल जहाँ ग्रप्पा सब कुछ ठीक करता है। सर्दियों में बर्फ सब कुछ सफेद मौन में बदल देती है, गर्मियों में घास के मैदान रंगों से फट पड़ते हैं। यहाँ आप समझेंगे कि असाधारण होने के लिए प्रसिद्ध होना आवश्यक नहीं है।"
    },
    "Val d'Orcia": {
        it: "La Val d'Orcia è la Toscana dei sogni, dove i cipressi disegnano virgole nel paesaggio e le colline sembrano dipinte a mano. È un territorio modellato dall'uomo con la pazienza dei secoli, dove ogni curva racconta una storia. Pienza rinascimentale, Montalcino del Brunello, Bagno Vignoni con la sua piazza d'acqua termale. Le stagioni cambiano i colori come un pittore che non si stanca mai: verde tenero in primavera, oro in estate, rosso in autunno, argento d'inverno. Qui capirai che il paesaggio può essere arte, che il vino è cultura liquida, che la bellezza può nutrire l'anima.",
        en: "Val d'Orcia is the Tuscany of dreams, where cypresses draw commas in the landscape and hills seem hand-painted. It's a territory shaped by man with the patience of centuries, where every curve tells a story. Renaissance Pienza, Montalcino of Brunello, Bagno Vignoni with its thermal water square. Seasons change colors like a painter who never tires: tender green in spring, gold in summer, red in autumn, silver in winter. Here you'll understand that landscape can be art, that wine is liquid culture, that beauty can nourish the soul.",
        es: "Val d'Orcia es la Toscana de los sueños, donde los cipreses dibujan comas en el paisaje y las colinas parecen pintadas a mano. Es un territorio modelado por el hombre con la paciencia de los siglos, donde cada curva cuenta una historia. Pienza renacentista, Montalcino del Brunello, Bagno Vignoni con su plaza de agua termal. Las estaciones cambian los colores como un pintor que nunca se cansa: verde tierno en primavera, oro en verano, rojo en otoño, plata en invierno. Aquí entenderás que el paisaje puede ser arte, que el vino es cultura líquida, que la belleza puede nutrir el alma.",
        fr: "Val d'Orcia est la Toscane des rêves, où les cyprès dessinent des virgules dans le paysage et où les collines semblent peintes à la main. C'est un territoire façonné par l'homme avec la patience des siècles, où chaque courbe raconte une histoire. Pienza Renaissance, Montalcino du Brunello, Bagno Vignoni avec sa place d'eau thermale. Les saisons changent les couleurs comme un peintre qui ne se lasse jamais : vert tendre au printemps, or en été, rouge en automne, argent en hiver. Ici, vous comprendrez que le paysage peut être de l'art, que le vin est de la culture liquide, que la beauté peut nourrir l'âme.",
        ar: "فال دورسيا هي توسكانا الأحلام، حيث ترسم أشجار السرو فواصل في المناظر الطبيعية والتلال تبدو مرسومة باليد. إنها أرض شكلها الإنسان بصبر القرون، حيث كل منحنى يحكي قصة. بيينزا عصر النهضة، مونتالسينو من برونيلو، بانيو فينيوني بساحتها المائية الحرارية. تغير الفصول الألوان مثل رسام لا يتعب أبدًا: أخضر رقيق في الربيع، ذهبي في الصيف، أحمر في الخريف، فضي في الشتاء. هنا ستفهم أن المناظر الطبيعية يمكن أن تكون فنًا، وأن النبيذ ثقافة سائلة، وأن الجمال يمكن أن يغذي الروح.",
        zh: "瓦尔多尔恰是梦想中的托斯卡纳，柏树在风景中画出逗号，山丘似乎是手绘的。这是一片人类用几个世纪的耐心塑造的土地，每一个弯道都讲述着一个故事。文艺复兴时期的皮恩扎、布鲁内罗的蒙塔尔奇诺、拥有温泉广场的巴尼奥维尼奥尼。季节像一个永不疲倦的画家一样改变颜色：春天嫩绿，夏天金黄，秋天红色，冬天银色。在这里你会明白风景可以是艺术，葡萄酒是液体文化，美可以滋养灵魂。",
        hi: "वैल डी'ऑर्सिया सपनों का टस्कनी है, जहाँ सरू परिदृश्य में अल्पविराम खींचते हैं और पहाड़ियाँ हाथ से चित्रित लगती हैं। यह सदियों के धैर्य के साथ मनुष्य द्वारा आकार दिया गया क्षेत्र है, जहाँ हर वक्र एक कहानी कहता है। पुनर्जागरण पिएन्ज़ा, ब्रुनेलो का मोंटालसिनो, अपने थर्मल पानी के वर्ग के साथ बाग्नो विग्नोनी। मौसम एक चित्रकार की तरह रंग बदलते हैं जो कभी नहीं थकता: वसंत में कोमल हरा, गर्मियों में सोना, शरद ऋतु में लाल, सर्दियों में चांदी। यहाँ आप समझेंगे कि परिदृश्य कला हो सकता है, कि शराब तरल संस्कृति है, कि सुंदरता आत्मा को पोषित कर सकती है।"
    },
    "Hallstatt": {
        it: "Hallstatt è un gioiello incastonato tra montagne e lago, così perfetto che la Cina ne ha costruito una copia. Ma l'originale ha qualcosa che non si può replicare: millenni di storia nelle sue miniere di sale, case di legno che sembrano cresciute dalla roccia, cigni che scivolano su acque che riflettono le Alpi. È un villaggio che sfida la logica, aggrappato a un fazzoletto di terra tra lago e montagna. D'inverno diventa un presepe illuminato, d'estate un giardino verticale. Qui il sale era oro bianco, le ossa dei morti vengono decorate con amore, e capirai che a volte i luoghi più piccoli lasciano le impronte più grandi.",
        en: "Hallstatt is a jewel set between mountains and lake, so perfect that China built a copy of it. But the original has something that can't be replicated: millennia of history in its salt mines, wooden houses that seem grown from rock, swans gliding on waters reflecting the Alps. It's a village that defies logic, clinging to a handkerchief of land between lake and mountain. In winter it becomes an illuminated nativity scene, in summer a vertical garden. Here salt was white gold, the bones of the dead are decorated with love, and you'll understand that sometimes the smallest places leave the biggest footprints.",
        es: "Hallstatt es una joya engastada entre montañas y lago, tan perfecta que China construyó una copia. Pero el original tiene algo que no se puede replicar: milenios de historia en sus minas de sal, casas de madera que parecen crecidas de la roca, cisnes que se deslizan sobre aguas que reflejan los Alpes. Es un pueblo que desafía la lógica, aferrado a un pañuelo de tierra entre lago y montaña. En invierno se convierte en un belén iluminado, en verano en un jardín vertical. Aquí la sal era oro blanco, los huesos de los muertos se decoran con amor, y entenderás que a veces los lugares más pequeños dejan las huellas más grandes.",
        fr: "Hallstatt est un joyau serti entre montagnes et lac, si parfait que la Chine en a construit une copie. Mais l'original a quelque chose qui ne peut être reproduit : des millénaires d'histoire dans ses mines de sel, des maisons en bois qui semblent avoir poussé du rocher, des cygnes glissant sur des eaux reflétant les Alpes. C'est un village qui défie la logique, accroché à un mouchoir de terre entre lac et montagne. En hiver, il devient une crèche illuminée, en été, un jardin vertical. Ici, le sel était de l'or blanc, les os des morts sont décorés avec amour, et vous comprendrez que parfois les plus petits endroits laissent les plus grandes empreintes.",
        ar: "هالشتات هي جوهرة مرصعة بين الجبال والبحيرة، مثالية لدرجة أن الصين بنت نسخة منها. لكن الأصل له شيء لا يمكن تكراره: آلاف السنين من التاريخ في مناجم الملح، منازل خشبية تبدو وكأنها نمت من الصخر، بجع ينزلق على مياه تعكس جبال الألب. إنها قرية تتحدى المنطق، متشبثة بمنديل من الأرض بين البحيرة والجبل. في الشتاء تصبح مشهد ميلاد مضيء، في الصيف حديقة عمودية. هنا كان الملح ذهبًا أبيض، عظام الموتى مزينة بالحب، وستفهم أن أصغر الأماكن أحيانًا تترك أكبر البصمات.",
        zh: "哈尔施塔特是镶嵌在山湖之间的宝石，如此完美以至于中国建造了它的复制品。但原版有一些无法复制的东西：盐矿中的千年历史，似乎从岩石中生长出来的木屋，在倒映着阿尔卑斯山的水面上滑行的天鹅。这是一个违背逻辑的村庄，紧贴着湖山之间的一块手帕大小的土地。冬天它变成了一个发光的耶稣诞生场景，夏天变成了垂直花园。这里盐是白金，死者的骨头用爱装饰，你会明白有时最小的地方留下最大的足迹。",
        hi: "हॉलस्टैट पहाड़ों और झील के बीच स्थापित एक रत्न है, इतना परिपूर्ण कि चीन ने इसकी एक प्रति बनाई। लेकिन मूल में कुछ ऐसा है जिसे दोहराया नहीं जा सकता: इसकी नमक की खानों में सहस्राब्दी का इतिहास, लकड़ी के घर जो चट्टान से उगे हुए लगते हैं, हंस जो आल्प्स को प्रतिबिंबित करने वाले पानी पर तैरते हैं। यह एक गाँव है जो तर्क को चुनौती देता है, झील और पहाड़ के बीच भूमि के रूमाल से चिपका हुआ। सर्दियों में यह एक प्रकाशित जन्म दृश्य बन जाता है, गर्मियों में एक ऊर्ध्वाधर उद्यान। यहाँ नमक सफेद सोना था, मृतकों की हड्डियों को प्यार से सजाया जाता है, और आप समझेंगे कि कभी-कभी सबसे छोटे स्थान सबसे बड़े पदचिह्न छोड़ते हैं।"
    },
    "Sinaia": {
        it: "Sinaia è la perla dei Carpazi, dove i castelli da fiaba incontrano foreste di abeti che custodiscono orsi e leggende. Il Castello di Peleș sembra uscito dai sogni di un re romantico, mentre il monastero ortodosso sussurra preghiere secolari. È una città che respira storia e natura, dove la Belle Époque sopravvive negli hotel art nouveau e l'aria di montagna cura i polmoni stanchi. D'inverno la neve trasforma tutto in regno incantato, d'estate i sentieri portano a vette che toccano il cielo. Qui Dracula è solo una storia, ma la magia è reale in ogni pietra e in ogni albero.",
        en: "Sinaia is the pearl of the Carpathians, where fairy tale castles meet fir forests that guard bears and legends. Peleș Castle seems straight from a romantic king's dreams, while the Orthodox monastery whispers centuries-old prayers. It's a city that breathes history and nature, where Belle Époque survives in art nouveau hotels and mountain air heals tired lungs. In winter snow transforms everything into an enchanted kingdom, in summer trails lead to peaks touching the sky. Here Dracula is just a story, but magic is real in every stone and every tree.",
        es: "Sinaia es la perla de los Cárpatos, donde los castillos de cuento de hadas se encuentran con bosques de abetos que guardan osos y leyendas. El Castillo de Peleș parece salido de los sueños de un rey romántico, mientras el monasterio ortodoxo susurra oraciones seculares. Es una ciudad que respira historia y naturaleza, donde la Belle Époque sobrevive en hoteles art nouveau y el aire de montaña cura los pulmones cansados. En invierno la nieve transforma todo en reino encantado, en verano los senderos llevan a cimas que tocan el cielo. Aquí Drácula es solo una historia, pero la magia es real en cada piedra y en cada árbol.",
        fr: "Sinaia est la perle des Carpates, où les châteaux de conte de fées rencontrent des forêts de sapins qui gardent des ours et des légendes. Le château de Peleș semble sorti des rêves d'un roi romantique, tandis que le monastère orthodoxe murmure des prières séculaires. C'est une ville qui respire l'histoire et la nature, où la Belle Époque survit dans les hôtels art nouveau et où l'air de montagne guérit les poumons fatigués. En hiver, la neige transforme tout en royaume enchanté, en été, les sentiers mènent à des sommets qui touchent le ciel. Ici, Dracula n'est qu'une histoire, mais la magie est réelle dans chaque pierre et chaque arbre.",
        ar: "سينايا هي لؤلؤة الكاربات، حيث تلتقي قلاع القصص الخيالية بغابات التنوب التي تحرس الدببة والأساطير. يبدو قصر بيليش وكأنه خرج من أحلام ملك رومانسي، بينما يهمس الدير الأرثوذكسي بصلوات عمرها قرون. إنها مدينة تتنفس التاريخ والطبيعة، حيث تبقى الحقبة الجميلة في فنادق الآرت نوفو ويشفي هواء الجبل الرئات المتعبة. في الشتاء يحول الثلج كل شيء إلى مملكة مسحورة، في الصيف تؤدي المسارات إلى قمم تلامس السماء. هنا دراكولا مجرد قصة، لكن السحر حقيقي في كل حجر وكل شجرة.",
        zh: "锡纳亚是喀尔巴阡山脉的明珠，童话城堡与守护着熊和传说的冷杉森林相遇。佩莱什城堡似乎来自浪漫国王的梦想，而东正教修道院低语着百年的祈祷。这是一座呼吸着历史和自然的城市，美好年代在新艺术风格酒店中幸存，山间空气治愈疲倦的肺。冬天雪将一切变成魔法王国，夏天小径通向触摸天空的山峰。这里德古拉只是一个故事，但魔法在每块石头和每棵树中都是真实的。",
        hi: "सिनाया कार्पेथियन का मोती है, जहाँ परी कथा महल देवदार के जंगलों से मिलते हैं जो भालू और किंवदंतियों की रक्षा करते हैं। पेलेश कैसल एक रोमांटिक राजा के सपनों से सीधे लगता है, जबकि रूढ़िवादी मठ सदियों पुरानी प्रार्थनाएँ फुसफुसाता है। यह एक ऐसा शहर है जो इतिहास और प्रकृति की साँस लेता है, जहाँ बेले एपोक आर्ट नोव्यू होटलों में जीवित है और पहाड़ी हवा थके हुए फेफड़ों को ठीक करती है। सर्दियों में बर्फ सब कुछ एक मंत्रमुग्ध राज्य में बदल देती है, गर्मियों में पगडंडियाँ आसमान छूने वाली चोटियों तक ले जाती हैं। यहाँ ड्रैकुला सिर्फ एक कहानी है, लेकिन जादू हर पत्थर और हर पेड़ में वास्तविक है।"
    }
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
    
    // Genera narrativa
    const narrative = generateNarrative(destination);
    document.getElementById('destination-narrative').textContent = narrative;
}

// Genera narrativa
function generateNarrative(destination) {
    const destinationName = destination.name;
    
    // Se abbiamo una narrativa specifica per questa destinazione
    if (DESTINATION_NARRATIVES[destinationName]) {
        return DESTINATION_NARRATIVES[destinationName][currentLang] || 
               DESTINATION_NARRATIVES[destinationName]['en'];
    }
    
    // Altrimenti usa una narrativa generica
    const narratives = {
        it: `${destinationName} ti sta aspettando. Un luogo dove le tue vibrazioni di viaggio trovano la loro perfetta risonanza.`,
        en: `${destinationName} is waiting for you. A place where your travel vibes find their perfect resonance.`,
        es: `${destinationName} te está esperando. Un lugar donde tus vibraciones de viaje encuentran su resonancia perfecta.`,
        fr: `${destinationName} vous attend. Un lieu où vos vibrations de voyage trouvent leur résonance parfaite.`,
        ar: `${destinationName} في انتظارك. مكان حيث تجد ذبذبات سفرك صداها المثالي.`,
        zh: `${destinationName} 在等着你。一个你的旅行氛围找到完美共鸣的地方。`,
        hi: `${destinationName} आपका इंतज़ार कर रहा है। एक जगह जहाँ आपकी यात्रा की वाइब्स अपनी सही गूंज पाती हैं।`
    };
    
    return narratives[currentLang] || narratives['en'];
}

// Prenota viaggio
function bookTrip() {
    const destination = document.getElementById('destination-name').textContent;
    const tripUrl = TRIPCOM_URLS[destination];
    
    if (tripUrl) {
        const fullUrl = tripUrl + "&locale=en-US&curr=EUR";
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
