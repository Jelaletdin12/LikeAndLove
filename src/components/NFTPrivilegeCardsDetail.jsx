import React from "react";
import tick from "../assets/tick.svg";

const NFTCardDetails = ({ type }) => {
  const details = {
    silver: (
      <div className="mt-4 space-y-2 p-2.5">
        <div className="flex flex-col gap-4">
          <div className="flex items-center space-x-2">
            <div className="bg-[#34C759] rounded-full w-[28px] h-[28px] flex justify-center items-center">
              <img src={tick} alt="" />
            </div>
            <div>
              <span className="text-[14px] font-[600] text-white">
                Комиссия за конвертацию
              </span>
              <div className="flex">
                <span className="text-[#A2ACB0] text-[12px] font-bold mr-1">
                  0.5 %
                </span>
                <span className="text-[#A2ACB0] text-[12px]">от суммы</span>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="bg-[#34C759] rounded-full w-[28px] h-[28px] flex justify-center items-center">
              <img src={tick} alt="" />
            </div>
            <div>
              <span className="text-[14px] font-[600] text-white">
                Комиссия за отправку USDT
              </span>
              <div className="flex">
                <span className="text-[#A2ACB0] text-[12px] font-bold mr-1">
                  0.00999 USDT
                </span>
                <span className="text-[#A2ACB0] text-[12px]">
                  независимо от суммы
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="bg-[#34C759] rounded-full w-[28px] h-[28px] flex justify-center items-center">
              <img src={tick} alt="" />
            </div>
            <div>
              <span className="text-[14px] font-[600] text-white">
                Комиссия за отправку TON
              </span>
              <div className="flex">
                <span className="text-[#A2ACB0] text-[12px] font-bold mr-1">
                  0,0019 TON
                </span>
                <span className="text-[#A2ACB0] text-[12px]">
                  независимо от суммы
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="bg-[#34C759] rounded-full w-[28px] h-[28px] flex justify-center items-center">
              <img src={tick} alt="" />
            </div>
            <div>
              <span className="text-[14px] font-[600] text-white">
                Комиссия за отправку Like
              </span>
              <div className="flex">
                <span className="text-[#A2ACB0] text-[12px]">
                  Нет комиссии за Like !
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="bg-[#34C759] rounded-full w-[28px] h-[28px] flex justify-center items-center">
              <img src={tick} alt="" />
            </div>
            <div>
              <span className="text-[14px] font-[600] text-white">
                Комиссия за отправку Love
              </span>
              <div className="flex">
                <span className="text-[#A2ACB0] text-[12px]">
                  Нет комиссии за Like !
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="bg-[#34C759] rounded-full w-[28px] h-[28px] flex justify-center items-center">
              <img src={tick} alt="" />
            </div>
            <div>
              <span className="text-[14px] font-[600] text-white">
                Особые привелегии в Telegram
              </span>
            </div>
          </div>
        </div>
      </div>
    ),
    gold: (
      <div className="mt-4 space-y-2 p-2.5">
        <div className="flex flex-col gap-4">
          <div className="flex items-center space-x-2">
            <div className="bg-[#34C759] rounded-full w-[28px] h-[28px] flex justify-center items-center">
              <img src={tick} alt="" />
            </div>
            <div>
              <span className="text-[14px] font-[600] text-white">
                Комиссия за конвертацию hh
              </span>
              <div className="flex">
                <span className="text-[#A2ACB0] text-[12px] font-bold mr-1">
                  0.5 %
                </span>
                <span className="text-[#A2ACB0] text-[12px]">от суммы</span>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="bg-[#34C759] rounded-full w-[28px] h-[28px] flex justify-center items-center">
              <img src={tick} alt="" />
            </div>
            <div>
              <span className="text-[14px] font-[600] text-white">
                Комиссия за отправку USDT
              </span>
              <div className="flex">
                <span className="text-[#A2ACB0] text-[12px] font-bold mr-1">
                  0.00999 USDT
                </span>
                <span className="text-[#A2ACB0] text-[12px]">
                  независимо от суммы
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="bg-[#34C759] rounded-full w-[28px] h-[28px] flex justify-center items-center">
              <img src={tick} alt="" />
            </div>
            <div>
              <span className="text-[14px] font-[600] text-white">
                Комиссия за отправку TON
              </span>
              <div className="flex">
                <span className="text-[#A2ACB0] text-[12px] font-bold mr-1">
                  0,0019 TON
                </span>
                <span className="text-[#A2ACB0] text-[12px]">
                  независимо от суммы
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="bg-[#34C759] rounded-full w-[28px] h-[28px] flex justify-center items-center">
              <img src={tick} alt="" />
            </div>
            <div>
              <span className="text-[14px] font-[600] text-white">
                Комиссия за отправку Like
              </span>
              <div className="flex">
                <span className="text-[#A2ACB0] text-[12px]">
                  Нет комиссии за Like !
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="bg-[#34C759] rounded-full w-[28px] h-[28px] flex justify-center items-center">
              <img src={tick} alt="" />
            </div>
            <div>
              <span className="text-[14px] font-[600] text-white">
                Комиссия за отправку Love
              </span>
              <div className="flex">
                <span className="text-[#A2ACB0] text-[12px]">
                  Нет комиссии за Like !
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="bg-[#34C759] rounded-full w-[28px] h-[28px] flex justify-center items-center">
              <img src={tick} alt="" />
            </div>
            <div>
              <span className="text-[14px] font-[600] text-white">
                Особые привелегии в Telegram
              </span>
            </div>
          </div>
        </div>
      </div>
    ),
    platinum: (
      <div className="mt-4 space-y-2 p-2.5">
        <div className="flex flex-col gap-4">
          <div className="flex items-center space-x-2">
            <div className="bg-[#34C759] rounded-full w-[28px] h-[28px] flex justify-center items-center">
              <img src={tick} alt="" />
            </div>
            <div>
              <span className="text-[14px] font-[600] text-white">
                Комиссия за конвертацию
              </span>
              <div className="flex">
                <span className="text-[#A2ACB0] text-[12px] font-bold mr-1">
                  0.5 %
                </span>
                <span className="text-[#A2ACB0] text-[12px]">от суммы</span>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="bg-[#34C759] rounded-full w-[28px] h-[28px] flex justify-center items-center">
              <img src={tick} alt="" />
            </div>
            <div>
              <span className="text-[14px] font-[600] text-white">
                Комиссия за отправку USDT
              </span>
              <div className="flex">
                <span className="text-[#A2ACB0] text-[12px] font-bold mr-1">
                  0.00999 USDT
                </span>
                <span className="text-[#A2ACB0] text-[12px]">
                  независимо от суммы
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="bg-[#34C759] rounded-full w-[28px] h-[28px] flex justify-center items-center">
              <img src={tick} alt="" />
            </div>
            <div>
              <span className="text-[14px] font-[600] text-white">
                Комиссия за отправку TON
              </span>
              <div className="flex">
                <span className="text-[#A2ACB0] text-[12px] font-bold mr-1">
                  0,0019 TON
                </span>
                <span className="text-[#A2ACB0] text-[12px]">
                  независимо от суммы
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="bg-[#34C759] rounded-full w-[28px] h-[28px] flex justify-center items-center">
              <img src={tick} alt="" />
            </div>
            <div>
              <span className="text-[14px] font-[600] text-white">
                Комиссия за отправку Like
              </span>
              <div className="flex">
                <span className="text-[#A2ACB0] text-[12px]">
                  Нет комиссии за Like !
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="bg-[#34C759] rounded-full w-[28px] h-[28px] flex justify-center items-center">
              <img src={tick} alt="" />
            </div>
            <div>
              <span className="text-[14px] font-[600] text-white">
                Комиссия за отправку Love
              </span>
              <div className="flex">
                <span className="text-[#A2ACB0] text-[12px]">
                  Нет комиссии за Like !
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="bg-[#34C759] rounded-full w-[28px] h-[28px] flex justify-center items-center">
              <img src={tick} alt="" />
            </div>
            <div>
              <span className="text-[14px] font-[600] text-white">
                Особые привелегии в Telegram
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