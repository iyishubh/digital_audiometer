import React from "react";
import { Container } from "react-bootstrap";
import ApexCharts from "react-apexcharts";

function Analytics() {
  const options = {
    chart: {
      id: "frequency-chart",
    },
    xaxis: {
      title: "Dates",
      type: "datetime",
    },
    yaxis: {
      title: "Frequency (Hz)",
    },
    title: {
      text: "Frequency Over Time",
    },
  };

  const series = [
    {
      name: "Sensor 1",
      data: [
        [new Date(2024, 2, 18).getTime(), 1000], // Adjust dates and Hz values as needed
        [new Date(2024, 2, 19).getTime(), 1020],
        [new Date(2024, 2, 20).getTime(), 1015],
        [new Date(2024, 2, 21).getTime(), 1032],
        [new Date(2024, 2, 22).getTime(), 1028], // Added additional data points
        [new Date(2024, 2, 23).getTime(), 1012],
        [new Date(2024, 2, 24).getTime(), 1007],
        [new Date(2024, 2, 25).getTime(), 1019],
        [new Date(2024, 2, 26).getTime(), 1035],
        [new Date(2024, 2, 27).getTime(), 1040],
        [new Date(2024, 2, 28).getTime(), 1023],
        [new Date(2024, 2, 29).getTime(), 1010],
      ],
    },
    {
      name: "Sensor 2",
      data: [
        [new Date(2024, 2, 18).getTime(), 980], // Adjust dates and Hz values as needed
        [new Date(2024, 2, 19).getTime(), 995],
        [new Date(2024, 2, 20).getTime(), 1008],
        [new Date(2024, 2, 21).getTime(), 1025],
        [new Date(2024, 2, 22).getTime(), 1017], // Added additional data points
        [new Date(2024, 2, 23).getTime(), 999],
        [new Date(2024, 2, 24).getTime(), 1003],
        [new Date(2024, 2, 25).getTime(), 1014],
        [new Date(2024, 2, 26).getTime(), 1029],
        [new Date(2024, 2, 27).getTime(), 1033],
        [new Date(2024, 2, 28).getTime(), 1016],
        [new Date(2024, 2, 29).getTime(), 995],
      ],
    },
  ];
  return (
    <Container>
      <ApexCharts options={options} series={series} type="line" height={350} />
    </Container>
  );
}

export default Analytics;
