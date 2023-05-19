import { useState, useEffect, useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
const keysList = [
  ["7", "8", "9", "DEL"],
  ["4", "5", "6", "+"],
  ["1", "2", "3", "-"],
  [".", "0", "/", "x"],
];

const themeList = ["theme-one", "theme-two", "theme-three"];

const Calculator = () => {
  const [result, setResult] = useState("0");

  const { theme, toggleTheme } = useContext(ThemeContext);

  useEffect(() => {
    document.body.classList.value = "";
    document.body.classList.add(themeList[theme - 1]);
  }, [theme]);

  const handleKeyInput = (event: React.MouseEvent<HTMLButtonElement>) => {
    const input = event.currentTarget.value;

    if (result === "0") {
      setResult("");
    }
    setResult((v) => v.concat(input));
  };

  const handleEqual = () => {
    let evalResult = "";
    try {
      evalResult = eval(result);
    } catch (e) {
      console.log(e);
    }
    if (evalResult === undefined || evalResult === "") {
      handleReset();
    } else {
      setResult(evalResult.toString());
    }
  };

  const handleReset = () => {
    setResult("0");
  };

  const handleDelete = () => {
    if (result.length === 1) {
      handleReset();
    } else {
      const newResult = result.slice(0, -1);
      setResult(newResult);
    }
  };

  return (
    <div className=" p-6 max-w-lg md:mx-auto">
      <div className=" flex justify-between items-center">
        <p className=" text-4xl">calc</p>
        <div className=" flex flex-col justify-between">
          <div className=" flex self-end gap-4 justify-between px-3">
            <p>1</p>
            <p>2</p>
            <p>3</p>
          </div>
          <div className=" flex items-start gap-2">
            <label className=" uppercase tracking-wider self-end pb-1">
              Theme
            </label>

            <input
              className="w-[5rem] cursor-pointer"
              type="range"
              name="theme"
              value={theme}
              onChange={(e) => toggleTheme(parseInt(e.target.value))}
              min={1}
              max={3}
              step={1}
            />
          </div>
        </div>
      </div>
      <div className=" bg-background-screen p-4 rounded-lg text-end my-6">
        <p className=" text-numbersFontSize text-text-primary">{result}</p>
      </div>
      <div className=" bg-background-keypad rounded-lg p-6">
        <div className=" grid grid-cols-4 gap-3">
          {keysList.flat().map((item, index) => (
            <KeyButton
              key={index}
              handleDelete={handleDelete}
              handleKeyInput={handleKeyInput}
              keyValue={item}
            />
          ))}
        </div>
        <div className=" flex justify-between items-center gap-2 pt-4">
          <button
            onClick={handleReset}
            className=" text-text-secondary uppercase bg-resetKey-background shadow-keyShadow shadow-resetKey-shadow w-full rounded-md py-3"
          >
            Reset
          </button>
          <button
            onClick={handleEqual}
            className=" text-text-secondary bg-equalKey-background shadow-equalKey-shadow shadow-keyShadow w-full rounded-md py-3"
          >
            =
          </button>
        </div>
      </div>
    </div>
  );
};

const KeyButton = ({
  keyValue,
  handleKeyInput,
  handleDelete,
}: {
  keyValue: string;
  handleKeyInput: React.MouseEventHandler<HTMLButtonElement>;
  handleDelete: React.MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <button
      value={keyValue === "x" ? "*" : keyValue}
      onClick={keyValue === "DEL" ? handleDelete : handleKeyInput}
      className={`${
        keyValue !== "DEL"
          ? "bg-numberKey-background shadow-numberKey-shadow text-text-numberKey pt-2 hover:bg-opacity-10"
          : "bg-resetKey-background shadow-resetKey-shadow text-text-secondary text-lg pt-1"
      } text-center rounded-lg text-numbersFontSize shadow-keyShadow`}
    >
      {keyValue}
    </button>
  );
};

export default Calculator;
