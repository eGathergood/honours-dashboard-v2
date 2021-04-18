import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";

const BarChart = ({ bLabels, bData, bColors, bLabelTitle }) => {
  const [barLabels, setBarLabels] = useState();
  const [barData, setBarData] = useState();
  const [barColors, setBarColors] = useState();
  const [barLabelTitle, setLabelTitle] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setBarLabels(bLabels);
    setBarData(bData);
    setBarColors(bColors);
    setLabelTitle(bLabelTitle);
    setLoading(false);
  }, [bLabels, bData, bColors, bLabelTitle]);

  console.log(barLabels);
  console.log(barData);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <div>
        <Bar
          data={{
            labels: barLabels,
            datasets: [
              {
                label: barLabelTitle,
                data: barData,
                backgroundColor: barColors,
              },
            ],
          }}
          height={400}
          width={600}
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

export default BarChart;
