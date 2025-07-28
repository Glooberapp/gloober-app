const destinations = [
    {
        id: 1,
        name: "Faroe Islands",
        country: "Denmark",
        continent: "Europe",
        type: "seaside",
        budget: "medium",
        temperature: "cold",
        description: "Remote Nordic archipelago with dramatic cliffs and waterfalls",
        bestMonths: ["Jun", "Jul", "Aug"],
        image: "./images/faroe.jpg",
        translations: {
            it: {
                description: "Remoto arcipelago nordico con scogliere drammatiche e cascate"
            }
        }
    },
    {
        id: 2,
        name: "Socotra Island",
        country: "Yemen",
        continent: "Asia",
        type: "seaside",
        budget: "medium",
        temperature: "hot",
        description: "Alien-like island with unique dragon blood trees",
        bestMonths: ["Oct", "Nov", "Feb", "Mar"],
        image: "./images/Socotra.jpg",
        translations: {
            it: {
                description: "Isola dall'aspetto alieno con unici alberi del sangue di drago"
            }
        }
    },
    {
        id: 3,
        name: "Lofoten Islands",
        country: "Norway",
        continent: "Europe",
        type: "seaside",
        budget: "high",
        temperature: "cold",
        description: "Arctic archipelago with fishing villages and northern lights",
        bestMonths: ["Jun", "Jul", "Aug", "Sep"],
        image: "./images/lofoten.jpg",
        translations: {
            it: {
                description: "Arcipelago artico con villaggi di pescatori e aurore boreali"
            }
        }
    },
    {
        id: 4,
        name: "Gili Nanggu",
        country: "Indonesia",
        continent: "Asia",
        type: "seaside",
        budget: "low",
        temperature: "hot",
        description: "Pristine island paradise with crystal clear waters",
        bestMonths: ["Apr", "May", "Sep", "Oct"],
        image: "./images/gili.jpg",
        translations: {
            it: {
                description: "Paradiso insulare incontaminato con acque cristalline"
            }
        }
    },
    {
        id: 5,
        name: "Comporta",
        country: "Portugal",
        continent: "Europe",
        type: "seaside",
        budget: "high",
        temperature: "mild",
        description: "Chic coastal retreat with endless sand dunes",
        bestMonths: ["May", "Jun", "Sep", "Oct"],
        image: "./images/comporta.jpeg",
        translations: {
            it: {
                description: "Rifugio costiero chic con dune di sabbia infinite"
            }
        }
    },
    {
        id: 6,
        name: "Tbilisi",
        country: "Georgia",
        continent: "Asia",
        type: "city",
        budget: "low",
        temperature: "mild",
        description: "Ancient city with colorful balconies and sulfur baths",
        bestMonths: ["May", "Jun", "Sep", "Oct"],
        image: "https://via.placeholder.com/800x600/8B4513/FFFFFF?text=Tbilisi",
        translations: {
            it: {
                description: "Città antica con balconi colorati e bagni di zolfo"
            }
        }
    },
    {
        id: 7,
        name: "Valparaíso",
        country: "Chile",
        continent: "South America",
        type: "city",
        budget: "low",
        temperature: "mild",
        description: "Bohemian port city with street art and funiculars",
        bestMonths: ["Oct", "Nov", "Mar", "Apr"],
        image: "https://via.placeholder.com/800x600/FF6347/FFFFFF?text=Valparaiso",
        translations: {
            it: {
                description: "Città portuale bohémien con street art e funicolari"
            }
        }
    },
    {
        id: 8,
        name: "Ljubljana",
        country: "Slovenia",
        continent: "Europe",
        type: "city",
        budget: "medium",
        temperature: "mild",
        description: "Charming capital with dragons, castle and green river",
        bestMonths: ["May", "Jun", "Sep"],
        image: "./images/ljubljana.jpg",
        translations: {
            it: {
                description: "Capitale affascinante con draghi, castello e fiume verde"
            }
        }
    },
    {
        id: 9,
        name: "Oaxaca",
        country: "Mexico",
        continent: "North America",
        type: "city",
        budget: "low",
        temperature: "mild",
        description: "Colonial city with mezcal, markets and Day of the Dead",
        bestMonths: ["Oct", "Nov", "Feb", "Mar"],
        image: "./images/oaxaca.jpg",
        translations: {
            it: {
                description: "Città coloniale con mezcal, mercati e Giorno dei Morti"
            }
        }
    },
    {
        id: 10,
        name: "Porto",
        country: "Portugal",
        continent: "Europe",
        type: "city",
        budget: "medium",
        temperature: "mild",
        description: "Riverside city famous for port wine and azulejos",
        bestMonths: ["May", "Jun", "Sep", "Oct"],
        image: "./images/porto.jpg",
        translations: {
            it: {
                description: "Città fluviale famosa per il vino porto e gli azulejos"
            }
        }
    },
    {
        id: 11,
        name: "Svaneti",
        country: "Georgia",
        continent: "Asia",
        type: "mountain",
        budget: "low",
        temperature: "cold",
        description: "Remote mountain region with medieval tower houses",
        bestMonths: ["Jul", "Aug", "Sep"],
        image: "https://via.placeholder.com/800x600/708090/FFFFFF?text=Svaneti",
        translations: {
            it: {
                description: "Remota regione montana con case-torre medievali"
            }
        }
    },
    {
        id: 12,
        name: "Valbona Valley",
        country: "Albania",
        continent: "Europe",
        type: "mountain",
        budget: "low",
        temperature: "mild",
        description: "Pristine alpine valley in the Albanian Alps",
        bestMonths: ["Jun", "Jul", "Aug", "Sep"],
        image: "https://via.placeholder.com/800x600/228B22/FFFFFF?text=Valbona+Valley",
        translations: {
            it: {
                description: "Valle alpina incontaminata nelle Alpi albanesi"
            }
        }
    },
    {
        id: 13,
        name: "Huaraz",
        country: "Peru",
        continent: "South America",
        type: "mountain",
        budget: "low",
        temperature: "cold",
        description: "Gateway to the Cordillera Blanca mountains",
        bestMonths: ["May", "Jun", "Jul", "Aug"],
        image: "./images/Huaraz.jpg",
        translations: {
            it: {
                description: "Porta d'accesso alle montagne della Cordillera Blanca"
            }
        }
    },
    {
        id: 14,
        name: "Lyngen Alps",
        country: "Norway",
        continent: "Europe",
        type: "mountain",
        budget: "high",
        temperature: "cold",
        description: "Arctic mountains meeting fjords with aurora views",
        bestMonths: ["Mar", "Apr", "Sep", "Oct"],
        image: "./images/lyngen.jpg",
        translations: {
            it: {
                description: "Montagne artiche che incontrano fiordi con vista aurora"
            }
        }
    },
    {
        id: 15,
        name: "Sinaia",
        country: "Romania",
        continent: "Europe",
        type: "mountain",
        budget: "low",
        temperature: "cold",
        description: "Mountain resort with fairy-tale Peleș Castle",
        bestMonths: ["Jun", "Jul", "Aug", "Dec"],
        image: "./images/Sinaia.jpg",
        translations: {
            it: {
                description: "Resort montano con il fiabesco Castello di Peleș"
            }
        }
    }
];
