import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import set from "../assets/set.png";
import tel from "../assets/tel.png";
import { useState } from "react";

const roadmapData = [
  { date: "23.01.2025", title: "Разработка приложения", icon: tel },
  { date: "23.02.2025", title: "Запуск Telegram MiniApp", icon: set },
  { date: "01.03.2025", title: "Выход на биржу STON.fi ", icon: tel },
  { date: "25.02.2025", title: "Листинг токена LiKE", icon: set },
  { date: "Q3 2025", title: "Партнерство с другими проектами", icon: tel },
  { date: "Q4 2025", title: "Дополнения функций", icon: set },
  { date: "Q4 2025", title: "Глобализация проекта", icon: tel },
  { date: "Q1 2026", title: "Расширение экосистемы", icon: set },
  { date: "19.01.2026", title: "Халвинг LiKE", icon: tel },
];

const RoadmapCarousel = () => {
  const [activeIndexes, setActiveIndexes] = useState([0, 1]);
  const handleSlideChange = (swiper) => {
    const realIndex = swiper.realIndex;
    setActiveIndexes([realIndex, realIndex + 1]);
  };

  return (
    <>
      <div className="max-w-5xl m-auto">
        <h2 className="text-2xl text-center text-[#007BFF] font-black">
          Road Map <span className="text-white">of the Project</span>
        </h2>
        <p className="text-center text-l text-white mt-2">
          Our project roadmap clearly reflects strategic development plans,
          including key milestones and goals. We strive for full transparency by
          providing users with access to information about upcoming steps and
          initiatives.
        </p>
      </div>
      <Swiper
        spaceBetween={20}
        slidesPerView={5}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        loop={true}
        modules={[Pagination, Autoplay]}
        style={{
          marginLeft: "100px",
          height: "350px",
          paddingLeft: "25px",
          display: "flex",
          justifyContent: "center",
          paddingTop: "30px",
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
