import React, { Component } from "react";
import { operators, doMath } from "./utils/calcVals";
import { clearNum } from "./utils/clearNumber";

export default class MathLogicRP extends Component {
  state = {
    currentNumber: 0,
    prevNumber: 0,
    result: 0,
    operatorSnapshot: ""
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.display !== this.props.display || prevProps.keyPressed !== this.props.keyPressed) {
      this.handleLogic();
    }
  }

  handleLogic = () => {
    const { display, keyPressed, displayChange } = this.props;

    if(keyPressed.toLowerCase() === "enter"){
        let number = clearNum(display, operators);
        if(this.state.operatorSnapshot){
            let resultNumber = doMath(number,this.state.prevNumber, this.state.operatorSnapshot);
            this.setState({
                result: resultNumber, operatorSnapshot: ""
            })
        } else {
            this.setState({result: number})
        }
        
    }

    if (operators.includes(keyPressed)) {
      //this will prevent set operator itself as prev number but set the prev num with operator at index 0
      // for example on "+" press, if the number is 1 digit prev num is num, hovewer if the num has 2 or more digits
      // the prev num in that case would be "+num"
      if (
        display.length > 1 ||
        (display.length === 1 && !operators.includes(display))
      ) {
        //clearNum accepts two params string as number and array of strings as operators
        let number = clearNum(display, operators);
        if(this.state.operatorSnapshot === ""){
            this.setState(
               {prevNumber: number, operatorSnapshot: keyPressed} 
            );
        } else if(number!==0) {
            this.setState((prevState)=>{
                let newValue = doMath(prevState.prevNumber,number,prevState.operatorSnapshot);
                return {prevNumber: newValue, operatorSnapshot: keyPressed};
            })
        }


      }
      displayChange(keyPressed);
    }
  };

  render() {
    console.log(this.state.prevNumber, this.state.result);
    const { children, display } = this.props;
    return (
      <>
        {children({
          display, result: this.state.result
        })}
      </>
    );
  }
}
