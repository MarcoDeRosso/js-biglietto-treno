var distance = prompt("Quanti chilomentri devi percorrere?")

var anno = prompt("Quale è il tuo anno di nascita?")

var d = new Date();

var age = d.getFullYear() - parseInt(anno);

var ticket = parseInt(distance) * 0.21;

var tiketElement = document.getElementById("ticketGenerator");

if (age < 18) {
    ticket -= ticket * 20 / 100;
} else if (age >= 65) {
    ticket -= ticket * 40 / 100;
}

ticket = ticket.toFixed(2);

tiketElement.innerHTML += "Il prezzo del suo biglietto è: " + ticket;