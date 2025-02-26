import fan from "../assets/fan.gif";
import vector from "../assets/vector.png";
import love from "../assets/love.png";
import love2 from "../assets/love2.png";
import like from "../assets/like.png";
import like1 from "../assets/like1.png";
import tri from "../assets/tri.png";
import tok from "../assets/t.png";

import { useTranslation } from "react-i18next";
const MiningDevice = () => {
  const { t } = useTranslation();
  return (
    <div className="relative w-full pt-4 max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center ">
      {/* Left side content */}
      <div className="flex flex-col gap-4 w-[100%] md:w-[50%] px-[50px] pt-15 md:pt-6 md:px-0  md:p-4 mb-10 md:mb-0">
        <div className="flex flex-col">
          <div className="flex relative gap-4 items-center">
            <img
              src={like1}
              alt=""
              className="absolute top-[-60px] left-[108px] w-[60px] h-auto md:w-[100px] md:top-[-146px] md:left-[150px] "
            />

            <img
              src={tri}
              alt=""
              className="absolute top-[0px] right-[-8px] w-[70px] h-auto md:w-[110px] md:right-[50px]"
            />
            <img
              src={love}
              alt=""
              className="absolute top-[25px] left-[-50px] w-[70px] h-auto md:w-[110px] md:left-[-150px]"
            />
            <img
              src={tok}
              alt=""
              className="absolute top-[170px] left-[-50px] w-[70px] h-auto md:w-[110px] md:left-[-110px] md:top-[200px]"
            />
          </div>
          <p className="bg-white  text-sm md:text-l rounded-full p-1 pr-4 pl-4 w-max">
            #Multi_app
          </p>
        </div>
        <div className="relative pt-[50px]">
          <div className="flex ">
            <h1 className="text-white text-4xl font-black tracking-wider md:text-6xl">
              {t("MiningVisualization.YOUR")}
            </h1>
            <h1 className="text-[#007BFF] text-4xl font-black tracking-wider ml-2.5 md:text-6xl">
              {t("MiningVisualization.MINIG")}
            </h1>
          </div>
          <p className="text-white text-4xl font-black md:text-6xl">
            {" "}
            {t("MiningVisualization.on_the_phone")}
          </p>
          <img
            src={t}
            alt=""
            className="absolute  w-[70px] h-auto  top-[80%] right-[15%] translate-y-[50%] md:w-[110px] md:right-[100px] md:top-[100px]  "
          />
          <img
            src={like}
            alt=""
            className="absolute  w-[70px] h-auto  top-[80%] right-[-8%] translate-y-[50%] md:w-[110px] md:right-[100px] md:top-[120px]  "
          />
          <img
            src={love2}
            alt=""
            className="absolute z-[1]  w-[80px] h-auto  top-[135%] right-[38%] translate-y-[50%] md:w-[110px] md:left-[128px]  "
          />
        </div>

        <p className="text-white text-l mt-[50px] ">#Telegram_mini_app</p>
      </div>

      {/* Mining device */}
      <div className="relative md:w-[50%]  ">
        <img className="w-full h-full" src={fan} alt="" />
      </div>
    </div>
  );
};

export default MiningDevice;
