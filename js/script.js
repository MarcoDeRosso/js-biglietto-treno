var distance = prompt("Quanti chilomentri devi percorrere?")

var age = prompt("Quanti anni hai?")

var ticket = parseInt(distance) * 0.21;

var tiketElement = document.getElementById("ticketGenerator");

if (age < 18) {
    tiketElement.innerHTML += "Il prezzo del suo biglietto è: " + ((ticket * 20) / 100).toFixed(2) + "€";
} else if (age >= 65) {
    tiketElement.innerHTML += "Il prezzo del suo biglietto è: " + ((ticket * 40) / 100).toFixed(2) + "€";
} else {
    tiketElement.innerHTML += "Il prezzo del suo biglietto è: " + ticket.toFixed(2) + "€";
}