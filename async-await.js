//but ey promise call korar way ta o besi programmer friendly na,

//evabe ektar por ekta then use korte korte ek somoy ekta boro ekta block create hoye 
//jete pare. larger application e onk boro then block hoye jete pare. in that case
//evabeamader flow bujha hard hoye jete pare. 


//Prommader hisebe amader sob cheye easy hoy, asynchoronous kaj gula line by line
//synchoronos way te likhte parle. Seta amra 'async/await' use kore korte pari.

// function friendlyFunction(){
//     return 'hello';
// }

// console.log(friendlyFunction());

//synchoronous behaviour. 

//like setTimeout() asynchoronous function let's also make 'friendlyFunction() asynchronous.

//how?

async function friendlyFunction() {
  return "hello";
}

console.log(friendlyFunction());