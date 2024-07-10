let countHome = 0;
let countGuest = 0;

function add1Guest() {
    countGuest += 1
    document.getElementById('marker-guest').textContent = countGuest
}
function add2Guest() {
    countGuest += 2
    document.getElementById('marker-guest').textContent = countGuest
}
function add3Guest() {
    countGuest += 3
    document.getElementById('marker-guest').textContent = countGuest
}

function add1Home() {

    countHome += 1
    document.getElementById('marker-home').textContent = countHome;
}

function add2Home() {

    countHome += 2
    document.getElementById('marker-home').textContent = countHome;
}
function add3Home() {
    countHome += 3
    document.getElementById('marker-home').textContent = countHome;
}


function restatGame() {
    
    countGuest > countHome ? alert('Win is GUEST'): countGuest=== countHome ? alert('EMPATE'):alert('Win is HOME')
    countGuest = document.getElementById('marker-home').innerText = 0
    countHome = document.getElementById('marker-guest').innerText = 0
    
}