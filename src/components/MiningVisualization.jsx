import fan from "../assets/fan.gif";
import vector from "../assets/vector.png";
import love from "../assets/love.png";
import like from "../assets/like.png";
import { useTranslation } from "react-i18next";
const MiningDevice = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="relative w-full pt-4 max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center ">
      {/* Left side content */}
      <div className="flex flex-col gap-4 w-[100%] md:w-[50%] p-4">
        <div className="flex flex-col">
          <div className="flex relative gap-4 items-center">
            <img src={vector} alt="" />
            <span className="text-[white] text-2xl font-bold  md:text-3xl">
              Social Media Network
            </span>
            <img
              src={love}
              alt=""
              className="absolute top-[40px] right-[30px] w-[80px] h-auto md:w-[110px] md:right-[145px]"
            />
          </div>
          <p className="bg-white mt-[65px] text-l rounded-full p-1 pr-4 pl-4 w-max">
            #like_mining
          </p>
        </div>
        <div className="relative pt-[50px]">
          <div className="flex ">
            <h1 className="text-white text-5xl font-black tracking-wider md:text-6xl">
              {t("MiningVisualization.YOUR")}
            </h1>
            <h1 className="text-[#007BFF] text-5xl font-black tracking-wider ml-2.5 md:text-6xl">
              {t("MiningVisualization.MINIG")}
            </h1>
          </div>
          <p className="text-white text-5xl font-black md:text-6xl">
            {" "}
            {t("MiningVisualization.on_the_phone")}
          </p>
          <img
            src={like}
            alt=""
            className="absolute  w-[80px] h-auto  top-[80%] right-[15%] translate-y-[50%] md:w-[110px] md:right-[40%]  "
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
