//! selectors
const container = document.querySelector(".container");
let ekran_ust = document.querySelector("#ekran-ust");
let ekran_alt = document.querySelector("#ekran-alt");
let esittir = document.querySelector(".esit");
console.log(esittir);

// console.log(ekran_ust);

let num1 = "";
let num2 = "";
let operator = "";
// ekran_ust.innerText = 4;
// ekran_alt.innerText = 2;

container.addEventListener("click", (event) => {
  if (event.target.classList.contains("rakam")) {
    num2 += event.target.innerText;
    ekran_alt.innerText = num2;
  } else if (event.target.classList.contains("ac-plus")) {
    reset();
  } else if (event.target.classList.contains("islem")) {
    if (num1) {
      if (!num2) {
        alert("Enter a number!");
      } else {
        num1 = hesapla(Number(num1), operator, Number(num2));
        if (String(num1).slice(String(num1).indexOf(".")).length > 6) {
          num1 = num1.toFixed(6);
        }
        operator = event.target.innerText;
        ekran_ust.innerText = num1 + " " + operator;
        ekran_alt.innerText = "";
        num2 = "";
      }
    } else {
      num2 = ekran_alt.innerText;
      num1 = num2;
      num2 = "";
      operator = event.target.innerText;
      ekran_ust.innerText = num1 + " " + operator;
      ekran_alt.innerText = "";
    }
  } else if (event.target.classList.contains("esit")) {
    num2 = hesapla(Number(num1), operator, Number(num2));

    if (String(num2).length > 6) {
      num2 = num2.toFixed(6);
    }
    console.log(event.target);
    ekran_alt.innerText = num2;
    ekran_ust.innerText = "";
    num1 = "";
    num2 = "";
  }

  if (event.target.classList.contains("arti-eksi")) {
    num2 *= -1;
    ekran_alt.innerText = num2;
  }
  if (event.target.classList.contains("yuzde")) {
    num2 /= 100;
    ekran_ust.innerText = num2;
  }
});

//! functions

//? Hesap
function hesapla(n1, oper, n2) {
  if (oper === "+") return n1 + n2;
  else if (oper === "-") return n1 - n2;
  else if (oper === "x") return n1 * n2;
  else if (oper === "÷") {
    if (!n2) {
      return "Error";
    } else {
      return n1 / n2;
    }
  }
}

//? Reset
function reset() {
  num1 = "";
  num2 = "";
  operator = "";
  ekran_alt.innerText = "";
  ekran_ust.innerText = "";
}

console.log(typeof hesapla(3, "+", 4));
