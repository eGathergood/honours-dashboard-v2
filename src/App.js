import "./App.css";
//import ExampleChart from "./ExampleChart";
import BarChart from "./BarChart";
import LineChart from "./LineChart";

const barLabels = ["2017", "2018", "2019", "2020"];
const barValues = [120, 130, 140, 170];
const barColors = ["Red", "Blue", "Pink", "Orange"];

const lineLabels = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const lineValues = [100, 120, 150, 180, 160, 110, 130, 190, 200, 170, 140, 100];
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
      <LineChart lLabels={lineLabels} lData={lineValues} />
    </div>
  );
}

export default App;
