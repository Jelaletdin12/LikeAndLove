import React, { useState, useEffect } from "react";
import silver from "../assets/silver.png";
import gold from "../assets/gold.png";
import platinum from "../assets/platinium.png";
import tick from "../assets/tick.svg";
import { useTranslation } from "react-i18next";
const NFTCard = ({
  type,
  isExpanded,
  isHovered,
  onMouseEnter,
  onMouseLeave,
  onClick,
  position,
}) => {
  // Resimleri type'a göre seç
  const image = {
    silver: silver,
    gold: gold,
    platinum: platinum,
  }[type];

  const positionClasses = {
    left: "absolute left-0 transform -translate-x-1/4 scale-75 opacity-80",
    center: "absolute left-1/2 transform -translate-x-1/2 scale-100 z-10",
    right: "absolute right-0 transform translate-x-1/4 scale-75 opacity-80",
  }[position];

  // Silver
  const details =
    isExpanded &&
    {
      silver: (
        <div className="mt-4 space-y-2 p-2.5">
          <div className="flex flex-col gap-4">
            <div className="flex items-center space-x-2">
              <div className="bg-[#34C759] rounded-full w-[28px] h-[28px] flex justify-center items-center">
                <img src={tick} alt="" />
              </div>
              <div>
                <span className="text-[14px] font-[600] text-white">
                  Комиссия за конвертацию
                </span>
                <div className="flex">
                  <span className="text-[#A2ACB0] text-[12px] font-bold mr-1">
                    0.5 %
                  </span>
                  <span className="text-[#A2ACB0] text-[12px]">от суммы</span>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="bg-[#34C759] rounded-full w-[28px] h-[28px] flex justify-center items-center">
                <img src={tick} alt="" />
              </div>
              <div>
                <span className="text-[14px] font-[600] text-white">
                  Комиссия за отправку USDT
                </span>
                <div className="flex">
                  <span className="text-[#A2ACB0] text-[12px] font-bold mr-1">
                    0.00999 USDT
                  </span>
                  <span className="text-[#A2ACB0] text-[12px]">
                    независимо от суммы
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="bg-[#34C759] rounded-full w-[28px] h-[28px] flex justify-center items-center">
                <img src={tick} alt="" />
              </div>
              <div>
                <span className="text-[14px] font-[600] text-white">
                  Комиссия за отправку TON
                </span>
                <div className="flex">
                  <span className="text-[#A2ACB0] text-[12px] font-bold mr-1">
                    0,0019 TON
                  </span>
                  <span className="text-[#A2ACB0] text-[12px]">
                    независимо от суммы
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="bg-[#34C759] rounded-full w-[28px] h-[28px] flex justify-center items-center">
                <img src={tick} alt="" />
              </div>
              <div>
                <span className="text-[14px] font-[600] text-white">
                  Комиссия за отправку Like
                </span>
                <div className="flex">
                  <span className="text-[#A2ACB0] text-[12px]">
                    Нет комиссии за Like !
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="bg-[#34C759] rounded-full w-[28px] h-[28px] flex justify-center items-center">
                <img src={tick} alt="" />
              </div>
              <div>
                <span className="text-[14px] font-[600] text-white">
                  Комиссия за отправку Love
                </span>
                <div className="flex">
                  <span className="text-[#A2ACB0] text-[12px]">
                    Нет комиссии за Like !
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="bg-[#34C759] rounded-full w-[28px] h-[28px] flex justify-center items-center">
                <img src={tick} alt="" />
              </div>
              <div>
                <span className="text-[14px] font-[600] text-white">
                  Особые привелегии в Telegram
                </span>
              </div>
            </div>
          </div>
        </div>
      ),
      gold: (
        <div className="mt-4 space-y-2 p-2.5">
          <div className="flex flex-col gap-4">
            <div className="flex items-center space-x-2">
              <div className="bg-[#34C759] rounded-full w-[28px] h-[28px] flex justify-center items-center">
                <img src={tick} alt="" />
              </div>
              <div>
                <span className="text-[14px] font-[600] text-white">
                  Комиссия за конвертацию hh
                </span>
                <div className="flex">
                  <span className="text-[#A2ACB0] text-[12px] font-bold mr-1">
                    0.5 %
                  </span>
                  <span className="text-[#A2ACB0] text-[12px]">от суммы</span>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="bg-[#34C759] rounded-full w-[28px] h-[28px] flex justify-center items-center">
                <img src={tick} alt="" />
              </div>
              <div>
                <span className="text-[14px] font-[600] text-white">
                  Комиссия за отправку USDT
                </span>
                <div className="flex">
                  <span className="text-[#A2ACB0] text-[12px] font-bold mr-1">
                    0.00999 USDT
                  </span>
                  <span className="text-[#A2ACB0] text-[12px]">
                    независимо от суммы
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="bg-[#34C759] rounded-full w-[28px] h-[28px] flex justify-center items-center">
                <img src={tick} alt="" />
              </div>
              <div>
                <span className="text-[14px] font-[600] text-white">
                  Комиссия за отправку TON
                </span>
                <div className="flex">
                  <span className="text-[#A2ACB0] text-[12px] font-bold mr-1">
                    0,0019 TON
                  </span>
                  <span className="text-[#A2ACB0] text-[12px]">
                    независимо от суммы
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="bg-[#34C759] rounded-full w-[28px] h-[28px] flex justify-center items-center">
                <img src={tick} alt="" />
              </div>
              <div>
                <span className="text-[14px] font-[600] text-white">
                  Комиссия за отправку Like
                </span>
                <div className="flex">
                  <span className="text-[#A2ACB0] text-[12px]">
                    Нет комиссии за Like !
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="bg-[#34C759] rounded-full w-[28px] h-[28px] flex justify-center items-center">
                <img src={tick} alt="" />
              </div>
              <div>
                <span className="text-[14px] font-[600] text-white">
                  Комиссия за отправку Love
                </span>
                <div className="flex">
                  <span className="text-[#A2ACB0] text-[12px]">
                    Нет комиссии за Like !
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="bg-[#34C759] rounded-full w-[28px] h-[28px] flex justify-center items-center">
                <img src={tick} alt="" />
              </div>
              <div>
                <span className="text-[14px] font-[600] text-white">
                  Особые привелегии в Telegram
                </span>
              </div>
            </div>
          </div>
        </div>
      ),
      platinum: (
        <div className="mt-4 space-y-2 p-2.5">
          <div className="flex flex-col gap-4">
            <div className="flex items-center space-x-2">
              <div className="bg-[#34C759] rounded-full w-[28px] h-[28px] flex justify-center items-center">
                <img src={tick} alt="" />
              </div>
              <div>
                <span className="text-[14px] font-[600] text-white">
                  Комиссия за конвертацию
                </span>
                <div className="flex">
                  <span className="text-[#A2ACB0] text-[12px] font-bold mr-1">
                    0.5 %
                  </span>
                  <span className="text-[#A2ACB0] text-[12px]">от суммы</span>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="bg-[#34C759] rounded-full w-[28px] h-[28px] flex justify-center items-center">
                <img src={tick} alt="" />
              </div>
              <div>
                <span className="text-[14px] font-[600] text-white">
                  Комиссия за отправку USDT
                </span>
                <div className="flex">
                  <span className="text-[#A2ACB0] text-[12px] font-bold mr-1">
                    0.00999 USDT
                  </span>
                  <span className="text-[#A2ACB0] text-[12px]">
                    независимо от суммы
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="bg-[#34C759] rounded-full w-[28px] h-[28px] flex justify-center items-center">
                <img src={tick} alt="" />
              </div>
              <div>
                <span className="text-[14px] font-[600] text-white">
                  Комиссия за отправку TON
                </span>
                <div className="flex">
                  <span className="text-[#A2ACB0] text-[12px] font-bold mr-1">
                    0,0019 TON
                  </span>
                  <span className="text-[#A2ACB0] text-[12px]">
                    независимо от суммы
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="bg-[#34C759] rounded-full w-[28px] h-[28px] flex justify-center items-center">
                <img src={tick} alt="" />
              </div>
              <div>
                <span className="text-[14px] font-[600] text-white">
                  Комиссия за отправку Like
                </span>
                <div className="flex">
                  <span className="text-[#A2ACB0] text-[12px]">
                    Нет комиссии за Like !
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="bg-[#34C759] rounded-full w-[28px] h-[28px] flex justify-center items-center">
                <img src={tick} alt="" />
              </div>
              <div>
                <span className="text-[14px] font-[600] text-white">
                  Комиссия за отправку Love
                </span>
                <div className="flex">
                  <span className="text-[#A2ACB0] text-[12px]">
                    Нет комиссии за Like !
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="bg-[#34C759] rounded-full w-[28px] h-[28px] flex justify-center items-center">
                <img src={tick} alt="" />
              </div>
              <div>
                <span className="text-[14px] font-[600] text-white">
                  Особые привелегии в Telegram
                </span>
              </div>
            </div>
          </div>
        </div>
      ),
    }[type];

  return (
    <div
      className={`rounded-lg  cursor-pointer  w-64  transition-all duration-900 ease-in-out ${positionClasses}
        ${isExpanded ? "bg-[#171D31] border-4 border-transparent" : ""}
        ${isHovered && !isExpanded ? "border-4 border-transparent" : ""}
      `}
      style={{
        background: isExpanded
          ? `gradient-border border-box`
          : isHovered
          ? `linear-gradient(#171D31, #171D31) padding-box, linear-gradient(30deg, #007AFF, #F30EFF) border-box`
          : "none",
        border: isHovered || isExpanded ? "4px solid transparent" : "none",
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={onClick}
    >
      {(isHovered || isExpanded) && (
        <div className="  flex justify-center text-white px-3 py-1  text-md ">
          {type === "silver" && "Silver Card"}
          {type === "gold" && "Gold Card"}
          {type === "platinum" && "Platinum Card"}
        </div>
      )}
      <div className="flex justify-center m-2.5 mr-5 ml-5 ]">
        <img src={image} alt={type} className="" />
      </div>
      {isExpanded && details}
    </div>
  );
};

const NFTPrivilegeCards = () => {
  const { t, i18n } = useTranslation();
  const [expandedCard, setExpandedCard] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);
  const cardTypes = ["silver", "gold", "platinum"];
  const [isPaused, setIsPaused] = useState(false);
  const [positions, setPositions] = useState({
    silver: "left",
    gold: "center",
    platinum: "right",
  });
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setPositions((prevPositions) => {
        const newPositions = {};
        Object.keys(prevPositions).forEach((type) => {
          if (prevPositions[type] === "left") {
            newPositions[type] = "right";
          } else if (prevPositions[type] === "center") {
            newPositions[type] = "left";
          } else if (prevPositions[type] === "right") {
            newPositions[type] = "center";
          }
        });
        return newPositions;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const handleCardClick = (clickedType) => {
    if (expandedCard === clickedType) {
      setExpandedCard(null);
      setIsPaused(false);
    } else {
      setExpandedCard(clickedType);
      setIsPaused(true);
    }
  };
  const handleCardHover = (type) => {
    setHoveredCard(type);
    setIsPaused(true);
  };

  const handleCardLeave = () => {
    setHoveredCard(null);
    if (!expandedCard) {
      setIsPaused(false);
    }
  };
  const expandedHeight = expandedCard ? "h-[640px]" : "h-[200px]";

  return (
    <div className="flex flex-col items-center space-y-8 p-8">
      <h1 className="text-4xl font-bold text-blue-600 mb-12">
        <span className="text-white">
          {t("NFTPrivilegeCards.Acollectionof")}
        </span>{" "}
        {t("NFTPrivilegeCards.NFTprivilegecards")}
      </h1>
      <p className="text-white">
        {t(
          "NFTPrivilegeCards.TheuniqueprivilegesofthecardsprovideadvantagessuchasreducedfeesforsendingandconvertingtokenswithinourplatformaswellasexclusiveprivilegesforPlatinumCardholders"
        )}
      </p>

      <div className="flex justify-center items-center w-full  relative">
        <div
          className={`relative w-full max-w-4xl flex justify-center ${expandedHeight} transition-all duration-500`}
        >
          {cardTypes.map((type) => (
            <NFTCard
              key={type}
              type={type}
              isExpanded={expandedCard === type}
              isHovered={hoveredCard === type}
              // onMouseEnter={() => setHoveredCard(type)}
              // onMouseLeave={() => setHoveredCard(null)}
              onClick={() => handleCardClick(type)}
              onMouseEnter={() => handleCardHover(type)}
              onMouseLeave={handleCardLeave}
              position={positions[type]}
            />
          ))}
        </div>
      </div>
      <div className="mt-8">{/* Your additional content here */}</div>
    </div>
  );
};

export default NFTPrivilegeCards;
