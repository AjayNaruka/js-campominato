var limit = 10;
var bombArr = [];
var nBombs = 5;


bombGen(nBombs,limit,bombArr);

console.log("Iniziamo il gioco: \n");
playGame(nBombs,limit,bombArr)


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
  while(winning && round<=(l-n)){
    console.log("Mi trovo al round numero : \n " + round)
    var userIndex = prompt("Inserisci un indice in cui testare ");
    console.log("Hai inserito l'indice :\n" + userIndex);
    //PREMATURE ENDING
    if(userIndex == 'STOP'){
      winning = false;
      forcedStop = true;
      break;
    }

    //CHECK RANGE
    if(userIndex>l){
      console.log("Hai inserito un numero NON valido. Ritenta")
      round--;
    }
    // CHECK ALREADY TRIED
    if(!userInputs.includes(userIndex)) userInputs.push(userIndex);
    else {
      console.log("Indice già inserito in precedenza");
     // round--;
    }
    
    if(array[userIndex]=='X'){
      winning =false;
    }
    
    round++;
  }
  if(forcedStop) console.log("Gioco interrotto")
  if(winning && !forcedStop) console.log ("HAI VINTO!")
  else if(!winning && !forcedStop) console.log("Hai colpito una bomba");

}


