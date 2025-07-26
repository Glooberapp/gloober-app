// TEST VERSION - SEMPLIFICATA
let currentLang = 'it';
let userPreferences = {
    location: 50,
    distance: 50,
    moodX: 50,
    moodY: 50
};

// Funzione di test
function gloobIt() {
    document.getElementById('slider-step').classList.add('hidden');
    document.getElementById('loading-step').classList.remove('hidden');
    
    setTimeout(() => {
        // Prendi una destinazione a caso per testare
        const destination = DESTINATIONS[0]; // Prima destinazione
        
        document.getElementById('loading-step').classList.add('hidden');
        document.getElementById('result-step').classList.remove('hidden');
        
        document.getElementById('destination-name').textContent = destination.name;
        document.getElementById('destination-tagline').textContent = destination.tagline.it;
        document.getElementById('destination-country').textContent = destination.country;
        document.getElementById('destination-image').src = destination.image;
        
        // Test quote
        if (typeof TRAVEL_QUOTES !== 'undefined' && TRAVEL_QUOTES.length > 0) {
            const quote = TRAVEL_QUOTES[0];
            document.getElementById('travel-quote').textContent = quote.quote.it;
            document.getElementById('quote-author').textContent = quote.author;
        }
    }, 2000);
}

// Dummy functions per gli slider
function startLocationDrag() {}
function dragLocation() {}
function stopLocationDrag() {}
function startDistanceDrag() {}
function dragDistance() {}
function stopDistanceDrag() {}
function startDragging() {}
function dragGlobe() {}
function stopDragging() {}
function bookTrip() {
    alert('Test booking');
}

// Language setup
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            currentLang = btn.dataset.lang;
            document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });
});
