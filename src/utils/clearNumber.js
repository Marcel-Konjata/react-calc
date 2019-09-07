export function clearNum(numberAsString, operators) {
    const numArray = [...numberAsString];
  
    const moddifiedArray = numArray.filter(char => {
      if (!operators.includes(char)) {
        return char;
      }
    });
    let numAsString = moddifiedArray.join("");
    let clearNum = Number(numAsString);
    return clearNum;
  }
  