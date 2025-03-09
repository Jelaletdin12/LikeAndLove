import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { useTranslation } from "react-i18next";
import { CircleArrowRight } from "lucide-react";

const BurningLikeCarousel = () => {
  // Track active slides for styling
  const [activeIndex, setActiveIndex] = useState(0);
  const { t } = useTranslation();
  const items = [
    { id: 1, value: "-125 000 000", date: "07.04.2025" },
    { id: 2, value: "-125 000 000", date: "14.04.2025" },
    { id: 3, value: "-125 000 000", date: "21.04.2025" },
    { id: 4, value: "-125 000 000", date: "28.04.2025" },
    { id: 5, value: "-125 000 000", date: "05.05.2025" },
    { id: 6, value: "-125 000 000", date: "07.04.2025" },
    { id: 7, value: "-125 000 000", date: "14.04.2025" }
  ];

  // Helper function to check if slide is active (current or next)
  const isActive = (index) => {
    return index === activeIndex || index === (activeIndex + 1) % items.length;
  };

  return (
    <>
      <div className="max-w-6xl m-auto mt-10 p-4">
        <h2 className="text-3xl md:text-6xl text-center text-[#007BFF] font-black">
          {t("BurningLike.BurningtheLiKE")}{" "}
          <span className="text-white"> {t("BurningLike.token")}</span>
        </h2>
        <p className="text-center text-lg md:text-xl text-white mt-2 mb-5">
          {t(
            "BurningLike.Everyweekfrom0600to0800GMTwecarryouthalvingburning125000000LIKEtokensoutofatotalvolumeof80billionTheburningmechanismthekeytoincreasingthevalueofLIKEtokensRegulartokenburningisatthecoreofoureconomicmodelThisprocessnotonlyreducesthetotalsupplyoftokensbutalsocreatesashortagewhichinevitablyleadstohigherpricesTherarerthetokenbecomesthehigheitsvalueonthemarket"
          )}
        </p>
      </div>

      <div className="relative m-0 md:ml-15">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          grabCursor={true}
          style={{ height: "120px", paddingTop: "25px", paddingLeft: "20px" }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          breakpoints={{
            320: {
              slidesPerView: 2.5,
              spaceBetween: 5,
            },
            768: {
              slidesPerView: 4,
            },
            1024: {
              slidesPerView: 5,
            },
          }}
        >
          {items.map((item, index) => (
            <SwiperSlide key={item.id}>
              <div className="flex items-center gap-2 justify-around ">
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

                    <div className="bg-[#161C31] px-2 md:px-6 py-1 md:py-2 rounded-[8px]  flex flex-col justify-center items-center md:text-2xl relative whitespace-nowrap">
                      <span className="text-sm md:text-lg text-white m-0 md:mb-1.5">
                        {item.date}
                      </span>
                      <span className="text-[#007AFF] text-sm md:text-lg  ">
                        {item.value}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Connector line with conditional styling */}

                <div
                  className={`h-1 w-8 md:h-1.5 md:w-14 bg-[#007AFF] rounded-4xl
                      ${!isActive(index) ? "grayscale opacity-50" : ""}`}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="max-w-6xl mx-auto mt-12 flex justify-center">
        <div className="text-center mt-8 flex justify-center">
          <a
            style={{
              background: "linear-gradient(to right, #007AFF, #F30EFF)",
            }}
            href="https://tonviewer.com/EQCtYVr3K8WIhuuDzYUlGBJBYlPtq9EaXcdXbe0nGfV0ImAM"
            className=" w-auto  flex  text-white font-bold py-3 px-8 rounded-[8px] gap-4 items-center hover:opacity-80 uppercase"
          >
          {t("BurningLike.btn")}
            <CircleArrowRight />
          </a>
        </div>
      </div>
    </>
  );
};

export default BurningLikeCarousel;
