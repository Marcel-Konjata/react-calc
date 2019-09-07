export const calcVals = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
  "-",
  "+",
  "/",
  "*",
  ".",
  "Enter",
  "Backspace",
  "Delete"
];

export const manipulators = ["Enter", "Backspace", "Delete"];
export const operators = ["-", "+", "/", "*"];

export function doMath(num1, num2, operator) {
  switch (operator) {
    case "-":
      return num1 - num2;
    case "+":
      return num1 + num2;
    case "/":
      return num1 / num2;
    case "*":
      return num1 * num2;

    default:
      return NaN;
  }
}
