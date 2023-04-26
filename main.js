// dichiarazione variabili
let nomeUtente, cognomeUtente, coloreUtente, messaggio;

// Chiedi all’utente il suo nome
nomeUtente = prompt("Qual è il tuo nome?");
//  poi chiedi il suo cognome, 
cognomeUtente = prompt("Qual è il tuo cognome?");
// poi chiedi il suo colore preferito
coloreUtente = prompt("Qual è il tuo colore preferito?");
// dichiaro il messaggio che voglio risulti come output
messaggio = `La sicurissima password che i nostri potenti sistemi hanno generato per te è ${nomeUtente}${cognomeUtente}${coloreUtente}21`;
// Infine scrivi sulla pagina nomecognomecolorepreferito21
document.getElementById("mioid").innerHTML = messaggio;
