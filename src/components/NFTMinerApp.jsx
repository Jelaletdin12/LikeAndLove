import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import Phone from "../assets/phone.png";
import ph from "../assets/ph.png";
import fc from "../assets/fuck.png";
const MiningGuide = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.5,
        rootMargin: "-50px",
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div ref={sectionRef} className="max-w-6xl m-auto bg-[#161C31] p-4 md:flex">
      <h2 className="text-5xl text-white font-black mb-4 leading-none flex md:hidden md:text-6xl">
        {t("NFTMinerApp.How_it_works_Mining")}
      </h2>
      <div className="w-full md:w-1/2 relative">
        {/* Ana telefon görseli konteyner */}
        <div className="relative w-full">
          <img
            src={ph}
            alt=""
            className="w-full max-w-md mx-auto md:max-w-none"
          />
          {/* NFT Miner kartı - artık mobilde de görünür */}
          <div
            ref={cardRef}
            className={`
              absolute 
              top-[28%] 
              left-[24%] 
              md:top-[160px] 
              md:left-[135px] 
              transition-all 
              duration-700 
             
              ${
                isVisible
                  ? "opacity-100 scale-110 translate-y-0"
                  : "opacity-0 scale-90 translate-y-4"
              }
            `}
            style={{
              transform: isVisible ? "translateZ(70px)" : "translateZ(0)",
              perspective: "1000px",
              transformStyle: "preserve-3d",
              // boxShadow: isVisible ? "0 0 20px rgba(0, 122, 255, 1)" : "none",
              width: "21%",
              maxWidth: "150px",
            }}
          >
            <img
              src={fc}
              alt=""
              style={{
                filter: isVisible
                  ? "drop-shadow(0 0 4px rgba(0, 170, 255, 0.9)) drop-shadow(0 0 10px rgba(0, 150, 255, 0.9)) drop-shadow(0 0 20px rgba(0, 120, 255, 0.8)) drop-shadow(0 0 30px rgba(0, 100, 255, 0.5))"
                  : "none",
              }}
              className="w-30 h-33  md:w-40 md:h-50"
            />
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2">
        <h2 className="text-5xl text-white font-black mb-4 leading-none hidden md:flex md:text-6xl">
          {t("NFTMinerApp.How_it_works_Mining")}
        </h2>
        <p className="text-lg text-white mb-8 md:text-xl">
          {t("NFTMinerApp.ItsassimpleasthatStartearningLIKETokenswithourNFTs")}
        </p>
        <ul className="mb-8 list-decimal list-inside">
          <li className="text-lg md:text-xl text-white">
            {t("NFTMinerApp.GettheNFT")}
          </li>
          <li className="text-lg md:text-xl text-white">
            {t("NFTMinerApp.Starttheminingprocess")}
          </li>
          <li className="text-lg md:text-xl text-white">
            {t("NFTMinerApp.Collectyourtokens")}
          </li>
        </ul>
        <p className="text-lg md:text-xl text-white mb-8">
          {t(
            "NFTMinerApp.YourNFTSwillautomaticallyminevaluabletokensturningthemintoasourceofincomeAdditionalmechanicswillspeedupthisprocessandincreaseyourprofit"
          )}
        </p>
        <p className="text-lg md:text-xl text-white">
          {t(
            "NFTMinerApp.ImportantyourphoneanditspowerarenotusedinminingeverythinghappensremotelyviatheInternet"
          )}
        </p>
      </div>
    </div>
  );
};

export default MiningGuide;
