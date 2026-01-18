// ============================================
// ARCHIVIO DIGITALE MILES DAVIS - JavaScript Semplice
// ============================================

// FUNZIONE 1: Applicare i filtri
function applyFilters() {
    // Prendi i valori dai filtri
    const search = document.getElementById('searchInput').value.toLowerCase();
    const tipo = document.getElementById('filterType').value;
    const periodo = document.getElementById('filterPeriod').value;
    
    // Prendi tutti gli item del catalogo
    const items = document.querySelectorAll('.catalog-item');
    let contatore = 0;
    
    // Per ogni item, controlla se corrisponde ai filtri
    items.forEach(item => {
        const titolo = item.querySelector('.card-title').textContent.toLowerCase();
        const itemTipo = item.getAttribute('data-type');
        const itemData = item.getAttribute('data-date');
        const anno = parseInt(itemData);
        
        // Verifica ricerca
        let mostraItem = true;
        if (search && !titolo.includes(search)) {
            mostraItem = false;
        }
        
        // Verifica tipo
        if (tipo !== 'all' && itemTipo !== tipo) {
            mostraItem = false;
        }
        
        // Verifica periodo
        if (periodo === '1940s' && (anno < 1940 || anno > 1949)) mostraItem = false;
        if (periodo === '1950s' && (anno < 1950 || anno > 1959)) mostraItem = false;
        if (periodo === '1960s' && (anno < 1960 || anno > 1969)) mostraItem = false;
        if (periodo === '1970s' && (anno < 1970 || anno > 1979)) mostraItem = false;
        if (periodo === '1980s' && (anno < 1980 || anno > 1989)) mostraItem = false;
        if (periodo === '1990s' && (anno < 1990 || anno > 1999)) mostraItem = false;
        
        // Mostra o nascondi l'item
        if (mostraItem) {
            item.style.display = 'block';
            contatore++;
        } else {
            item.style.display = 'none';
        }
    });
    
    // Aggiorna il contatore
    document.getElementById('resultCount').textContent = contatore;
}

// FUNZIONE 2: Resettare i filtri
function resetFilters() {
    // Pulisci i campi
    document.getElementById('searchInput').value = '';
    document.getElementById('filterType').value = 'all';
    document.getElementById('filterPeriod').value = 'all';
    document.getElementById('sortBy').value = 'date-desc';
    
    // Mostra tutti gli item
    const items = document.querySelectorAll('.catalog-item');
    items.forEach(item => {
        item.style.display = 'block';
    });
    
    // Aggiorna contatore
    document.getElementById('resultCount').textContent = items.length;
}

// FUNZIONE 3: Vista Griglia (già attiva)
function toggleGridView() {
    document.getElementById('gridView').classList.add('active');
    document.getElementById('listView').classList.remove('active');
    // Non serve altro, Bootstrap gestisce il resto
}

// FUNZIONE 4: Vista Lista
function toggleListView() {
    document.getElementById('listView').classList.add('active');
    document.getElementById('gridView').classList.remove('active');
    alert('Vista lista in sviluppo');
}

// ============================================
// INIZIALIZZAZIONE - Si esegue quando la pagina è pronta
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    console.log('JavaScript caricato correttamente!');
    
    // Aggiungi evento ai pulsanti vista
    const gridBtn = document.getElementById('gridView');
    const listBtn = document.getElementById('listView');
    
    if (gridBtn) gridBtn.addEventListener('click', toggleGridView);
    if (listBtn) listBtn.addEventListener('click', toggleListView);
});