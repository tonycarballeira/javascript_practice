 names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

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
  }else if (score == -1){
    	console.log(names[4]);
	 	phrase = names[4];
  } else if (score == -2){
    	console.log(names[5]);
	 	phrase = names[5];
  }else if (score <= -3){
    	console.log(names[6]);
	 	phrase = names[6];
  }else{
      	console.log("Change Me");
	 	phrase = "Change Me";
  }
  	console.log(phrase);
 result = document.getElementById('result');
 popo = document.createTextNode(phrase);
	result.appendChild(popo);
 	console.log(par);
	
}



function sayHello(){
	console.log("Hello");
}