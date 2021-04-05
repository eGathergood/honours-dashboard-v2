import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";

function BarChart({ bLabels, bData, bColors }) {
  const [barLabels, setBarLabels] = useState();
  const [barData, setBarData] = useState();
  const [barColors, setBarColors] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setBarLabels(bLabels);
    setBarData(bData);
    setBarColors(bColors);
    setLoading(false);
  }, [bLabels, bData, bColors]);

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
                label: "# of tweets",
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
}

export default BarChart;
