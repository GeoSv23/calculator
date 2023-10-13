const boxForButtons = document.querySelector(".buttonsHolder");

let buttons = [
  { text: "AC", class: "delAll" },
  { text: "del", class: "del" },
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
  { text: "#", class: "flip" },
  { text: 0, class: "number" },
  { text: ",", class: "operator" },
  { text: "=", class: "eqauls" },
];
let equalButtonPush = false;
let delButtonPush = false;
let operand1 = "";
let operand2 = "";
let operator = "";
let result = 0;
const input = document.querySelector(".display");

for (let i = 0; i < buttons.length; i++) {
  const button = document.createElement("button");
  button.classList.add("button");
  button.innerHTML = buttons[i].text;
  if (buttons[i].class) {
    button.classList.add(buttons[i].class);
  }

  button.addEventListener("click", function () {
    if (button.classList.contains("operator")) {
      operator = button.innerHTML;
      console.log(operator);
    } else {
      if (operator === "") {
        operand1 += button.innerHTML;
      } else {
        operand2 += button.innerHTML;
      }
    }
    console.log(operand1);
    console.log(operand2);

    input.value += button.innerHTML;

    if (button.innerHTML === "=") {
      if (result != 0) {
        operand1 == result;
      }
      equalButtonPush = true;
    } else if (button.innerHTML === "AC") {
      operand1 = "";
      operand2 = "";
      operator = "";
      result = 0;
      equalButtonPush = false;

      input.value = "";
    } else if (button.innerHTML === "del") {
      delButtonPush = true;
      if (delButtonPush && operator === "") {
        let InputValue = operand1;
        InputValue = InputValue.slice(0, -4);
        operand1 = InputValue;
        input.value = operand1;
      } else if (delButtonPush && operator !== "") {
        let InputValue = operand2;
        InputValue = InputValue.slice(0, -4);
        operand2 = InputValue;
        input.value = `${operand1}${operator}${InputValue}`;
      }
    }

    if (equalButtonPush) {
      // console.log("operand1:", operand1);
      // console.log("operand2:", operand2);
      switch (operator) {
        case "+":
          result = parseInt(operand1) + parseInt(operand2);
          equalButtonPush = false;
          console.log(equalButtonPush);
          break;
        case "-":
          result = parseInt(operand1) - parseInt(operand2);
          equalButtonPush = false;

          break;
        case "X":
          result = parseInt(operand1) * parseInt(operand2);
          equalButtonPush = false;

          break;
        case "/":
          result = parseInt(operand1) / parseInt(operand2);
          equalButtonPush = false;

          break;

        default:
          result = "Неподдерживаемый оператор";
      }
      operand2 = "";
      operator = "";
      console.log(operand1);
      console.log(operand2);

      console.log(operator);
      console.log(result);
      equalButtonPush = false;
      input.value = result;
      operand1 = result;
    }
  });

  boxForButtons.appendChild(button);

  //   input.value = numberButtons[5].text;
  //   input.value += "+";
  //   input.value += numberButtons[4].text;
  //   input.value = numberButtons[5].text + numberButtons[4].text;
}
