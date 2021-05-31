var distance = prompt("Quanti chilomentri devi percorrere?")

var age = prompt("Quanti anni hai?")

var ticket = parseInt(distance) * 0.21;

var tiketElement = document.getElementById("ticketGenerator");

if (age < 18) {
    ticket -= ticket * 20 / 100;
} else if (age >= 65) {
    ticket -= ticket * 40 / 100;
}

ticket = ticket.toFixed(2);

tiketElement.innerHTML += "Il prezzo del suo biglietto è: " + ticket;