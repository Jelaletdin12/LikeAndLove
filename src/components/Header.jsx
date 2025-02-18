import React, { useState, useEffect, useRef } from "react";
import Logo from "../assets/logo.png";
import { useTranslation } from "react-i18next";
import { Menu, X } from "lucide-react";

const Header = () => {
  const { t, i18n } = useTranslation();
  const [drawerVisible, setDrawerVisible] = useState(false);
  const headerRef = useRef(null);
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    if (headerRef.current) {
      setHeaderHeight(headerRef.current.offsetHeight);
    }

    const handleResize = () => {
      if (headerRef.current) {
        setHeaderHeight(headerRef.current.offsetHeight);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const toggleDrawer = () => {
    setDrawerVisible(!drawerVisible);
  };

  return (
    <>
      <header
        ref={headerRef}
        className="bg-[#161C31] sticky top-0 z-20 border-b"
      >
        <div className="max-w-6xl flex items-center justify-between mx-auto pt-4 pb-4">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
              <span>
                <img src={Logo} alt="Logo" />
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
          <div className="hidden md:flex items-center gap-4">
            <button className="bg-white text-black px-4 py-2 rounded-[8px] text-sm font-bold transition-colors">
              {t("header.howItWorks")}
            </button>

            <button className="!text-white transition-colors font-bold text-sm">
              WHITE PAPER
            </button>

            <button className="!text-white transition-colors font-bold text-sm">
              {t("header.support")}
            </button>

            {/* Language Selector */}
            <div className="bg-[#007BFF] font-bold flex items-center space-x-2 rounded-[8px]">
              <button
                className={`px-2 border-box m-1  rounded-[8px] text-sm font-large ${
                  i18n.language === "en"
                    ? "bg-white text-[#000] p-1"
                    : "text-white"
                }`}
                onClick={() => changeLanguage("en")}
              >
                EN
              </button>
              <button
                className={`px-2 border-box m-1 rounded-[8px] text-sm font-large ${
                  i18n.language === "ru"
                    ? "bg-white text-[#000] p-1"
                    : "text-white"
                }`}
                onClick={() => changeLanguage("ru")}
              >
                RU
              </button>
            </div>

            {/* App Button */}
            <button className="bg-gradient-to-r from-[#007BFF] to-[#F30EFF] text-white px-6 py-2 rounded-[8px] text-sm font-medium hover:opacity-90 transition-opacity">
              GO TO THE APP
            </button>
          </div>

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <button onClick={toggleDrawer} className="focus:outline-none">
              {drawerVisible ? (
                <X color="#fff" size={24} />
              ) : (
                <Menu color="#fff" size={24} />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer - Using div with conditional rendering instead of antd Drawer */}
      {drawerVisible && (
        <div
          className="md:hidden bg-[#161C31] absolute w-full z-10 border-t border-gray-800 shadow-lg"
          style={{ top: `${headerHeight}px` }}
        >
          <div className="flex flex-col items-center gap-4 p-4">
            <button className="bg-white text-black px-4 py-2 rounded-[8px] text-sm font-bold transition-colors w-full">
              {t("header.howItWorks")}
            </button>

            <button className=" !text-white transition-colors font-bold text-sm w-full py-2">
              WHITE PAPER
            </button>

            <button className="!text-white transition-colors font-bold text-sm w-full py-2">
              {t("header.support")}
            </button>

            {/* Language Selector */}
            <div className="bg-[#007BFF] font-bold flex items-center space-x-2 rounded-[8px] self-center">
              <button
                className={`px-2 border-box m-1 rounded-[8px] text-sm font-large ${
                  i18n.language === "en"
                    ? "bg-white text-[#000] p-1"
                    : "text-white"
                }`}
                onClick={() => changeLanguage("en")}
              >
                EN
              </button>
              <button
                className={`px-2 border-box m-1 rounded-[8px] text-sm font-large ${
                  i18n.language === "ru"
                    ? "bg-white text-[#000] p-1"
                    : "text-white"
                }`}
                onClick={() => changeLanguage("ru")}
              >
                RU
              </button>
            </div>

            {/* App Button */}
            <button className="bg-gradient-to-r from-[#007BFF] to-[#F30EFF] text-white px-6 py-2 rounded-[8px] text-sm font-medium hover:opacity-90 transition-opacity w-full">
              GO TO THE APP
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
