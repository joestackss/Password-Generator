let generateInput = document.getElementById("generate");
let generateInput1 = document.getElementById("generate1");
let endP = document.getElementById('endP')
endP.textContent = "Click on the generated password to copy it!"

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

}


async function copyTextOne()
{
    await navigator.clipboard.writeText(generateInput.textContent);
    endP.textContent = "Copied: " + generateInput.textContent;
    // alert("Copied the first Generated Password: " + passOne.textContent);
}

async function copyTextTwo()
{
    await navigator.clipboard.writeText(generateInput1.textContent);
    // alert("Copied the second Generated Password: " + passTwo.textContent)
    endP.textContent = "Copied: " + generateInput1.textContent;
}