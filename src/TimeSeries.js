import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";

//this component requires labels and data as prop: [x,y,z]
const LineChart = ({ lLabels, lData }) => {
  const [lineLabels, setLineLabels] = useState();
  const [lineData, setLineData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLineLabels(lLabels);
    setLineData(lData);
    setLoading(false);
  }, [lLabels, lData]);

  console.log(lineLabels);
  console.log(lineData);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      A Title?
      <div>
        <Line
          data={{
            labels: lineLabels,
            datasets: [
              {
                label: "# of votes",
                data: lineData,
                borderColor: "black",
              },
            ],
          }}
          height={400}
          widht={600}
          options={{
            maintainAspectRatio: false,
            scales: {
              yAxes: [
                {
                  ticks: {
                    beginAtZero: true,
                  },
                },
              ],
            },
          }}
        />
      </div>
    </>
  );
};

export default LineChart;
