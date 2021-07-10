import React, { PureComponent } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";

const BarChartComp = ({ fill, data, tickCount, title, width }) => {
  return (
    <>
      <h4 style={{ marginBottom: "-10px", fontWeight: 500 }}>{title}</h4>
      <BarChart
        style={{ fontFamily: "'Poppins', sans-serif" }}
        width={width}
        height={150}
        data={data}
        layout="vertical"
      >
        <XAxis
          axisLine={true}
          tickLine={false}
          type="number"
          tickCount={tickCount}
        />
        <YAxis
          orientation="right"
          dataKey="uv"
          type="category"
          axisLine={false}
          tickLine={false}
        ></YAxis>

        <Bar dataKey="uv" minPointSize={2} barSize={62} fill={fill} />
        <Bar dataKey="amt" minPointSize={2} barSize={0} />
      </BarChart>
    </>
  );
};
export default BarChartComp;
