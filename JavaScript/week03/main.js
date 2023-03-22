//1. Strings!
let myString = "hello,this,is,a,difficult,to,read,sentence";
console.log('my String'+myString);
console.log(myString.length);
myString = myString.replaceAll(",", " ");
console.log(myString);
//2. Arrays!
let favoriteAnimals = ["blowfish", "capricorn", "giraffe"];
favoriteAnimals.push("turtle");
console.log(favoriteAnimals);
favoriteAnimals.splice(1,0,'meerkat'); 
console.log('the new value of array is: meerkat');
console.log(favoriteAnimals);
console.log("The array has a length of: " + favoriteAnimals.length);
favoriteAnimals.splice(3, 1);
console.log(favoriteAnimals);
console.log(
  "The item you are looking for is at index: "+ favoriteAnimals.indexOf("meerkat")
);
//More JavaScript 
// 1. function that takes 3 arguments and returns the sum of the these arguments
function sum(...args) {
  return args.reduce((a, b) => a + b);
}
sum(6, 11, 3);
// 2. create a function colorCar
function colorCar(color) {
  let colorCar = `a ${color} car`;
  return colorCar;
}
colorCar('red')
  
  

  





 
