// Assignment's problem 01

function anaToVori(ana){
 if(ana > 0){
  let vori = ana / 16;
  return vori;
 }
 else{
   return('Please enter a number');
 }
}

// input here for your desired output.
let givenNumber = anaToVori(40);
console.log(givenNumber);




// Assignment's problem 02
function pandaCost(shingara, shamucha, jilapi){
  // condition for inputing right values.
  if (shingara < 0){
    return "please give a positive number"
  }
  if (shamucha < 0){
    return "please give a positive number"
  }
  if (jilapi < 0){
    return "please give a positive number"
  }
  
  // variable declaration
  var shingara = shingara * 7;
  var shamucha = shamucha * 10;
  var jilapi = jilapi * 15;
  
  var totalPrice = (shingara + shamucha + jilapi);
  return totalPrice;
  
  }
  
  // Enter your desired quantity for each of the product's category here: 

  var totalPriceOfProducts = pandaCost(0, 1, 1);
  console.log(totalPriceOfProducts);


// Assignment's Problem no : 3 

function picnicBudget(peopleNumbers){

  if (peopleNumbers < 0){
    return "please give me a positive number"
  }

  // if people is less or equal then one hundred.
  if (peopleNumbers <= 100){
    
    var amountOfPeople =(5000 * peopleNumbers);
    
    return amountOfPeople;
  }  
  
  // if your people quantity is more then one hundred or less then two hundred. 
  
  if (peopleNumbers < 200 && peopleNumbers > 100){
    var rest = peopleNumbers - 100; 
    var amountOfPeople =((100*5000)+(rest*4000));
    return amountOfPeople;
    
  }

// if your people quantity is greater then two hundred.

  if (peopleNumbers > 200){
    var rest = peopleNumbers - 200;
    var amountOfPeople =((100*5000)+(100*4000)+ (rest*3000))
    
    return amountOfPeople;
  }
  
    
  }
  // Enter your desired people's number for picnic. 
   var quantityOfPeople =picnicBudget(201);
   console.log(quantityOfPeople);
   

// Assignment's Problem no : 4 

function oddFriend(names){
   

  for (let i =0; i <names.length; i++){
    const element = names[i];
   
    if (element.length % 2 == 1){
     const namesOfFriends = element;
     
     
     return namesOfFriends;
     
    }
  }


}
// Friends Names inside  array

const names = ["shoron", "Bristi","Rochi", "Rabbi", "Rahim", "Rahman", "apu", "sabbir", "moli", "jony"]
const friendsName =  oddFriend(names);
console.log(friendsName);
