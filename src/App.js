import "./App.css";
//import ExampleChart from "./ExampleChart";
import BarChart from "./BarChart";

const barLabels = ["2017", "2018"];
const barValues = [120, 130];

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
      <BarChart labels={barLabels} data={barValues} />
    </div>
  );
}

export default App;
