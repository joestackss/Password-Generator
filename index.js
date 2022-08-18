let generateInput = document.getElementById("generate");
let generateInput1 = document.getElementById("generate1");

const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];



function generator() {

  let randomIndex = Math.floor(Math.random() * characters.length) 
  let randomIndex1 = Math.floor(Math.random() * characters.length) 

  generateInput.textContent = (characters[randomIndex])
  generateInput1.textContent = (characters[randomIndex1])
}
