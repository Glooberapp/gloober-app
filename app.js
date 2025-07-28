// Variabili globali
let currentIndex = 0;
let filteredDestinations = [];
let likedDestinations = [];
let isAnimating = false;

// Elementi DOM
const app = document.getElementById('app');
const likeBtn = document.getElementById('likeBtn');
const dislikeBtn = document.getElementById('dislikeBtn');
const superBtn = document.getElementById('superBtn');
const travelSummary = document.getElementById('travelSummary');
const summaryContent = document.getElementById('summaryContent');
const closeSummary = document.getElementById('closeSummary');

// Filtri attivi
let activeFilters = {
    type: 'all',
    budget: 'all'
};

// Inizializzazione
document.addEventListener('DOMContentLoaded', () => {
    // Verifica che il database sia caricato
    if (typeof destinations === 'undefined' || !destinations) {
        showError();
        return;
    }
    
    // Inizializza l'app
    initializeApp();
});

function initializeApp() {
    // Applica i filtri iniziali
    applyFilters();
    
    // Event listeners per i filtri
    document.querySelectorAll('.filter-group').forEach(group => {
        group.addEventListener('click', (e) => {
            if (e.target.classList.contains('filter-btn')) {
                const filterType = group.dataset.filter;
                const filterValue = e.target.dataset.value;
                
                // Aggiorna il filtro attivo
                activeFilters[filterType] = filterValue;
                
                // Aggiorna UI del filtro
                group.querySelectorAll('.filter-btn').forEach(btn => {
                    btn.classList.remove('active');
                });
                e.target.classList.add('active');
                
                // Riapplica i filtri
                applyFilters();
            }
        });
    });
    
    // Event listeners per i pulsanti
    likeBtn.addEventListener('click', () => handleAction('like'));
    dislikeBtn.addEventListener('click', () => handleAction('dislike'));
    superBtn.addEventListener('click', () => handleAction('super'));
    
    // Chiudi sommario
    closeSummary.addEventListener('click', () => {
        travelSummary.classList.remove('show');
    });
    
    // Keyboard controls
    document.addEventListener('keydown', (e) => {
        if (isAnimating) return;
        
        switch(e.key) {
            case 'ArrowLeft':
                handleAction('dislike');
                break;
            case 'ArrowRight':
                handleAction('like');
                break;
            case 'ArrowUp':
                handleAction('super');
                break;
        }
    });
}

function applyFilters() {
    // Filtra le destinazioni
    filteredDestinations = destinations.filter(dest => {
        const typeMatch = activeFilters.type === 'all' || dest.type === activeFilters.type;
        const budgetMatch = activeFilters.budget === 'all' || dest.budget === activeFilters.budget;
        return typeMatch && budgetMatch;
    });
    
    // Reset index
    currentIndex = 0;
    
    // Ricarica le cards
    loadCards();
}

function loadCards() {
    // Pulisci il container
    app.innerHTML = '';
    
    if (filteredDestinations.length === 0) {
        showEmpty();
        return;
    }
    
    // Carica fino a 3 cards
    const cardsToLoad = Math.min(3, filteredDestinations.length - currentIndex);
    
    for (let i = cardsToLoad - 1; i >= 0; i--) {
        const destination = filteredDestinations[currentIndex + i];
        if (destination) {
            const card = createCard(destination, i);
            app.appendChild(card);
        }
    }
    
    // Aggiungi drag functionality alla prima card
    if (cardsToLoad > 0) {
        addDragListeners(app.querySelector('.card'));
    }
    
    // Mostra sommario se ci sono destinazioni piaciute
    if (likedDestinations.length > 0 && currentIndex >= filteredDestinations.length) {
        setTimeout(() => showTravelSummary(), 500);
    }
}

