/************************************************
1. Input e button per inserire e salvare parola.
2. funzione che splitta, reversa e controlla se la parola è palindroma
3. click che stampa il risultato e resetta value
************************************************/


const invia = document.getElementById('invia');
const parola = document.getElementById('parola');
const output = document.querySelector('h1');
let messaggio;



invia.addEventListener('click', function () {
 
  const controllo = palindroma((parola.value).trim());
  output.innerHTML = controllo;
  parola.value = '';

})



function palindroma(word) {

  const reverse = word.split('').reverse();

  for (let i = 0; i < reverse.length; i++) {

    if (parola.value[i].toUpperCase() === reverse[i].toUpperCase()) {
      messaggio = 'La parola inserita è palindroma';
    } else {
      messaggio = 'La parola inserita non è palindroma';
    } 
    
  }
   
  return messaggio;
}

