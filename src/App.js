import "./App.css";
//import ExampleChart from "./ExampleChart";
import BarChart from "./BarChart";
import LineChart from "./LineChart";
import MultiLineChart from "./MultiLineChart";

const barLabels = ["2017", "2018", "2019", "2020"];
const barValues = [1940, 3204, 3195, 2753];
const barColors = ["#60167a", "#aa83b5", "#ec9c9d", "#de425b"];
const barLabelTitle = "# of tweets";

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
const lineValues = [
  616,
  726,
  1328,
  974,
  709,
  1038,
  679,
  821,
  1358,
  689,
  940,
  694,
];

const sentimentLabels = [
  "Less than -3",
  "-3",
  "-2",
  "-1",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "Over 6",
];

const sentimentValues = [27, 9, 68, 53, 897, 299, 563, 520, 277, 276, 693];
const sentimentLabelTitle = "count of score";
const sentimentColors = [
  "#60167a",
  "#81378f",
  "#a157a5",
  "#c177bc",
  "#e098d4",
  "#ffbaed",
  "#fba1d3",
  "#f588b6",
  "#ee6e96",
  "#e35574",
  "#d43d51",
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>

      <BarChart
        bLabels={barLabels}
        bData={barValues}
        bColors={barColors}
        bLabelTitle={barLabelTitle}
      />
      <LineChart lLabels={lineLabels} lData={lineValues} />
      <MultiLineChart />
      <BarChart
        bLabels={sentimentLabels}
        bData={sentimentValues}
        bColors={sentimentColors}
        bLabelTitle={sentimentLabelTitle}
      />
    </div>
  );
}

export default App;
