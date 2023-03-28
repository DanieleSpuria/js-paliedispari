/***********************************************************************************
1. Select per il pari e per il dispari, un input che accetta numeri da 1 a 5, bottone per iviare (per l'utente).
2. Una funzione genera un numero random sempre da 1 a 5 (per il pc).
3. Sommare i due numeri e, tramite funzione, verificare se la somma è pari o dispari
4. Stampare il vincitore
***********************************************************************************/


// Html

const select = document.getElementById('pariDispari');
const input = document.getElementById('numero');
const invia = document.getElementById('invia');
const reset = document.getElementById('reset');
const output = document.querySelector('h1');

let message;



invia.addEventListener('click', function() {
  
  // Invio dati ed elaborazione

  const pariDispari = select.value;
  const userNumber = parseInt(input.value);
  const pc = parseInt(random(1,5));
  const somma = userNumber + pc;
  const risultato = sommaPariDispari(somma);


  // Verifica dati e stampa

  if ((parseInt(input.value) <= 5) && (parseInt(input.value) >= 1) && (select.value != 'default')){

    if (risultato === select.value) {
      message = 'Hai vinto!'
      } else {
      message = 'Hai perso!'
      }

  } else {
    message = 'Inserisci i dati corretti!'
  }
    
  console.log('Utente', pariDispari, userNumber);
  console.log('Pc', pc);
  console.log('Somma', somma);
  console.log('Risultato', risultato);    
   
  

  output.innerHTML = message;

})



// Reset

reset.addEventListener('click', function () {

  select.value = 'default';
  input.value = '';
  message = '';
  output.innerHTML = message;
    
})




function random(min, max) {
  
  const randomNumber = Math.floor(Math.random() * (max - min +1) + min);
  return randomNumber;

}

function sommaPariDispari(somma) {

  let risultato;
  if(!(somma % 2)){
    risultato = 'pari'; 
  } else {
    risultato = 'dispari'
  }

  return risultato;
}