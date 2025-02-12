import fan from "../assets/fan.png";
import vector from "../assets/vector.png";

const MiningDevice = () => {
  return (
    <div className="bg-[#161C31] w-full min-h-screen flex items-center justify-between">
      {/* Left side content */}
      <div className="flex flex-col gap-4">
        <div className="flex  ">
          <img src={vector} alt="" />
          <span className="text-[white] text-[36px] font-bold">
            Social Media Network
          </span>
        </div>
        <p className="bg-white text-[18px] rounded-full ">
          #like_mining
        </p>
        <div>

        <div className="flex">
          <h1 className="text-white text-[80px] font-black tracking-wider">
            YOUR
          </h1>
          <h1 className="text-[#007BFF] text-[80px] font-black tracking-wider">
            MINIG
          </h1>
        </div>
        <p className="text-white text-[80px] font-black">on the phone</p>
        </div>

        <p className="text-white text-[18px] rounded-full">#Telegram_mini_app</p>
        
      </div>

      {/* Mining device */}
      <div className="relative w-80">
        <img className="w-full h-full" src={fan} alt="" />
      </div>
    </div>
  );
};

export default MiningDevice;
