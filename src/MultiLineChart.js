import React from "react";
import { Line } from "react-chartjs-2";

const data = {
  labels: ["Sep", "Oct", "Nov", "Dec"],
  datasets: [
    {
      label: "2020",
      data: [1358, 689, 940, 695],
      fill: false,
      borderColor: "#60167a",
    },
    {
      label: "2019",
      data: [1214, 1073, 1288, 703],
      fill: false,
      borderColor: "#aa83b5",
    },
    {
      label: "2018",
      data: [804, 1432, 1090, 645],
      fill: false,
      borderColor: "#ec9c9d",
    },
    {
      label: "2017",
      data: [758, 598, 686, 826],
      fill: false,
      borderColor: "#de425b",
    },
  ],
};

export default function MultiLineChart() {
  return (
    <div className="App">
      <Line
        data={data}
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
}
