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
    //console.log(obj[checkProp]);
  } else {
    //console.log("Not Found");
  }
}

checkObj({bob:"bob"}, "bob");

// Setup
const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold',
  }
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
  if(prop != 'tracks' && value != ""){
    records[id][prop] = value;
    return records;
  } else if(prop == 'tracks' && records[id]["tracks"] == undefined){
    records[id][prop] = [value];
    return records;
  }else if(prop == 'tracks' && value != ""){
    records[id][prop].push(value);
    return records;
  }else if(value == ""){
    delete records[id][prop]
  }else
  return records;
}


updateRecords(recordCollection, 5439, "artist", 'ABBA');

//recursion

function sum(arr, n) {
  // Only change code below this line

  if (n <= 0) {
      return 0;
    } else {
      sum(arr, n - 1) + arr[n - 1]
      
  }
  // Only change code above this line
}

sum([4, 5, 6], 3);

// Setup
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  // Only change code below this line
  let nameFound = [];
  let noContact = [];
  let noProp = [];

  for(let i = 0; i < contacts.length; i++){ 
    if(name == contacts[i].firstName){
      if(contacts[i].hasOwnProperty(prop)){
        nameFound.push(contacts[i][prop]);
        ;
      } else {
        noProp.push("No such property");
      }
    }  else {
          noContact.push("No such contact");
    } 
    
  }

  if (nameFound.length > 0){
    } else if (noProp.length > 0){
      console.log("No such Property");
    } else {
      console.log("No such Contact");
  }
  console.log(noProp);
  console.log(noContact);
}

lookUpProfile("Akira", "address");

function checkEqual(a, b) {
  return a == b ? "Equal" : "Not Equal"; 
}

checkEqual(1, 2);

function checkSign(num) {
  return (num > 0) ? "positive"
    : (num < 0) ? "negative"
    : "zero";
}

checkSign(10);

function countup(n) {
  if (n < 1) {
    return [];
  } else {
    const countArray = countup(n - 1);
    countArray.push(n);
    return countArray;
    
  }
}

function countdown(n){
  return n < 1 ? [] : [n].concat(countdown(n - 1));
}

// these two countdown functions are the same

function countdown(n){
  if (n < 1) {
    return []
  } else {
    return [n].concat(countdown(n-1));
  }
}


console.log(countdown(5));

function rangeOfNumbers(startNum, endNum) {
  if (endNum < startNum){
    return [];
  } else{
    const countArray = rangeOfNumbers(startNum, endNum - 1)
    countArray.push(endNum);
    return countArray;
  }
};

console.log(rangeOfNumbers(1, 5));

// this returns an array with a range of numbers between 1 and 5