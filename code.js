 names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

 // GOLF SCORE FUNCTION
function golfScore(event) {
	
	par = document.getElementById('par').value;
	strokes = document.getElementById('strokes').value;
	score = par - strokes;
	phrase = "";

  if (strokes == 1){
    	console.log(names[0]);
	 	phrase = names[0];
  } else if (score >= 2){
    	console.log(names[1]);
	 	phrase = names[1];
  } else if (score == 1){
    	console.log(names[2]);
	 	phrase = names[2];
  } else if (score == 0){
    	console.log(names[3]);
	 	phrase = names[3];
  }	else if (score == -1){
    	console.log(names[4]);
	 	phrase = names[4];
  } else if (score == -2){
    	console.log(names[5]);
	 	phrase = names[5];
  }	else if (score <= -3){
    	console.log(names[6]);
	 	phrase = names[6];
  }	else {
      	console.log("Change Me");
	 	phrase = "Change Me";
  }
  	
 	result = document.getElementById('result');
 	popo = document.createTextNode(phrase);
	result.appendChild(popo);
	console.log(phrase);
	
}


// CARD COUNTER FUNCTION

function sayHello(){
	console.log("Hello");
}

let count = 0;

function cc(card) {

  switch(card){
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count = count + 1;
      break;
    case 7:
    case 8:
    case 9:      
      break;
    case 10:
    case 'J':
    case 'Q':
    case 'K':
    case 'A':
      count = count -1;
      break;
  }

  if (count > 0){
    return(count + " Bet");
  } else {
    return(count + " Hold");
  }

  return "Change Me";
 
}

cc(2); cc(3); cc(7); cc('K'); cc('A');

//object in a function

// Setup
function phoneticLookup(val) {
  let result = "";

  // Only change code below this line

  const lookup = {
    "alpha": "Adams",
    "bravo": "Boston",
    "charlie": "Chicago",
    "delta": "Denver",
    "echo": "Easy",
    'foxtrot': "Frank"
  }
  result = lookup[val];
  // Only change code above this line
  return result;
}

phoneticLookup("charlie");

function checkObj(obj, checkProp) {
  if (obj.hasOwnProperty(checkProp)){
    console.log(obj[checkProp]);
  } else {
    console.log("Not Found");
  }
}

checkObj({bob:"bob"}, "bob");