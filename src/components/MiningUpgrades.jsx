import React from "react";
import Stabilizator from "../assets/stabilizator.gif";
import brain from "../assets/brain.gif";
import fancard from "../assets/fancard.gif";
import water from "../assets/water.gif";
import ton from "../assets/ton.gif";
import { CircleArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
const MiningUpgrades = () => {
  const { t, i18n } = useTranslation();
  const upgrades = [
    {
      title:  t("MiningUpgrades.Fan"),
      description:
        t("MiningUpgrades.UpgradeyourminingrigwiththeFanforcooleroperationsandhigherLOVE"),
      profit: "+195 TLove/h",
      image: fancard,
    },
    {
      title: t("MiningUpgrades.Cableimprovements"),
      description:
      t("MiningUpgrades.BoostyourminingefficiencywiththeCableimprovementsprovidingastablepowersupply"),
      profit: "+400 TLove/h",
      image: Stabilizator,
    },
    {
      title: t("MiningUpgrades.Watercooling"),
      description:
      t("MiningUpgrades.ImproveyourminingefficiencywithWaterCoolingprovidingsuperiorcoolingandperformanceboost"),
      profit: "+680 TLove/h",
      image: water,
    },
    {
      title: t("MiningUpgrades.AI"),
      description:
      t("MiningUpgrades.BoostyourminingsetupwiththeEngineeroptimizingperformanceandmaximizingprofits"),
      profit: "+1.008 TLove/h",
      image: brain,
    },
  ];

  return (
    <div className="min-h-screen m-auto max-w-6xl mt-15  ">
      {/* Header Section */}
      <div className=" w-full flex flex-col-reverse md:flex-row gap-[10px] p-4">
        <div className="mb-6">
          <h1 className="hidden text-4xl text-center md:text-6xl md:flex flex-col text-[white] font-black md:text-left mb-4">
          {t("MiningUpgrades.Buyupgradesand")}
            <h1 className="text-[#007BFF] ">  {t("MiningUpgrades.EarnMore")}</h1>
          </h1>

          <p className="text-white text-l md:text-xl mb-8 max-w-2xl mx-auto ">
          {t("MiningUpgrades.InadditiontothemainLIKEminingourplatformoffersyoutheopportunitytodiversifyyourincomebyminingtheLOVEsubtokenThistokenplaysanimportantroleinourecosystemandwillreceiveaseparatelistinginthefuturewhichwillensureitshighliquidityanddemandUpgradingyourminingequipmentwillallowyoutoincreasethehashrateandincreasetheefficiencyofminingbothtokensaswellasopenaccesstoadditionalplatformfunctions")}
          </p>
        </div>
        <div className="flex justify-between items-center flex-col">
        <h1 className=" text-4xl text-center md:text-6xl md:hidden flex-col text-[white] font-black mb-4">
          {t("MiningUpgrades.Buyupgradesand")}
            <h1 className="text-[#007BFF] ">  {t("MiningUpgrades.EarnMore")}</h1>
          </h1>
          <img className="w-auto h-auto" src={ton} alt="" />
        </div>
      </div>

      {/* Upgrades Grid */}
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
        {upgrades.map((upgrade, index) => (
          <div
            key={index}
            className="relative p-[3px] rounded-[8px]  shadow-[0_0px_20px_rgba(0,122,255,1)]"
            style={{
              background: "linear-gradient(45deg, #007AFF, #F30EFF)",
            }}
          >
            <div className="relative rounded-[8px] bg-[#161C31] text-center p-4 h-full flex gap-2 flex-row md:flex-col items-center justify-center ">
              <img
                src={upgrade.image}
                alt={upgrade.title}
                className="w-[100px]"
              />
              <div className="flex flex-col">

              <h3 className="text-white text-xl text-left md:text-center font-semibold mb-2">
                {upgrade.title}
              </h3>
              <p className="text-white text-sm mb-4 text-left md:text-center">
                {upgrade.description}
              </p>
              <div className="mt-auto">
                <p className="text-sm text-white text-left md:text-center"> {t("MiningUpgrades.Profitpersecond")}</p>
                <p className="text-[#007AFF] text-left md:text-center font-semibold">{upgrade.profit}</p>
              </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Watch Button */}
      <div className="max-w-6xl mx-auto mt-12 flex justify-center">
        <button  style={{
                  background: "linear-gradient(to right, #007AFF, #F30EFF)",
                }} className=" text-white font-semibold py-3 px-8 rounded-full flex items-center gap-2 transition-colors duration-300">
        {t("MiningUpgrades.WATCH")}
          <CircleArrowRight />
        </button>
      </div>
    </div>
  );
};

export default MiningUpgrades;
