//A mettre dans la console en mode inspecter
const banane = 5

if (banane < 0) {
  banane + 5;  
  }else {
    console.log("J'ai assez de banane");
  }

  const fisrtName = "Wissal";


if (fisrtName === "Wissal") {

  console.log("Bienvenue, Wissal");

} else {

  console.log("Va-t'en!");

}


const userName = prompt("What's your name?");

console.log(prompt("What's your name?"));

const age = prompt("How old are you?");

console.log(typeof(age));

// String


const ageNumber = parseInt(age);

console.log(typeof(ageNumber));

// Number

// else if (condition) {

    // ...
  
  // }

  if (1) {
    console.log("What's going to happen here ? 🤷‍♀️");
  }
  
  let myName = "";

if (myName) {

  console.log("Bonjour à toi!");

  // This will never be run because "empty string" is evaluated as false

} else {

  console.log("you don't have a name");

}

const name = "Pierre";


if (name === "Pierre") {

  const city = "New York";


  if (city === "New York") {

    console.log("Welcome " + name + " in " + city);

  } else {

    console.log("Welcome " + name); 

  }

  // fonctionne correctement à l'intérieur du contexte de la condition

} else {

  console.log(name);

  // tu verras le nom de la personne


  console.log(city);

  // tu verras une error 'reference error: city is not defined'

}

const animalName = "Lucky";


if (animalName === "Lucky") {

  console.log("Welcome Lucky!");

} else {

  console.log("Wrong Cat detected!");

}