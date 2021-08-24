import './Chart.css';
import ChartBar from './ChartBar';

const Chart = ({ monthPoints }) => {
  const dataPointValues = monthPoints.map(monthPoint => monthPoint.value);
  const totalMaximum = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {monthPoints.map(month => (
        <ChartBar
          key={month.label}
          value={month.value}
          maxValue={totalMaximum}
          label={month.label}
        />
      ))}
    </div>
  );
};

export default Chart;
