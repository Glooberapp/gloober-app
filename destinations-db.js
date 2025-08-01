// GLOOBER DESTINATIONS DATABASE
// Version: 1.0 - Con le tue 15 destinazioni
// ============================================

const DESTINATIONS_DB = [
    {
        id: 1,
        name: "Faroe Islands",
        country: "Denmark",
        type: "sea",
        distance: "curious",
        moods: ["wild", "zen"],
        location: 0.15, // More sea
        distance_value: 0.5,  // Medium distance
        mood: { x: 0.7, y: 0.3 }, // Blue-green, calm
        image: "https://i.ibb.co/Pt6jLg8/1.png",
        tripUrl: "https://www.trip.com/hotels/list?city=6422&checkin=2024-07-10&checkout=2024-07-11&adult=1&children=0&searchboxarg=t&searchtype=City&crn=1",
        narrative_en: "Where emerald cliffs plunge into the churning North Atlantic, the Faroe Islands offer a raw, untamed beauty. Here, more sheep than people roam the dramatic landscapes, and waterfalls cascade directly into the ocean. The weather changes by the minute, painting the sky in impossible shades.",
        quote_en: "Sometimes you need to get lost in the mist to find yourself.",
        narrative_it: "Dove le scogliere smeraldo si tuffano nel tumultuoso Atlantico del Nord, le Isole Faroe offrono una bellezza cruda e indomita. Qui, più pecore che persone vagano per i paesaggi drammatici, e le cascate si gettano direttamente nell'oceano.",
        quote_it: "A volte devi perderti nella nebbia per ritrovare te stesso.",
        narrative_fr: "Là où les falaises émeraude plongent dans l'Atlantique Nord agité, les îles Féroé offrent une beauté brute et sauvage. Ici, plus de moutons que d'habitants parcourent les paysages dramatiques.",
        quote_fr: "Parfois, il faut se perdre dans la brume pour se retrouver.",
        narrative_es: "Donde los acantilados esmeralda se sumergen en el agitado Atlántico Norte, las Islas Feroe ofrecen una belleza cruda e indómita. Aquí, más ovejas que personas recorren los paisajes dramáticos.",
        quote_es: "A veces necesitas perderte en la niebla para encontrarte a ti mismo.",
        narrative_ar: "حيث تغوص المنحدرات الزمردية في المحيط الأطلسي الشمالي المضطرب، تقدم جزر فارو جمالاً خاماً وجامحاً. هنا، تجوب الأغنام المناظر الطبيعية الدرامية أكثر من البشر.",
        quote_ar: "أحياناً تحتاج أن تضيع في الضباب لتجد نفسك.",
        narrative_zh: "在翡翠色的悬崖跳入汹涌的北大西洋的地方，法罗群岛展现出原始而狂野的美。这里，羊比人多，瀑布直接倾泻入海。",
        quote_zh: "有时你需要在雾中迷失才能找到自己。",
        narrative_hi: "जहाँ पन्ना चट्टानें उत्तरी अटलांटिक में गिरती हैं, फ़ैरो द्वीप एक कच्ची, अदम्य सुंदरता प्रदान करते हैं। यहाँ, लोगों से अधिक भेड़ें नाटकीय परिदृश्यों में घूमती हैं।",
        quote_hi: "कभी-कभी आपको खुद को खोजने के लिए धुंध में खो जाना पड़ता है।"
    },
    {
        id: 2,
        name: "Socotra Island",
        country: "Yemen",
        type: "sea",
        distance: "bloom",
        moods: ["wild", "culture"],
        location: 0.2, // Coastal
        distance_value: 0.9, // Far
        mood: { x: 0.9, y: 0.7 }, // Purple-pink, mysterious
        image: "https://i.ibb.co/hLwxmvp/2.png",
        tripUrl: "https://www.trip.com/hotels/list?city=62263&checkin=2024-07-10&checkout=2024-07-11&adult=1&children=0&searchboxarg=t&searchtype=City&crn=1",
        narrative_en: "Socotra Island feels like nature's own experiment in isolation. Dragon's blood trees dot the landscape like ancient umbrellas, their crimson resin once more valuable than gold. This is Earth's Galápagos of the Indian Ocean, where a third of plant species exist nowhere else on the planet.",
        quote_en: "To find the extraordinary, sail beyond the edge of the map.",
        narrative_it: "L'isola di Socotra sembra l'esperimento della natura nell'isolamento. Gli alberi del sangue di drago punteggiano il paesaggio come antichi ombrelli, la loro resina cremisi un tempo più preziosa dell'oro.",
        quote_it: "Per trovare lo straordinario, naviga oltre il bordo della mappa.",
        narrative_fr: "L'île de Socotra ressemble à une expérience de la nature en matière d'isolement. Les dragonniers parsèment le paysage comme d'anciens parapluies, leur résine cramoisie autrefois plus précieuse que l'or.",
        quote_fr: "Pour trouver l'extraordinaire, naviguez au-delà du bord de la carte.",
        narrative_es: "La isla de Socotra parece el experimento de la naturaleza en aislamiento. Los árboles de sangre de dragón salpican el paisaje como paraguas antiguos, su resina carmesí una vez más valiosa que el oro.",
        quote_es: "Para encontrar lo extraordinario, navega más allá del borde del mapa.",
        narrative_ar: "تبدو جزيرة سقطرى وكأنها تجربة الطبيعة في العزلة. تنتشر أشجار دم التنين في المناظر الطبيعية مثل المظلات القديمة، وكان راتنجها القرمزي أكثر قيمة من الذهب.",
        quote_ar: "للعثور على الاستثنائي، أبحر إلى ما وراء حافة الخريطة.",
        narrative_zh: "索科特拉岛感觉像是大自然在隔离中的实验。龙血树像古老的雨伞一样点缀着景观，它们的深红色树脂曾经比黄金更有价值。",
        quote_zh: "要找到非凡，就要航行到地图边缘之外。",
        narrative_hi: "सोकोत्रा द्वीप प्रकृति के अलगाव में प्रयोग जैसा लगता है। ड्रैगन के खून के पेड़ प्राचीन छतरियों की तरह परिदृश्य को बिंदीदार करते हैं।",
        quote_hi: "असाधारण खोजने के लिए, नक्शे के किनारे से परे जाएं।"
    },
    {
        id: 3,
        name: "Tbilisi",
        country: "Georgia",
        type: "city",
        distance: "curious",
        moods: ["culture", "gourmet"],
        location: 0.5, // City
        distance_value: 0.6, // Medium-far
        mood: { x: 0.3, y: 0.6 }, // Orange-yellow, warm
        image: "https://i.ibb.co/7WxL4MH/3.png",
        tripUrl: "https://www.trip.com/hotels/list?city=707&checkin=2024-07-10&checkout=2024-07-11&adult=1&children=0&searchboxarg=t&searchtype=City&crn=1",
        narrative_en: "Tbilisi sprawls across ancient hills where Europe kisses Asia. Sulfur baths bubble beneath Art Nouveau balconies, while orthodox churches share skylines with futuristic glass structures. In the old town, time moves like honey, thick with the scent of fresh khachapuri and wine older than memory.",
        quote_en: "Where East meets West, magic happens in the in-between spaces.",
        narrative_it: "Tbilisi si estende su antiche colline dove l'Europa bacia l'Asia. I bagni di zolfo ribollono sotto i balconi Art Nouveau, mentre le chiese ortodosse condividono gli skyline con strutture di vetro futuristiche.",
        quote_it: "Dove l'Est incontra l'Ovest, la magia accade negli spazi intermedi.",
        narrative_fr: "Tbilissi s'étend sur des collines anciennes où l'Europe embrasse l'Asie. Les bains de soufre bouillonnent sous les balcons Art Nouveau, tandis que les églises orthodoxes partagent l'horizon avec des structures de verre futuristes.",
        quote_fr: "Là où l'Est rencontre l'Ouest, la magie opère dans les espaces intermédiaires.",
        narrative_es: "Tbilisi se extiende por colinas antiguas donde Europa besa Asia. Los baños de azufre burbujean bajo balcones Art Nouveau, mientras las iglesias ortodoxas comparten horizontes con estructuras de vidrio futuristas.",
        quote_es: "Donde el Este se encuentra con el Oeste, la magia sucede en los espacios intermedios.",
        narrative_ar: "تمتد تبليسي عبر التلال القديمة حيث تقبل أوروبا آسيا. تتفاخر حمامات الكبريت تحت شرفات الفن الحديث، بينما تشترك الكنائس الأرثوذكسية في الأفق مع الهياكل الزجاجية المستقبلية.",
        quote_ar: "حيث يلتقي الشرق بالغرب، يحدث السحر في المساحات البينية.",
        narrative_zh: "第比利斯横跨古老的山丘，欧洲在这里亲吻亚洲。硫磺浴在新艺术风格的阳台下冒泡，而东正教教堂与未来主义的玻璃建筑共享天际线。",
        quote_zh: "东西方相遇的地方，魔法发生在中间地带。",
        narrative_hi: "त्बिलिसी प्राचीन पहाड़ियों पर फैली है जहाँ यूरोप एशिया को चूमता है। सल्फर स्नान आर्ट नोव्यू बालकनियों के नीचे बुलबुलाते हैं।",
        quote_hi: "जहाँ पूर्व पश्चिम से मिलता है, जादू बीच के स्थानों में होता है।"
    },
    {
        id: 4,
        name: "Easter Island",
        country: "Chile",
        type: "sea",
        distance: "bloom",
        moods: ["culture", "wild"],
        location: 0.1, // Very coastal
        distance_value: 1.0, // Very far
        mood: { x: 0.8, y: 0.2 }, // Blue-purple, mystical
        image: "https://i.ibb.co/KybDKGZ/4.png",
        tripUrl: "https://www.trip.com/hotels/list?city=10146&checkin=2024-07-10&checkout=2024-07-11&adult=1&children=0&searchboxarg=t&searchtype=City&crn=1",
        narrative_en: "On the world's most remote inhabited island, nearly 1,000 moai stand sentinel against time. These stone giants, carved by Polynesian settlers, gaze eternally at the stars. Here, the Pacific stretches endlessly in all directions, and the nearest humans are astronauts passing overhead.",
        quote_en: "The edge of the world is where you discover the center of yourself.",
        narrative_it: "Sull'isola abitata più remota del mondo, quasi 1.000 moai fanno da sentinella contro il tempo. Questi giganti di pietra, scolpiti dai coloni polinesiani, guardano eternamente le stelle.",
        quote_it: "Il bordo del mondo è dove scopri il centro di te stesso.",
        narrative_fr: "Sur l'île habitée la plus isolée du monde, près de 1 000 moai montent la garde contre le temps. Ces géants de pierre, sculptés par les colons polynésiens, regardent éternellement les étoiles.",
        quote_fr: "Le bout du monde est l'endroit où vous découvrez votre centre.",
        narrative_es: "En la isla habitada más remota del mundo, casi 1.000 moai montan guardia contra el tiempo. Estos gigantes de piedra, tallados por colonos polinesios, miran eternamente a las estrellas.",
        quote_es: "El borde del mundo es donde descubres el centro de ti mismo.",
        narrative_ar: "في أكثر جزيرة مأهولة بعداً في العالم، يقف ما يقرب من 1000 مواي حراساً ضد الزمن. هذه العمالقة الحجرية، التي نحتها المستوطنون البولينيزيون، تحدق إلى الأبد في النجوم.",
        quote_ar: "حافة العالم هي المكان الذي تكتشف فيه مركز نفسك.",
        narrative_zh: "在世界上最偏远的有人居住的岛屿上，近1000个摩艾石像守卫着时间。这些由波利尼西亚定居者雕刻的石巨人永恒地凝视着星星。",
        quote_zh: "世界的边缘是你发现自己中心的地方。",
        narrative_hi: "दुनिया के सबसे दूरस्थ बसे हुए द्वीप पर, लगभग 1,000 मोआई समय के खिलाफ पहरेदार खड़े हैं। ये पत्थर के दिग्गज सितारों को हमेशा के लिए देखते हैं।",
        quote_hi: "दुनिया का किनारा वह जगह है जहाँ आप अपने केंद्र की खोज करते हैं।"
    },
    {
        id: 5,
        name: "Salar de Uyuni",
        country: "Bolivia",
        type: "mountain",
        distance: "bloom",
        moods: ["wild", "zen"],
        location: 0.8, // Mountain/highland
        distance_value: 0.85, // Far
        mood: { x: 0.15, y: 0.85 }, // Red-orange, adventurous
        image: "https://i.ibb.co/RBdDzJt/5.png",
        tripUrl: "https://www.trip.com/hotels/list?city=58308&checkin=2024-07-10&checkout=2024-07-11&adult=1&children=0&searchboxarg=t&searchtype=City&crn=1",
        narrative_en: "The world's largest mirror stretches beyond the horizon, where sky and earth become one. During the rainy season, a thin layer of water transforms the salt flats into an endless reflection of clouds and stars. Reality bends here, in this white expanse at 12,000 feet.",
        quote_en: "When heaven touches earth, you walk between worlds.",
        narrative_it: "Lo specchio più grande del mondo si estende oltre l'orizzonte, dove cielo e terra diventano uno. Durante la stagione delle piogge, un sottile strato d'acqua trasforma le saline in un riflesso infinito di nuvole e stelle.",
        quote_it: "Quando il paradiso tocca la terra, cammini tra i mondi.",
        narrative_fr: "Le plus grand miroir du monde s'étend au-delà de l'horizon, où le ciel et la terre ne font qu'un. Pendant la saison des pluies, une fine couche d'eau transforme les salines en un reflet infini de nuages et d'étoiles.",
        quote_fr: "Quand le ciel touche la terre, vous marchez entre les mondes.",
        narrative_es: "El espejo más grande del mundo se extiende más allá del horizonte, donde el cielo y la tierra se vuelven uno. Durante la temporada de lluvias, una fina capa de agua transforma los salares en un reflejo infinito de nubes y estrellas.",
        quote_es: "Cuando el cielo toca la tierra, caminas entre mundos.",
        narrative_ar: "أكبر مرآة في العالم تمتد إلى ما وراء الأفق، حيث تصبح السماء والأرض واحدة. خلال موسم الأمطار، تحول طبقة رقيقة من الماء المسطحات الملحية إلى انعكاس لا نهائي للسحب والنجوم.",
        quote_ar: "عندما تلمس السماء الأرض، تمشي بين العوالم.",
        narrative_zh: "世界上最大的镜子延伸到地平线之外，天地在这里合为一体。在雨季，一层薄薄的水将盐滩变成了云和星星的无尽倒影。",
        quote_zh: "当天堂触及大地时，你就在世界之间行走。",
        narrative_hi: "दुनिया का सबसे बड़ा दर्पण क्षितिज से परे फैला है, जहाँ आकाश और पृथ्वी एक हो जाते हैं। बारिश के मौसम में, पानी की एक पतली परत नमक के फ्लैटों को बादलों और सितारों के अंतहीन प्रतिबिंब में बदल देती है।",
        quote_hi: "जब स्वर्ग पृथ्वी को छूता है, तो आप दुनिया के बीच चलते हैं।"
    },
    {
        id: 6,
        name: "Cappadocia",
        country: "Turkey",
        type: "mountain",
        distance: "comfort",
        moods: ["romantic", "culture"],
        location: 0.75, // Mountain/inland
        distance_value: 0.4, // Medium
        mood: { x: 0.5, y: 0.5 }, // Green center, balanced
        image: "https://i.ibb.co/M8Lsmrh/6.png",
        tripUrl: "https://www.trip.com/hotels/list?city=59411&checkin=2024-07-10&checkout=2024-07-11&adult=1&children=0&searchboxarg=t&searchtype=City&crn=1",
        narrative_en: "Fairy chimneys rise from the earth like nature's cathedrals, carved by wind and time. At dawn, hundreds of hot air balloons drift silently over this moonscape, while below, ancient cave churches hide frescoes older than most nations. This is Earth's imagination made stone.",
        quote_en: "Sometimes the most magical places are hiding in plain sight.",
        narrative_it: "I camini delle fate si innalzano dalla terra come cattedrali della natura, scolpiti dal vento e dal tempo. All'alba, centinaia di mongolfiere fluttuano silenziosamente su questo paesaggio lunare.",
        quote_it: "A volte i luoghi più magici si nascondono in piena vista.",
        narrative_fr: "Les cheminées de fées s'élèvent de la terre comme des cathédrales naturelles, sculptées par le vent et le temps. À l'aube, des centaines de montgolfières dérivent silencieusement au-dessus de ce paysage lunaire.",
        quote_fr: "Parfois, les endroits les plus magiques se cachent à la vue de tous.",
        narrative_es: "Las chimeneas de hadas se elevan de la tierra como catedrales de la naturaleza, talladas por el viento y el tiempo. Al amanecer, cientos de globos aerostáticos flotan silenciosamente sobre este paisaje lunar.",
        quote_es: "A veces los lugares más mágicos se esconden a plena vista.",
        narrative_ar: "ترتفع مداخن الجنيات من الأرض مثل كاتدرائيات الطبيعة، المنحوتة بالرياح والزمن. عند الفجر، تطفو مئات من بالونات الهواء الساخن بصمت فوق هذا المشهد القمري.",
        quote_ar: "أحياناً تختبئ الأماكن الأكثر سحراً على مرأى من الجميع.",
        narrative_zh: "仙女烟囱从大地升起，如同大自然的大教堂，由风和时间雕刻而成。黎明时分，数百个热气球静静地漂浮在这片月球般的景观上。",
        quote_zh: "有时最神奇的地方就隐藏在显而易见的地方。",
        narrative_hi: "परी चिमनी पृथ्वी से प्रकृति के कैथेड्रल की तरह उठती हैं, हवा और समय द्वारा तराशी गई। भोर में, सैकड़ों हॉट एयर बैलून इस चंद्र परिदृश्य पर चुपचाप तैरते हैं।",
        quote_hi: "कभी-कभी सबसे जादुई स्थान सादे दृष्टि में छिपे होते हैं।"
    },
    {
        id: 7,
        name: "Raja Ampat",
        country: "Indonesia",
        type: "sea",
        distance: "bloom",
        moods: ["wild", "zen"],
        location: 0.05, // Pure sea
        distance_value: 0.75, // Far
        mood: { x: 0.6, y: 0.7 }, // Blue-green, serene
        image: "https://i.ibb.co/W6XrG8m/7.png",
        tripUrl: "https://www.trip.com/hotels/list?city=26983&checkin=2024-07-10&checkout=2024-07-11&adult=1&children=0&searchboxarg=t&searchtype=City&crn=1",
        narrative_en: "In the heart of the Coral Triangle, Raja Ampat harbors 75% of the world's coral species. These remote islands are where the ocean shows off - manta rays glide through crystalline waters while walking sharks patrol the shallows. Above water, birds of paradise dance in virgin jungle.",
        quote_en: "Paradise isn't lost - it's just very well hidden.",
        narrative_it: "Nel cuore del Triangolo dei Coralli, Raja Ampat ospita il 75% delle specie di coralli del mondo. Queste isole remote sono dove l'oceano si mette in mostra - le mante scivolano attraverso acque cristalline.",
        quote_it: "Il paradiso non è perduto - è solo molto ben nascosto.",
        narrative_fr: "Au cœur du Triangle de Corail, Raja Ampat abrite 75% des espèces de coraux du monde. Ces îles isolées sont l'endroit où l'océan se montre - les raies manta glissent dans des eaux cristallines.",
        quote_fr: "Le paradis n'est pas perdu - il est juste très bien caché.",
        narrative_es: "En el corazón del Triángulo de Coral, Raja Ampat alberga el 75% de las especies de coral del mundo. Estas islas remotas son donde el océano se luce - las mantarrayas se deslizan por aguas cristalinas.",
        quote_es: "El paraíso no está perdido, solo está muy bien escondido.",
        narrative_ar: "في قلب مثلث المرجان، تحتضن راجا أمبات 75% من أنواع الشعاب المرجانية في العالم. هذه الجزر النائية هي المكان الذي يتباهى فيه المحيط - تنزلق أسماك المانتا عبر المياه البلورية.",
        quote_ar: "الجنة ليست مفقودة - إنها مخبأة جيداً فقط.",
        narrative_zh: "在珊瑚三角的中心，拉贾安帕特拥有世界上75%的珊瑚物种。这些偏远的岛屿是海洋炫耀的地方-蝠鲼在晶莹的水中滑翔。",
        quote_zh: "天堂并没有失落-它只是隐藏得很好。",
        narrative_hi: "कोरल त्रिकोण के दिल में, राजा अम्पाट दुनिया की 75% कोरल प्रजातियों का घर है। ये दूरदराज के द्वीप वे हैं जहाँ समुद्र दिखावा करता है।",
        quote_hi: "स्वर्ग खोया नहीं है - यह बस बहुत अच्छी तरह से छिपा है।"
    },
    {
        id: 8,
        name: "Atacama Desert",
        country: "Chile",
        type: "mountain",
        distance: "bloom",
        moods: ["wild", "zen"],
        location: 0.9, // Mountain/desert
        distance_value: 0.9, // Very far
        mood: { x: 0.2, y: 0.3 }, // Orange-red, intense
        image: "https://i.ibb.co/XJq9Zwf/8.png",
        tripUrl: "https://www.trip.com/hotels/list?city=26857&checkin=2024-07-10&checkout=2024-07-11&adult=1&children=0&searchboxarg=t&searchtype=City&crn=1",
        narrative_en: "The driest place on Earth reveals landscapes from another planet. Here, rain hasn't fallen in recorded history, yet life persists in impossible forms. At night, with no moisture or light pollution, the Milky Way blazes so bright you could read by starlight alone.",
        quote_en: "In the absence of everything, you find infinity.",
        narrative_it: "Il luogo più arido della Terra rivela paesaggi di un altro pianeta. Qui, la pioggia non è caduta nella storia registrata, eppure la vita persiste in forme impossibili.",
        quote_it: "Nell'assenza di tutto, trovi l'infinito.",
        narrative_fr: "L'endroit le plus sec de la Terre révèle des paysages d'une autre planète. Ici, la pluie n'est pas tombée dans l'histoire enregistrée, mais la vie persiste sous des formes impossibles.",
        quote_fr: "Dans l'absence de tout, vous trouvez l'infini.",
        narrative_es: "El lugar más seco de la Tierra revela paisajes de otro planeta. Aquí, no ha llovido en la historia registrada, sin embargo la vida persiste en formas imposibles.",
        quote_es: "En la ausencia de todo, encuentras el infinito.",
        narrative_ar: "يكشف المكان الأكثر جفافاً على الأرض عن مناظر طبيعية من كوكب آخر. هنا، لم تسقط الأمطار في التاريخ المسجل، ومع ذلك تستمر الحياة في أشكال مستحيلة.",
        quote_ar: "في غياب كل شيء، تجد اللانهاية.",
        narrative_zh: "地球上最干燥的地方展现了来自另一个星球的景观。这里，在有记录的历史中从未下过雨，但生命以不可能的形式持续存在。",
        quote_zh: "在一切的缺失中，你找到了无限。",
        narrative_hi: "पृथ्वी पर सबसे शुष्क स्थान दूसरे ग्रह के परिदृश्य प्रकट करता है। यहाँ, रिकॉर्ड किए गए इतिहास में बारिश नहीं हुई है, फिर भी जीवन असंभव रूपों में बना रहता है।",
        quote_hi: "सब कुछ की अनुपस्थिति में, आप अनंत पाते हैं।"
    },
    {
        id: 9,
        name: "Svalbard",
        country: "Norway",
        type: "sea",
        distance: "bloom",
        moods: ["wild", "zen"],
        location: 0.3, // Coastal/tundra
        distance_value: 0.7, // Far
        mood: { x: 0.85, y: 0.15 }, // Deep blue, extreme
        image: "https://i.ibb.co/cYXbqH5/9.png",
        tripUrl: "https://www.trip.com/hotels/list?city=60934&checkin=2024-07-10&checkout=2024-07-11&adult=1&children=0&searchboxarg=t&searchtype=City&crn=1",
        narrative_en: "Where polar bears outnumber people and four months of darkness give way to four months of midnight sun. Svalbard exists at the edge of the possible, a frozen archipelago where glaciers calve into arctic seas and the northern lights dance across endless winter nights.",
        quote_en: "At the top of the world, you realize how small and infinite you are.",
        narrative_it: "Dove gli orsi polari superano in numero le persone e quattro mesi di oscurità lasciano il posto a quattro mesi di sole di mezzanotte. Svalbard esiste al limite del possibile.",
        quote_it: "In cima al mondo, ti rendi conto di quanto sei piccolo e infinito.",
        narrative_fr: "Où les ours polaires sont plus nombreux que les gens et quatre mois d'obscurité cèdent la place à quatre mois de soleil de minuit. Svalbard existe à la limite du possible.",
        quote_fr: "Au sommet du monde, vous réalisez à quel point vous êtes petit et infini.",
        narrative_es: "Donde los osos polares superan en número a las personas y cuatro meses de oscuridad dan paso a cuatro meses de sol de medianoche. Svalbard existe en el límite de lo posible.",
        quote_es: "En la cima del mundo, te das cuenta de lo pequeño e infinito que eres.",
        narrative_ar: "حيث تفوق الدببة القطبية البشر عدداً وتفسح أربعة أشهر من الظلام المجال لأربعة أشهر من شمس منتصف الليل. سفالبارد موجود على حافة الممكن.",
        quote_ar: "في قمة العالم، تدرك كم أنت صغير ولا نهائي.",
        narrative_zh: "在这里，北极熊的数量超过了人类，四个月的黑暗让位于四个月的午夜阳光。斯瓦尔巴群岛存在于可能的边缘。",
        quote_zh: "在世界之巅，你意识到自己是多么渺小又无限。",
        narrative_hi: "जहाँ ध्रुवीय भालू लोगों से अधिक हैं और चार महीने का अंधेरा चार महीने की मध्यरात्रि सूर्य को रास्ता देता है। स्वालबार्ड संभव की सीमा पर मौजूद है।",
        quote_hi: "दुनिया के शीर्ष पर, आप महसूस करते हैं कि आप कितने छोटे और अनंत हैं।"
    },
    {
        id: 10,
        name: "Wadi Rum",
        country: "Jordan",
        type: "mountain",
        distance: "curious",
        moods: ["wild", "culture"],
        location: 0.85, // Desert/mountain
        distance_value: 0.5, // Medium
        mood: { x: 0.3, y: 0.2 }, // Orange, adventurous
        image: "https://i.ibb.co/z8kQ8mK/10.png",
        tripUrl: "https://www.trip.com/hotels/list?city=26969&checkin=2024-07-10&checkout=2024-07-11&adult=1&children=0&searchboxarg=t&searchtype=City&crn=1",
        narrative_en: "Mars on Earth, where Lawrence of Arabia once rode through crimson canyons and sandstone mountains. Bedouins still navigate by stars across this protected desert, where inscriptions from ancient civilizations mark rocks like galleries of forgotten time.",
        quote_en: "The desert doesn't hide its treasures - it makes you worthy of finding them.",
        narrative_it: "Marte sulla Terra, dove Lawrence d'Arabia cavalcava attraverso canyon cremisi e montagne di arenaria. I beduini navigano ancora seguendo le stelle attraverso questo deserto protetto.",
        quote_it: "Il deserto non nasconde i suoi tesori - ti rende degno di trovarli.",
        narrative_fr: "Mars sur Terre, où Lawrence d'Arabie chevauchait autrefois à travers des canyons cramoisis et des montagnes de grès. Les Bédouins naviguent toujours aux étoiles à travers ce désert protégé.",
        quote_fr: "Le désert ne cache pas ses trésors - il vous rend digne de les trouver.",
        narrative_es: "Marte en la Tierra, donde Lawrence de Arabia cabalgó a través de cañones carmesí y montañas de arenisca. Los beduinos aún navegan por las estrellas a través de este desierto protegido.",
        quote_es: "El desierto no esconde sus tesoros, te hace digno de encontrarlos.",
        narrative_ar: "المريخ على الأرض، حيث ركب لورنس العرب عبر الوديان القرمزية وجبال الحجر الرملي. لا يزال البدو يتنقلون بالنجوم عبر هذه الصحراء المحمية.",
        quote_ar: "الصحراء لا تخفي كنوزها - إنها تجعلك جديراً بالعثور عليها.",
        narrative_zh: "地球上的火星，阿拉伯的劳伦斯曾经骑马穿过深红色的峡谷和砂岩山脉。贝都因人仍然通过星星在这片受保护的沙漠中航行。",
        quote_zh: "沙漠不会隐藏它的宝藏-它让你配得上找到它们。",
        narrative_hi: "पृथ्वी पर मंगल, जहाँ अरब के लॉरेंस एक बार क्रिमसन घाटियों और बलुआ पत्थर के पहाड़ों से होकर गुजरे थे। बेदुइन अभी भी इस संरक्षित रेगिस्तान में सितारों द्वारा नेविगेट करते हैं।",
        quote_hi: "रेगिस्तान अपने खजाने नहीं छुपाता - यह आपको उन्हें खोजने के योग्य बनाता है।"
    },
    {
        id: 11,
        name: "Tasmania",
        country: "Australia",
        type: "sea",
        distance: "bloom",
        moods: ["wild", "zen"],
        location: 0.35, // Mixed coastal/mountain
        distance_value: 0.95, // Very far
        mood: { x: 0.7, y: 0.6 }, // Blue-purple, wild
        image: "https://i.ibb.co/zZ4Q6xV/11.png",
        tripUrl: "https://www.trip.com/hotels/list?city=737&checkin=2024-07-10&checkout=2024-07-11&adult=1&children=0&searchboxarg=t&searchtype=City&crn=1",
        narrative_en: "The island at the end of the world, where ancient forests meet wild southern seas. Tasmania holds the planet's cleanest air and darkest skies, where Tasmanian devils prowl through fern gullies and the Southern Lights paint the horizon in ethereal greens.",
        quote_en: "Sometimes you have to go to the edge of the map to find yourself.",
        narrative_it: "L'isola alla fine del mondo, dove antiche foreste incontrano selvaggi mari del sud. La Tasmania possiede l'aria più pulita del pianeta e i cieli più scuri.",
        quote_it: "A volte devi andare al limite della mappa per trovare te stesso.",
        narrative_fr: "L'île au bout du monde, où les forêts anciennes rencontrent les mers sauvages du sud. La Tasmanie possède l'air le plus pur de la planète et les ciels les plus sombres.",
        quote_fr: "Parfois, il faut aller au bout de la carte pour se retrouver.",
        narrative_es: "La isla al final del mundo, donde los bosques antiguos se encuentran con los salvajes mares del sur. Tasmania tiene el aire más limpio del planeta y los cielos más oscuros.",
        quote_es: "A veces tienes que ir al borde del mapa para encontrarte a ti mismo.",
        narrative_ar: "الجزيرة في نهاية العالم، حيث تلتقي الغابات القديمة بالبحار الجنوبية البرية. تحتوي تسمانيا على أنقى هواء على الكوكب وأحلك السماء.",
        quote_ar: "أحياناً عليك الذهاب إلى حافة الخريطة لتجد نفسك.",
        narrative_zh: "世界尽头的岛屿，古老的森林与狂野的南部海洋相遇。塔斯马尼亚拥有地球上最干净的空气和最黑暗的天空。",
        quote_zh: "有时你必须走到地图的边缘才能找到自己。",
        narrative_hi: "दुनिया के अंत में द्वीप, जहाँ प्राचीन वन जंगली दक्षिणी समुद्रों से मिलते हैं। तस्मानिया में ग्रह की सबसे स्वच्छ हवा और सबसे काला आसमान है।",
        quote_hi: "कभी-कभी आपको खुद को खोजने के लिए नक्शे के किनारे पर जाना पड़ता है।"
    },
    {
        id: 12,
        name: "Lofoten Islands",
        country: "Norway",
        type: "sea",
        distance: "curious",
        moods: ["wild", "romantic"],
        location: 0.25, // Coastal/mountain mix
        distance_value: 0.6, // Far
        mood: { x: 0.65, y: 0.35 }, // Blue-green, dramatic
        image: "https://i.ibb.co/HGVdP2Z/12.png",
        tripUrl: "https://www.trip.com/hotels/list?city=60902&checkin=2024-07-10&checkout=2024-07-11&adult=1&children=0&searchboxarg=t&searchtype=City&crn=1",
        narrative_en: "Where mountains rise directly from the sea like ancient titans. In Lofoten, red fishing cabins cling to rocky shores while the midnight sun refuses to set. Here, the Arctic Circle creates a landscape so dramatic it seems painted by the gods themselves.",
        quote_en: "Nature saves its best performances for those who venture far.",
        narrative_it: "Dove le montagne sorgono direttamente dal mare come antichi titani. A Lofoten, le cabine da pesca rosse si aggrappano alle coste rocciose mentre il sole di mezzanotte si rifiuta di tramontare.",
        quote_it: "La natura riserva i suoi migliori spettacoli a chi si avventura lontano.",
        narrative_fr: "Où les montagnes s'élèvent directement de la mer comme des titans anciens. Aux Lofoten, les cabanes de pêche rouges s'accrochent aux rivages rocheux tandis que le soleil de minuit refuse de se coucher.",
        quote_fr: "La nature réserve ses meilleures performances à ceux qui s'aventurent loin.",
        narrative_es: "Donde las montañas se elevan directamente del mar como antiguos titanes. En Lofoten, las cabañas de pesca rojas se aferran a las costas rocosas mientras el sol de medianoche se niega a ponerse.",
        quote_es: "La naturaleza guarda sus mejores actuaciones para quienes se aventuran lejos.",
        narrative_ar: "حيث تنهض الجبال مباشرة من البحر مثل جبابرة قدماء. في لوفوتين، تتشبث أكواخ الصيد الحمراء بالشواطئ الصخرية بينما ترفض شمس منتصف الليل أن تغرب.",
        quote_ar: "تحتفظ الطبيعة بأفضل عروضها لأولئك الذين يغامرون بعيداً.",
        narrative_zh: "山脉直接从海中升起，如同古老的泰坦。在罗弗敦群岛，红色的渔屋紧贴着岩石海岸，而午夜的太阳拒绝落下。",
        quote_zh: "大自然为那些远行的人保留了最好的表演。",
        narrative_hi: "जहाँ पहाड़ सीधे समुद्र से प्राचीन टाइटन्स की तरह उठते हैं। लोफोटेन में, लाल मछली पकड़ने की झोपड़ियाँ चट्टानी तटों से चिपकी रहती हैं।",
        quote_hi: "प्रकृति अपने सर्वश्रेष्ठ प्रदर्शन उनके लिए बचाती है जो दूर तक जाते हैं।"
    },
    {
        id: 13,
        name: "Madagascar",
        country: "Madagascar",
        type: "sea",
        distance: "bloom",
        moods: ["wild", "culture"],
        location: 0.4, // Mixed terrain
        distance_value: 0.8, // Far
        mood: { x: 0.55, y: 0.8 }, // Green-blue, unique
        image: "https://i.ibb.co/sP2QZDK/13.png",
        tripUrl: "https://www.trip.com/hotels/list?city=770&checkin=2024-07-10&checkout=2024-07-11&adult=1&children=0&searchboxarg=t&searchtype=City&crn=1",
        narrative_en: "An island unlike any other, where evolution took its own path. Baobab trees stand inverted against sunset skies while lemurs leap through forests found nowhere else on Earth. Madagascar is nature's laboratory, where 90% of species exist only here.",
        quote_en: "To see the world differently, go where the world is different.",
        narrative_it: "Un'isola diversa da qualsiasi altra, dove l'evoluzione ha preso la propria strada. I baobab si ergono invertiti contro i cieli del tramonto mentre i lemuri saltano attraverso foreste che non si trovano in nessun'altra parte della Terra.",
        quote_it: "Per vedere il mondo diversamente, vai dove il mondo è diverso.",
        narrative_fr: "Une île pas comme les autres, où l'évolution a suivi son propre chemin. Les baobabs se dressent inversés contre les ciels du coucher du soleil tandis que les lémuriens sautent à travers des forêts qu'on ne trouve nulle part ailleurs sur Terre.",
        quote_fr: "Pour voir le monde différemment, allez là où le monde est différent.",
        narrative_es: "Una isla como ninguna otra, donde la evolución tomó su propio camino. Los baobabs se alzan invertidos contra los cielos del atardecer mientras los lémures saltan por bosques que no se encuentran en ningún otro lugar de la Tierra.",
        quote_es: "Para ver el mundo de manera diferente, ve donde el mundo es diferente.",
        narrative_ar: "جزيرة لا مثيل لها، حيث سلك التطور طريقه الخاص. تقف أشجار الباوباب مقلوبة مقابل سماء الغروب بينما تقفز الليمورات عبر الغابات التي لا توجد في أي مكان آخر على الأرض.",
        quote_ar: "لرؤية العالم بشكل مختلف، اذهب حيث العالم مختلف.",
        narrative_zh: "一个与众不同的岛屿，进化走上了自己的道路。猴面包树倒立在夕阳天空下，而狐猴在地球上其他地方找不到的森林中跳跃。",
        quote_zh: "要以不同的方式看世界，就去世界不同的地方。",
        narrative_hi: "एक अनोखा द्वीप, जहाँ विकास ने अपना रास्ता लिया। बाओबाब के पेड़ सूर्यास्त के आसमान के खिलाफ उल्टे खड़े हैं जबकि लीमर पृथ्वी पर कहीं और नहीं पाए जाने वाले जंगलों में कूदते हैं।",
        quote_hi: "दुनिया को अलग तरीके से देखने के लिए, वहाँ जाएँ जहाँ दुनिया अलग है।"
    },
    {
        id: 14,
        name: "Bhutan",
        country: "Bhutan",
        type: "mountain",
        distance: "bloom",
        moods: ["zen", "culture"],
        location: 0.95, // Mountain
        distance_value: 0.7, // Far
        mood: { x: 0.4, y: 0.9 }, // Yellow-green, spiritual
        image: "https://i.ibb.co/gR9nQHz/14.png",
        tripUrl: "https://www.trip.com/hotels/list?city=1653&checkin=2024-07-10&checkout=2024-07-11&adult=1&children=0&searchboxarg=t&searchtype=City&crn=1",
        narrative_en: "The last Himalayan kingdom measures Gross National Happiness over GDP. Monasteries perch on impossible cliffs while prayer flags send wishes on mountain winds. In Bhutan, tradition and nature exist in rare harmony, protected by a philosophy that values wisdom over wealth.",
        quote_en: "The highest peaks aren't always made of rock.",
        narrative_it: "L'ultimo regno himalayano misura la Felicità Nazionale Lorda invece del PIL. I monasteri si appoggiano su scogliere impossibili mentre le bandiere di preghiera inviano desideri sui venti di montagna.",
        quote_it: "Le vette più alte non sono sempre fatte di roccia.",
        narrative_fr: "Le dernier royaume himalayen mesure le Bonheur National Brut plutôt que le PIB. Les monastères perchent sur des falaises impossibles tandis que les drapeaux de prière envoient des vœux sur les vents de montagne.",
        quote_fr: "Les plus hauts sommets ne sont pas toujours faits de roche.",
        narrative_es: "El último reino del Himalaya mide la Felicidad Nacional Bruta sobre el PIB. Los monasterios se posan en acantilados imposibles mientras las banderas de oración envían deseos en los vientos de montaña.",
        quote_es: "Los picos más altos no siempre están hechos de roca.",
        narrative_ar: "تقيس المملكة الهيمالايا الأخيرة إجمالي السعادة الوطنية بدلاً من الناتج المحلي الإجمالي. تجثم الأديرة على منحدرات مستحيلة بينما ترسل أعلام الصلاة الأمنيات على رياح الجبال.",
        quote_ar: "أعلى القمم ليست دائماً مصنوعة من الصخر.",
        narrative_zh: "最后的喜马拉雅王国用国民幸福总值而非GDP来衡量。寺院栖息在不可能的悬崖上，而经幡在山风中传递愿望。",
        quote_zh: "最高的山峰并不总是由岩石构成的。",
        narrative_hi: "अंतिम हिमालयी राज्य सकल राष्ट्रीय खुशी को जीडीपी से अधिक मापता है। मठ असंभव चट्टानों पर बैठे हैं जबकि प्रार्थना झंडे पहाड़ी हवाओं पर इच्छाएं भेजते हैं।",
        quote_hi: "सबसे ऊंची चोटियाँ हमेशा चट्टान की नहीं होतीं।"
    },
    {
        id: 15,
        name: "Patagonia",
        country: "Argentina/Chile",
        type: "mountain",
        distance: "bloom",
        moods: ["wild", "zen"],
        location: 0.6, // Mixed mountain/coast
        distance_value: 0.95, // Very far
        mood: { x: 0.1, y: 0.1 }, // Red, extreme adventure
        image: "https://i.ibb.co/Yy9MX6Q/15.png",
        tripUrl: "https://www.trip.com/hotels/list?city=10308&checkin=2024-07-10&checkout=2024-07-11&adult=1&children=0&searchboxarg=t&searchtype=City&crn=1",
        narrative_en: "At the end of the world, wind and ice have carved a land of extremes. Patagonia stretches from glacier-fed lakes to the storm-battered shores of Tierra del Fuego. Here, condors soar above granite spires while guanacos roam endless steppes under the Southern Cross.",
        quote_en: "The end of the world is just the beginning of the adventure.",
        narrative_it: "Alla fine del mondo, vento e ghiaccio hanno scolpito una terra di estremi. La Patagonia si estende dai laghi alimentati dai ghiacciai alle coste battute dalle tempeste della Terra del Fuoco.",
        quote_it: "La fine del mondo è solo l'inizio dell'avventura.",
        narrative_fr: "Au bout du monde, le vent et la glace ont sculpté une terre d'extrêmes. La Patagonie s'étend des lacs alimentés par les glaciers aux côtes battues par les tempêtes de la Terre de Feu.",
        quote_fr: "La fin du monde n'est que le début de l'aventure.",
        narrative_es: "En el fin del mundo, el viento y el hielo han tallado una tierra de extremos. La Patagonia se extiende desde lagos alimentados por glaciares hasta las costas azotadas por tormentas de Tierra del Fuego.",
        quote_es: "El fin del mundo es solo el comienzo de la aventura.",
        narrative_ar: "في نهاية العالم، نحتت الرياح والجليد أرضاً من التطرفات. تمتد باتاغونيا من البحيرات التي تغذيها الأنهار الجليدية إلى الشواطئ التي ضربتها العواصف في تييرا ديل فويغو.",
        quote_ar: "نهاية العالم هي مجرد بداية المغامرة.",
        narrative_zh: "在世界的尽头，风和冰雕刻出了一片极端的土地。巴塔哥尼亚从冰川湖延伸到火地岛风暴肆虐的海岸。",
        quote_zh: "世界的尽头只是冒险的开始。",
        narrative_hi: "दुनिया के अंत में, हवा और बर्फ ने चरम की भूमि को तराशा है। पेटागोनिया ग्लेशियर से भरी झीलों से लेकर टिएरा डेल फ्यूगो के तूफान से त्रस्त तटों तक फैला है।",
        quote_hi: "दुनिया का अंत केवल रोमांच की शुरुआत है।"
    }
];
