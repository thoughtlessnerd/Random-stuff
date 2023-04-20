import { Chart } from "react-google-charts";

function Timetable(props) {
    return (
        <div
            className="table"
            style={{ position: "relative", width: props.width }}
        >
            <Chart
                chartType="PieChart"
                options={props.options}
                width={props.width}
                height={props.height}
                style={props.style}
                data={props.data}
            />
            <img
                style={{
                    position: "absolute",
                    top: `${parseInt(props.width) / 2}px`,
                    left: `${parseInt(props.width) / 2}px`,
                    transform: "translate(-50%, -50%)",
                    pointerEvents: "none",
                }}
                width={`${parseInt(props.width) * 0.625 * 0.8}px`}
                src="./assets/images/clock.png"
                alt="clock image"
            ></img>
        </div>
    );
}

export default Timetable;
