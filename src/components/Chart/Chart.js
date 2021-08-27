import "./Chart.css";
import ChartBar from "./ChartBar";

const Chart = (props) => {
    const valueList = props.items.map(el => el.val)
    const maxVal = Math.max(...valueList)
  return (
    <div className="chart">
      {props.items.map((expense) => 
        <ChartBar label={expense.label} val={expense.val} max={maxVal} key={expense.label} />
      )}
    </div>
  );
};

export default Chart;
