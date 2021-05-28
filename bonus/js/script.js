var distance = prompt("Quanti chilomentri devi percorrere?")

var year = prompt("Quale è il tuo anno di nascita?")
var d = new Date();
var year = d.getFullYear() - parseInt(age);

var ticket = parseInt(distance) * 0.21;

var tiketElement = document.getElementById("ticketGenerator");

if (year < 18) {
    tiketElement.innerHTML += "Il prezzo del suo biglietto è: " + ((ticket * 20) / 100).toFixed(2) + "€";
} else if (year >= 65) {
    tiketElement.innerHTML += "Il prezzo del suo biglietto è: " + ((ticket * 40) / 100).toFixed(2) + "€";
} else {
    tiketElement.innerHTML += "Il prezzo del suo biglietto è: " + ticket.toFixed(2) + "€";
}