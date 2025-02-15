import fan from "../assets/fan.png";
import vector from "../assets/vector.png";
import love from "../assets/love.png";
import like from "../assets/like.png";

const MiningDevice = () => {
  return (
    <div className=" relative  w-full max-w-5xl mx-auto flex items-center justify-between">
      {/* Left side content */}
      <div className="flex flex-col gap-4">
        <div className="flex relative gap-4">
          <img src={vector} alt="" />
          <span className="text-[white] text-[36px] font-bold ">
            Social Media Network
          </span>
          <img
            src={love}
            alt=""
            className="absolute top-[55px] right-[-35px]"
          />
        </div>
        <p className="bg-white text-[18px] rounded-full p-1 pr-4 pl-4 w-max">
          #like_mining
        </p>
        <div className="relative pt-[100px]">
          <div className="flex mr">
            <h1 className="text-white text-[80px] font-black tracking-wider">
              YOUR
            </h1>
            <h1 className="text-[#007BFF] text-[80px] font-black tracking-wider ml-2.5">
              MINIG
            </h1>
          </div>
          <p className="text-white text-[80px] font-black">on the phone</p>
          <img
            src={like}
            alt=""
            className="absolute top-[100%] right-[15%] translate-y-[50%]"
          />
        </div>

        <p className="text-white text-[18px] ">#Telegram_mini_app</p>
      </div>

      {/* Mining device */}
      <div className="relative ">
        <img className="w-full h-full" src={fan} alt="" />
      </div>
    </div>
  );
};

export default MiningDevice;
