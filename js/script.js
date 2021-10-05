/** @format */

"use strict";

let displayResult = document.getElementById("result");
let displayCalc = document.getElementById("calculation");

let btns = document.querySelectorAll(".btn");

// ................................................................
let calc = "";
let result = "";

let bracket = 0;

for (let item of btns) {
  item.addEventListener("click", (e) => {
    let btnText = e.target.innerText;

    // =============================================== make x = *
    if (btnText === "x") {
      btnText = "*";
    }

    // =============================================== make () = '(' & ')'
    if (btnText === "( )") {
      if (bracket === 0) {
        btnText = "(";
        bracket = 1;
      } else {
        btnText = ")";
        bracket = 0;
      }
    }

    // =============================================== eval on =
    if (btnText === "=") {
      btnText = "";
      calc = eval(calc);
      displayCalc.innerText = calc;
    }

    // ///////////////////////////////////////////////////////////////
    // =============================================== all clear on AC
    if (btnText === "AC") {
      btnText = "";
      calc = "0";
      displayCalc.innerText = 0;
    }

    // =============================================== backspace (clear last added)
    if (btnText === "backspace") {
      btnText = "";

      if (calc.length === 1) {
        calc = 0;
      } else {
        calc = calc.slice(0, -1);
      }

      displayCalc.innerText = calc;
    }

    // ///////////////////////////////////////////////////////////////
    // ================================================= create a string
    calc += btnText;
    displayCalc.innerText = calc;

    // ================================================== eval result continously
    let calLength = calc.length;

    if (
      (calc[calLength - 1] >= 0 && calc[calLength - 1] <= 9) ||
      calc[calLength - 1] === ")"
    ) {
      result = eval(calc);
      displayResult.innerText = result;
    }
  });
}
