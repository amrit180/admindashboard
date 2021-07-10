import { PieChart, Pie, Cell } from "recharts";

const COLORS = ["#f7bd01", "#f93a3a", "#22d068", "#6360AB"];

const PieChartComp = ({ data }) => {
  return (
    <div>
      <PieChart width={360} height={250}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          outerRadius={100}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
      <div className="universalAround">
        {data.map((entry, index) => (
          <div>
            <div
              style={{
                color: COLORS[index % COLORS.length],
                fontSize: "20px",
                textAlign: "center",
                fontFamily: "'Poppins', sans-serif",
              }}
            >
              {entry.value}
            </div>
            <div style={{ color: "#8A95BA", fontSize: "16px" }}>
              {entry.title}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PieChartComp;
