import React from "react";
import styled from "styled-components";
import { TiArrowBack } from "react-icons/ti";
import "./App.css";
import Button from "./components/Button";
import { calcVals, manipulators, operators } from "./utils/calcVals";
import MathLogicRP from "./MathLogicRP";

class App extends React.Component {
  state = {
    pressedKey: "",
    displayVal: ""
  };

  componentDidMount() {
    window.addEventListener("keydown", this.handleCalcInput);
  }

  handleCalcInput = event => {
    const inputAsString = event.key;
    if (calcVals.includes(inputAsString)) {
      this.setState({ pressedKey: event.key });
      this.setDisplayVal();
    }
  };

  setDisplayVal = () => {
    const { displayVal, pressedKey } = this.state;
    if (pressedKey === "Delete") {
      this.setState({ displayVal: "" });
    }

    if (manipulators.indexOf(pressedKey) === -1) {
      //this prevents to concat initial 0 to another values
      if (displayVal === "" || displayVal === "0") {
        this.setState({ displayVal: pressedKey });
      } else
        this.setState(prevState => {
          const newValue = prevState.displayVal + pressedKey;
          return { displayVal: newValue };
        });
    }
  };
  handleDisplayChange = value => {
    this.setState({ displayVal: value });
  };

  render() {
    console.log(this.state.pressedKey)
    return (
      <div className="App">
        <MathLogicRP
          display={this.state.displayVal}
          keyPressed={this.state.pressedKey}
          displayChange={this.handleDisplayChange}
        >
          {({ display, result }) => <DisplayField> <div>{result ? result : null }</div>{ display}</DisplayField>}
        </MathLogicRP>
        <NumWrapper>
          {calcVals.map((value, index) => (
            <Button
              key={index}
              value={value}
              onKeyDown={e => this.handleCalcInput(e)}
            >
              {value === "Backspace" ? <TiArrowBack /> : value}
            </Button>
          ))}
        </NumWrapper>
      </div>
    );
  }
}

export default App;

const NumWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  max-width: 500px;
  margin: 0 auto;
`;

const DisplayField = styled.div`
display: flex;
justify-content: space-between;
  padding: 10px 20px;
  border: solid 2px gray;
  height: 50px;
  max-width: 460px;
  height: 80px;
  margin: 10px auto;
  font-size: 35px;
  text-align: right;
`;
