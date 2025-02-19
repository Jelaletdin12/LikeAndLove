import React, { useState } from "react";
import silver from "../assets/silver.png";
import gold from "../assets/gold.png";
import platinum from "../assets/platinium.png";
import tick from "../assets/tick.svg";

const NFTCard = ({
  type,
  isExpanded,
  isHovered,
  onMouseEnter,
  onMouseLeave,
  onClick,
}) => {
  // Resimleri type'a göre seç
  const image = {
    silver: silver,
    gold: gold,
    platinum: platinum,
  }[type];

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
      className={`rounded-lg  relative cursor-pointer h-max max-w-6xl min-h-[250px]
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
  const [expandedCard, setExpandedCard] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);
  const cardTypes = ["silver", "gold", "platinum"];

  const handleCardClick = (clickedType) => {
    if (expandedCard === clickedType) {
      setExpandedCard(null);
    } else {
      setExpandedCard(clickedType);
    }
  };

  return (
    <div className="flex flex-col items-center space-y-8 p-8">
      <h1 className="text-4xl font-bold text-blue-600 mb-12">
        NFT privilege card
      </h1>
      <p className="text-white">The unique privileges of the cards provide advantages such as reduced fees for sending and converting tokens within our platform, as well as exclusive privileges for Platinum Card holders.</p>
      <div className=" flex justify-evenly w-full">
        {cardTypes.map((type) => (
          <NFTCard
            key={type}
            type={type}
            isExpanded={expandedCard === type}
            isHovered={hoveredCard === type}
            onMouseEnter={() => setHoveredCard(type)}
            onMouseLeave={() => setHoveredCard(null)}
            onClick={() => handleCardClick(type)}
          />
        ))}
      </div>
    </div>
  );
};

export default NFTPrivilegeCards;

// skgblegnsg asaky claude dan cykan


import React, { useState } from 'react';

const NFTCard = ({
  type,
  isExpanded,
  isHovered,
  onMouseEnter,
  onMouseLeave,
  onClick,
  position
}) => {
  // Pozisyona göre transform değerlerini belirle
  const getTransformStyle = () => {
    switch (position) {
      case 'prev':
        return 'translate(-135%, -50%) scale(0.8)';
      case 'next':
        return 'translate(35%, -50%) scale(0.8)';
      case 'current':
        return 'translate(-50%, -50%) scale(1)';
      default:
        return 'translate(-50%, -50%) scale(0.3)';
    }
  };

  return (
    <div
      className={`
        absolute top-1/2 left-1/2 
        transition-all duration-1000 ease-in-out
        ${position === 'current' ? 'z-10' : 'z-0'}
        ${position === 'hidden' ? 'opacity-0' : 'opacity-100'}
      `}
      style={{
        transform: getTransformStyle(),
        filter: position === 'prev' || position === 'next' ? 'brightness(85%)' : 'none'
      }}
    >
      <div
        className={`
          rounded-lg relative cursor-pointer 
          min-h-[250px] w-[450px]
          ${isExpanded ? "bg-[#171D31]" : ""}
        `}
        style={{
          background: isExpanded || isHovered
            ? `linear-gradient(#171D31, #171D31) padding-box, 
               linear-gradient(30deg, #007AFF, #F30EFF) border-box`
            : "#171D31",
          border: isHovered || isExpanded ? "4px solid transparent" : "none",
        }}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={onClick}
      >
        {(isHovered || isExpanded) && (
          <div className="flex justify-center text-white px-3 py-1 text-md">
            {type.charAt(0).toUpperCase() + type.slice(1)} Card
          </div>
        )}
        <div className="flex justify-center m-2.5 mx-5">
          <img 
            src={`/api/placeholder/300/200`} 
            alt={type} 
            className="w-full" 
          />
        </div>
      </div>
    </div>
  );
};

const NFTPrivilegeCards = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);
  const cardTypes = ["silver", "gold", "platinum"];

  const getCardPosition = (index) => {
    if (index === currentIndex) return 'current';
    if (index === (currentIndex + 1) % cardTypes.length) return 'next';
    if (index === (currentIndex - 1 + cardTypes.length) % cardTypes.length) return 'prev';
    return 'hidden';
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % cardTypes.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + cardTypes.length) % cardTypes.length);
  };

  return (
    <div className="flex flex-col items-center space-y-8 p-8">
      <h1 className="text-4xl font-bold text-blue-600 mb-12">
        NFT Privilege Cards
      </h1>
      <p className="text-white text-center max-w-2xl">
        The unique privileges of the cards provide advantages such as reduced fees 
        for sending and converting tokens within our platform, as well as exclusive 
        privileges for Platinum Card holders.
      </p>
      
      <div className="relative w-full h-[400px] overflow-hidden">
        {cardTypes.map((type, index) => (
          <NFTCard
            key={type}
            type={type}
            isExpanded={currentIndex === index}
            isHovered={hoveredCard === type}
            onMouseEnter={() => setHoveredCard(type)}
            onMouseLeave={() => setHoveredCard(null)}
            onClick={() => setCurrentIndex(index)}
            position={getCardPosition(index)}
          />
        ))}

        <button 
          onClick={handlePrev}
          className="absolute left-8 top-1/2 -translate-y-1/2 z-20 
                     text-white bg-blue-600 p-2 rounded-full"
        >
          ←
        </button>
        <button 
          onClick={handleNext}
          className="absolute right-8 top-1/2 -translate-y-1/2 z-20 
                     text-white bg-blue-600 p-2 rounded-full"
        >
          →
        </button>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {cardTypes.map((_, index) => (
            <button
              key={index}
              className={`w-4 h-4 rounded-full border border-blue-600
                ${currentIndex === index ? 'bg-blue-600' : 'bg-transparent'}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NFTPrivilegeCards;