import { useState, useEffect } from "react";

const keysList = [
  [7, 8, 9, "DEL"],
  [4, 5, 6, "+"],
  [1, 2, 3, "-"],
  [".", 0, "/", "x"],
];

const themeList = ["theme-one", "theme-two", "theme-three"];

const useThemeToggler = (item: number): [number, (v: number) => void] => {
  const [theme, setTheme] = useState<number>(item);

  useEffect(() => {
    document.body.classList.value = "";
    document.body.classList.add(themeList[theme - 1]);
  }, [theme]);

  return [
    theme,
    (e: number) => {
      const currentIndex = e;
      setTheme(currentIndex);
    },
  ];
};

const Calculator = () => {
  const [result, setResult] = useState(0);
  const [theme, setTheme] = useThemeToggler(1);
  return (
    <div className=" p-6 max-w-lg md:mx-auto">
      <div className=" flex justify-between items-center">
        <p className=" text-4xl">calc</p>
        <div className=" flex justify-between gap-2">
          <p className=" uppercase tracking-wider self-end pb-1">Theme</p>
          <div>
            <div className=" flex justify-between px-3">
              <p>1</p>
              <p>2</p>
              <p>3</p>
            </div>
            <input
              className="w-[5rem] cursor-pointer"
              type="range"
              name=""
              id=""
              value={theme}
              onChange={(e) => setTheme(parseInt(e.target.value))}
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
            <KeyButton key={index} keyValue={item} />
          ))}
        </div>
        <div className=" flex justify-between items-center gap-2 pt-4">
          <button className=" text-text-secondary uppercase bg-resetKey-background shadow-keyShadow shadow-resetKey-shadow w-full rounded-md py-3">
            Reset
          </button>
          <button className=" text-text-secondary bg-equalKey-background shadow-equalKey-shadow shadow-keyShadow w-full rounded-md py-3">
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
          : "bg-resetKey-background shadow-resetKey-shadow text-text-secondary text-lg pt-1"
      } text-center rounded-lg text-numbersFontSize shadow-keyShadow`}
      onClick={() => console.log(keyValue)}
    >
      {keyValue}
    </button>
  );
};

export default Calculator;
