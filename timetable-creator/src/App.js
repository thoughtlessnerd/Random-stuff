import "./App.css";
import { Chart } from "react-google-charts";

function App() {
    return (
        <Chart
            chartType="PieChart"
            width="100%"
            height="400px"
            data={data}
            options={options}
        />
    );
}

const data = [
    ["Task", "Hours per Day", "tooltip"],
    ["Work", 2, "2 hr"],
    ["Eat", 2, "2 hr"],
    ["Commute", 2, "2 hr"],
    ["Watch TV", 2, "2 hr"],
    ["Sleep", 4, "2 hr"], // CSS-style declaration
];

const options = {
    pieHole: 0.8,
    is3D: false,
    legend: "none",
    pieSliceText: "none",
    tooltip: {
        isHtml: true,
        text: "value",
    },
};

export default App;
