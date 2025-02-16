import Logo from "../assets/logo.png";

const Header = () => {
  return (
    <header className="bg-[#161C31] relative z-10  flex items-center  justify-between  max-w-6xl mx-auto pt-4 pb-4 border-b">
      {/* Logo and Brand */}
      <div className="flex items-center space-x-2">
        <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
          <span>
            <img src={Logo} />
          </span>
        </div>
        <div className="text-l font-bold">
          <span className="text-[#007BFF] text-[30px]">LiKE</span>
          <span className="text-white">&</span>
          <span className="text-[#007BFF] text-[30px]">LOVE</span>
          <span className="text-white text-[18px] ml-2">PROJECT</span>
        </div>
      </div>

      {/* Navigation Items */}
      <div className="flex items-center gap-4">
        <button className="bg-white text-black px-4 py-2 rounded-lg text-sm font-bold hover:bg-gray-100 transition-colors ">
          HOW DOES IT WORK?
        </button>

        <button className="text-white hover:text-gray-300 transition-colors  font-bold text-sm ">
          WHITE PAPER
        </button>

        <button className="text-white hover:text-gray-300 transition-colors  font-bold text-sm">
          SUPPORT
        </button>

        {/* Language Selector */}
        <div className="bg-[#007BFF] flex items-center space-x-2 rounded-lg">
          <button className="bg-[#007BFF] text-white px-3 py-1 rounded-lg  text-sm font-large">
            EN
          </button>
          <button className="text-white px-3 py-1 rounded-lg  text-sm font-large hover:bg-white transition-colors">
            RU
          </button>
        </div>

        {/* App Button */}
        <button className="bg-gradient-to-r from-[#007BFF] to-[#F30EFF] text-white px-6 py-2 rounded-lg  text-sm font-medium hover:opacity-90 transition-opacity">
          GO TO THE APP
        </button>
      </div>
    </header>
  );
};

export default Header;
