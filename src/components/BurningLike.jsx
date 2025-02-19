import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { useTranslation } from "react-i18next";

const BurningLikeCarousel = () => {
  // Track active slides for styling
  const [activeIndex, setActiveIndex] = useState(0);
  const { t, i18n } = useTranslation();
  const items = [
    { id: 1, value: "-125 000 000" },
    { id: 2, value: "-125 000 000" },
    { id: 3, value: "-125 000 000" },
    { id: 4, value: "-125 000 000" },
    { id: 5, value: "-125 000 000" },
    { id: 6, value: "-125 000 000" },
    { id: 7, value: "-125 000 000" },
  ];

  // Helper function to check if slide is active (current or next)
  const isActive = (index) => {
    return index === activeIndex || index === (activeIndex + 1) % items.length;
  };

  return (
    <>
      <div className="max-w-6xl m-auto mt-20">
        <h2 className="text-6xl text-center text-[#007BFF] font-black">
          {t("BurningLike.BurningtheLiKE")}{" "}
          <span className="text-white"> {t("BurningLike.token")}</span>
        </h2>
        <p className="text-center text-xl text-white mt-2 mb-5">
          {t(
            "BurningLike.Everyweekfrom0600to0800GMTwecarryouthalvingburning125000000LIKEtokensoutofatotalvolumeof80billionTheburningmechanismthekeytoincreasingthevalueofLIKEtokensRegulartokenburningisatthecoreofoureconomicmodelThisprocessnotonlyreducesthetotalsupplyoftokensbutalsocreatesashortagewhichinevitablyleadstohigherpricesTherarerthetokenbecomesthehigheitsvalueonthemarket"
          )}
        </p>
      </div>

      <div className="relative ml-15">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={0}
          slidesPerView={5}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          grabCursor={true}
          style={{ height: "100px", paddingTop: "25px", paddingLeft: "20px" }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        >
          {items.map((item, index) => (
            <SwiperSlide key={item.id}>
              <div className="flex items-center gap-4">
                {/* Added conditional styling based on active state */}
                <div
                  className={`relative rounded-[8px] transition-all duration-300 shadow-[0_0px_15px_rgba(0,122,255,1)] 
                    ${!isActive(index) ? "grayscale opacity-50" : ""}`}
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

                {/* Connector line with conditional styling */}

                <div
                  className={`h-1.5 w-14 bg-blue-500 rounded-4xl
                      ${!isActive(index) ? "grayscale opacity-50" : ""}`}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default BurningLikeCarousel;
