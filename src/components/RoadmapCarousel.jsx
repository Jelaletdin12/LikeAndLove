import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { useTranslation } from "react-i18next";
import set from "../assets/set.png";
import tel from "../assets/tel.png";
import { useState } from "react";



const RoadmapCarousel = () => {
  const { t, i18n } = useTranslation();
  const [activeIndexes, setActiveIndexes] = useState([0, 1]);
  const handleSlideChange = (swiper) => {
    const realIndex = swiper.realIndex;
    setActiveIndexes([realIndex, realIndex + 1]);
  };
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
      icon: tel,
    },
    {
      date: "25.02.2025",
      title: t("RoadmapCarousel.ListingoftheLiKEtoken"),
      icon: set,
    },
    {
      date: "Q3 2025",
      title: t("RoadmapCarousel.Partnershipwithotherprojects"),
      icon: tel,
    },
    { date: "Q4 2025", title: "Дополнения функций", icon: set },
    { date: "Q4 2025", title: "Глобализация проекта", icon: tel },
    { date: "Q1 2026", title: "Расширение экосистемы", icon: set },
    { date: "19.01.2026", title: "Халвинг LiKE", icon: tel },
  ];

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
        // autoplay={{ delay: 3000 }}
        loop={true}
        modules={[Pagination, Autoplay]}
        className="roadMap"
        breakpoints={{
          320: {
            slidesPerView: 2,
            spaceBetween: 5,
          },
          768: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 5,
          },
        }}
        onSlideChange={handleSlideChange}
      >
        {roadmapData.map((item, index) => (
          <SwiperSlide key={index}>
            <div
              className={`relative p-[3px] rounded-xl ${
                activeIndexes.includes(index)
                  ? "shadow-[0_0px_25px_rgba(0,122,255,1)]"
                  : "contrast-50"
              }`}
            >
              <div
                className="absolute inset-0 rounded-xl pointer-events-none"
                style={{
                  background: activeIndexes.includes(index)
                    ? "linear-gradient(45deg, #007AFF, #F30EFF)"
                    : "linear-gradient(to right, rgb(107 114 128), rgb(75 85 99))",
                }}
              />
              <div className="relative justify-between w-full p-4 rounded-xl shadow-lg bg-[#161C31] text-white flex flex-col h-[250px] items-center">
                <div className="flex flex-col items-center">
                  <p className="text-sm text-center font-semibold">
                    {item.date}
                  </p>
                  <h3 className="text-lg font-bold text-center mt-2">
                    {item.title}
                  </h3>
                </div>
                <img src={item.icon} className="w-24 h-24" />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
    </>
  );
};

export default RoadmapCarousel;
