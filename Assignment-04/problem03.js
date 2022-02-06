// Problem no : 4 

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