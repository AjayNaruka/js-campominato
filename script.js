var difficulty = prompt("Inserisci la difficolta' (0, 1, 2) ");
console.log("Hai scelto la difficolta' : "+ difficulty);

var bombArr = [];
var nBombs = 16;
var limit;

switch(difficulty){
  case "0":
    var limit = 100;
    break;

  case "1":
    var limit = 80;
    break;
  
    case "2":
      var limit = 50;

      break;
}

console.log("Limit a: "+limit);

bombGen(nBombs,limit,bombArr);

console.log("Iniziamo il gioco: \n");
playGame(nBombs,limit,bombArr);


/* var limit = 10;
var bombArr = [];
var nBombs = 5;



bombGen(nBombs,limit,bombArr);

console.log("Iniziamo il gioco: \n");
playGame(nBombs,limit,bombArr); */
//FUNZIONI//


function bombGen(n,l,arr){
  var tries =0;
  //INIT ARR
  for(var i=0;i<l;i++){
    arr[i]="o";
  }
  console.log( "Campo NON MINATO: \n" +arr);
  for(i=0;i<n;i++){
    genNum=Math.ceil(Math.random()*l);
    if(arr[genNum]=='o'){
      arr[genNum] ='X'
    } else{
      i--;
    }
    tries++;
  }
  console.log("Elenco bombe: \n"+arr);
  console.log("Ci ha messo tentativi :\n" + tries);
}

function playGame (n,l,array){
  var userInputs =[""];
  var winning = true;
  var round =0;
  var forcedStop = false;
  while(winning && round<(l-n)){
    console.log("Mi trovo al round numero : \n" +"*******\n"+ round +"\n*******")
    var userIndex = prompt("Inserisci un indice in cui testare (STOP per interrompere)");
    console.log("Hai inserito l'indice :\n " + userIndex);
    //PREMATURE ENDING
    if(userIndex == 'STOP'){
      winning = false;
      forcedStop = true;
      break;
    }
    var valid = isValid(userIndex,0,l,userInputs);
    if(valid){
      userInputs.push(userIndex);
      console.log("Numero inserito VALIDO");
      round++;
      if(array[userIndex]=='X'){
        winning =false;
      } 
    }
   /*  //CHECK RANGE
    if(userIndex>l){
      console.log("Hai inserito un numero NON valido. Ritenta")
      round--;
    }
    // CHECK ALREADY TRIED
    if(!userInputs.includes(userIndex)) userInputs.push(userIndex);
    else {
      console.log("Indice già inserito in precedenza");
     // round--;
    }*/
    
   
    
  }
  if(forcedStop) console.log("Gioco interrotto")
  if(winning && !forcedStop) console.log ("-- HAI VINTO! --")
  else if(!winning && !forcedStop) console.log("-- Hai colpito una bomba --");

}

function isValid(index, min, max, pastChoices){
  if(index<min || index > max) {
  console.log("Numero fuori range")
  return false;
  }
  if(isNaN(index)){
    console.log("Non hai inserito un numero")
    return false;
  }
  if(pastChoices.includes(index)){
    console.log("Numero già inserito")
    return false
  }
  return true
}


//// TESTS DOUBLE FUNCTION
function sum(){
  var a = genNum();
  var b = genNum();
  console.log("a = "+a)
  console.log("b = "+b)
  console.log(a+b);
}

function genNum(){
  return Math.ceil(Math.random()*5);
}
