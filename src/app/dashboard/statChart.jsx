"use client";
import React, { useEffect, useState } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

import Exporting from "highcharts/modules/exporting";
import ExportData from "highcharts/modules/export-data";
import Accessibility from "highcharts/modules/accessibility";

if (typeof Highcharts === "object") {
  Exporting(Highcharts);
  ExportData(Highcharts);
  Accessibility(Highcharts);
}

const StatChart = () => {
  const [options, setOptions] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const data = await fetch(
        "https://www.highcharts.com/samples/data/usdeur.json"
      ).then((res) => res.json());

      setOptions({
        chart: {
          type: "area",
          height: 100,
          zooming: { type: "x" },
          spacing: [10, 0, 10, 0],
        },
        title: {
          text: "",
        },
        subtitle: {
          text:
            typeof document !== "undefined" && document.ontouchstart === undefined
              ? ""
              : "",
        },
        xAxis: {
          type: "datetime",
          gridLineWidth: 0,
          lineWidth: 0,
          tickLength: 0,
          labels: { enabled: false }
        },
        yAxis: {
          title: { text: null },
          gridLineWidth: 0,
          lineWidth: 0,
          labels: { enabled: false }
        },
        legend: { enabled: false },
        plotOptions: {
          area: {
            marker: {
              enabled: data.length === 1,
              radius: 3
            },
            lineWidth: 1,
            color: {
              linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
              stops: [
                [0, "#0abab5"],
                [0.7, "#0abab561"],
              ],
            },
            threshold: null
          }
        },
        series: [
          {
            type: "area",
            name: "USD to EUR",
            data
          }
        ],
        credits: { enabled: false }
      });
    };

    fetchData();
  }, []);

  if (!options) return <p>Loading chart...</p>;

  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default StatChart;
