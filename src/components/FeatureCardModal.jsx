import React, { useState } from "react";
import { Modal } from "antd";
import phone1 from "../assets/phone1.gif";
import phone2 from "../assets/phone2.gif";
import phone3 from "../assets/phone3.gif";
import phone4 from "../assets/phone4.gif";
import phone5 from "../assets/phone5.gif";
import phone6 from "../assets/phone6.gif";
import phone7 from "../assets/phone7.gif";
import { useTranslation } from "react-i18next";
// Modal Content Component
const FeatureModal = ({
  feature,
  isVisible,
  onClose,
  onContinue,
  isLastFeature,
}) => {
  const { t, i18n } = useTranslation();
  // Get modal content based on feature
  const getModalContent = () => {
    switch (feature.title.id) {
      case 1:
        return (
          <div className="items-center flex flex-col p-6 bg-[#161C31] rounded-[8px] h-full justify-between">
            <div className="flex flex-col-reverse md:flex-row mb-6">
              <div className="h-[250px] overflow-y-auto md:h-auto custom-scrollbar ">
                <h2 className="text-xl font-bold mb-4 text-white">
                  {t("Modal1.firstStep")}
                </h2>
                <p className="text-white">{t("Modal1.intro")}</p>
                <ul className=" pl-6 mt-4 text-white">
                  <li> {t("Modal1.step1")}</li>
                  <li> {t("Modal1.step2")}</li>
                  <li>{t("Modal1.step3")}</li>
                </ul>
                <div>
                  <p className="text-white mb-[-15px] mt-2.5">
                    {t("Modal1.accessPossibilities")}
                  </p>
                  <ul className="list-disc pl-6 mt-4 text-white">
                    <li>{t("Modal1.easyAccess")}</li>
                    <li>{t("Modal1.participateDeFi")}</li>
                    <li>{t("Modal1.manageAssets")}</li>
                    <li>{t("Modal1.speedAndConvenience")}</li>
                  </ul>
                </div>
                <p className="text-white pt-2.5">
                  {t("Modal1.fullFledgedUser")}
                </p>
              </div>
              <img
                src={phone1}
                alt="App Screenshot"
                className="w-full mb-4 md:w-[50%] md:mb-0"
              />
            </div>
            <button
              onClick={onContinue}
              style={{
                background: "linear-gradient(to right, #007AFF, #F30EFF)",
              }}
              className=" uppercase text-white px-6 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity cursor-pointer"
            >
              {t("Modal1.Continue")}
            </button>
          </div>
        );
      case 8:
        return (
          <div className="items-center flex flex-col p-6 bg-[#161C31] rounded-[8px] h-full justify-between">
            <div className="flex flex-col-reverse md:flex-row mb-6">
              <div className="h-[250px] overflow-y-auto md:h-auto custom-scrollbar flex flex-col md:justify-center">
                <h2 className="text-xl font-bold mb-4 text-white">
                  {t("Modal2.wheelOfFortune")}
                </h2>
                <p className="text-white">{t("Modal2.intro")}</p>
                <ul className="list-none pl-6 mt-4 text-white">
                  <li>- {t("Modal2.spinEvery6Hours")}</li>
                  <li>- {t("Modal2.nftMiners")}</li>
                  <li>- {t("Modal2.multipleNFTs")}</li>
                </ul>
                <div>
                  <p className="text-white mb-[-15px] mt-2.5">
                    {t("Modal2.awardsUpdated")}
                  </p>
                </div>
                <p className="text-white pt-2.5">{t("Modal2.spinAndEnjoy")}</p>
              </div>
              <img
                src={phone2}
                alt="App Screenshot"
                className="w-full mb-4 md:w-[50%] md:mb-0"
              />
            </div>
            <button
              onClick={onContinue}
              style={{
                background: "linear-gradient(to right, #007AFF, #F30EFF)",
              }}
              className=" uppercase text-white px-6 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity cursor-pointer"
            >
              {t("Modal1.Continue")}
            </button>
          </div>
        );
      case 9:
        return (
          <div className="items-center flex flex-col p-6 bg-[#161C31] rounded-[8px] h-full justify-between">
            <div className="flex flex-col-reverse md:flex-row mb-6">
              <div className="h-[250px] overflow-y-auto md:h-auto custom-scrollbar">
                <h2 className="text-xl font-bold mb-4 text-white">
                  {t("Modal3.internalTransfers")}
                </h2>
                <p className="text-white">{t("Modal3.intro")}</p>
                <p className="text-white mb-0 mt-10 font-bold">
                  {t("Modal3.sendTokens")}
                </p>
                <ul className=" pl-6  text-white">
                  <li> {t("Modal3.step1")}</li>
                  <li>{t("Modal3.step2")}</li>
                  <li>{t("Modal3.step3")}</li>
                  <li>{t("Modal3.step4")}</li>
                </ul>
                <div>
                  <p className="text-white mt-10 font-bold">
                    {t("Modal3.payCommission")}
                  </p>
                  <p className="text-white mb-[-15px] mt-2.5">
                    {t("Modal3.commissionOptions")}
                  </p>
                  <ul className="list-none pl-6 mt-4 text-white">
                    <li>{t("Modal3.payWithTokens")}</li>
                    <li>{t("Modal3.completeTask")}</li>
                  </ul>
                </div>
                <p className="text-white pt-2.5">{t("Modal3.noCommission")}</p>
              </div>
              <img
                src={phone3}
                alt="App Screenshot"
                className="w-full mb-4 md:w-[50%] md:mb-0"
              />
            </div>
            <button
              onClick={onContinue}
              style={{
                background: "linear-gradient(to right, #007AFF, #F30EFF)",
              }}
              className="uppercase text-white px-6 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity cursor-pointer"
            >
              {t("Modal1.Continue")}
            </button>
          </div>
        );
      case 4:
        return (
          <div className="items-center flex flex-col p-6 bg-[#161C31] rounded-[8px] h-full justify-between">
            <div className="flex flex-col-reverse md:flex-row mb-6">
              <div className="h-[250px] overflow-y-auto md:h-auto custom-scrollbar">
                <h2 className="text-xl font-bold mb-4 text-white">
                  {t("Modal4.tokenConversion")}
                </h2>
                <p className="text-white">{t("Modal4.intro")}</p>
                <p className="text-white mt-10 font-bold ">
                  {" "}
                  {t("Modal4.howItWorks")}
                </p>
                <ul className="list-none pl-6  text-white">
                  <li>{t("Modal4.step1")}</li>
                  <li>{t("Modal4.step2")}</li>
                  <li>{t("Modal4.step3")}</li>
                  <li>
                    <ul className="list-none">
                      <li>- Silver – 1%</li>
                      <li>- Gold – 0.75%</li>
                      <li>- Platinum – 0.5%</li>
                    </ul>
                  </li>
                  <li>{t("Modal4.step4")}</li>
                </ul>

                <p className="text-white pt-2.5">{t("Modal4.tryNow")}</p>
              </div>
              <img
                src={phone4}
                alt="App Screenshot"
                className="w-full mb-4 md:w-[50%] md:mb-0"
              />
            </div>
            <button
              onClick={onContinue}
              style={{
                background: "linear-gradient(to right, #007AFF, #F30EFF)",
              }}
              className="uppercase text-white px-6 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity cursor-pointer"
            >
              {t("Modal1.Continue")}
            </button>
          </div>
        );
      case 5:
        return (
          <div className="items-center flex flex-col p-6 bg-[#161C31] rounded-[8px] h-full justify-between">
            <div className="flex flex-col-reverse md:flex-row mb-6">
              <div className="h-[250px] overflow-y-auto md:h-auto custom-scrollbar">
                <h2 className="text-xl font-bold mb-4 text-white">
                  {t("Modal5.fastDepositWithdrawal")}
                </h2>
                <p className="text-white">{t("Modal5.withdrawalIntro")}</p>
                <ul className="list-decimal pl-6 mt-4 text-white">
                  <li>
                    {t("Modal5.withdrawStep1")}
                    <li>{t("Modal5.withdrawStep2")}</li>
                    <li> {t("Modal5.withdrawStep3")}</li>
                    <li> {t("Modal5.withdrawStep4")}</li>
                  </li>
                </ul>
                <p className="text-white font-bold mb-4">
                  {" "}
                  {t("Modal5.depositIntro")}
                </p>
                <div>
                  <p className="text-white mb-4">{t("Modal5.depositStep1")}</p>
                  <ul className="text-white">
                    <li>1. {t("Modal5.depositStep2")}</li>
                    <li>2. {t("Modal5.depositStep3")}</li>
                    <li>3. {t("Modal5.depositStep4")}</li>
                  </ul>
                </div>
                <p className="text-white pt-2.5 mt-2 font-bold ">
                  {" "}
                  {t("Modal5.important")}
                </p>
                <ul className="text-white list-disc">
                  <li>{t("Modal5.replenishmentRatio")}</li>
                  <li>{t("Modal5.trc20Support")}</li>
                </ul>
              </div>
              <img
                src={phone5}
                alt="App Screenshot"
                className="w-full mb-4 md:w-[50%] md:mb-0"
              />
            </div>
            <button
              onClick={onContinue}
              style={{
                background: "linear-gradient(to right, #007AFF, #F30EFF)",
              }}
              className="uppercase text-white px-6 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity cursor-pointer"
            >
              {t("Modal1.Continue")}
            </button>
          </div>
        );
      case 6:
        return (
          <div className="items-center flex flex-col p-6 bg-[#161C31] rounded-[8px] h-full justify-between">
            <div className="flex flex-col-reverse md:flex-row mb-6">
              <div className="h-[250px] overflow-y-auto md:h-auto custom-scrollbar">
                <h2 className="text-xl font-bold mb-4 text-white">
                  {t("Modal6.dailyTasks")}
                </h2>
                <p className="text-white">{t("Modal6.intro")}</p>

                <div>
                  <p className="text-white mt-4 font-bold mb-4">
                    {" "}
                    {t("Modal6.howItWorks")}
                  </p>
                  <ul className="text-white">
                    <li>{t("Modal6.step1")}</li>
                    <li>{t("Modal6.step2")}</li>
                    <li>{t("Modal6.step3")}</li>
                  </ul>
                </div>
                <p className="text-white pt-2.5 mt-4 font-bold">
                  {t("Modal6.completeTasks")}
                </p>
                <ul className="text-white">
                  <li>{t("Modal6.task1")}</li>
                  <li>{t("Modal6.task2")}</li>
                  <li>{t("Modal6.task3")}</li>
                  <li>{t("Modal6.task4")}</li>
                </ul>
                <p className="text-white mt-4">{t("Modal6.earnNow")}</p>
              </div>
              <img
                src={phone6}
                alt="App Screenshot"
                className="w-full mb-4 md:w-[50%] md:mb-0"
              />
            </div>
            <button
              onClick={onContinue}
              style={{
                background: "linear-gradient(to right, #007AFF, #F30EFF)",
              }}
              className="uppercase text-white px-6 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity cursor-pointer"
            >
              {t("Modal1.Continue")}
            </button>
          </div>
        );
      case 7:
        return (
          <div className="items-center flex flex-col p-6 bg-[#161C31] rounded-[8px] h-full justify-between">
            <div className="flex flex-col-reverse md:flex-row mb-6">
              <div className="h-[250px] overflow-y-auto md:h-auto custom-scrollbar">
                <h2 className="text-xl font-bold mb-4 text-white">
                  {t("Modal7.dailyRewards")}
                </h2>
                <p className="text-white">{t("Modal7.intro")}</p>

                <div>
                  <p className="text-white font-bold mt-4">
                    {" "}
                    {t("Modal7.howItWorks")}
                  </p>
                  <ul className="text-white list-inside list-decimal ">
                    <li>{t("Modal7.step1")}</li>
                    <li>{t("Modal7.step2")}</li>
                    <li>{t("Modal7.step3")}</li>
                  </ul>
                </div>
                <div>
                  <p className="text-white pt-2.5 mt-4 font-bold">
                    {t("Modal7.missedMailbox")}
                  </p>
                  <p className="text-white">
                    {t("Modal7.missedMailboxSolution")}
                  </p>
                </div>
                <div className="text-white mt-4">
                  <p className="font-bold">
                    {" "}
                    {t("Modal7.rewardsForEveryone")}{" "}
                  </p>
                  <p> {t("Modal7.bonusCollection")}</p>
                </div>
                <div className="text-white mt-4">
                  <p className="font-bold">{t("Modal7.plans")}</p>
                  <p>{t("Modal7.futurePlans")}</p>
                </div>
              </div>
              <img
                src={phone7}
                alt="App Screenshot"
                className="w-full mb-4 md:w-[50%] md:mb-0"
              />
            </div>
            <button
              onClick={onContinue}
              style={{
                background: "linear-gradient(to right, #007AFF, #F30EFF)",
              }}
              className="uppercase text-white px-6 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity"
            >
              {t("Modal1.Continue")}
            </button>
          </div>
        );
      case 2:
        return (
          <div className="items-center flex flex-col p-6 bg-[#161C31] rounded-[8px] h-full justify-between ">
            <div className="flex flex-col-reverse md:flex-row mb-6">
              <div className="h-[250px] overflow-y-auto md:h-auto custom-scrollbar">
                <h2 className="text-xl font-bold mb-4 text-white">
                  {t("Modal8.nftMining")}
                </h2>

                <div>
                  <p className="text-white"> {t("Modal8.acquisition")}</p>
                  <ul className="text-white">
                    <li>{t("Modal8.step1")}</li>
                    <li>{t("Modal8.step2")}</li>
                  </ul>
                </div>

                <div className="text-white mt-4">
                  <p className="font-bold">{t("Modal8.whatYouGet")} </p>
                  <ul className="text-white">
                    <li>{t("Modal8.miningSpeed")} </li>
                    <li>{t("Modal8.tokensCredited")}</li>
                  </ul>
                </div>

                <div className="text-white mt-4">
                  <p className="font-bold"> {t("Modal8.features")}</p>
                  <ul>
                    <li>{t("Modal8.feature1")}</li>
                    <li>{t("Modal8.feature2")} </li>
                  </ul>
                </div>
                <div className="text-white mt-4">
                  <p className="font-black">{t("Modal8.whyProfitable")}</p>
                  <ul className="text-white list-disc list-inside">
                    <li>{t("Modal8.passiveIncome")}</li>
                    <li>{t("Modal8.simplicity")}</li>
                    <li>{t("Modal8.earlyStart")}</li>
                  </ul>
                </div>
              </div>
              <img
                src={phone5}
                alt="App Screenshot"
                className="w-full mb-4 md:w-[50%] md:mb-0"
              />
            </div>
            <button
              onClick={onContinue}
              style={{
                background: "linear-gradient(to right, #007AFF, #F30EFF)",
              }}
              className="uppercase text-white px-6 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity cursor-pointer"
            >
              {t("Modal1.Continue")}
            </button>
          </div>
        );
      case 3:
        return (
          <div className="items-center flex flex-col p-6 bg-[#161C31] rounded-[8px] h-full justify-between">
            <div className="flex flex-col-reverse md:flex-row mb-6">
              <div className="h-[250px] overflow-y-auto md:h-auto text-white custom-scrollbar">
                <h2 className="text-xl font-bold mb-4 text-white">
                  {t("Modal9.stakingMechanics")}
                </h2>
                <p>{t("Modal9.intro")}</p>
                <div>
                  <p className="text-white mt-4"> {t("Modal9.howItWorks")}</p>
                  <ul className="list-disc list-inside text-white mt-4">
                    <li>{t("Modal9.step1")}</li>
                    <li> {t("Modal9.step2")}</li>
                    <li> {t("Modal9.step3")}.</li>
                    <li>{t("Modal9.step4")}</li>
                    <li> {t("Modal9.noCommission")}</li>
                    <li> {t("Modal9.futurePlans")}</li>
                  </ul>
                </div>

                <div className="mt-4 text-white">
                  <p className="font-bold"> {t("Modal9.important")}</p>
                  <ul className="list-disc list-inside text-white">
                    <li>{t("Modal9.yieldCalculation")} </li>
                  </ul>
                </div>
              </div>
              <img
                src={phone5}
                alt="App Screenshot"
                className="w-full mb-4 md:w-[50%] md:mb-0"
              />
            </div>
            <button
              onClick={onContinue}
              style={{
                background: "linear-gradient(to right, #007AFF, #F30EFF)",
              }}
              className="uppercase text-white px-6 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity cursor-pointer"
            >
              {t("Modal1.Continue")}
            </button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <Modal
      open={isVisible}
      onCancel={onClose}
      footer={null}
      width={900}
      className="feature-modal"
    >
      {getModalContent()}
    </Modal>
  );
};

export default FeatureModal;
