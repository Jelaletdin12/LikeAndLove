import React, { useState } from "react";
import phone1 from "../assets/phone1.png";
import phone2 from "../assets/phone2.png";
import phone3 from "../assets/phone3.png";
import phone4 from "../assets/phone4.png";
import phone5 from "../assets/phone5.png";
import phone6 from "../assets/phone6.png";
import phone7 from "../assets/phone7.png";
import FeatureModal from "./FeatureCardModal";

const FeatureCards = () => {
  const [selectedFeature, setSelectedFeature] = useState(null);
  const features = [
    {
      title: {
        regular: "The first step",
        highlight: "IN THE APP",
        hasQuestionMark: false,
      },
      image: phone1,
    },
    {
      title: {
        regular: "Prizes from",
        highlight: "WHEEL OF FORTUNE",
        hasQuestionMark: true,
      },
      image: phone2,
    },
    {
      title: {
        regular: "Passive income on",
        highlight: "STACKING",
        hasQuestionMark: true,
      },
      image: phone3,
    },
    {
      title: {
        regular: "How it works",
        highlight: "CONVERSION",
        hasQuestionMark: true,
      },
      image: phone4,
    },
    {
      title: {
        regular: "Fast",
        highlight: "DEPOSIT",
        secondLine: {
          regular: "and",
          highlight: "WITHDRAWAL",
          end: "of funds?",
        },
      },
      image: phone5,
    },
    {
      title: {
        regular: "Daily",
        highlight: "TASKS",
        hasQuestionMark: true,
      },
      image: phone6,
    },
    {
      title: {
        regular: "What kind of",
        highlight: "GAMES",
        secondLine: {
          regular: "are there for making money",
          hasQuestionMark: true,
        },
      },
      image: phone7,
    },
    {
      title: {
        regular: "How does",
        highlight: "Mining",
        secondLine: {
          regular: "work",
          hasQuestionMark: true,
        },
      },
      image: phone5,
    },
    {
      title: {
        regular: "How does",
        highlight: "sending",
        secondLine: {
          regular: "work",
          hasQuestionMark: true,
        },
      },
      image: phone5,
    },
  ];

  return (
    <div className="min-h-screen max-w-6xl m-auto mb-10 pt-28">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
        {features.map((feature, index) => (
          <div
            key={index}
            className="relative p-[3px] rounded-3xl shadow-[0_0px_20px_rgba(0,122,255,1)]"
          >
            <div
              className="absolute inset-0  rounded-[8px] pointer-events-none"
              style={{ background: "linear-gradient(45deg, #007AFF, #F30EFF)" }}
            />
            <div className="relative bg-[#161c31] p-6 rounded-[8px] h-full flex flex-col items-center">
              {/* Phone Image */}
              <div className="mb-6">
                <img
                  src={feature.image}
                  alt="Phone Screenshot"
                  className="w-full h-auto"
                />
              </div>

              {/* Title */}
              <div className="text-center mb-4">
                <p className="text-white">
                  {feature.title.regular}{" "}
                  <span className="text-[#007AFF] font-bold">
                    {feature.title.highlight}
                  </span>
                  {feature.title.hasQuestionMark ? "?" : ""}
                </p>
                {feature.title.secondLine && (
                  <p className="text-white">
                    {feature.title.secondLine.regular}{" "}
                    {feature.title.secondLine.highlight && (
                      <span className="text-[#007AFF] font-bold">
                        {feature.title.secondLine.highlight}
                      </span>
                    )}{" "}
                    {feature.title.secondLine.end || ""}
                    {feature.title.secondLine.hasQuestionMark ? "?" : ""}
                  </p>
                )}
              </div>

              {/* Button */}
              <button className="bg-white text-black font-semibold py-3 px-6 rounded-full flex items-center gap-2"
               onClick={() => setSelectedFeature(feature)}
              >
                MORE DETAILED
                <svg
                  className="w-5 h-5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
      {selectedFeature && (
        <FeatureModal
          feature={selectedFeature}
          isVisible={!!selectedFeature}
          onClose={() => setSelectedFeature(null)}
        />
      )}
    </div>
  );
};

export default FeatureCards;
