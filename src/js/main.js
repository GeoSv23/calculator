const boxForButtons = document.querySelector(".buttonsHolder");

let buttons = [
  { text: "AC", class: "operator" },
  { text: "del", class: "operator" },
  { text: "%", class: "operator" },
  { text: "/", class: "operator" },
  { text: 7, class: "number" },
  { text: 8, class: "number" },
  { text: 9, class: "number" },
  { text: "X", class: "operator" },
  { text: 4, class: "number" },
  { text: 5, class: "number" },
  { text: 6, class: "number" },
  { text: "-", class: "operator" },
  { text: 1, class: "number" },
  { text: 2, class: "number" },
  { text: 3, class: "number" },
  { text: "+", class: "operator" },
  { text: "Z", class: "flip" },
  { text: 0, class: "number" },
  { text: ",", class: "operator" },
  { text: "=", class: "operator" },
];
let equalButtonPush = false;
let operand1 = "";
let operand2 = "";
let operator = "";
let result = 0;

for (let i = 0; i < buttons.length; i++) {
  const button = document.createElement("button");
  button.classList.add("button");
  button.innerHTML = buttons[i].text;
  if (buttons[i].class) {
    button.classList.add(buttons[i].class);
  }

  button.addEventListener("click", function () {
    const input = document.querySelector(".display");
    if (button.classList.contains("operator")) {
      operator = button.innerHTML;
    } else {
      if (operator === "") {
        operand1 += button.innerHTML;
      } else {
        operand2 += button.innerHTML;
      }
    }

    input.value += button.innerHTML;

    if (button.innerHTML === "=") {
      equalButtonPush = true;
    }
    if (equalButtonPush) {
      // console.log("operand1:", operand1);
      // console.log("operand2:", operand2);
      let result;
      switch (operator) {
        case "+":
          result = parseInt(operand1) + parseInt(operand2);
          break;
        case "-":
          result = parseInt(operand1) - parseInt(operand2);
          break;
        case "*":
          result = parseInt(operand1) * parseInt(operand2);
          break;
        case "/":
          result = parseInt(operand1) / parseInt(operand2);
          break;

        default:
          result = "Неподдерживаемый оператор";
      }
      console.log(result);
      input.value = result;
    }
  });

  boxForButtons.appendChild(button);

  //   input.value = numberButtons[5].text;
  //   input.value += "+";
  //   input.value += numberButtons[4].text;
  //   input.value = numberButtons[5].text + numberButtons[4].text;
}
