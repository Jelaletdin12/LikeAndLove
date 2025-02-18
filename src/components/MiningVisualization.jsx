import fan from "../assets/fan.png";
import vector from "../assets/vector.png";
import love from "../assets/love.png";
import like from "../assets/like.png";
import { useTranslation } from "react-i18next";
const MiningDevice = () => {
   const { t, i18n } = useTranslation();
  return (
    <div className="relative w-full max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center ">

      {/* Left side content */}
      <div className="flex flex-col gap-4">
        <div className="flex flex-col">

        <div className="flex relative gap-4">
          <img src={vector} alt="" />
          <span className="text-[white] text-xl font-bold  md:text-3xl">
            Social Media Network
          </span>
          <img
            src={love}
            alt=""
            className=" absolute top-[35px] right-[-19px] w-[80px] h-auto md:w-[180px] md:right-[-75px]"
          />
        </div>
        <p className="bg-white mt-[65px] text-l rounded-full p-1 pr-4 pl-4 w-max">
          #like_mining
        </p>
        </div>
        <div className="relative pt-[50px]">
          <div className="flex mr">
            <h1 className="text-white text-6xl font-black tracking-wider">
            {t("MiningVisualization.YOUR")}
            </h1>
            <h1 className="text-[#007BFF] text-6xl font-black tracking-wider ml-2.5">
             {t("MiningVisualization.MINIG")}
            </h1>
          </div>
          <p className="text-white text-6xl font-black"> {t("MiningVisualization.on_the_phone")}</p>
          <img
            src={like}
            alt=""
            className="absolute w-[80px] h-auto  top-[85%] right-[10%] translate-y-[50%] md:w-[180px]"
          />
        </div>

        <p className="text-white text-l ">#Telegram_mini_app</p>
      </div>

      {/* Mining device */}
      <div className="relative md:w-[50%]  ">
        <img className="w-full h-full" src={fan} alt="" />
      </div>
    </div>
  );
};

export default MiningDevice;
