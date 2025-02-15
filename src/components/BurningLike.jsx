import React, { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const BurningLikeCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const startX = useRef(null);
  const currentX = useRef(null);

  const items = [
    { id: 1, value: "-125 000 000" },
    { id: 2, value: "-125 000 000" },
    { id: 3, value: "-125 000 000" },
    { id: 4, value: "-125 000 000" },
    { id: 5, value: "-125 000 000" },
    { id: 6, value: "-125 000 000" },
    { id: 7, value: "-125 000 000" },
  ];

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % (items.length - 1));
  };

  const handlePrev = () => {
    setActiveIndex(
      (prev) => (prev - 1 + (items.length - 1)) % (items.length - 1)
    );
  };

  // Mouse Events
  const handleMouseDown = (e) => {
    setIsDragging(true);
    startX.current = e.clientX;
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    currentX.current = e.clientX;
  };

  const handleMouseUp = () => {
    if (!isDragging) return;

    const diff = startX.current - currentX.current;
    const minSwipeDistance = 50;

    if (Math.abs(diff) > minSwipeDistance) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }

    setIsDragging(false);
    startX.current = null;
    currentX.current = null;
  };

  // Touch Events
  const handleTouchStart = (e) => {
    startX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e) => {
    currentX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!startX.current || !currentX.current) return;

    const diff = startX.current - currentX.current;
    const minSwipeDistance = 50;

    if (Math.abs(diff) > minSwipeDistance) {
      if (diff > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }

    startX.current = null;
    currentX.current = null;
  };

  const isActive = (index) => {
    return index === activeIndex || index === activeIndex + 1;
  };

  return (
    <>
      <div className="max-w-6xl m-auto">
        <h2 className="text-4xl text-center text-[#007BFF] font-black">
          Burning the LiKE <span className="text-white">token</span>
        </h2>
        <p className="text-center text-l text-white mt-2 mb-5">
          Every week, from 06:00 to 08:00 GMT, we carry out halving, burning
          125,000,000 LIKE tokens out of a total volume of 80 billion. The
          burning mechanism: the key to increasing the value of LIKE tokens.
          Regular token burning is at the core of our economic model. This
          process not only reduces the total supply of tokens, but also creates
          a shortage, which inevitably leads to higher prices. The rarer the
          token becomes, the higher its value on the market.
        </p>
      </div>
      <div className="relative ml-15">
        <div className="flex items-center justify-center gap-4 overflow-hidden">
          {/* <button
            onClick={handlePrev}
            className="absolute left-0 z-20 bg-gray-800 p-2 rounded-full text-blue-500 hover:bg-gray-700"
          >
            <ChevronLeft size={24} />
          </button> */}

          <div
            className={`flex items-center justify-start gap-4 overflow-x-hidden px-12 h-[100px] touch-pan-y select-none cursor-grab ${
              isDragging ? "cursor-grabbing" : ""
            }`}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {items.map((item, index) => (
              <div
                key={item.id}
                className="flex items-center gap-4 transition-transform duration-300"
                style={{
                  transform: `translateX(-${activeIndex * 260}px)`,
                }}
              >
                <div
                  className={`relative rounded-[8px] transition-all duration-300 shadow-[0_0px_15px_rgba(0,122,255,1)] ${
                    !isActive(index) ? "grayscale opacity-50" : ""
                  }`}
                >
                  <div className="relative p-[3px] rounded-[8px]">
                    <div
                      className="absolute inset-0 rounded-[8px] pointer-events-none"
                      style={{
                        background: "linear-gradient(10deg, #007AFF, #F30EFF)",
                      }}
                    />
                    <div className="bg-[#161C31] text-blue-500 px-6 py-3 rounded-[8px] text-xl relative whitespace-nowrap">
                      {item.value}
                    </div>
                  </div>
                </div>

                {index < items.length - 1 && (
                  <div
                    className={`h-1.5 w-14 bg-blue-500 rounded-4xl ${
                      !isActive(index) ? "grayscale opacity-50" : ""
                    }`}
                  />
                )}
              </div>
            ))}
          </div>

          {/* <button
            onClick={handleNext}
            className="absolute right-0 z-20 bg-gray-800 p-2 rounded-full text-blue-500 hover:bg-gray-700"
          >
            <ChevronRight size={24} />
          </button> */}
        </div>
      </div>
    </>
  );
};

export default BurningLikeCarousel;
