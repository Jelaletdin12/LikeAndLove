import React from "react";
import lock from "../assets/lock.png";

const StatisticsCard = ({ title, value, image, contrast, noShadow }) => {
  const formatNumber = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  };

  return (
    <div className="relative p-[3px] rounded-lg group">
      {/* Gradient border container */}
      <div
        className={`absolute inset-0 bg-gradient-to-r from-[#007AFF] to-[#F30EFF] rounded-[8px] ${
          contrast ? "filter contrast-15" : ""
        }`}
      />

      {/* Content container */}
      <div
        className={`
        relative bg-[#161C31] rounded-[8px]
        flex flex-col items-center justify-center w-full h-[150px]
        ${!noShadow && "shadow-[0_0px_35px_rgba(0,122,255,1)]"}
        ${contrast ? "filter contrast-50" : ""}
      `}
      >
        {image && <img className="mb-3" src={image} alt="" />}
        <h3 className="text-gray-300 text-center mb-3">{title}</h3>
        {value !== undefined && (
          <p className="text-blue-500 text-xl lg:text-2xl font-bold text-center">
            {formatNumber(value)}
          </p>
        )}
      </div>
    </div>
  );
};
const StatisticsDashboard = () => {
  const stats = [
    {
      title: "Active users",
      value: 10000,
    },
    {
      title: "Transactions per day",
      value: 25000,
    },
    {
      title: "Sent by LOVE",
      value: 1875000000,
    },
    {
      title: "Invited friends",
      value: 9072,
    },
    {
      title: "Coming Soon",
      image: lock,
    },
    {
      title: "Coming Soon",
      image: lock,
    },
    {
      title: "Coming Soon",
      image: lock,
    },
    {
      title: "Coming Soon",
      image: lock,
    },
  ];

  return (
    <div className="max-w-5xl mx-auto p-8">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold text-white text-center mb-6">
          Application <span className="text-[#007AFF]">statistics</span>
        </h1>
        <p className="text-white mb-3">Visual statistics of our platform</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <StatisticsCard
            key={index}
            title={stat.title}
            value={stat.value}
            image={stat.image}
            contrast={index >= 4} // Apply contrast filter to the second row and beyond
            noShadow={index >= 4} // Remove shadow for the second row and beyond
          />
        ))}
      </div>
    </div>
  );
};

export default StatisticsDashboard;
