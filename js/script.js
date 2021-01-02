// Creare un applicazione con cui ordinare il tuo hamburger.
//
// Obblighi :
// Assegnare un nome hamburger
// Almeno 2 ingredienti
// Se inserisci un coupon = sconto del 20%
// Calcolo mediante button click(sconto/prezzo)



// Preparo una serie di variabili che mi torneranno utili

var nameBurger = document.getElementById('nameburgertext'); //input nameBurger

var checkedBox = document.getElementsByClassName('checkbox-point')[0].getElementsByTagName('input'); //Prese tutte le checkboxes

var discountPass = ['discforyou' , 'groupon20' , 'discount20' , 'merrydiscount']; // Codici coupon sconto ammessi

var totalCount = document.getElementsByClassName('total')[0].getElementsByTagName('span')[1]; // dove andrà a stampa nell'html il conto totale

var inputDiscount = document.getElementsByClassName('discount-btn')[0].getElementsByClassName('discount')[0]; // input codice discount in html

var totalPrice = 50; //base di partenza per il prezzo finale

var discApplied = 0.2; //variabile vuota che inizializzerò successivamente

var howMuchMoney ;

var counterIngredients = 0; // contatore per stabilire quante caselle avranno il 'check'

var minIngredients = 2;  // minimo di ingrdienti e quindi checkbox permesse

// Creazione della funzione button per verificare gli input e la somma finale totale

document.getElementById("button-submit").addEventListener("click", function(){

  totalPrice = 50; // dichiaro subito dopo l'evento click e prima del ciclo  la base del costo dell'haburger;
  counterIngredients = 0;

     for (var i = 0; i < checkedBox.length; i++) {
     if (checkedBox[i].checked) {
       counterIngredients++;
       totalPrice += parseInt(checkedBox[i].value);

     }
   }


 if (counterIngredients < minIngredients) {
    alert('Inserire ' + minIngredients +  ' ingredienti nel panino')
 }else if (nameBurger.value.length === 0) {
   alert('Inserire il nome del tuo Hamburger!')
 }else {

   if (discountPass.indexOf(inputDiscount.value) !== -1) {
     totalCount.innerText = '$ ' + (totalPrice - (totalPrice * discApplied));

   }
    if (discountPass.indexOf(inputDiscount.value) === -1) {
      totalCount.innerText = '$ ' + totalPrice;
    }
 }


});
