import React from "react";
import Stabilizator from "../assets/stabilizator.png";
import brain from "../assets/brain.png";
import fancard from "../assets/fancard.png";
import water from "../assets/water.png";
import ton from "../assets/ton.png";
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
    <div className="min-h-screen m-auto max-w-6xl mt-15">
      {/* Header Section */}
      <div className=" w-full grid grid-cols-[1fr_1fr] gap-[10px]">
        <div className="mb-6">
          <h1 className="text-6xl flex flex-col text-[white] font-black mb-4">
          {t("MiningUpgrades.Buyupgradesand")}
            <h1 className="text-[#007BFF] ">  {t("MiningUpgrades.EarnMore")}</h1>
          </h1>

          <p className="text-white text-xl mb-8 max-w-2xl mx-auto ">
          {t("MiningUpgrades.InadditiontothemainLIKEminingourplatformoffersyoutheopportunitytodiversifyyourincomebyminingtheLOVEsubtokenThistokenplaysanimportantroleinourecosystemandwillreceiveaseparatelistinginthefuturewhichwillensureitshighliquidityanddemandUpgradingyourminingequipmentwillallowyoutoincreasethehashrateandincreasetheefficiencyofminingbothtokensaswellasopenaccesstoadditionalplatformfunctions")}
          </p>
        </div>
        <div className="flex justify-between items-center flex-col">
          <img className="w-auto h-auto" src={ton} alt="" />
        </div>
      </div>

      {/* Upgrades Grid */}
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {upgrades.map((upgrade, index) => (
          <div
            key={index}
            className="relative p-[3px] rounded-[8px]  shadow-[0_0px_20px_rgba(0,122,255,1)]"
            style={{
              background: "linear-gradient(45deg, #007AFF, #F30EFF)",
            }}
          >
            <div className="relative rounded-[8px] bg-[#161C31] text-center p-4 h-full flex flex-col items-center justify-center ">
              <img
                src={upgrade.image}
                alt={upgrade.title}
                className=""
              />
              <h3 className="text-white text-xl text-center font-semibold mb-2">
                {upgrade.title}
              </h3>
              <p className="text-gray-400 text-sm mb-4">
                {upgrade.description}
              </p>
              <div className="mt-auto">
                <p className="text-sm text-gray-400"> {t("MiningUpgrades.Profitpersecond")}</p>
                <p className="text-blue-400 font-semibold">{upgrade.profit}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Watch Button */}
      <div className="max-w-6xl mx-auto mt-12 flex justify-center">
        <button className=" bg-gradient-to-r from-[#007AFF] to-[#F30EFF] text-white font-semibold py-3 px-8 rounded-full flex items-center gap-2 transition-colors duration-300">
        {t("MiningUpgrades.WATCH")}
          <CircleArrowRight />
        </button>
      </div>
    </div>
  );
};

export default MiningUpgrades;
