let nomeUtente;

nomeUtente= prompt("inserisci nome")

let cognomeUtente;

cognomeUtente= prompt("inserisci cognome")

let colorePreferito;

colorePreferito= prompt("inserisci colore preferito")

console.log (nomeUtente, cognomeUtente, colorePreferito)

document.getElementById("pass").innerHTML = `
<h1>
${nomeUtente}${cognomeUtente}${colorePreferito}21
</h1>

 `