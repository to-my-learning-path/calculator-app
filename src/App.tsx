import Calculator from "./components/Calculator/Calculator";
import ThemeProvider from "./context/ThemeContext";
function App() {
  return (
    <ThemeProvider>
      <main>
        <h1 className=" sr-only">Calculator</h1>
        <Calculator />
      </main>
    </ThemeProvider>
  );
}

export default App;
