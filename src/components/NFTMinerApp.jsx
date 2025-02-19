import Phone from "../assets/phone.png";
import { useTranslation } from "react-i18next";
const MiningGuide = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="max-w-6xl m-auto  bg-[#161C31] p-4 md:flex">
        <h2 className="text-5xl text-[white] font-black mb-4 leading-none flex md:hidden md:text-6xl">
        {t("NFTMinerApp.How_it_works_Mining")}
        </h2>
      <div className="w-[100%] md:w-[50%]">
        <img src={Phone} alt="" />
      </div>
      <div className="w-[100%]  md:w-[50%] ">
        <h2 className="text-5xl text-[white] font-black mb-4 leading-none hidden md:flex md:text-6xl">
        {t("NFTMinerApp.How_it_works_Mining")}
        </h2>

        <p className="text-l text-white mb-8 md:text-xl">
        {t("NFTMinerApp.ItsassimpleasthatStartearningLIKETokenswithourNFTs")}
        </p>
        <ul className="mb-8">
          <li className="text-l md:text-xl text-white">{t("NFTMinerApp.GettheNFT")}</li>
          <li className="text-l md:text-xl text-white">
          {t("NFTMinerApp.Starttheminingprocess")}
          </li>
          <li className="text-l md:text-xl text-white"> {t("NFTMinerApp.Collectyourtokens")}</li>
        </ul>
        <p className="text-l md:text-xl text-white mb-8">
        {t("NFTMinerApp.YourNFTSwillautomaticallyminevaluabletokensturningthemintoasourceofincomeAdditionalmechanicswillspeedupthisprocessandincreaseyourprofit")}
        </p>
        <p className="text-l md:text-xl text-white">
        {t("NFTMinerApp.ImportantyourphoneanditspowerarenotusedinminingeverythinghappensremotelyviatheInternet")} </p>
      </div>
    </div>
  );
};

export default MiningGuide;
