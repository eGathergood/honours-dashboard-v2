import "./App.css";
//import ExampleChart from "./ExampleChart";
import BarChart from "./BarChart";

const barLabels = ["2017", "2018", "2019", "2020"];
const barValues = [120, 130, 140, 170];
const barColors = ["Red", "Blue", "Pink", "Orange"];
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
      {/* //<ExampleChart /> */}
      {/* Barr chart containg number of tweets in period and years */}
      <BarChart bLabels={barLabels} bData={barValues} bColors={barColors} />
    </div>
  );
}

export default App;
