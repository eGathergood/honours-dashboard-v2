import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";

const LineChart = ({ lLabels, lData }) => {
  const [lineLabels, setLineLabels] = useState();
  const [lineData, setLineData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLineLabels(lLabels);
    setLineData(lData);
    setLoading(false);
  }, [lLabels, lData]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <div>
        <Line
          data={{
            labels: lineLabels,
            datasets: [
              {
                label: "# of tweets",
                data: lineData,
                borderColor: "#60167a",
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
