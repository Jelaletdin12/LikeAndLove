import React from "react";
import lock from "../assets/lock.png";
import { useTranslation } from "react-i18next";
const StatisticsCard = ({ title, value, image, contrast, noShadow }) => {
  const formatNumber = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  };
const { t, i18n } = useTranslation();
  return (
    <div className="relative p-[3px] rounded-lg group">
      {/* Gradient border container */}
      <div
        className={`absolute inset-0 bg-gradient-to-r from-[#007AFF] to-[#F30EFF] rounded-[8px]  ${
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
        <h3 className="text-white text-center mb-3">{title}</h3>
        {value !== undefined && (
          <p className="text-[#007AFF] text-xl lg:text-2xl font-bold text-center">
            {formatNumber(value)}
          </p>
        )}
      </div>
    </div>
  );
};
const StatisticsDashboard = () => {
  const { t, i18n } = useTranslation();
  const stats = [
    {
      title:  t("StatisticsDashboard.Activeusers"),
      value: 10000,
    },
    {
      title: t("StatisticsDashboard.Transactionsperday"),
      value: 25000,
    },
    {
      title: t("StatisticsDashboard.SentbyLOVE"),
      value: 1875000000,
    },
    {
      title: t("StatisticsDashboard.Invitedriends"),
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
    <div className="max-w-6xl mx-auto p-4">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-6xl font-bold text-white text-center mb-6">
        {t("StatisticsDashboard.Application")} <span className="text-[#007AFF]">{t("StatisticsDashboard.statistics")}</span>
        </h1>
        <p className="text-white mb-6 text-2xl">{t("StatisticsDashboard.Visualstatisticsofourplatform")}</p>
      </div>
      <div className="grid grid-cols-2  md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6" >
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
      <div className="flex flex-col mt-10 items-center mb-10">
        <h1 className="text-white text-6xl font-bold mb-6">{t("StatisticsDashboard.Team")}</h1>
        <p className="text-center text-xl text-white">{t("StatisticsDashboard.Webelieveinthe")}</p>
      </div>
    </div>
  );
};

export default StatisticsDashboard;
