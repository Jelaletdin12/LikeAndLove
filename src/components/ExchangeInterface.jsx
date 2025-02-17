import React, { useState } from "react";

import dedust from "../assets/dedust.png";
import ston from "../assets/ston.png";
import likelove from "../assets/likelove.png";
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

const ExchangeInterface = () => {
  const [exchangeType, setExchangeType] = useState("CEX");

  const exchanges = {
    CEX: [
      {
        id: 1,
        name: "Выход на биржу BINANCE",
        logo: binance,
        date: "23.01.2025",
        active: true,
      },
      {
        id: 2,
        name: "Выход на биржу Kraken",
        logo: kraken,
        date: "23.01.2025",
        active: true,
      },
      {
        id: 3,
        name: "Возможности Like & Love",
        logo: likelove,
        date: "23.01.2025",
        active: true,
      },
      {
        id: 4,
        name: "Выход на биржу Bidget",
        logo: bidget,
        date: "Coming soon...",
        active: false,
      },
      {
        id: 5,
        name: "Выход на биржу Kraken",
        logo: kraken,
        date: "Coming soon...",
        active: false,
      },
      {
        id: 6,
        name: "Выход на биржу Upbitt",
        logo: upbit,
        date: "Coming soon...",
        active: false,
      },
      {
        id: 7,
        name: "Выход на биржу Bybit",
        logo: bybit,
        date: "Coming soon...",
        active: false,
      },
      {
        id: 8,
        name: "Выход на биржу Coinbase",
        logo: c,
        date: "Coming soon...",
        active: false,
      },
    ],
    DEX: [
      {
        id: 1,
        name: "Выход на биржу STON.fi ",
        logo: ston,
        date: "23.01.2025",
        active: true,
      },
      {
        id: 2,
        name: "Выход на биржу DeDust",
        logo: dedust,
        date: "23.01.2025",
        active: true,
      },
      {
        id: 3,
        name: "Возможности Like & Love",
        logo: logo,
        date: "23.01.2025",
        active: true,
      },
      {
        id: 4,
        name: "Выход на биржу Storm Trade",
        logo: strom,
        date: "Coming soon...",
        active: false,
      },
      {
        id: 5,
        name: "Выход на биржу Tradoor",
        logo: bull,
        date: "Coming soon...",
        active: false,
      },
      {
        id: 6,
        name: "Выход на биржу Uniswap ",
        logo: unicorn,
        date: "Coming soon...",
        active: false,
      },
      {
        id: 7,
        name: "Выход на биржу Tonstakers",
        logo: tons,
        date: "Coming soon...",
        active: false,
      },
      {
        id: 8,
        name: "Выход на биржу Curve Finance",
        logo: curve,
        date: "Coming soon...",
        active: false,
      },
    ],
  };

  return (
    <div className="min-h-screen max-w-6xl m-auto mt-20">
      <div className=" mx-auto">
        <h1 className="text-6xl font-bold text-white mb-4 text-center">
          <span className="text-white">Партнерские</span>{" "}
          <span className="text-blue-500">Крипто-Биржи</span>
        </h1>

        <p className="text-gray-300 text-xl text-center mb-8">
          Наши надежные партнеры обеспечивают беспрепятственный ввод и вывод
          ваших активов, а также создают комфортные условия для вашего легкого и
          безопасного погружения в мир криптовалют.
        </p>

        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={() => setExchangeType("DEX")}
            className={`px-6 py-2 rounded-full ${
              exchangeType === "DEX"
                ? "bg-blue-500 text-white"
                : "bg-transparent text-gray-400"
            }`}
          >
            DEX
          </button>
          <button
            onClick={() => setExchangeType("CEX")}
            className={`px-6 py-2 rounded-full ${
              exchangeType === "CEX"
                ? "bg-blue-500 text-white"
                : "bg-transparent text-gray-400"
            }`}
          >
            CEX
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
              <div className="relative flex flex-col gap-2.5 bg-[#161C31] p-6 rounded-xl">
                <div className="text-sm text-center text-white mb-2">
                  {exchange.date}
                </div>
                <div className="text-md font-bold text-center text-white mb-4">
                  Выход на биржу {exchange.name}
                </div>
                <div className="flex justify-center mb-4">
                  <img src={exchange.logo} alt={exchange.name} />
                </div>
                <button
                  className={`w-full py-2 px-4 rounded-lg ${
                    exchange.active
                      ? "bg-white text-[#151D31] font-bold hover:bg-gray-100"
                      : "bg-gray-700 text-gray-400 cursor-not-allowed"
                  }`}
                  disabled={!exchange.active}
                >
                  ПЕРЕЙТИ
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExchangeInterface;
