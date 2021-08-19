let screen = document.getElementById("input");
buttons = document.querySelectorAll("button");
let dispalyTotal = document.getElementById("display");
let screenValue = "";

for (item of buttons) {
  item.addEventListener("click", function (e) {
    buttonText = e.target.innerText;
    console.log("click", buttonText);

    if (buttonText == "X") {
      buttonText = "*";
      screenValue += buttonText;
      screen.innerText = screenValue;
    } else if (buttonText == "C") {
      screenValue = "";
      screen.innerText = screenValue;
    } else if (buttonText == "=") {
      dispalyTotal.innerText = eval(screenValue);
    } else {
      screenValue += buttonText;
      screen.innerText = screenValue;
    }
  });
}
