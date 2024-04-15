// // import * as React from 'react';
import { BarChart } from "@mui/x-charts/BarChart";
// import { axisClasses } from "@mui/x-charts";
import { Link } from "react-router-dom";

const chartSetting = {
  yAxis: [
    {
      label: "rainfall (mm)",
    },
  ],
  width: 350,
  height: 200,
  // sx: {
  //   [`.${axisClasses.left} .${axisClasses.label}`]: {
  //     transform: "translate(-20px, 0)",
  //   },
  // },
};
const dataset = [
  {
    london: 0,
    paris: 0,
    newYork: 0,
    seoul: 0,
    delhi: 0,
    varanasi: 0,
    time: "12:00",
  },
  {
    london: 0,
    paris: 0,
    newYork: 0,
    seoul: 0,
    delhi: 0,
    varanasi: 0,
    time: "",
  },
  {
    london: 270,
    paris: 530,
    newYork: 706,
    seoul: 400,
    delhi: 350,
    varanasi: 490,
    time: "03:00",
  },
  {
    london: 529,
    paris: 290,
    newYork: 192,
    seoul: 93,
    delhi: 185,
    varanasi: 470,
    time: ".",
  },
  {
    london: 549,
    paris: 599,
    newYork: 692,
    seoul: 809,
    delhi: 750,
    varanasi: 650,
    time: "06:00",
  },
  {
    london: 600,
    paris: 630,
    newYork: 303,
    seoul: 544,
    delhi: 440,
    varanasi: 0,
    time: ",",
  },
  {
    london: 0,
    paris: 0,
    newYork: 0,
    seoul: 0,
    delhi: 0,
    varanasi: 0,
    time: "09:00",
  },
];

const valueFormatter = (value) => `${value}mm`;

export default function Chart() {
  return (
    <Link to={"/SchedulePage"}>
      <BarChart
        dataset={dataset}
        xAxis={[{ scaleType: "band", dataKey: "time" }]}
        series={[
          { dataKey: "london", valueFormatter },
          { dataKey: "paris", valueFormatter },
          { dataKey: "newYork", valueFormatter },
          { dataKey: "seoul", valueFormatter },
          { dataKey: "delhi", valueFormatter },
          { dataKey: "varanasi", valueFormatter },
        ]}
        {...chartSetting}
      />
    </Link>
  );
}
