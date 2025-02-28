import React, { useState } from "react";
import phone1 from "../assets/phone1.gif";
import phone2 from "../assets/phone2.gif";
import phone3 from "../assets/phone3.gif";
import phone4 from "../assets/phone4.gif";
import phone5 from "../assets/phone5.gif";
import phone6 from "../assets/phone6.gif";
import phone7 from "../assets/phone7.gif";
import phone8 from "../assets/phone8.gif";
import phone9 from "../assets/phone9.gif";
import FeatureModal from "./FeatureCardModal";
import { useTranslation } from "react-i18next";
import { CircleArrowRight } from "lucide-react";
const FeatureCards = () => {
  const { t } = useTranslation();
  const [selectedFeatureId, setSelectedFeatureId] = useState(null);
  const features = [
    {
      title: {
        id: 1,
        regular: t("FeatureCards.Thefirststep"),
        highlight: t("FeatureCards.INTHEAPP"),
        hasQuestionMark: false,
      },
      image: phone1,
    },
    {
      title: {
        id: 2,
        regular: t("FeatureCards.Howdoes"),
        highlight: t("FeatureCards.Mining"),
        secondLine: {
          regular: t("FeatureCards.work"),
          hasQuestionMark: true,
        },
      },
      image: phone5,
    },

    {
      title: {
        id: 3,
        regular: t("FeatureCards.Passiveincomeon"),
        highlight: t("FeatureCards.STACKING"),
        hasQuestionMark: true,
      },
      image: phone3,
    },
    {
      title: {
        id: 4,
        regular: t("FeatureCards.Howitworks"),
        highlight: t("FeatureCards.CONVERSION"),
        hasQuestionMark: true,
      },
      image: phone4,
    },
    {
      title: {
        id: 5,
        regular: t("FeatureCards.Fast"),
        highlight: t("FeatureCards.DEPOSIT"),
        secondLine: {
          regular: t("FeatureCards.and"),
          highlight: t("FeatureCards.WITHDRAWAL"),
          end: t("FeatureCards.offunds"),
        },
      },
      image: phone5,
    },
    {
      title: {
        id: 6,
        regular: t("FeatureCards.Daily"),
        highlight: t("FeatureCards.TASKS"),
        hasQuestionMark: true,
      },
      image: phone6,
    },
    {
      title: {
        id: 7,
        regular: t("FeatureCards.Whatkindof"),
        highlight: t("FeatureCards.GAMES"),
        secondLine: {
          regular: t("FeatureCards.arethereformakingmoney"),
          hasQuestionMark: true,
        },
      },
      image: phone7,
    },
    {
      title: {
        id: 8,
        regular: t("FeatureCards.Prizesfrom"),
        highlight: t("FeatureCards.WHEELOFFORTUNE"),
        hasQuestionMark: true,
      },
      image: phone2,
    },
    {
      title: {
        id: 9,
        regular: t("FeatureCards.Howdoes"),
        highlight: t("FeatureCards.sending"),
        secondLine: {
          regular: t("FeatureCards.work"),
          hasQuestionMark: true,
        },
      },
      image: phone5,
    },
  ];

  const handleContinue = () => {
    const currentIndex = features.findIndex(
      (f) => f.title.id === selectedFeatureId
    );
    if (currentIndex < features.length - 1) {
      setSelectedFeatureId(features[currentIndex + 1].title.id);
    } else {
      setSelectedFeatureId(null);
    }
  };

  const selectedFeature = features.find(
    (f) => f.title.id === selectedFeatureId
  );

  return (
    <div className="min-h-screen max-w-6xl m-auto mb-10 pt-28 p-4">
      <h1 className="text-6xl font-bold text-white text-center flex justify-center mb-10">
        FAQ
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
        {features.map((feature, index) => (
          <div
            key={index}
            className="relative p-[3px] rounded-3xl shadow-[0_0px_20px_rgba(0,122,255,1)]"
          >
            <div
              className="absolute inset-0  rounded-[15px] pointer-events-none"
              style={{ background: "linear-gradient(45deg, #007AFF, #F30EFF)" }}
            />
            <div className="relative bg-[#161c31] p-6 rounded-[15px] h-full flex flex-col justify-between items-center">
              {/* Phone Image */}
              <div className="mb-6">
                <img
                  src={feature.image}
                  alt="Phone Screenshot"
                  className="w-full h-auto"
                />
              </div>
              <div className="flex flex-col items-center ">
                {/* Title */}
                <div className="text-center mb-4 w-full">
                  <p className="text-white">
                    {feature.title.regular}{" "}
                    <span className="text-white font-bold">
                      {feature.title.highlight}
                    </span>
                    {feature.title.hasQuestionMark}
                  </p>
                  {feature.title.secondLine && (
                    <p className="text-white">
                      {feature.title.secondLine.regular}{" "}
                      {feature.title.secondLine.highlight && (
                        <span className="text-white font-bold">
                          {feature.title.secondLine.highlight}
                        </span>
                      )}{" "}
                      {feature.title.secondLine.end || ""}
                      {feature.title.secondLine.hasQuestionMark}
                    </p>
                  )}
                </div>

                {/* Button */}
                <button
                  className="bg-white  text-black font-bold py-2 md:py-3 px-6 rounded-[8px]  flex items-center gap-2 cursor-pointer"
                  onClick={() => setSelectedFeatureId(feature.title.id)}
                >
                  {t("FeatureCards.MOREDETAILED")}
                  <CircleArrowRight />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      {selectedFeature && (
        <FeatureModal
          feature={selectedFeature}
          isVisible={!!selectedFeature}
          onClose={() => setSelectedFeatureId(null)}
          onContinue={handleContinue}
          isLastFeature={selectedFeature.title.id === features.length}
        />
      )}
    </div>
  );
};

export default FeatureCards;
