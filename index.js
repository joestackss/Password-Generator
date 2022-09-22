let generateInput = document.getElementById("generate");
let generateInput1 = document.getElementById("generate1");

new ClipboardJS("#generate");

generateInput.addEventListener("pointerdown", () =>
  navigator.clipboard.writeText("Hello World!")
);

var el_down = document.getElementById("geeks");

/* Function to generate combination of password */
function generateP() {
  var pass = "";
  var str =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ" + "abcdefghijklmnopqrstuvwxyz0123456789@#$";

  for (let i = 1; i <= 15; i++) {
    var char = Math.floor(Math.random() * str.length + 1);

    pass += str.charAt(char);
  }

  return pass;
}

function gfg_Run() {
  //   el_down.innerHTML = generateP();
  generateInput.textContent = generateP();
  generateInput1.textContent = generateP();

  // // Select the text field
  // generateInput.select();
  // generateInput.setSelectionRange(0, 99999); // For mobile devices

  // // Copy the text inside the text field
  // navigator.clipboard.writeText(generateInput.value);

  // // Alert the copied text
  // alert("Copied the text: " + generateInput.value);
}
