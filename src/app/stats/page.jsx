"use client";
import { useContext } from "react";
import { Legend, Pie, PieChart, Tooltip } from "recharts";
import { HistoryContext } from "../context/HistoryContext";

const Stats = () => {
  const { callHistory, videoHistory, textHistory } = useContext(HistoryContext);
  const called = callHistory.length;
  const texted = textHistory.length;
  const videoCalled = videoHistory.length;

  const data = [
    { name: "Text", value: texted, fill: "#7F37F5" },
    { name: "Call", value: called, fill: "#244D3F" },
    { name: "Video", value: videoCalled, fill: "#37A162" },
  ];
  return (
    <div className="bg-[#f8fafcFF]">
      <div className="max-w-7xl mx-auto my-20">
        <div className="">
          <h1 className="text-3xl md:text-5xl text-[#1f2937FF] font-bold mb-8 text-left">
            Friendship Analytics
          </h1>
          <div className="bg-white p-8">
            <p className="text-xl text-[#244d3fFF] font-medium mb-6">
              By Interaction Type
            </p>
            <div className="flex justify-center items-center space-y-6">
              <PieChart
                style={{
                  width: "100%",
                  maxWidth: "350px",
                  maxHeight: "30vh",
                  margin: "mx-auto",
                  aspectRatio: 1,
                }}
                responsive
              >
                <Pie
                  data={data}
                  innerRadius="80%"
                  outerRadius="100%"
                  cornerRadius="50%"
                  fill="#8884d8"
                  paddingAngle={5}
                  dataKey="value"
                  isAnimationActive={true}
                />

                <Tooltip />
                <Legend />
              </PieChart>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
