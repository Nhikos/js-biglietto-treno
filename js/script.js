// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero. Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21€ al km)
// Va applicato uno sconto del 20% per i minorenni
// Va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). Questo richiederà un minimo di ricerca.

// chiedo all'utente il numero di km
var distanza = parseInt(prompt("inserisci i chilometri da percorrere"));
document.getElementById("km").innerHTML = distanza;
// chiedo all'utente l'età
var eta = parseInt(prompt("inserisci l'età del passeggero"));
document.getElementById("anni").innerHTML = eta
// calcolo prezzo del biglietto
var prezzoBase = distanza * 0.21
// sconto 20% minorenni
if (eta < 18) {
    var sconto = (prezzoBase / 100);
    var scontoApplicato = (sconto * 20);
    var prezzoScontato = (prezzoBase - scontoApplicato);
    var stampaPrezzo = prezzoScontato.toFixed(2);
    document.getElementById("costo").innerHTML = stampaPrezzo;
    // sconto 40% over 65
} else if (eta >= 65) {
    var sconto = (prezzoBase / 100);
    var scontoApplicato = (sconto * 40);
    var prezzoScontato = (prezzoBase - scontoApplicato);
    var stampaPrezzo = prezzoScontato.toFixed(2);
    document.getElementById("costo").innerHTML = stampaPrezzo;
} else {
    document.getElementById("costo").innerHTML = prezzoBase;    
}