function createCard(destination, stackIndex) {
    const card = document.createElement('div');
    card.className = 'card';
    card.dataset.id = destination.id;
    
    // Posiziona le cards nello stack
    card.style.transform = `scale(${1 - stackIndex * 0.05}) translateY(${stackIndex * 10}px)`;
    card.style.zIndex = 10 - stackIndex;
    
    // Usa la descrizione in italiano se disponibile
    const description = destination.translations?.it?.description || destination.description;
    
    card.innerHTML = `
        <img src="${destination.image}" alt="${destination.name}" onerror="this.src='https://via.placeholder.com/800x600/2F4F4F/FFFFFF?text=${encodeURIComponent(destination.name)}'">
        <div class="card-content">
            <div>
                <h2>${destination.name}</h2>
                <p class="location">${destination.country}</p>
                <p class="description">${description}</p>
            </div>
            <div class="card-footer">
                <div class="tags">
                    <span class="tag">${getTypeEmoji(destination.type)}</span>
                    <span class="tag">${getBudgetSymbol(destination.budget)}</span>
                    <span class="tag">${getTemperatureEmoji(destination.temperature)}</span>
                </div>
            </div>
        </div>
    `;
    
    return card;
}

function getTypeEmoji(type) {
    const emojis = {
        seaside: '🏖️ Mare',
        city: '🏙️ Città',
        mountain: '⛰️ Montagna'
    };
    return emojis[type] || type;
}

function getBudgetSymbol(budget) {
    const symbols = {
        low: '€',
        medium: '€€',
        high: '€€€'
    };
    return symbols[budget] || budget;
}

function getTemperatureEmoji(temp) {
    const emojis = {
        cold: '❄️ Freddo',
        mild: '🌤️ Mite',
        hot: '☀️ Caldo'
    };
    return emojis[temp] || temp;
}

function addDragListeners(card) {
    let startX = 0;
    let startY = 0;
    let currentX = 0;
    let currentY = 0;
    let isDragging = false;
    
    // Touch events
    card.addEventListener('touchstart', handleStart, { passive: true });
    card.addEventListener('touchmove', handleMove, { passive: true });
    card.addEventListener('touchend', handleEnd);
    
    // Mouse events
    card.addEventListener('mousedown', handleStart);
    card.addEventListener('mousemove', handleMove);
    card.addEventListener('mouseup', handleEnd);
    card.addEventListener('mouseleave', handleEnd);
    
    function handleStart(e) {
        if (isAnimating) return;
        isDragging = true;
        card.classList.add('dragging');
        
        startX = e.type.includes('mouse') ? e.clientX : e.touches[0].clientX;
        startY = e.type.includes('mouse') ? e.clientY : e.touches[0].clientY;
    }
    
    function handleMove(e) {
        if (!isDragging || isAnimating) return;
        
        currentX = (e.type.includes('mouse') ? e.clientX : e.touches[0].clientX) - startX;
        currentY = (e.type.includes('mouse') ? e.clientY : e.touches[0].clientY) - startY;
        
        const rotation = currentX * 0.1;
        
        card.style.transform = `translate(${currentX}px, ${currentY}px) rotate(${rotation}deg)`;
        
        // Update opacity based on distance
        const opacity = 1 - Math.abs(currentX) / 300;
        card.style.opacity = opacity;
        
        // Show/hide indicators
        updateIndicators(currentX);
    }
    
    function handleEnd() {
        if (!isDragging || isAnimating) return;
        isDragging = false;
        card.classList.remove('dragging');
        
        const threshold = 100;
        
        if (Math.abs(currentX) > threshold) {
            // Swipe detected
            if (currentX > 0) {
                animateCard('right');
            } else {
                animateCard('left');
            }
        } else {
            // Return to center
            card.style.transform = '';
            card.style.opacity = '';
        }
        
        // Reset indicators
        updateIndicators(0);
    }
}

function updateIndicators(xPos) {
    const leftIndicator = document.querySelector('.nav-indicator.left');
    const rightIndicator = document.querySelector('.nav-indicator.right');
    
    if (xPos < -50) {
        leftIndicator.style.opacity = '0.8';
        rightIndicator.style.opacity = '0.3';
    } else if (xPos > 50) {
        leftIndicator.style.opacity = '0.3';
        rightIndicator.style.opacity = '0.8';
    } else {
        leftIndicator.style.opacity = '0.3';
        rightIndicator.style.opacity = '0.3';
    }
}

