import React, { useState, useEffect } from "react";
import lock from "../assets/lock.png";
import { useTranslation } from "react-i18next";

const StatisticsCard = ({ title, value, image, contrast, noShadow, valueType }) => {
  const formatNumber = (num) => {
    if (valueType === "currency") {
      return parseFloat(num).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  };
  
  const { t, i18n } = useTranslation();
  
  return (
    <div className="relative p-[3px] rounded-lg group">
      {/* Gradient border container */}
      <div
        style={{
          background: "linear-gradient(to right, #007AFF, #F30EFF)",
          filter: contrast ? "contrast(10%)" : "none",
        }}
        className="absolute inset-0 rounded-[8px]"
      />
      
      {/* Content container */}
      <div
        className={`
        relative bg-[#161C31] rounded-[8px]
        flex flex-col items-center justify-center w-full h-[150px] p-4
        ${!noShadow && "shadow-[0_0px_35px_rgba(0,122,255,1)]"}
      `}
        style={{
          filter: contrast ? "contrast(50%)" : "none",
        }}
      >
        {image && <img className="mb-3" src={image} alt="" />}
        <h3 className="text-white text-center mb-3 text-l md:text-xl"  style={{ whiteSpace: "pre-line" }}>
          
          {title}
        </h3>
        {value !== undefined && (
          <p className="text-[#007AFF] text-l lg:text-2xl font-bold text-center">
            {formatNumber(value)}
          </p>
        )}
      </div>
    </div>
  );
};

const StatisticsDashboard = () => {
  const { t, i18n } = useTranslation();
  const [apiData, setApiData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.tonlike.com/webhook/site/stats');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setApiData(data.site_stat);
        setIsLoading(false);
      } catch (error) {
        setError(error.message);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  // Define the stats mapping to API data
  const getStats = () => {
    const apiStats = [
      {
        title: t("StatisticsDashboard.Activeusers"),
        value: apiData ? apiData.active_users : 0,
      },
      {
        title: t("StatisticsDashboard.Totalturnover"),
        value: apiData ? apiData.total_turnover : 0,
        valueType: "currency"
      },
      {
        title: t("StatisticsDashboard.ActiveNFT"),
        value: apiData ? apiData.active_nft : 0,
      },
      {
        title: t("StatisticsDashboard.TotalStaking"),
        value: apiData ? apiData.total_staking : 0,
        valueType: "currency"
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
    
    return apiStats;
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white text-center mb-6">
          {t("StatisticsDashboard.Application")}{" "}
          <span className="text-[#007AFF]">
            {t("StatisticsDashboard.statistics")}
          </span>
        </h1>
        <p className="text-white mb-6 text-xl md:text-2xl text-center">
          {t("StatisticsDashboard.Visualstatisticsofourplatform")}
        </p>
      </div>
      
      {isLoading ? (
        <div className="text-white text-center">Loading statistics...</div>
      ) : error ? (
        <div className="text-red-500 text-center">Error: {error}</div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {getStats().map((stat, index) => (
            <StatisticsCard
              key={index}
              title={stat.title}
              value={stat.value}
              image={stat.image}
              contrast={index >= 4} // Apply contrast filter to the second row and beyond
              noShadow={index >= 4} // Remove shadow for the second row and beyond
              valueType={stat.valueType}
            />
          ))}
        </div>
      )}
      
      <div className="flex flex-col mt-10 items-center mb-10">
        <h1 className="text-white text-5xl md:text-6xl font-bold mb-6">
          {t("StatisticsDashboard.Team")}
        </h1>
        <p className="text-center text-lg md:text-xl text-white">
          {t("StatisticsDashboard.Webelieveinthe")}
        </p>
      </div>
    </div>
  );
};

export default StatisticsDashboard;