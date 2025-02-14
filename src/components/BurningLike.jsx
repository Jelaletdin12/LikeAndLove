import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const BurningLikeCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

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

  const isActive = (index) => {
    return index === activeIndex || index === activeIndex + 1;
  };

  return (
    <div className="w-full pr-14 pl-14">
      <h2 className="text-[90px] text-center text-[#007BFF] font-black">
        Burning the LiKE <span className="text-white">token</span>
      </h2>
      <p className="text-center text-2xl text-white mt-2 mb-5">
        Every week, from 06:00 to 08:00 GMT, we carry out halving, burning
        125,000,000 LIKE tokens out of a total volume of 80 billion. The burning
        mechanism: the key to increasing the value of LIKE tokens. Regular token
        burning is at the core of our economic model. This process not only
        reduces the total supply of tokens, but also creates a shortage, which
        inevitably leads to higher prices. The rarer the token becomes, the
        higher its value on the market.
      </p>
      <div className="relative">
        <div className="flex items-center justify-center gap-4 overflow-hidden">
          <button
            onClick={handlePrev}
            className="absolute left-0 z-20 bg-gray-800 p-2 rounded-full text-blue-500 hover:bg-gray-700"
          >
            <ChevronLeft size={24} />
          </button>

          <div className="flex items-center justify-start gap-4 overflow-x-hidden px-12">
            {items.map((item, index) => (
              <div
                key={item.id}
                className="flex items-center transition-all duration-500"
                style={{
                  transform: `translateX(-${activeIndex * 260}px)`,
                }}
              >
                <div
                  className={`relative transition-all duration-300 ${
                    !isActive(index) ? "grayscale opacity-50" : ""
                  }`}
                >
                  <div className="bg-gray-900 text-blue-500 px-6 py-3 rounded-lg font-mono text-xl relative z-10 whitespace-nowrap">
                    {item.value}
                  </div>
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-blue-500 rounded-lg blur-md opacity-50" />
                  <div className="absolute inset-0 bg-purple-500 rounded-lg blur-sm opacity-30" />
                </div>

                {index < items.length - 1 && (
                  <div
                    className={`h-1 w-16 bg-blue-500 transition-all duration-300 ${
                      !isActive(index) ? "grayscale opacity-50" : ""
                    }`}
                  />
                )}
              </div>
            ))}
          </div>

          <button
            onClick={handleNext}
            className="absolute right-0 z-20 bg-gray-800 p-2 rounded-full text-blue-500 hover:bg-gray-700"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BurningLikeCarousel;
