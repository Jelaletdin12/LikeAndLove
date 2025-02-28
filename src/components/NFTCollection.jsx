import vectorbig from "../assets/vectorbig.png";
import fan from "../assets/fan.gif";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import { useState } from "react";
import { CircleArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
export default function NFTCollection() {
  const { t } = useTranslation();
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
    <div className="mx-auto mt-15">
      <div className="max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10 items-center mx-auto p-4">
        <div>
          <h2 className=" text-4xl flex text-white font-black mb-4 md:text-6xl justify-center md:justify-start">
            {t("NFTCollection.The")}{" "}
            <span className="text-[#007BFF] mr-2">NFT</span>{" "}
            {t("NFTCollection.Collection")}
          </h2>
          <p className="text-white mb-8 max-w-2xl text-lg md:text-xl text-center md:text-left">
            {t(
              "NFTCollection.ToparticipateinminingandmineLIKIandLOVEtokensyouneedtoacquireatleastoneNFTfromourcollectiononpetgamesioThesedigitalassetsnotonlyprovideaccesstominingandincreasedincomebutarealsovaluableinvestmentsthatcangrowinvalue"
            )}
          </p>
        </div>
        <div className="hidden md:flex flex-col items-center">
          <a
            className="flex flex-col justify-center items-center"
            href="https://getgems.io/"
          >
            <img className="w-[200px] h-[200px]" src={vectorbig} alt="NFT" />
            <h3 className="text-white text-[24px] font-bold mt-2">
              GetGames.io
            </h3>
          </a>
        </div>
      </div>

      {/* Carousel */}
      <div className="relative py-4">
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          centeredSlides={true}
          pagination={{ clickable: true }}
          modules={[Pagination, Autoplay]}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          className="nftCollection"
          autoplay={{ delay: 3000 }}
          loop={true}
          breakpoints={{
            320: {
              slidesPerView: 3,
              spaceBetween: 5,
            },
            768: {
              slidesPerView: 4,
            },
            1024: {
              slidesPerView: 6,
            },
          }}
        >
          {nftItems.map((item, index) => {
            // center card
            let scaleClass =
              "scale-100 md:scale-110 shadow-[0_0px_25px_rgba(0,122,255,1)]";

            // Right and left cards (smaller)
            if (index === activeIndex - 1 || index === activeIndex + 1) {
              scaleClass = "scale-75 md:scale-85 opacity-90";
            }

            // Other cards (smallest cards)
            if (
              index !== activeIndex &&
              index !== activeIndex - 1 &&
              index !== activeIndex + 1
            ) {
              scaleClass = "scale-60 md:scale-70 opacity-70";
            }

            return (
              <SwiperSlide key={index}>
                <div
                  className={`relative p-0.5 md:p-[3px]  shadow-[0_0px_35px_rgba(0,122,255,1)] rounded-xl transition-all duration-300  ${scaleClass}`}
                >
                  <div
                    className="absolute inset-0 rounded-xl  "
                    style={{
                      background: "linear-gradient(45deg, #007AFF, #F30EFF)",
                    }}
                  />
                  <div className="relative p-2  rounded-xl shadow-lg bg-[#161C31] text-white flex flex-col items-center ">
                    <h3 className="text-m md:text-lg font-bold md:mt-2 xl:mt-2">
                      {item.title}
                    </h3>
                    <img
                      src={item.icon}
                      className="w-4/5 h-4/5 object-contain"
                      alt="NFT"
                    />
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      <div className="text-center mt-8 flex justify-center">
        <a
          style={{
            background: "linear-gradient(to right, #007AFF, #F30EFF)",
          }}
          href="https://getgems.io/collection/EQDMvchkiDT6H2ufjqCecyLb6-S9YYE1-JzSC7D-AbJfee2g"
          className=" w-auto  flex  text-white font-bold py-3 px-8 rounded-[8px] gap-4 items-center hover:opacity-80 uppercase"
        >
          {t("NFTCollection.BUYNFT")}
          <CircleArrowRight />
        </a>
      </div>
    </div>
  );
}
