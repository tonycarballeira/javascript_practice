const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore() {
	const par = document.getElementById('par').value;
	const strokes = document.getElementById('strokes').value;

  const score = par - strokes;
  if (strokes == 1){
    alert(names[0]);
  } else if (score >= 2){
    alert(names[1]) ;
  } else if (score == 1){
    alert(names[2]) ;
  } else if (score == 0){
    alert(names[3]) ;
  }else if (score == -1){
    alert(names[4]) ;
  } else if (score == -2){
    alert(names[5]) ;
  }else if (score <= -3){
    alert(names[6]) ;
  }else{
      alert("Change Me");
  }

 console.log(par);
 
}



function sayHello(){
	alert("Hello");
}