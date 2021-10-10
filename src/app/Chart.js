import { useContext } from "react";
import Chart from "react-google-charts";
import { AppContext } from "./context";
import "./Chart.css";

function BarChart() {
  const { data } = useContext(AppContext);

  if (!data || data.length === 0) {
    return "Loading";
  }

  return (
    <div className="bar-chart">
      <Chart
        height={"500px"}
        chartType="BarChart"
        data={[
          ["NEO", "Min Estimated Diameter", "Max Estimated Diameter"],
          ...data,
        ]}
        options={{
          chartArea: { width: "50%" },
          legend: { position: "top" },
          hAxis: {
            title: "Estimated Diameter (km)",
            minValue: 0,
          },
          vAxis: {
            title: "NEO Name",
          },
        }}
      />
    </div>
  );
}

export default BarChart;
