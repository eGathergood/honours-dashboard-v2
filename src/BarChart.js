import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";

function BarChart({ Tlabels, data }) {
  const [barLabels, setBarLabels] = useState();
  const [barData, setBarData] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setBarLabels(["red", "blue"]);
    setBarData([2, 3]);
    setLoading(false);
  }, [Tlabels, data]);

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
                data: data,
                backgroundColor: ["Red", "Blue"],
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
