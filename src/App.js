import React from 'react';
import styled from "styled-components";
import { TiArrowBack } from "react-icons/ti";
import './App.css';
import Button from "./components/Button";
import { calcVals } from "./utils/calcVals";





class App extends React.Component {

  state ={
    pressedKey: "",

  }

  componentDidMount(){
    window.addEventListener("keydown", this.getKeyValue)
  }

  getKeyValue = event => {
    this.setState({pressedKey:event.key})
  }



  render(){

    return (
      <div className="App">
    <DisplayField>{this.state.pressedKey}</DisplayField>
      <NumWrapper>
        {calcVals.map((value, index) => (
          <Button key={index} value={value} onKeyDown={(e)=>this.getKeyValue(e)}>
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
  padding: 10px 20px;
  border: solid 2px gray;
  height: 50px;
  max-width: 460px;
  height: 80px;
  margin: 10px auto;
  font-size: 35px;
  text-align: right;
`;
