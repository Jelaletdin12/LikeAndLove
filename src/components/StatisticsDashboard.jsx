import React from 'react';

const StatisticsCard = ({ title, value }) => {
  const formatNumber = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  };

  return (
    <div className="relative rounded-xl overflow-hidden group">
      {/* Gradient border effect */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-50" />
      
      {/* Content container */}
      <div className="relative bg-navy-900 m-[1px] rounded-xl p-6">
        <h3 className="text-gray-300 text-center mb-3">{title}</h3>
        <p className="text-blue-500 text-2xl lg:text-3xl font-bold text-center">
          {formatNumber(value)}
        </p>
      </div>
    </div>
  );
};

const StatisticsDashboard = () => {
  const stats = [
    {
      title: "Active users",
      value: 10000
    },
    {
      title: "Transactions per day",
      value: 25000
    },
    {
      title: "Sent by LOVE",
      value: 1875000000
    },
    {
      title: "Invited friends",
      value: 9072
    }
  ];

  return (
    <div className="max-w-6xl mx-auto p-8">
      <h1 className="text-4xl font-bold text-blue-500 text-center mb-12">
        statistics
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <StatisticsCard
            key={index}
            title={stat.title}
            value={stat.value}
          />
        ))}
      </div>
    </div>
  );
};

export default StatisticsDashboard;