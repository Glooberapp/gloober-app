// GLOOBER DESTINATIONS DATABASE
// Version: 1.0.0
// Last Update: 2024-01-20
// Languages: IT + EN (altre lingue via traduzione automatica)

// TONE GUIDE per traduzioni future
const NARRATIVE_TONE = {
    style: "first-person-sensory",
    mood: "evocative-poetic", 
    tense: "present",
    avoid: ["you will", "there is", "it is"],
    prefer: ["you", "sensory verbs", "metaphors"]
};

const DESTINATIONS_DB = {
    // =============================================
    // MARE (SEA) DESTINATIONS
    // =============================================
    
    "sea-movida-comfort": [
        {
            id: "ibiza-001",
            name: "Ibiza",
            country: "Spain",
            image: "https://images.unsplash.com/photo-1558538337-aab544368de8?w=1200",
            tagline: {
                it: "Dove il tramonto diventa festa",
                en: "Where sunset becomes the party"
            },
            narrative: {
                it: "Yoga all'alba a Benirràs, i tamburi iniziano a suonare. Salti da una caletta segreta all'altra - l'acqua è smeraldo liquido. Pranzo in un chiringuito dove il tempo non esiste. Tramonto al Café del Mar, poi la notte ti porta dove vuole: beach club, grotte misteriose, terrazze sotto le stelle. L'isola ti ha insegnato che la libertà ha il sapore del sale.",
                en: "Dawn yoga at Benirràs, drums begin their rhythm. You hop from one secret cove to another - water like liquid emerald. Lunch at a chiringuito where time doesn't exist. Sunset at Café del Mar, then night takes you where it wants: beach clubs, mysterious caves, terraces under stars. The island teaches you freedom tastes like salt."
            }
        },
        {
            id: "mykonos-001",
            name: "Mykonos",
            country: "Greece",
            image: "https://images.unsplash.com/photo-1633321702518-75040d5651e7?w=1200",
            tagline: {
                it: "Dove gli dei fanno festa",
                en: "Where gods come to party"
            },
            narrative: {
                it: "Il sole ti sveglia attraverso le persiane bianche. Colazione con fichi e miele vista mare, poi ti perdi nei vicoli del borgo fino a Paradise Beach. L'acqua è cristallo puro. Nel pomeriggio scopri una taverna nascosta dove il padrone ti racconta storie di dei e pescatori. Al tramonto sei a Little Venice, i piedi a mollo, un cocktail che sa di estate infinita.",
                en: "Sun wakes you through white shutters. Breakfast of figs and honey with sea view, then you lose yourself in village alleys until Paradise Beach. Water like pure crystal. Afternoon brings a hidden taverna where the owner tells tales of gods and fishermen. Sunset finds you in Little Venice, feet in water, cocktail tasting of endless summer."
            }
        },
        {
            id: "miami-beach-001",
            name: "Miami Beach",
            country: "USA",
            image: "https://images.unsplash.com/photo-1514214246283-d427a95c5d2f?w=1200",
            tagline: {
                it: "Dove l'Art Deco incontra l'oceano",
                en: "Where Art Deco meets the ocean"
            },
            narrative: {
                it: "South Beach si sveglia con te. Jogging all'alba lungo Ocean Drive, gli edifici pastello ancora addormentati. Colazione cubana a Lincoln Road. La spiaggia è una passerella naturale, l'acqua turchese dei Caraibi. Pranzo di ceviche fresco sotto le palme. Il tramonto dipinge tutto di rosa e oro. La notte è neon e salsa, mojito e risate fino all'alba.",
                en: "South Beach wakes with you. Dawn jogging along Ocean Drive, pastel buildings still sleeping. Cuban breakfast on Lincoln Road. The beach is a natural catwalk, Caribbean turquoise water. Fresh ceviche lunch under palm trees. Sunset paints everything pink and gold. Night is neon and salsa, mojitos and laughter until dawn."
            }
        }
    ],

    "sea-zen-comfort": [
        {
            id: "maldive-001",
            name: "Maldive",
            country: "Maldives",
            image: "https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=1200",
            tagline: {
                it: "Dove il tempo si dissolve nell'oceano",
                en: "Where time dissolves in the ocean"
            },
            narrative: {
                it: "Ti svegli in una villa sull'acqua. Il suono delle onde è la tua sveglia naturale. Colazione galleggiante nella tua piscina privata - frutta tropicale e vista infinita sull'oceano. Snorkeling tra pesci pappagallo e tartarughe. Massaggio al tramonto con oli di cocco. La sera, cena a piedi nudi sulla sabbia sotto un cielo di stelle. Le Maldive ti hanno insegnato che il paradiso non è un luogo, è uno stato mentale.",
                en: "You wake in an overwater villa. Wave sounds are your natural alarm. Floating breakfast in your private pool - tropical fruits and infinite ocean views. Snorkeling among parrotfish and turtles. Sunset massage with coconut oils. Evening brings barefoot dinner on sand under a starlit sky. The Maldives teach you paradise isn't a place, it's a state of mind."
            }
        },
        {
            id: "zanzibar-001",
            name: "Zanzibar",
            country: "Tanzania",
            image: "https://images.unsplash.com/photo-1568302193654-498cf0c07de8?w=1200",
            tagline: {
                it: "L'isola delle spezie e dei tramonti infiniti",
                en: "Island of spices and endless sunsets"
            },
            narrative: {
                it: "Stone Town si sveglia con il richiamo del muezzin. Caffè speziato nel mercato di Darajani. Barca dhow verso Prison Island - tartarughe giganti centenarie ti guardano con saggezza antica. Pranzo di pesce alla griglia a Nungwi. Il pomeriggio scompare tra le piantagioni di spezie - cannella, cardamomo, vaniglia. Tramonto a Kendwa, il sole si tuffa nell'oceano mentre i pescatori preparano le reti.",
                en: "Stone Town wakes with the muezzin's call. Spiced coffee in Darajani market. Dhow boat to Prison Island - ancient giant tortoises gaze with centuries of wisdom. Grilled fish lunch in Nungwi. Afternoon disappears in spice plantations - cinnamon, cardamom, vanilla. Sunset at Kendwa, sun dives into ocean while fishermen prepare nets."
            }
        },
        {
            id: "bora-bora-001",
            name: "Bora Bora",
            country: "French Polynesia",
            image: "https://images.unsplash.com/photo-1589197331516-4d84b72ebde3?w=1200",
            tagline: {
                it: "La perla del Pacifico",
                en: "The pearl of the Pacific"
            },
            narrative: {
                it: "La laguna è uno specchio di turchese impossibile. Ti svegli nel tuo bungalow e pesci tropicali nuotano sotto il pavimento di vetro. Colazione di frutta esotica e poisson cru. Kayak trasparente sopra giardini di corallo. Un picnic motu su un'isola deserta solo per te. Al tramonto, le montagne vulcaniche si tingono di viola. La notte porta stelle così vicine che sembrano toccare l'acqua.",
                en: "The lagoon is a mirror of impossible turquoise. You wake in your bungalow with tropical fish swimming under glass floors. Breakfast of exotic fruits and poisson cru. Clear kayak over coral gardens. A motu picnic on a deserted island just for you. At sunset, volcanic mountains turn purple. Night brings stars so close they seem to touch the water."
            }
        }
    ],

    "sea-romantic-curious": [
        {
            id: "santorini-001",
            name: "Santorini",
            country: "Greece",
            image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=1200",
            tagline: {
                it: "Dove l'amore ha il colore del tramonto",
                en: "Where love has the color of sunset"
            },
            narrative: {
                it: "Oia ti accoglie con case bianche e cupole blu. Colazione sulla terrazza - yogurt greco con miele di timo e vista sulla caldera. Esplori villaggi nascosti, scale infinite che scendono al mare. Vino Assyrtiko in una cantina scavata nella roccia vulcanica. Il tramonto è uno spettacolo che ferma il mondo - tu e l'infinito. Cena sotto le stelle, il mare sussurra promesse eterne.",
                en: "Oia welcomes you with white houses and blue domes. Terrace breakfast - Greek yogurt with thyme honey overlooking the caldera. You explore hidden villages, infinite stairs descending to the sea. Assyrtiko wine in a cave carved from volcanic rock. Sunset is a show that stops the world - you and infinity. Dinner under stars, the sea whispers eternal promises."
            }
        },
        {
            id: "amalfi-coast-001",
            name: "Costiera Amalfitana",
            country: "Italy",
            image: "https://images.unsplash.com/photo-1534445867742-43195f401b6c?w=1200",
            tagline: {
                it: "La strada dell'amore sospesa sul mare",
                en: "The road of love suspended over the sea"
            },
            narrative: {
                it: "Positano si arrampica sulla montagna come un presepe colorato. Limoncello fatto in casa sulla terrazza di un pescatore. Giro in barca verso fiordi segreti - l'acqua è zaffiro liquido. Pranzo di scialatielli ai frutti di mare a Ravello, vista da dio. Il pomeriggio si perde tra viuzze profumate di gelsomino. La sera, brindisi al tramonto da Villa Cimbrone. La costiera ti ha mostrato che l'amore è verticale.",
                en: "Positano climbs the mountain like a colorful nativity. Homemade limoncello on a fisherman's terrace. Boat trip to secret fjords - water like liquid sapphire. Seafood scialatielli lunch in Ravello, godlike views. Afternoon disappears in jasmine-scented alleys. Evening toast at sunset from Villa Cimbrone. The coast shows you love is vertical."
            }
        },
        {
            id: "seychelles-001",
            name: "Seychelles",
            country: "Seychelles",
            image: "https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=1200",
            tagline: {
                it: "Il giardino dell'Eden nell'Oceano Indiano",
                en: "The Garden of Eden in the Indian Ocean"
            },
            narrative: {
                it: "Anse Source d'Argent - massi di granito levigati dal tempo abbracciano la sabbia più bianca del mondo. Colazione creola con vista sulle tartarughe giganti. Snorkeling in acque così trasparenti che sembra di volare. Trekking nella giungla fino a spiagge segrete. Picnic di pesce alla griglia e frutta del pane. Il tramonto accende di rosa i massi millenari. Le Seychelles ti insegnano che l'amore è antico come la terra.",
                en: "Anse Source d'Argent - granite boulders polished by time embrace the world's whitest sand. Creole breakfast overlooking giant tortoises. Snorkeling in water so clear it feels like flying. Jungle trekking to secret beaches. Grilled fish and breadfruit picnic. Sunset ignites ancient boulders pink. The Seychelles teach you love is as old as earth."
            }
        }
    ],

    // =============================================
    // CITTÀ (CITY) DESTINATIONS
    // =============================================

    "city-culture-curious": [
        {
            id: "kyoto-001",
            name: "Kyoto",
            country: "Japan",
            image: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=1200",
            tagline: {
                it: "Dove la tradizione sussurra nel tempo",
                en: "Where tradition whispers through time"
            },
            narrative: {
                it: "Nebbia sui templi. Ti alzi prima dell'alba per attraversare i mille torii rossi di Fushimi Inari in solitudine. Il tè matcha in una casa tradizionale ti centra l'anima. Cammini nel bambù di Arashiyama - il vento sussurra segreti antichi. Un monaco ti sorride al tempio d'oro. La sera ti trovi in un onsen nascosto, l'acqua calda scioglie ogni resistenza. Kyoto ti ha mostrato che il silenzio può essere più forte di qualsiasi parola.",
                en: "Mist over temples. You rise before dawn to walk through Fushimi Inari's thousand torii gates in solitude. Matcha tea in a traditional house centers your soul. Walking through Arashiyama bamboo - wind whispers ancient secrets. A monk smiles at the golden temple. Evening finds you in a hidden onsen, hot water melting all resistance. Kyoto shows you silence can be louder than any words."
            }
        },
        {
            id: "istanbul-001",
            name: "Istanbul",
            country: "Turkey",
            image: "https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?w=1200",
            tagline: {
                it: "Il ponte tra mondi e millenni",
                en: "The bridge between worlds and millennia"
            },
            narrative: {
                it: "Il richiamo del muezzin all'alba sulla città che si sveglia. Colazione sul Bosforo - simit e çay mentre i traghetti danzano tra due continenti. Il Gran Bazaar è un labirinto di storie. Moschea Blu, poi Santa Sofia - dei e sultani sotto lo stesso cielo. Pranzo di meze infiniti a Galata. Il tramonto dal ponte ti mostra Europa e Asia che si baciano. La notte è narghilè e racconti nei caffè nascosti.",
                en: "The muezzin's dawn call over the waking city. Bosphorus breakfast - simit and çay while ferries dance between two continents. The Grand Bazaar is a labyrinth of stories. Blue Mosque, then Hagia Sophia - gods and sultans under the same sky. Endless meze lunch in Galata. Sunset from the bridge shows you Europe and Asia kissing. Night is nargile and tales in hidden cafés."
            }
        },
        {
            id: "marrakech-001",
            name: "Marrakech",
            country: "Morocco",
            image: "https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?w=1200",
            tagline: {
                it: "Dove i sensi danzano nel deserto",
                en: "Where senses dance in the desert"
            },
            narrative: {
                it: "Jemaa el-Fna si sveglia con serpenti e incantatori. Colazione sulla terrazza di un riad - msemen e miele con vista sull'Atlas. Ti perdi nella medina, ogni vicolo una scoperta. Il profumo delle spezie nel souk ti ubriaca. Pranzo di tajine sotto gli aranci. Hammam nel pomeriggio - vapore e sapone nero. Il tramonto accende di fuoco la Koutoubia. La notte è mille e una storia sotto le stelle del Sahara.",
                en: "Jemaa el-Fna wakes with snakes and charmers. Riad terrace breakfast - msemen and honey overlooking the Atlas. You lose yourself in the medina, every alley a discovery. Spice scents in the souk intoxicate you. Tajine lunch under orange trees. Afternoon hammam - steam and black soap. Sunset sets the Koutoubia on fire. Night is a thousand and one tales under Sahara stars."
            }
        }
    ],

    "city-design-comfort": [
        {
            id: "copenhagen-001",
            name: "Copenhagen",
            country: "Denmark",
            image: "https://images.unsplash.com/photo-1513622470522-26c3c8a854bc?w=1200",
            tagline: {
                it: "Dove il design incontra l'hygge",
                en: "Where design meets hygge"
            },
            narrative: {
                it: "Nyhavn si specchia nell'acqua con le sue case colorate. Colazione danese al mercato di Torvehallerne - smørrebrød e caffè filtrato. Bici lungo i canali fino alla Sirenetta. Design shops in Strøget dove ogni oggetto è poesia. Pranzo New Nordic in un ex magazzino. Louisiana Museum - arte e mare in perfetta armonia. La sera, candele e coperte in un café nascosto. Copenhagen ti insegna che la bellezza è nel dettaglio quotidiano.",
                en: "Nyhavn reflects in water with its colored houses. Danish breakfast at Torvehallerne - smørrebrød and filter coffee. Bike along canals to the Little Mermaid. Design shops in Strøget where every object is poetry. New Nordic lunch in a former warehouse. Louisiana Museum - art and sea in perfect harmony. Evening brings candles and blankets in a hidden café. Copenhagen teaches you beauty is in daily details."
            }
        },
        {
            id: "milan-001",
            name: "Milano",
            country: "Italy",
            image: "https://images.unsplash.com/photo-1520440229-6469a96ac7c0?w=1200",
            tagline: {
                it: "Dove la moda diventa architettura",
                en: "Where fashion becomes architecture"
            },
            narrative: {
                it: "Il Duomo ti saluta con le sue guglie che toccano il cielo. Cappuccino e brioche in Galleria Vittorio Emanuele - lo shopping è teatro. Via Montenapoleone sussurra lusso discreto. Pranzo risotto alla milanese in un'osteria storica. Pinacoteca di Brera - capolavori nascosti. Aperitivo sui Navigli, l'happy hour è un'arte. Scala per la prima - Milano ti mostra che l'eleganza è uno stato mentale.",
                en: "The Duomo greets you with spires touching the sky. Cappuccino and brioche in Galleria Vittorio Emanuele - shopping is theater. Via Montenapoleone whispers discrete luxury. Milanese risotto lunch in a historic osteria. Pinacoteca di Brera - hidden masterpieces. Aperitivo on the Navigli, happy hour is an art. La Scala for the premiere - Milan shows you elegance is a state of mind."
            }
        },
        {
            id: "barcelona-001",
            name: "Barcelona",
            country: "Spain",
            image: "https://images.unsplash.com/photo-1583422409516-2895a77efded?w=1200",
            tagline: {
                it: "Dove Gaudí incontra il mare",
                en: "Where Gaudí meets the sea"
            },
            narrative: {
                it: "La Sagrada Familia ti accoglie con la sua foresta di pietra. Colazione al Boqueria - jamón e pan con tomate. Park Güell è un sogno di mosaici. Ti perdi nel labirinto gotico del Barri. Paella vista mare alla Barceloneta. Casa Batlló al tramonto - la luce gioca con le squame di drago. Cena di tapas infinite nel Born. La notte è rumba catalana sui terrazzi. Barcelona ti insegna che la fantasia può diventare città.",
                en: "Sagrada Familia welcomes you with its stone forest. Breakfast at Boqueria - jamón and pan con tomate. Park Güell is a mosaic dream. You lose yourself in the Gothic labyrinth of Barri. Seafront paella at Barceloneta. Casa Batlló at sunset - light plays with dragon scales. Endless tapas dinner in Born. Night is Catalan rumba on terraces. Barcelona teaches you fantasy can become a city."
            }
        }
    ],

    "city-gourmet-comfort": [
        {
            id: "paris-001",
            name: "Paris",
            country: "France",
            image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200",
            tagline: {
                it: "Dove ogni boccone è un bacio",
                en: "Where every bite is a kiss"
            },
            narrative: {
                it: "Montmartre si sveglia con l'odore del pane fresco. Croissant e café crème in un bistrot d'angolo - Parigi inizia dalla colazione. Marché des Enfants Rouges per ostriche e champagne. Il Louvre può aspettare - prima macarons da Ladurée. Pranzo stellato con vista sulla Senna. Tramonto dalla Torre Eiffel mentre la città si accende. Cena in un bistrot segreto del Marais. Parigi ti sussurra che l'amore passa dallo stomaco.",
                en: "Montmartre wakes with fresh bread scent. Croissant and café crème in a corner bistro - Paris starts with breakfast. Marché des Enfants Rouges for oysters and champagne. The Louvre can wait - first macarons at Ladurée. Starred lunch overlooking the Seine. Sunset from Eiffel Tower as the city lights up. Dinner in a secret Marais bistro. Paris whispers that love goes through the stomach."
            }
        },
        {
            id: "bologna-001",
            name: "Bologna",
            country: "Italy",
            image: "https://images.unsplash.com/photo-1557142046-c704a3adf364?w=1200",
            tagline: {
                it: "La grassa, la dotta, la rossa",
                en: "The fat, the learned, the red"
            },
            narrative: {
                it: "I portici ti proteggono mentre cerchi la vera tagliatella. Mercato di Mezzo - mortadella e parmigiano per colazione. Le torri pendono come i tuoi propositi di dieta. Pranzo all'osteria nascosta - tortellini in brodo che curano l'anima. Biblioteca dell'Archiginnasio, poi aperitivo in Piazza Santo Stefano. La sera è crescentina e Sangiovese nelle cantine medievali. Bologna ti insegna che studiare e mangiare sono la stessa cosa.",
                en: "Porticoes protect you while seeking true tagliatelle. Mercato di Mezzo - mortadella and parmigiano for breakfast. Towers lean like your diet resolutions. Hidden osteria lunch - tortellini in brodo that heal the soul. Archiginnasio Library, then aperitivo in Piazza Santo Stefano. Evening is crescentina and Sangiovese in medieval cellars. Bologna teaches you studying and eating are the same thing."
            }
        },
        {
            id: "tokyo-001",
            name: "Tokyo",
            country: "Japan",
            image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=1200",
            tagline: {
                it: "Dove il futuro ha il sapore della tradizione",
                en: "Where future tastes like tradition"
            },
            narrative: {
                it: "Tsukiji all'alba - il miglior sushi della tua vita a colazione. Shibuya crossing è un balletto di migliaia. Ramen nascosto a Shinjuku - solo 8 posti e la perfezione in una ciotola. Tempio Senso-ji per equilibrare modernità e spirito. Pranzo kaiseki da 12 portate - ogni piatto un haiku. Akihabara neon e manga. Izakaya sotto i binari - yakitori e sake fino a notte. Tokyo ti mostra che si può essere antichi e futuristi insieme.",
                en: "Dawn at Tsukiji - life's best sushi for breakfast. Shibuya crossing is a ballet of thousands. Hidden Shinjuku ramen - only 8 seats and perfection in a bowl. Senso-ji temple to balance modernity and spirit. 12-course kaiseki lunch - each dish a haiku. Neon Akihabara and manga. Izakaya under the tracks - yakitori and sake until late. Tokyo shows you can be ancient and futuristic together."
            }
        }
    ],

    // =============================================
    // MONTAGNA (MOUNTAIN) DESTINATIONS
    // =============================================

    "mountain-wild-bloom": [
        {
            id: "patagonia-001",
            name: "Patagonia",
            country: "Chile/Argentina",
            image: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=1200",
            tagline: {
                it: "Dove finisce il mondo e inizia l'avventura",
                en: "Where the world ends and adventure begins"
            },
            narrative: {
                it: "Ti svegli e il mondo è infinito. Ghiacciai che scricchiolano, condor che planano sopra la tua testa. Cavalchi con i gaucho attraverso la pampa sconfinata - il vento ti sculpisce il viso. Torres del Paine si staglia contro un cielo impossibile. La notte è un planetario naturale, la Via Lattea così vicina che potresti toccarla. Attorno al fuoco, con l'asado che sfrigola, capisci che esistono ancora posti dove la Terra respira selvaggia.",
                en: "You wake and the world is infinite. Glaciers creaking, condors soaring overhead. Riding with gauchos across endless pampas - wind sculpts your face. Torres del Paine stands against an impossible sky. Night is a natural planetarium, Milky Way so close you could touch it. Around the fire, asado sizzling, you understand there are still places where Earth breathes wild."
            }
        },
        {
            id: "iceland-001",
            name: "Iceland",
            country: "Iceland",
            image: "https://images.unsplash.com/photo-1490650404312-a2175773bbf5?w=1200",
            tagline: {
                it: "Terra di fuoco e ghiaccio",
                en: "Land of fire and ice"
            },
            narrative: {
                it: "L'aurora boreale danza sopra la tua testa. Colazione con vista su geyser che esplodono. Escursione su ghiacciai millenari - il blu del ghiaccio è un colore che non esiste altrove. Bagno nella Blue Lagoon mentre nevica. Cascate che sembrano cadere dal cielo. Cena di agnello affumicato in una fattoria isolata. La notte è silenzio totale rotto solo dal respiro della terra. L'Islanda ti mostra che la natura è la vera artista.",
                en: "Northern lights dance overhead. Breakfast overlooking exploding geysers. Hiking on millennial glaciers - ice blue is a color that exists nowhere else. Blue Lagoon bath while it snows. Waterfalls that seem to fall from the sky. Smoked lamb dinner in an isolated farm. Night is total silence broken only by earth's breathing. Iceland shows you nature is the true artist."
            }
        },
        {
            id: "nepal-001",
            name: "Nepal",
            country: "Nepal",
            image: "https://images.unsplash.com/photo-1558799401-1dcba79e728f?w=1200",
            tagline: {
                it: "Dove le montagne toccano gli dei",
                en: "Where mountains touch the gods"
            },
            narrative: {
                it: "Kathmandu ti accoglie con incenso e preghiere. Alba su Nagarkot - l'Himalaya si accende di rosa. Trekking tra villaggi sherpa, ogni passo più vicino al cielo. Tè al burro di yak in una lodge a 4000 metri. Le bandiere di preghiera sventolano desideri nel vento. Monasteri dove il tempo si è fermato. La sera, dal chang e storie di montagna. Il Nepal ti insegna che la vera altezza è dentro di te.",
                en: "Kathmandu welcomes you with incense and prayers. Dawn over Nagarkot - the Himalayas light up pink. Trekking through Sherpa villages, each step closer to heaven. Yak butter tea in a lodge at 4000 meters. Prayer flags flutter wishes in the wind. Monasteries where time has stopped. Evening brings chang and mountain stories. Nepal teaches you true height is within."
            }
        }
    ],

    "mountain-zen-comfort": [
        {
            id: "dolomiti-001",
            name: "Dolomiti",
            country: "Italy",
            image: "https://images.unsplash.com/photo-1558300776-5edf70a1c7f3?w=1200",
            tagline: {
                it: "Dove le vette toccano l'anima",
                en: "Where peaks touch the soul"
            },
            narrative: {
                it: "Le Dolomiti si tingono di rosa all'alba. Colazione con vista sulle Tre Cime di Lavaredo - caffè e strudel mentre il mondo si sveglia. Sentieri che profumano di pino e resina. Un rifugio nascosto dove il tempo si ferma per un bombardino. Il lago di Braies riflette il cielo come uno specchio d'acqua perfetto. La sera, nella spa dell'hotel, l'acqua calda ti culla mentre fuori nevica piano.",
                en: "The Dolomites blush pink at dawn. Breakfast overlooking Tre Cime di Lavaredo - coffee and strudel as the world awakens. Trails scented with pine and resin. A hidden refuge where time stops for bombardino. Lake Braies reflects the sky like a perfect mirror. Evening in the hotel spa, warm water cradles you while snow falls softly outside."
            }
        },
        {
            id: "bhutan-001",
            name: "Bhutan",
            country: "Bhutan",
            image: "https://images.unsplash.com/photo-1582975786153-baf4f05eb587?w=1200",
            tagline: {
                it: "Il regno della felicità",
                en: "The kingdom of happiness"
            },
            narrative: {
                it: "Paro ti accoglie con dzong e bandiere di preghiera. Trekking al Nido della Tigre - monastero sospeso nel vuoto. Monaci bambini che ridono nei templi. Pranzo di ema datshi piccante con vista sulle risaie terrazzate. Thimphu mescola tradizione e modernità con grazia. Bagno di pietre calde sotto le stelle. La sera, chang e racconti attorno al fuoco. Il Bhutan ti insegna che la felicità non si misura, si vive.",
                en: "Paro welcomes you with dzongs and prayer flags. Trek to Tiger's Nest - monastery suspended in the void. Child monks laughing in temples. Spicy ema datshi lunch overlooking terraced rice fields. Thimphu blends tradition and modernity with grace. Hot stone bath under stars. Evening brings chang and stories around the fire. Bhutan teaches you happiness isn't measured, it's lived."
            }
        },
        {
            id: "aspen-001",
            name: "Aspen",
            country: "USA",
            image: "https://images.unsplash.com/photo-1544986581-efac024faf62?w=1200",
            tagline: {
                it: "Dove il lusso abbraccia le vette",
                en: "Where luxury embraces peaks"
            },
            narrative: {
                it: "La neve perfetta ti accoglie all'alba. Prima traccia sulla Ajax Mountain - la polvere vola come champagne. Colazione al Little Nell con vista sulle piste. Shopping in boutique esclusive dove l'arte incontra la montagna. Pranzo di ostriche e Chablis in quota. Spa pomeridiana - hot stones e vista sulle Rockies. Après-ski al Jerome Bar, poi cena stellata. Aspen ti mostra che si può toccare il cielo con stile.",
                en: "Perfect snow greets you at dawn. First tracks on Ajax Mountain - powder flies like champagne. Breakfast at Little Nell overlooking the slopes. Shopping in exclusive boutiques where art meets mountain. Lunch of oysters and Chablis at altitude. Afternoon spa - hot stones and Rockies views. Après-ski at Jerome Bar, then starred dinner. Aspen shows you can touch the sky with style."
            }
        }
    ],

    "mountain-romantic-curious": [
        {
            id: "swiss-alps-001",
            name: "Swiss Alps",
            country: "Switzerland",
            image: "https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=1200",
            tagline: {
                it: "Dove l'amore trova la sua altezza",
                en: "Where love finds its altitude"
            },
            narrative: {
                it: "Il treno panoramico ti porta tra cime innevate e villaggi da fiaba. Zermatt ti accoglie con il Cervino che domina ogni vista. Fonduta a lume di candela in uno chalet nascosto. La mattina dopo, la funivia ti porta in paradiso - colazione a 3000 metri con vista su quattro nazioni. Passeggiata mano nella mano sui sentieri fioriti. Le terme di Leukerbad al tramonto, l'acqua calda che fuma nell'aria fredda. La Svizzera ti ha mostrato che l'amore cresce con l'altitudine.",
                en: "The panoramic train carries you between snowy peaks and fairytale villages. Zermatt welcomes you with the Matterhorn dominating every view. Candlelit fondue in a hidden chalet. Next morning, cable car takes you to paradise - breakfast at 3000 meters overlooking four nations. Hand in hand walks on flowered trails. Leukerbad thermal baths at sunset, hot water steaming in cold air. Switzerland shows you love grows with altitude."
            }
        },
        {
            id: "hallstatt-001",
            name: "Hallstatt",
            country: "Austria",
            image: "https://images.unsplash.com/photo-1563271282-cbdd5bbc0f48?w=1200",
            tagline: {
                it: "Il villaggio delle fiabe diventa realtà",
                en: "Where fairytales become reality"
            },
            narrative: {
                it: "Il lago riflette il villaggio come uno specchio incantato. Colazione con vista sulle case pastello che si arrampicano sulla montagna. Giro in barca al mattino - cigni che scivolano sull'acqua di cristallo. Le miniere di sale millenarie raccontano storie d'amore eterno. Pranzo di trota affumicata in una locanda del '500. Il tramonto accende le Alpi di rosa e oro. La sera, musica classica nel castello. Hallstatt ti sussurra che alcune bellezze sono eterne.",
                en: "The lake reflects the village like an enchanted mirror. Breakfast overlooking pastel houses climbing the mountain. Morning boat ride - swans gliding on crystal water. Millennial salt mines tell stories of eternal love. Smoked trout lunch in a 16th-century inn. Sunset ignites the Alps pink and gold. Evening brings classical music in the castle. Hallstatt whispers that some beauties are eternal."
            }
        },
        {
            id: "chamonix-001",
            name: "Chamonix",
            country: "France",
            image: "https://images.unsplash.com/photo-1581888227599-779811939961?w=1200",
            tagline: {
                it: "Dove l'adrenalina incontra l'altitude",
                en: "Where adrenaline meets altitude"
            },
            narrative: {
                it: "L'Aiguille du Midi ti aspetta. Prima luce sulla Mer de Glace - sci fuoripista nella polvere vergine. Pranzo al rifugio, vin brulé e racconti di alpinisti. Il pomeriggio voli col parapendio sopra la valle. Aperitivo al Chambre Neuf - DJ set con vista sul Monte Bianco. La notte ti porta da una festa in baita all'altra, mentre le stelle alpine vegliano sui tuoi eccessi. Chamonix ti insegna che si può ballare anche a 4000 metri.",
                en: "Aiguille du Midi awaits. First light on Mer de Glace - off-piste skiing in virgin powder. Lunch at the refuge, mulled wine and mountaineer tales. Afternoon paragliding over the valley. Aperitif at Chambre Neuf - DJ set overlooking Mont Blanc. Night takes you from one chalet party to another, while alpine stars watch over your excesses. Chamonix teaches you can dance even at 4000 meters."
            }
        }
    ]
};

// =============================================
// TEMPLATE PER AGGIUNGERE NUOVE DESTINAZIONI
// =============================================
// Copia questo template e compila i campi:
/*
{
    id: "nome-citta-001",
    name: "Nome Città",
    country: "Paese",
    image: "https://images.unsplash.com/photo-xxxxxxxxx?w=1200",
    tagline: {
        it: "Frase evocativa in italiano",
        en: "Evocative phrase in English"
    },
    narrative: {
        it: "Narrativa immersiva in prima persona, tempo presente, sensoriale...",
        en: "Immersive first-person narrative, present tense, sensory..."
    }
}
*/

// =============================================
// EXPORT PER L'APP
// =============================================
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { DESTINATIONS_DB, NARRATIVE_TONE };
}