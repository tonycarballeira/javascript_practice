const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore() {
	const par = document.getElementById('par').value;
	const strokes = document.getElementById('strokes').value;

  const score = par - strokes;
  if (strokes == 1){
    return "Hole-in-one!";
  } else if (score >= 2){
    return "Eagle";
  } else if (score == 1){
    return "Birdie";
  } else if (score == 0){
    return "Par";
  }else if (score == -1){
    return "Bogey";
  } else if (score == -2){
    return "Double Bogey";
  }else if (score <= -3){
    return "Go Home!";
  }else{
      return "Change Me";
  }

  // Only change code above this line
}

golfScore(5, 4);
console.log();



function sayHello(){
	alert("Hello");
}