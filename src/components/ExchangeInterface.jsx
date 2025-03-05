import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useTranslation } from "react-i18next";
import dedust from "../assets/dedust.png";
import ston from "../assets/ston.png";
import bidget from "../assets/arrow.png";
import kraken from "../assets/m.png";
import upbit from "../assets/up.png";
import bybit from "../assets/bybit.png";
import c from "../assets/c.png";
import logo from "../assets/like-love.png";
import strom from "../assets/bird.png";
import bull from "../assets/bull.png";
import unicorn from "../assets/unicorn.png";
import tons from "../assets/tons.png";
import curve from "../assets/curve.png";
import binance from "../assets/binance.png";
import kucoin from "../assets/kucoin.png";
import { CircleArrowRight } from "lucide-react";
const ExchangeInterface = () => {
  const [exchangeType, setExchangeType] = useState("DEX");
  const { t, i18n } = useTranslation();
  const exchanges = {
    CEX: [
      {
        id: 1,
        name: t("ExchangeInterface.card9"),
        logo: logo,
        date: "01.04.2025",
        active: true,
        link: "https://t.me/Like_Project_Bot",
      },
      {
        id: 2,
        name: t("ExchangeInterface.card10"),
        logo: upbit,
        date: t("StatisticsDashboard.ComingSoon2"),
        active: false,
      },
      {
        id: 3,
        name: t("ExchangeInterface.card11"),
        logo: bidget,
        date: t("StatisticsDashboard.ComingSoon2"),
        active: false,
      },

      {
        id: 4,
        name: t("ExchangeInterface.card12"),
        logo: c,
        date: t("StatisticsDashboard.ComingSoon2"),
        active: false,
      },
      {
        id: 5,
        name: t("ExchangeInterface.card13"),
        logo: kucoin,
        date: t("StatisticsDashboard.ComingSoon2"),
        active: false,
      },

      {
        id: 6,
        name: t("ExchangeInterface.card14"),
        logo: bybit,
        date: t("StatisticsDashboard.ComingSoon2"),
        active: false,
      },
      {
        id: 7,
        name: t("ExchangeInterface.card15"),
        logo: binance,
        date: t("StatisticsDashboard.ComingSoon2"),
        active: false,
      },
      {
        id: 8,
        name: t("ExchangeInterface.card16"),
        logo: kraken,
        date: t("StatisticsDashboard.ComingSoon2"),
        active: false,
      },
    ],
    DEX: [
      {
        id: 1,
        name: t("ExchangeInterface.card1"),
        logo: logo,
        date: "01.04.2025",
        active: true,
        link: "https://t.me/Like_Project_Bot",
      },
      {
        id: 2,
        name: t("ExchangeInterface.card2"),
        logo: ston,
        date: "01.04.2025",
        active: true,
        link: "https://ston.fi/",
      },
      {
        id: 3,
        name: t("ExchangeInterface.card3"),
        logo: dedust,
        date: t("StatisticsDashboard.ComingSoon2"),
        active: false,
      },

      {
        id: 4,
        name: t("ExchangeInterface.card4"),
        logo: strom,
        date: t("StatisticsDashboard.ComingSoon2"),
        active: false,
      },
      {
        id: 5,
        name: t("ExchangeInterface.card5"),
        logo: bull,
        date: t("StatisticsDashboard.ComingSoon2"),
        active: false,
      },
      {
        id: 6,
        name: t("ExchangeInterface.card6"),
        logo: unicorn,
        date: t("StatisticsDashboard.ComingSoon2"),
        active: false,
      },
      {
        id: 7,
        name: t("ExchangeInterface.card7"),
        logo: tons,
        date: t("StatisticsDashboard.ComingSoon2"),
        active: false,
      },
      {
        id: 8,
        name: t("ExchangeInterface.card8"),
        logo: curve,
        date: t("StatisticsDashboard.ComingSoon2"),
        active: false,
      },
    ],
  };

  return (
    <div className=" max-w-6xl m-auto mt-20 p-4 mb-20">
      <div className=" mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 text-center">
          <span className="text-white">{t("ExchangeInterface.Partner")}</span>{" "}
          <span className="text-[#007AFF]">
            {t("ExchangeInterface.CryptoExchanges")}
          </span>
        </h1>

        <p className="text-white text-lg md:text-xl text-center mb-8">
          {t("ExchangeInterface.Toparticipateinminingandassetue")}
        </p>

        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={() => setExchangeType("DEX")}
            className={`px-6 py-2 rounded-full ${
              exchangeType === "DEX"
                ? "bg-[#007AFF] text-white"
                : "bg-transparent text-white"
            }`}
          >
            DEX
          </button>
          <button
            onClick={() => setExchangeType("CEX")}
            className={`px-6 py-2 rounded-full ${
              exchangeType === "CEX"
                ? "bg-[#007AFF] text-white"
                : "bg-transparent text-white"
            }`}
          >
            CEX
          </button>
        </div>

        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {exchanges[exchangeType].map((exchange) => (
            <div
              key={exchange.id}
              className={`relative p-[3px] rounded-xl overflow-hidden ${
                exchange.active
                  ? "bg-navy-800 shadow-[0_0px_15px_rgba(0,122,255,1)]"
                  : "contrast-50"
              }`}
            >
              <div
                className="absolute inset-0 rounded-xl pointer-events-none"
                style={{
                  background: exchange.active
                    ? "linear-gradient(45deg, #007AFF, #F30EFF)"
                    : "linear-gradient(45deg, #4B5563, #9CA3AF)",
                }}
              />
              <div className="relative flex flex-col justify-between bg-[#161C31] p-4  h-[330px] rounded-xl">
                <div className="flex flex-col h-full">
                  <div className="text-sm text-center text-white mb-2">
                    {exchange.date}
                  </div>
                  <div className="text-md font-bold text-center   text-white mb-auto pb-1.5">
                    {exchange.name}
                  </div>
                  <div className="flex justify-center mb-6">
                    <img src={exchange.logo} alt={exchange.name} />
                  </div>
                  <button
                    className={`w-full py-2 px-4 rounded-lg flex justify-center ${
                      exchange.active
                        ? "bg-white text-[#151D31] font-bold hover:bg-gray-100"
                        : "bg-[#5b6069] text-[#8c9097] cursor-not-allowed"
                    }`}
                    disabled={!exchange.active}
                  >
                    <a
                      className="flex gap-2"
                      href={exchange.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {t("ExchangeInterface.goto")} <CircleArrowRight />
                    </a>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="md:hidden">
          <Swiper spaceBetween={10} slidesPerView={2} className="h-full">
            {exchanges[exchangeType].map((exchange) => (
              <SwiperSlide key={exchange.id} className="h-auto">
                <div
                  className={`relative p-[3px] rounded-xl overflow-hidden h-full ${
                    exchange.active
                      ? "bg-navy-800 shadow-[0_0px_15px_rgba(0,122,255,1)]"
                      : ""
                  }`}
                  style={{
                    filter: !exchange.active ? "contrast(50%)" : "none",
                  }}
                >
                  <div
                    className="absolute inset-0 rounded-xl pointer-events-none"
                    style={{
                      background: exchange.active
                        ? "linear-gradient(45deg, #007AFF, #F30EFF)"
                        : "linear-gradient(45deg, #4B5563, #9CA3AF)",
                    }}
                  />
                  <div className="relative flex flex-col justify-between bg-[#161C31] items-center p-2 md:p-6 rounded-xl h-full">
                    <div className="flex flex-col items-center w-full">
                      <div className="text-sm text-center text-white mb-2 h-[20px] w-full">
                        {exchange.date}
                      </div>
                      <div className="text-sm md:text-md font-bold text-center text-white mb-4 h-[40px] flex items-center justify-center w-full">
                        {exchange.name}
                      </div>

                      <div className="flex justify-center mb-4 w-[60px] h-[60px] md:w-[60px] md:h-[60px]">
                        <img
                          src={exchange.logo}
                          alt={exchange.name}
                          className="object-contain max-w-full max-h-full"
                        />
                      </div>
                    </div>

                    <button
                      className={`w-full py-2 px-4 rounded-lg flex justify-center ${
                        exchange.active
                          ? "bg-white text-[#151D31] font-bold hover:bg-gray-100"
                          : "bg-[#5b6069] text-[#8c9097] cursor-not-allowed"
                      }`}
                      disabled={!exchange.active}
                    >
                      <a
                        className="flex gap-2 items-center justify-center"
                        href={exchange.link}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <span className="whitespace-nowrap">
                          {t("ExchangeInterface.goto")}
                        </span>{" "}
                        <CircleArrowRight />
                      </a>
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default ExchangeInterface;
