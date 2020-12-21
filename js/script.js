// Creare un applicazione con cui ordinare il tuo hamburger.
//
// Obblighi :
// Assegnare un nome hamburger
// Almeno 2 ingredienti
// Se inserisci un coupon = sconto del 20%
// Calcolo mediante button click(sconto/prezzo)



// Preparo una serie di variabili che mi torneranno utili
var nameBurger = document.getElementsByClassName('nameBurger'); //input nameBurger

var checkedBox = document.getElementsByClassName('checkbox-point').getElementsByTagName('input'); //Prese tutte le checkboxes

var discountPass = ['discforyou' , 'groupon20' , 'discount20' , 'merrydiscount']; // Codici coupon sconto ammessi

var totalCount = document.getElementsByClassName('total')[0].getElementsByTagName('span')[1]; // dove andrà a stampa nell'html il conto totale

var totalPrice = 50;



// Creazione della funzione button per verificare gli input e la somma finale totale

document.getElementById("button-submit").addEventListener("click", function(){
for (var i = 0; i < checkedBox.length; i++) {
if (checkedBox[i].checked) {
  totalPrice += parseInt(checkedBox[i].value)
  totalCount.innerHTML = totalPrice;
  console.log(totalPrice);
}
}
});
