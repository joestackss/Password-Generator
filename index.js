let generateInput = document.getElementById("generate");
let generateInput1 = document.getElementById("generate1");

const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" + "abcdefghijklmnopqrstuvwxyz0123456789@#$";

function generator() {
  let pass = "";

  for (let i = 1; i <= characters.length; i++) {
    let randomIndex = Math.floor(Math.random() * characters.length + 1);
    let randomIndex1 = Math.floor(Math.random() * characters.length + 1);

    pass += characters.charAt(randomIndex);
  }

  return pass;
}

function runGenerate() {
  console.log("button worked");
  generateInput.textContent = generator();
  generateInput1.textContent = generator();
}

var el_down = document.getElementById("geeks");

/* Function to generate combination of password */
// function generateP() {
//   var pass = "";
//   var str = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
//   "/"];
//     // "ABCDEFGHIJKLMNOPQRSTUVWXYZ" + "abcdefghijklmnopqrstuvwxyz0123456789@#$";

//   for (let i = 1; i <= 8; i++) {
//     var char = Math.floor(Math.random() * str.length + 1);

//     pass += str.charAt(char);
//   }

//   return pass;
// }

// function gfg_Run() {
//   // el_down.innerHTML = generateP();
//   generateInput.textContent = generateP();
// }
