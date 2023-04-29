import React from "react";

const keysList = [
  [7, 8, 9, "DEL"],
  [4, 5, 6, "+"],
  [1, 2, 3, "-"],
  [".", 0, "/", "x"],
];

const Calculator = () => {
  return (
    <div>
      <div>
        <p>calc</p>
        <div>
          <p>Theme</p>
          <input type="range" name="" id="" />
        </div>
      </div>
      <div>
        <p></p>
      </div>
      <div>
        <div>
          {keysList.flat().map((item, index) => (
            <KeyButton key={index} keyValue={item} />
          ))}
        </div>
        <div>
          <button>Reset</button>
          <button>=</button>
        </div>
      </div>
    </div>
  );
};

const KeyButton = ({ keyValue }: { keyValue: string | number }) => {
  return <button onClick={() => console.log(keyValue)}>{keyValue}</button>;
};

export default Calculator;
