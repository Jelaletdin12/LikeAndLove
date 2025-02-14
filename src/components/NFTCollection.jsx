import VectorBig from "../assets/VectorBig.png";
import fan from "../assets/fan.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { useState } from "react";

export default function NFTCollection() {
  const nftItems = [
    { title: "Like #113", icon: fan },
    { title: "Like #1040", icon: fan },
    { title: "Like #140", icon: fan },
    { title: "Like #145", icon: fan },
    { title: "Like #130", icon: fan },
    { title: "Like #150", icon: fan },
    { title: "Like #160", icon: fan },
    { title: "Like #170", icon: fan },
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="mx-auto ">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center pr-32 pl-32">
        <div>
          <h2 className="text-[80px] flex text-white font-black mb-4">
            The <span className="text-[#007BFF] mx-2">NFT</span> Collection
          </h2>
          <p className="text-white text-[24px] mb-8 max-w-2xl leading-8">
            To participate in mining and mine LIKI and LOVE tokens, you need to
            acquire at least one NFT from our collection on petgames.io. These
            digital assets not only provide access to mining and increased
            income, but are also valuable investments that can grow in value.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <img className="w-[200px] h-[200px]" src={VectorBig} alt="NFT" />
          <h3 className="text-white text-[24px] font-bold mt-2">GetGames.io</h3>
        </div>
      </div>

      {/* Carousel */}
      <div className="relative py-4">
        <Swiper
          spaceBetween={10}
          slidesPerView={4}
          centeredSlides={true}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        >
          {nftItems.map((item, index) => {
            // Ortadaki kart
            let scaleClass = "scale-110 shadow-xl";

            // Sağ ve solundaki kartlar (biraz küçük olacak)
            if (index === activeIndex - 1 || index === activeIndex + 1) {
              scaleClass = "scale-100 opacity-90";
            }

            // Diğer tüm kartlar (en küçük olacak)
            if (
              index !== activeIndex &&
              index !== activeIndex - 1 &&
              index !== activeIndex + 1
            ) {
              scaleClass = "scale-90 opacity-70";
            }

            return (
              <SwiperSlide key={index}>
                <div
                  className={`relative p-[1px] rounded-xl gradient-border ${scaleClass}`}
                >
                  <div className="relative p-6 rounded-xl shadow-lg h-[320px] bg-[#161C31] text-white flex flex-col items-center">
                    <h3 className="text-lg font-bold mt-2">{item.title}</h3>
                    <img src={item.icon} className="w-40 mt-4" alt="NFT" />
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      {/* Buy NFT Button */}
      <div className="text-center mt-8">
        <a
          href="#"
          className="inline-block bg-gradient-to-r from-[#007BFF] to-[#FF00FF] text-white font-bold py-3 px-8 rounded-[8px] transition duration-200 hover:opacity-80"
        >
          BUY NFT
        </a>
      </div>
    </div>
  );
}
