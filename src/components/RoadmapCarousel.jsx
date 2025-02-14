import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
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
  const [activeIndexes, setActiveIndexes] = useState([0, 1]); // İlk iki kart aktif

  const handleSlideChange = (swiper) => {
    // Swiper'da ilk iki slide'ı belirle
    setActiveIndexes([swiper.activeIndex, swiper.activeIndex + 1]);
  };

  return (
    <div className="mx-auto pl-14 pr-14">
      <h2 className="text-[90px] text-center text-[#007BFF] font-black">
        Road Map <span className="text-white">of the Project</span>
      </h2>
      <p className="text-center text-2xl text-white mt-2">
        Our project roadmap clearly reflects strategic development plans,
        including key milestones and goals. We strive for full transparency by
        providing users with access to information about upcoming steps and
        initiatives.
      </p>
      <Swiper
        spaceBetween={20}
        slidesPerView="auto"
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="mt-6"
        loop={true}
        onSlideChange={handleSlideChange} // Slide değiştiğinde çalıştır
      >
        {roadmapData.map((item, index) => (
          <SwiperSlide style={{ maxWidth: "320px" }} key={index}>
            <div
              className={`relative p-[1px] max-w-[300px] rounded-xl shadow-[0_0px_35px_rgba(0,122,255,1)] gradient-border ${
                activeIndexes.includes(index) ? "" : "grayscale"
              }`}
            >
              <div className="relative p-6 rounded-xl shadow-lg h-[320px] max-w-[300px] bg-[#161C31] text-white flex flex-col items-center">
                <p className="text-sm font-semibold">{item.date}</p>
                <h3 className="text-lg font-bold mt-2">{item.title}</h3>
                <img src={item.icon} className="text-5xl mt-4" />
              </div>
            </div>
          </SwiperSlide>
        ))}
        <SwiperSlide style={{ maxWidth: "320px" }}>
           <div></div>
          </SwiperSlide>
        <SwiperSlide style={{ maxWidth: "320px" }}>
           <div></div>
          </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default RoadmapCarousel;
