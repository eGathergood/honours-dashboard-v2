import React from "react";
import { Line } from "react-chartjs-2";

const BarChart = () => {
  return (
    <div>
      <Line
        data={{
          labels: ["Red", "Blue", "Pink", "Purple", "Brown"],
          datasets: [
            {
              label: "# of votes",
              data: [2, 4, 7, 5, 9],
              backgroundColor: ["Red", "Blue", "Pink", "Purple", "Brown"],
            },
            {
              label: "Quantity",
              data: [34, 47, 47, 24, 12],
              backgroundColor: "orange",
              borderColor: "red",
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
  );
};

export default BarChart;
