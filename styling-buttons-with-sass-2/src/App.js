import React from 'react';
import './App.scss';
import CustomButton from './components/CustomButton';

function App() {
  return (
    <div className="App">
      <div className="Buttons">
        <CustomButton size="large" color="blue">BUTTON</CustomButton>
        <CustomButton >BUTTON</CustomButton>
        <CustomButton size="small" color="yellow">BUTTON</CustomButton>
      </div>
      <div className="Buttons">
        <CustomButton fullWidth={true} >BUTTON</CustomButton>
      </div>
      <div className="Buttons">
        <CustomButton size="large" color="blue" outline={true}>BUTTON</CustomButton>
        <CustomButton >BUTTON</CustomButton>
        <CustomButton size="small" color="yellow">BUTTON</CustomButton>
      </div>


      <div className="Buttons">
        <CustomButton size="large" color="blue" outline={true} onClick={()=>console.log("click")}>Click</CustomButton>
        <CustomButton >BUTTON</CustomButton>
        <CustomButton size="small" color="yellow">BUTTON</CustomButton>
      </div>
    </div>
  );
}

export default App;
