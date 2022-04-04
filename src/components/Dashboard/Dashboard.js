import React from "react";
import "./Dashboard.css";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Dashboard = () => {
  const data = [
    {
      month: "Mar",
      investment: 100000,
      sell: 241,
      revenue: 10401,
    },
    {
      month: "Apr",
      investment: 200000,
      sell: 423,
      revenue: 24500,
    },
    {
      month: "May",
      investment: 500000,
      sell: 726,
      revenue: 67010,
    },
    {
      month: "Jun",
      investment: 500000,
      sell: 529,
      revenue: 40405,
    },
    {
      month: "Jul",
      investment: 600000,
      sell: 601,
      revenue: 50900,
    },
    {
      month: "Aug",
      investment: 700000,
      sell: 670,
      revenue: 61000,
    },
  ];
  return (
    <div className="dashboard">
      <div className="banner text-center text-white">
        <h1>Dashboard</h1>
      </div>
      <div className="container">
        <div className="row text-center">
          <div className="col-md-6">
            <div className="chart-head">
              <h1>Month Wise Cell</h1>
            </div>
            <ResponsiveContainer width="100%" height={500}>
              <LineChart width={500} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="sell"
                  stroke="#8884d8"
                  activeDot={{ r: 8 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="col-md-6">
            <div className="chart-head">
              <h1>Investment Vs Revenue</h1>
            </div>
            <ResponsiveContainer width="100%" height={500}>
              <AreaChart width={500} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Area
                  dataKey="investment"
                  stroke="#8884d8"
                  fill="#8884d8"
                  type="monotone"
                />
                <Area
                  dataKey="revenue"
                  stroke="#82ca9d"
                  fill="#82ca9d"
                  type="monotone"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          <div className="col-md-6">
            <div className="chart-head">
              <h1>Investment Vs Revenue</h1>
            </div>
            <ResponsiveContainer width="100%" height={500}>
              <BarChart width={500} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis dataKey="investment" />
                <Tooltip />
                <Legend />
                <Bar dataKey="investment" stackId="a" fill="#8884d8" />
                <Bar dataKey="revenue" stackId="a" fill="#82ca9d" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="col-md-6">
            <div className="chart-head">
              <h1>Investment Vs Revenue</h1>
            </div>
            <ResponsiveContainer width="100%" height={500}>
              <PieChart width={400}>
                <Tooltip />
                <Pie
                  data={data}
                  dataKey="investment"
                  cx="50%"
                  cy="50%"
                  outerRadius={60}
                  fill="#8884d8"
                />
                <Pie
                  data={data}
                  dataKey="revenue"
                  cx="50%"
                  cy="50%"
                  innerRadius={70}
                  outerRadius={90}
                  fill="#82ca9d"
                  label
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