function handleAction(action) {
    if (isAnimating) return;
    
    const card = app.querySelector('.card');
    if (!card) return;
    
    let direction;
    switch(action) {
        case 'like':
            direction = 'right';
            likedDestinations.push(filteredDestinations[currentIndex]);
            showMessage('like');
            break;
        case 'dislike':
            direction = 'left';
            showMessage('nope');
            break;
        case 'super':
            direction = 'up';
            likedDestinations.push(filteredDestinations[currentIndex]);
            showMessage('super');
            break;
    }
    
    animateCard(direction);
}

function animateCard(direction) {
    isAnimating = true;
    const card = app.querySelector('.card');
    
    let transform;
    switch(direction) {
        case 'left':
            transform = 'translateX(-150%) rotate(-30deg)';
            break;
        case 'right':
            transform = 'translateX(150%) rotate(30deg)';
            break;
        case 'up':
            transform = 'translateY(-150%) rotate(10deg) scale(0.8)';
            break;
    }
    
    card.style.transition = 'transform 0.6s, opacity 0.6s';
    card.style.transform = transform;
    card.style.opacity = '0';
    
    setTimeout(() => {
        currentIndex++;
        isAnimating = false;
        loadCards();
    }, 600);
}

function showMessage(type) {
    const message = document.querySelector(`.message.${type}`);
    message.classList.add('show');
    
    setTimeout(() => {
        message.classList.remove('show');
    }, 800);
}

function showTravelSummary() {
    if (likedDestinations.length === 0) return;
    
    // Popola il sommario
    summaryContent.innerHTML = likedDestinations.map(dest => {
        const description = dest.translations?.it?.description || dest.description;
        return `
            <div class="summary-card">
                <img src="${dest.image}" alt="${dest.name}" onerror="this.src='https://via.placeholder.com/800x600/2F4F4F/FFFFFF?text=${encodeURIComponent(dest.name)}'">
                <h4>${dest.name}</h4>
            </div>
        `;
    }).join('');
    
    // Mostra il sommario
    travelSummary.classList.add('show');
}

function showEmpty() {
    app.innerHTML = `
        <div class="empty">
            <h2>Nessuna destinazione trovata</h2>
            <p>Prova a cambiare i filtri per scoprire nuovi luoghi!</p>
            <button class="reset-btn" onclick="resetFilters()">Resetta filtri</button>
        </div>
    `;
}

function showError() {
    app.innerHTML = `
        <div class="error">
            <h2>Errore</h2>
            <p>Ricarica la pagina</p>
            <p style="font-size: 14px; margin-top: 10px;">Database non caricato</p>
        </div>
    `;
}

function resetFilters() {
    // Reset tutti i filtri
    activeFilters = {
        type: 'all',
        budget: 'all'
    };
    
    // Reset UI
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.value === 'all') {
            btn.classList.add('active');
        }
    });
    
    // Riapplica filtri
    applyFilters();
}

// Quote rotation
const quotes = [
    { text: "La vita è un viaggio e chi viaggia vive due volte.", author: "Omar Khayyam" },
    { text: "Il mondo è un libro e chi non viaggia ne legge solo una pagina.", author: "Sant'Agostino" },
    { text: "Non tutti quelli che vagano sono perduti.", author: "J.R.R. Tolkien" },
    { text: "Viaggiare è vivere.", author: "Hans Christian Andersen" },
    { text: "Fatti portare dal vento, ma scegli tu la direzione.", author: "Proverbio" },
    { text: "Il viaggio più lungo è il viaggio interiore.", author: "Dag Hammarskjöld" },
    { text: "Immergiti nel caos creativo di Errore. Una metropoli che non dorme mai, dove i sogni prendono forma tra grattacieli e vicoli nascosti.", author: "Gloober" },
    { text: "Errore pulsa di energia e possibilità. Ogni strada nasconde una sorpresa, ogni angolo una nuova avventura urbana che ti aspetta.", author: "Gloober" }
];

let currentQuote = 0;
function rotateQuotes() {
    const quoteElement = document.querySelector('.quote p');
    const authorElement = document.querySelector('.quote .author');
    
    if (quoteElement && authorElement) {
        const quote = quotes[currentQuote];
        quoteElement.textContent = quote.text;
        authorElement.textContent = `— ${quote.author}`;
        
        currentQuote = (currentQuote + 1) % quotes.length;
    }
}

// Ruota le citazioni ogni 10 secondi
setInterval(rotateQuotes, 10000);
