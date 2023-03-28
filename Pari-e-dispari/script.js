/***********************************************************************************
1. Select per il pari e per il dispari, un input che accetta numeri da 1 a 5, bottone per iviare (per l'utente).
2. Una funzione genera un numero random sempre da 1 a 5 (per il pc).
3. Sommare i due numeri e, tramite funzione, verificare se la somma è pari o dispari
4. Stampare il vincitore
***********************************************************************************/



const select = document.getElementById('pariDispari');
const input = document.getElementById('numero');
const button = document.querySelector('button');

console.log(select, input, button);

button.addEventListener('click', function() {

  const pariDispari = select.value;
  const userNumber = parseInt(input.value);
  const pc = parseInt(random(1,5));

  const somma = userNumber + pc;
  const risultato = sommaPariDispari(somma);


  select.value = 'defalut';
  input.value = '';

  console.log(pariDispari, userNumber, pc, somma, 'risutato', risultato);

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