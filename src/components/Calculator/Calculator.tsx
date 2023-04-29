import { useState } from "react";

const keysList = [
  [7, 8, 9, "DEL"],
  [4, 5, 6, "+"],
  [1, 2, 3, "-"],
  [".", 0, "/", "x"],
];

const Calculator = () => {
  const [result, setResult] = useState(0);
  return (
    <div className=" p-6 max-w-lg md:mx-auto">
      <div className=" flex justify-between items-center">
        <p className=" text-4xl">calc</p>
        <div className=" flex justify-between gap-2">
          <p className=" uppercase tracking-wider">Theme</p>
          <input type="range" name="" id="" min={1} max={3} step={1} />
        </div>
      </div>
      <div className=" bg-background-screen p-4 rounded-lg text-end my-6">
        <p className=" text-numbersFontSize">{result}</p>
      </div>
      <div className=" bg-background-keypad rounded-lg p-6">
        <div className=" grid grid-cols-4 gap-3">
          {keysList.flat().map((item, index) => (
            <KeyButton key={index} keyValue={item} />
          ))}
        </div>
        <div className=" flex justify-between items-center gap-2 pt-4">
          <button className=" uppercase bg-resetKey-background shadow-keyShadow shadow-resetKey-shadow w-full rounded-md py-3">
            Reset
          </button>
          <button className=" bg-equalKey-background shadow-equalKey-shadow shadow-keyShadow w-full rounded-md py-3">
            =
          </button>
        </div>
      </div>
    </div>
  );
};

const KeyButton = ({ keyValue }: { keyValue: string | number }) => {
  return (
    <button
      className={`${
        keyValue !== "DEL"
          ? "bg-numberKey-background shadow-numberKey-shadow text-text-numberKey pt-2 hover:bg-opacity-10"
          : "bg-resetKey-background shadow-resetKey-shadow text-text-primary text-lg pt-1"
      } text-center rounded-lg text-numbersFontSize shadow-keyShadow`}
      onClick={() => console.log(keyValue)}
    >
      {keyValue}
    </button>
  );
};

export default Calculator;
