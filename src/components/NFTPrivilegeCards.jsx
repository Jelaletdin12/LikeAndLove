import React, { useState, useEffect, useRef } from "react";
import silver from "../assets/silver.gif";
import gold from "../assets/gold.gif";
import platinum from "../assets/platinum.gif";
import NFTCardDetails from "./NFTPrivilegeCardsDetail";
import { useTranslation } from "react-i18next";
import { CircleArrowRight } from "lucide-react";

const NFTCard = ({
  type,
  isExpanded,
  isHovered,
  onMouseEnter,
  onMouseLeave,
  onClick,
  position,
}) => {
  const getTransformStyle = () => {
    switch (position) {
      case "prev":
        return "translate(-135%, -50%) scale(0.8)";
      case "next":
        return "translate(35%, -50%) scale(0.8)";
      case "current":
        return "translate(-50%, -50%) scale(1)";
      default:
        return "translate(-50%, -50%) scale(0.3)";
    }
  };

  const image = { silver, gold, platinum }[type];

  return (
    <div
      className={`absolute top-1/2 left-1/2 transition-all duration-700 ease-in-out ${
        position === "current" ? "z-10" : "z-0"
      } ${position === "hidden" ? "opacity-0" : "opacity-100"}`}
      style={{
        transform: getTransformStyle(),
        filter:
          position === "prev" || position === "next"
            ? "brightness(85%)"
            : "none",
      }}
    >
      <div
        className={`rounded-lg relative cursor-pointer`}
        style={{
          background:
            (isExpanded || isHovered) && position === "current"
              ? `linear-gradient(#171D31, #171D31) padding-box, 
                 linear-gradient(30deg, #007AFF, #F30EFF) border-box`
              : "#171D31",
          border: (isHovered || isExpanded) && position === "current" 
            ? "4px solid transparent" 
            : "none",
        }}
        onMouseEnter={() => position === "current" && onMouseEnter()}
        onMouseLeave={onMouseLeave}
        onClick={onClick}
      >
        {(isHovered || isExpanded) && position === "current" && (
          <div className="flex justify-center text-white px-3 py-1 text-md">
            {type.charAt(0).toUpperCase() + type.slice(1)} Card
          </div>
        )}
        <div className="flex justify-center m-2">
          <img src={image} alt={type} className="w-[300px] max-w-[304px]" />
        </div>
        {isExpanded && position === "current" && <NFTCardDetails type={type} />}
      </div>
    </div>
  );
};

const NFTPrivilegeCards = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [expandedCard, setExpandedCard] = useState(null);
  const cardTypes = ["silver", "gold", "platinum"];
  const intervalRef = useRef(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const isDragging = useRef(false);
  const { t, i18n } = useTranslation();

  const getCardPosition = (index) => {
    if (index === currentIndex) return "current";
    if (index === (currentIndex + 1) % cardTypes.length) return "next";
    if (index === (currentIndex - 1 + cardTypes.length) % cardTypes.length)
      return "prev";
    return "hidden";
  };

  const nextCard = () => {
    if (expandedCard !== null) {
      setExpandedCard(null);
    }
    setCurrentIndex((prev) => (prev + 1) % cardTypes.length);
  };

  const prevCard = () => {
    if (expandedCard !== null) {
      setExpandedCard(null);
    }
    setCurrentIndex((prev) => (prev - 1 + cardTypes.length) % cardTypes.length);
  };

  const handleCardClick = (index) => {
    const position = getCardPosition(index);
    if (position === "current") {
      // Eğer kart zaten merkezde ise, sadece açılıp kapanma işlemi yap
      setExpandedCard(expandedCard === index ? null : index);
    } else {
      // Eğer kart merkezde değilse, önce merkeze getir
      setExpandedCard(null);
      setCurrentIndex(index);
      // Kısa bir süre sonra kartı aç
      setTimeout(() => {
        setExpandedCard(index);
      }, 700); // transition süresi kadar bekle
    }
  };

  useEffect(() => {
    if (expandedCard !== null) {
      clearInterval(intervalRef.current);
    } else {
      intervalRef.current = setInterval(() => nextCard(), 3000);
    }
    return () => clearInterval(intervalRef.current);
  }, [expandedCard, currentIndex]);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const deltaX = touchEndX.current - touchStartX.current;
    if (Math.abs(deltaX) > 50) {
      if (deltaX > 0) {
        prevCard();
      } else {
        nextCard();
      }
    }
  };

  const handleMouseDown = (e) => {
    isDragging.current = true;
    touchStartX.current = e.clientX;
    e.preventDefault();
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current) return;
    touchEndX.current = e.clientX;
  };

  const handleMouseUp = (e) => {
    if (!isDragging.current) return;
    isDragging.current = false;
    const deltaX = e.clientX - touchStartX.current;

    if (Math.abs(deltaX) > 50) {
      if (deltaX > 0) {
        prevCard();
      } else {
        nextCard();
      }
    }
  };

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  const containerHeight = expandedCard !== null ? "h-[650px]" : "h-[250px]";

  return (
    <div
      className="flex flex-col items-center space-y-8 p-4"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      style={{ userSelect: "none" }}
    >
      <h1 className="text-4xl font-bold text-[#007BFF] mt-12 mb-12">
        <span className="text-white">
          {" "}
          {t("NFTPrivilegeCards.Acollectionof")}
        </span>{" "}
        {t("NFTPrivilegeCards.NFTprivilegecards")}
      </h1>
      <p className="text-white text-center max-w-2xl">
        {t(
          "NFTPrivilegeCards.TheuniqueprivilegesofthecardsprovideadvantagessuchasreducedfeesforsendingandconvertingtokenswithinourplatformaswellasexclusiveprivilegesforPlatinumCardholders"
        )}
      </p>

      <div
        className={`relative w-full ${containerHeight} overflow-hidden transition-all duration-500 m-0`}
      >
        {cardTypes.map((type, index) => (
          <NFTCard
            key={type}
            type={type}
            isExpanded={expandedCard === index}
            isHovered={hoveredCard === type}
            onMouseEnter={() => setHoveredCard(type)}
            onMouseLeave={() => setHoveredCard(null)}
            onClick={() => handleCardClick(index)}
            position={getCardPosition(index)}
          />
        ))}
      </div>
      <div className="text-center mt-2 flex justify-center">
        <a
          style={{
            background: "linear-gradient(to right, #007AFF, #F30EFF)",
          }}
          href="https://getgems.io/collection/EQB1v1TKh_7y1hSgbQhD4K5vUg0gu76o4E6d9WD3148YndjK"
          className="w-auto flex text-white font-bold py-3 px-8 rounded-[8px] gap-4 items-center hover:opacity-80 uppercase"
        >
          {t("NFTCollection.BUYNFT")}
          <CircleArrowRight />
        </a>
      </div>
    </div>
  );
};

export default NFTPrivilegeCards;