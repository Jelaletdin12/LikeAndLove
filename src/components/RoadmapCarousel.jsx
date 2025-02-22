import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useTranslation } from "react-i18next";
import set from "../assets/set.png";
import tel from "../assets/tel.png";
import road1 from "../assets/road1.png";
import road2 from "../assets/road2.png";
import road3 from "../assets/road3.png";
import road4 from "../assets/road4.png";
import road5 from "../assets/road5.png";
import road6 from "../assets/road6.png";
import road7 from "../assets/road7.png";

const RoadmapCarousel = () => {
  const { t, i18n } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);

  const roadmapData = [
    {
      date: "23.01.2025",
      title: t("RoadmapCarousel.ApplicationDevelopment"),
      icon: tel,
    },
    {
      date: "23.02.2025",
      title: t("RoadmapCarousel.TelegramMiniAppLaunch"),
      icon: set,
    },
    {
      date: "01.03.2025",
      title: t("RoadmapCarousel.EnteringthestockexchangeSTONfi"),
      icon: road1,
    },
    {
      date: "25.02.2025",
      title: t("RoadmapCarousel.ListingoftheLiKEtoken"),
      icon: road2,
    },
    {
      date: "Q3 2025",
      title: t("RoadmapCarousel.Partnershipwithotherprojects"),
      icon: road3,
    },
    { date: "Q4 2025", title: t("RoadmapCarousel.card6"), icon: road4 },
    { date: "Q4 2025", title: t("RoadmapCarousel.card7"), icon: road5 },
    { date: "Q1 2026", title: t("RoadmapCarousel.card8"), icon: road6 },
    { date: "19.01.2026", title: t("RoadmapCarousel.card9"), icon: road7 },
  ];

  const isCardActive = (index) => {
    return index === 0 || index === 1;
  };

  return (
    <>
      <div className="max-w-6xl m-auto mt-20 p-4">
        <h2 className="text-3xl md:text-6xl text-center text-[#007BFF] font-black ">
          {t("RoadmapCarousel.RoadMap")}{" "}
          <span className="text-white">
            {" "}
            {t("RoadmapCarousel.oftheProject")}
          </span>
        </h2>
        <p className="text-center text-l md:text-xl text-white mt-2">
          {t(
            "RoadmapCarousel.OurprojectroadmapclearlyreflectsstrategicdevelopmentplansincludingkeymilestonesandgoalsWestriveforfulltransparencybyprovidinguserswithaccesstoinformationaboutupcomingstepsandinitiatives"
          )}
        </p>
      </div>
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
        loop={true}
        mousewheel={true}
        modules={[Pagination, Navigation, Mousewheel]}
        className="roadMap"
        breakpoints={{
          320: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 5,
          },
        }}
        onSlideChange={(swiper) => {
          setCurrentIndex(swiper.realIndex);
        }}
      >
        {roadmapData.map((item, index) => (
          <SwiperSlide key={index}>
            <div
              className={`relative p-[3px] rounded-xl overflow-hidden ${
                isCardActive(index)
                  ? " shadow-[0_0px_25px_rgba(0,122,255,1)]"
                  : " "
              }`}
              style={{
                filter: !isCardActive(index) ? "contrast(50%) brightness(70%)" : "none",
              }}
            >
              <div
                className="absolute inset-0 rounded-xl pointer-events-none "
                style={{
                  background: isCardActive(index)
                    ? "linear-gradient(45deg, #007AFF, #F30EFF)"
                    : "linear-gradient(45deg, #4B5563, #9CA3AF)",
                }}
              />
              <div className="relative justify-between w-full p-2 md:p-6  rounded-xl  bg-[#161C31] text-white flex flex-col gap-6 md:h-[250px] min-h-[156px] items-center">
                <div className="flex flex-col items-center">
                  <p className="text-sm text-center font-semibold">
                    {item.date}
                  </p>
                  <h3 className="text-sm md:text-lg font-bold text-center mt-2">
                    {item.title}
                  </h3>
                </div>
                <img
                  src={item.icon}
                  className="w-12 h-12 md:w-24 md:h-24 "
                  alt={item.title}
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default RoadmapCarousel;
