import React from "react";
import tick from "../assets/tick.svg";
import { useTranslation } from "react-i18next";
const NFTCardDetails = ({ type }) => {
  const { t, i18n } = useTranslation();
  const details = {
    silver: (
      <div className="mt-4 space-y-2 p-2.5">
        <div className="flex flex-col gap-4">
          <h3 className="text-white font-bold">
            {" "}
            {t("silverCard.Advantages")}
          </h3>
          <div className="flex items-center space-x-2">
            <div className="bg-[#34C759] rounded-full w-[28px] h-[28px] flex justify-center items-center mr-2">
              <img src={tick} alt="" />
            </div>
            <div>
              <span className="text-[14px] font-[600] text-white">
                {t("silverCard.fee")}
              </span>
              <div className="flex">
                <span className="text-[#A2ACB0] text-[12px] font-bold mr-1">
                  1 %
                </span>
                <span className="text-[#A2ACB0] text-[12px]">
                  {" "}
                  {t("silverCard.amount")}
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="bg-[#34C759] rounded-full w-[28px] h-[28px] flex justify-center items-center mr-2">
              <img src={tick} alt="" />
            </div>
            <div>
              <span className="text-[14px] font-[600] text-white">
                {t("silverCard.USDT")}
              </span>
              <div className="flex">
                <span className="text-[#A2ACB0] text-[12px] font-bold mr-1">
                  0.025 USDT
                </span>
                <span className="text-[#A2ACB0] text-[12px]">
                  {t("silverCard.Amount")}
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="bg-[#34C759] rounded-full w-[28px] h-[28px] flex justify-center items-center mr-2">
              <img src={tick} alt="" />
            </div>
            <div>
              <span className="text-[14px] font-[600] text-white">
                {t("silverCard.TON")}
              </span>
              <div className="flex">
                <span className="text-[#A2ACB0] text-[12px] font-bold mr-1">
                  0,0048 TON
                </span>
                <span className="text-[#A2ACB0] text-[12px]">
                  {t("silverCard.tonAmount")}
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="bg-[#34C759] rounded-full w-[28px] h-[28px] flex justify-center items-center mr-2">
              <img src={tick} alt="" />
            </div>
            <div>
              <span className="text-[14px] font-[600] text-white">
                {t("silverCard.Like")}
              </span>
              <div className="flex">
                <span className="text-[#A2ACB0] text-[12px] font-bold mr-1">
                  20 Like
                </span>
                <span className="text-[#A2ACB0] text-[12px]">
                  {t("silverCard.loveAmount")}
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="bg-[#34C759] rounded-full w-[28px] h-[28px] flex justify-center items-center mr-2">
              <img src={tick} alt="" />
            </div>
            <div>
              <span className="text-[14px] font-[600] text-white">
                {t("silverCard.love")}
              </span>
              <div className="flex">
                <span className="text-[#A2ACB0] text-[12px] font-bold mr-1">
                  2 %
                </span>
                <span className="text-[#A2ACB0] text-[12px]">
                  {t("silverCard.loveAmount")}
                </span>
              </div>
            </div>
          </div>
          {/* <div className="flex items-center space-x-2">
            <div className="bg-[#34C759] rounded-full w-[28px] h-[28px] flex justify-center items-center">
              <img src={tick} alt="" />
            </div>
            <div>
              <span className="text-[14px] font-[600] text-white">
                Особые привелегии в Telegram
              </span>
            </div>
          </div> */}
        </div>
      </div>
    ),
    gold: (
      <div className="mt-4 space-y-2 p-2.5">
        <div className="flex flex-col gap-4">
          <h3 className="text-white font-bold">
            {" "}
            {t("silverCard.Advantages")}
          </h3>
          <div className="flex items-center space-x-2">
            <div className="bg-[#34C759] rounded-full w-[28px] h-[28px] flex justify-center items-center mr-2">
              <img src={tick} alt="" />
            </div>
            <div>
              <span className="text-[14px] font-[600] text-white">
                {t("silverCard.fee")}
              </span>
              <div className="flex">
                <span className="text-[#A2ACB0] text-[12px] font-bold mr-1">
                  0.75 %
                </span>
                <span className="text-[#A2ACB0] text-[12px]">
                  {" "}
                  {t("silverCard.amount")}
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="bg-[#34C759] rounded-full w-[28px] h-[28px] flex justify-center items-center mr-2">
              <img src={tick} alt="" />
            </div>
            <div>
              <span className="text-[14px] font-[600] text-white">
                {t("silverCard.USDT")}
              </span>
              <div className="flex">
                <span className="text-[#A2ACB0] text-[12px] font-bold mr-1">
                  0,011299 USDT
                </span>
                <span className="text-[#A2ACB0] text-[12px]">
                  {t("silverCard.Amount")}
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="bg-[#34C759] rounded-full w-[28px] h-[28px] flex justify-center items-center mr-2">
              <img src={tick} alt="" />
            </div>
            <div>
              <span className="text-[14px] font-[600] text-white">
                {t("silverCard.TON")}
              </span>
              <div className="flex">
                <span className="text-[#A2ACB0] text-[12px] font-bold mr-1">
                  0,0022 TON
                </span>
                <span className="text-[#A2ACB0] text-[12px]">
                  {t("silverCard.Amount")}
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="bg-[#34C759] rounded-full w-[28px] h-[28px] flex justify-center items-center mr-2">
              <img src={tick} alt="" />
            </div>
            <div>
              <span className="text-[14px] font-[600] text-white">
                {t("silverCard.Like")}
              </span>
              <div className="flex">
                <span className="text-[#A2ACB0] text-[12px] font-bold mr-1">
                  10 Like
                </span>
                <span className="text-[#A2ACB0] text-[12px]">
                  {t("silverCard.Amount")}
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="bg-[#34C759] rounded-full w-[28px] h-[28px] flex justify-center items-center mr-2">
              <img src={tick} alt="" />
            </div>
            <div>
              <span className="text-[14px] font-[600] text-white">
                {t("silverCard.love")}
              </span>
              <div className="flex">
                <span className="text-[#A2ACB0] text-[12px] font-bold mr-1">
                  1%
                </span>
                <span className="text-[#A2ACB0] text-[12px]">
                  {t("silverCard.Amount")}
                </span>
              </div>
            </div>
          </div>
          {/* <div className="flex items-center space-x-2">
            <div className="bg-[#34C759] rounded-full w-[28px] h-[28px] flex justify-center items-center">
              <img src={tick} alt="" />
            </div>
            <div>
              <span className="text-[14px] font-[600] text-white">
                Особые привелегии в Telegram
              </span>
            </div>
          </div> */}
        </div>
      </div>
    ),
    platinum: (
      <div className="mt-4 space-y-2 p-2.5">
        <div className="flex flex-col gap-4">
          <h3 className="text-white font-bold">
            {" "}
            {t("silverCard.Advantages")}
          </h3>
          <div className="flex items-center space-x-2">
            <div className="bg-[#34C759] rounded-full w-[28px] h-[28px] flex justify-center items-center mr-2">
              <img src={tick} alt="" />
            </div>
            <div>
              <span className="text-[14px] font-[600] text-white">
                {t("silverCard.fee")}
              </span>
              <div className="flex">
                <span className="text-[#A2ACB0] text-[12px] font-bold mr-1">
                  0.5 %
                </span>
                <span className="text-[#A2ACB0] text-[12px]">
                  {" "}
                  {t("silverCard.amount")}
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="bg-[#34C759] rounded-full w-[28px] h-[28px] flex justify-center items-center mr-2">
              <img src={tick} alt="" />
            </div>
            <div>
              <span className="text-[14px] font-[600] text-white">
                {t("silverCard.USDT")}
              </span>
              <div className="flex">
                <span className="text-[#A2ACB0] text-[12px] font-bold mr-1">
                  0.00999 USDT
                </span>
                <span className="text-[#A2ACB0] text-[12px]">
                  {t("silverCard.Amount")}
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="bg-[#34C759] rounded-full w-[28px] h-[28px] flex justify-center items-center mr-2">
              <img src={tick} alt="" />
            </div>
            <div>
              <span className="text-[14px] font-[600] text-white">
                {t("silverCard.TON")}
              </span>
              <div className="flex">
                <span className="text-[#A2ACB0] text-[12px] font-bold mr-1">
                  0,0019 TON
                </span>
                <span className="text-[#A2ACB0] text-[12px]">
                  {t("silverCard.Amount")}
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="bg-[#34C759] rounded-full w-[28px] h-[28px] flex justify-center items-center mr-2">
              <img src={tick} alt="" />
            </div>
            <div>
              <span className="text-[14px] font-[600] text-white">
                {t("silverCard.Like")}
              </span>
              <div className="flex">
                <span className="text-[#A2ACB0] text-[12px]">
                  {t("platinumCard.NocommissionforLove")}
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="bg-[#34C759] rounded-full w-[28px] h-[28px] flex justify-center items-center mr-2">
              <img src={tick} alt="" />
            </div>
            <div>
              <span className="text-[14px] font-[600] text-white">
                {t("silverCard.love")}
              </span>
              <div className="flex">
                <span className="text-[#A2ACB0] text-[12px]">
                  {t("platinumCard.NocommissionforLove")}
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="bg-[#34C759] rounded-full w-[28px] h-[28px] flex justify-center items-center mr-2">
              <img src={tick} alt="" />
            </div>
            <div>
              <span className="text-[14px] font-[600] text-white">
                {t("platinumCard.SpecialprivilegesinTelegram")}
              </span>
            </div>
          </div>
        </div>
      </div>
    ),
  }[type];

  return details;
};

export default NFTCardDetails;
