const bin = ['Melbourne Storm', "Manly Seaeagles", "North Queensland Cowboys"]
function myFunction(){
    let blue = '';
document.getElementById("demo").innerHTML = "The best team is " +  bin[getRandomNumber()];
}
function getRandomNumber(){
   return Math.floor(Math.random() * bin.length) 
}
