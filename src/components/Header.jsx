import React, { useState, useEffect, useRef } from "react";
import Logo from "../assets/logo.png";
import { useTranslation } from "react-i18next";
import { Menu, X } from "lucide-react";

const Header = ({ scrollToFeatureCards, drawerVisible, setDrawerVisible }) => {
  const { t, i18n } = useTranslation();
  // const [drawerVisible, setDrawerVisible] = useState(false);
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

  useEffect(() => {
    if (drawerVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [drawerVisible]);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const toggleDrawer = () => {
    setDrawerVisible(!drawerVisible);
  };

  return (
    <>
      <header ref={headerRef} className="bg-[#161C31] sticky top-0 z-20 ">
        <div
          style={{
            background:
              "linear-gradient(to right, #007AFF 0%, #007AFF 25%, transparent 50%, #007AFF 75%, #007AFF 100%)",
          }}
          className="absolute inset-x-0 bottom-0 h-[2px]"
        />
        <div className="max-w-6xl flex items-center justify-between mx-auto p-4">
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
            <button
              onClick={scrollToFeatureCards}
              className="bg-white cursor-pointer text-black px-4 py-2 rounded-[8px] text-sm font-bold transition-colors uppercase"
            >
              {t("header.howItWorks")}
            </button>

            <button className="!text-white transition-colors font-bold text-sm uppercase">
              <a
                className=""
                href="https://docs.google.com/document/d/1UFtE2KyLq6nJJQIaGEW_4OJM_06Z4zS5260h_rciQH4/edit?tab=t.0"
              >
                WHITE PAPER
              </a>
            </button>

            <button className="!text-white transition-colors font-bold text-sm uppercase">
              <a href="https://t.me/Likeminingsupport">{t("header.support")}</a>
            </button>

            {/* Language Selector */}
            <div className="bg-[#007BFF] font-bold flex items-center space-x-2 rounded-[8px]">
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
            <button
              style={{
                background: "linear-gradient(to right, #007AFF, #F30EFF)",
              }}
              className="text-white px-6 py-2 rounded-[8px] text-sm font-medium hover:opacity-90 transition-opacity uppercase"
            >
              <a href="https://t.me/Like_Project_Bot">{t("header.goToApp")}</a>
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
          className="md:hidden bg-[#161C31] absolute w-full z-10 border-t shadow-lg"
          style={{ top: `${headerHeight + window.scrollY}px` }}
        >
          <div className="flex flex-col items-center gap-4 p-4 min-h-screen pt-15">
            <button
              onClick={scrollToFeatureCards}
              className="text-left text-white  rounded-[8px] text-xl font-bold transition-colors w-full uppercase"
            >
              {t("header.howItWorks")}
            </button>
            <div className="h-0.5 w-full bg-[#99a1af]"></div>
            <button className="!text-white transition-colors font-bold text-xl text-left w-full py-2 uppercase">
              <a href="https://docs.google.com/document/d/1UFtE2KyLq6nJJQIaGEW_4OJM_06Z4zS5260h_rciQH4/edit?tab=t.0">
                WHITE PAPER
              </a>
            </button>
            <div className="h-0.5 w-full bg-[#99a1af]"></div>
            <button className="!text-white transition-colors font-bold text-xl text-left w-full py-2 uppercase">
              <a href="https://t.me/Likeminingsupport">{t("header.support")}</a>
            </button>
            <div className="h-0.5 w-full bg-[#99a1af]"></div>
            {/* Language Selector */}
            <div className="bg-[#007BFF] w-full font-bold flex items-center space-x-2 rounded-[8px] self-center">
              <button
                className={`px-2 border-box m-1 rounded-[8px] text-l font-large w-[50%]  ${
                  i18n.language === "en"
                    ? "bg-white text-[#000] p-1"
                    : "text-white"
                }`}
                onClick={() => changeLanguage("en")}
              >
                EN
              </button>
              <button
                className={`px-2 border-box m-1 rounded-[8px] text-l font-large w-[50%] ${
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
            <button
              style={{
                background: "linear-gradient(to right, #007AFF, #F30EFF)",
              }}
              className="text-white px-6 py-2 rounded-[8px] text-l font-medium hover:opacity-90 transition-opacity w-full uppercase"
            >
              <a href="https://t.me/Like_Project_Bot">{t("header.goToApp")}</a>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
