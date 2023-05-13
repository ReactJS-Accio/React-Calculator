import "./App.css";
import Input from "./Components/Input";
import Button from "./Components/Button";

function App() {
  return (
    <div className="App">
      <h1>React Calculator</h1>
      <Input placeholder="Num 1" id="num1" />
      <Input placeholder="Num 2" id="num2" />
      <div className="btn-box">
        <Button op="+" id="add" />
        <Button op="-" id="minus" />
        <Button op="*" id="multi" />
        <Button op="/" id="div" />
      </div>
    </div>
  );
}

export default App;
