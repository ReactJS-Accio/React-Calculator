import "./styles.css";
import { useState } from "react";

const Input = ({ placeholder, id }) => {
  let [num1, setNum1] = useState();
  let [num2, setNum2] = useState();

  return (
    <div>
      <input
        type="text"
        placeholder={placeholder}
        id={id}
        onChange={(ev) => {
          id === "num1" ? setNum1(ev.target.value) : setNum2(ev.target.value);
        }}
      />
    </div>
  );
};

export default Input;
