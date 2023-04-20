import "./App.css";
import Timetable from "./components/Timetable.js";

let timetableData = [
    ["tasks", "time"],
    ["sleep", 2],
    ["stydy", 2],
];

function App() {
    return (
        <>
            <Timetable
                width="900px"
                height="900px"
                options={options}
                label="AM"
                data={timetableData}
                style={{ padding: 0 }}
            />
        </>
    );
}

const options = {
    pieHole: 0.8,
    is3D: false,
    legend: "none",
    pieSliceText: "none",
    tooltip: {
        isHtml: true,
    },
};

export default App;
