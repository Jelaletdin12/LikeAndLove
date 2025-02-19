import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { CircleArrowRight } from "lucide-react";
import twitter from "../assets/x.png";
import youtube from "../assets/youtube.png";
import tiktok from "../assets/tiktok.png";
import telegram from "../assets/telegram.png";
import telegramBot from "../assets/telegrambot.png";
import instagram from "../assets/instagram.png";
import email from "../assets/email.png";
import getgames from "../assets/getgames.png";
import discord from "../assets/discord.png";
import { useTranslation } from "react-i18next";
const ContactForm = () => {
  const { t, i18n } = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponseMessage("");

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbx_al4dZ96CwaJVyAZjVEkQQSGl0pmhRd3tezPiTjKh3tv73W4brv190SCQz7HMx_sU/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

     
      setResponseMessage("Message sent successfully!");
    
    } catch (error) {
      setResponseMessage("Failed to send message.");
      console.error("Error:", error);
    } finally {
      setLoading(false);
      setFormData({ name: "", email: "", message: "" });
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const socialLinks = [
    { name: "X (Twitter)", icon: twitter, link: "#" },
    { name: "YouTube", icon: youtube, link: "#" },
    { name: "TikTok", icon: tiktok, link: "#" },
    { name: "Telegram", icon: telegram, link: "#" },
    { name: "Telegram Bot", icon: telegramBot, link: "#" },
    { name: "Instagram", icon: instagram, link: "#" },
    { name: "E-mail", icon: email, link: "#" },
    { name: "GetGames", icon: getgames, link: "#" },
    { name: "Discord", icon: discord, link: "#" },
  ];

  return (
    <div className="max-w-6xl mx-auto p-4">
      {/* Header */}
      <div className="flex items-center justify-center gap-3 mb-4">
        <img src={Logo} alt="Like & Love" className="w-12 h-12 rounded-full" />
        <h1 className="text-4xl font-bold md:text-6xl flex items-baseline">
          <span className="text-[#007AFF]">LIKE</span>
          <span className="text-white">&</span>
          <span className="text-[#007AFF]">LOVE</span>
          <span className="text-white text-2xl"> PROJECT</span>
        </h1>
      </div>

      <p className="text-center text-white mb-8">
      {t("ContactForm.Wearealwaysopentonewpartnerships")} 
      </p>

      {/* Contact Form */}
      <div className="relative rounded-xl overflow-hidden mb-16 p-[3px]">
        <div style={{
        background: "linear-gradient(to right, #007AFF, #F30EFF)",
      }} className="absolute inset-0 rounded-xl bg-gradient-to-r  opacity-50" />

        <div className="relative bg-[#161C31] rounded-xl p-8">
          <h2 className="text-2xl text-[#007AFF] text-center mb-4">
          {t("ContactForm.CONTACTUS")} 
          </h2>
          <p className="text-center text-white mb-8">
          {t("ContactForm.Wearealwaysintouchandopentonewsuggestions")} 
          </p>

          <form onSubmit={handleSubmit} className="space-y-6 ">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-5">
              <input
                type="text"
                name="name"
                placeholder="Name:"
                className="bg-[#1d293d] rounded-lg p-3 text-white w-full"
                onChange={handleChange}
                value={formData.name}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="E-mail:"
                className="bg-[#1d293d] rounded-lg p-3 text-white w-full"
                onChange={handleChange}
                value={formData.email}
                required
              />
            </div>
            <textarea
              name="message"
              placeholder="Messages"
              rows={4}
              className="bg-[#1d293d] rounded-lg p-3 text-white w-full mb-4"
              onChange={handleChange}
              value={formData.message}
              required
            />
            <div className="flex justify-center">
              <button
                type="submit"
                className=" w-full md:w-max justify-center text-white px-8 py-2 rounded-[8px] hover:opacity-90 transition-opacity flex items-center gap-4"
                disabled={loading}
                style={{
                  background: "linear-gradient(to right, #007AFF, #F30EFF)",
                }}
              >
                {loading ? "Sending..." : "SEND"}
                <CircleArrowRight />
              </button>
            </div>
            {responseMessage && (
              <p className="text-center text-white mt-4">{responseMessage}</p>
            )}
          </form>
        </div>
      </div>

      {/* Social Networks */}
      <div className="text-center w-full mb-4">
        <h2 className="text-2xl font-bold text-white mb-8">   {t("ContactForm.SOCIALNETWORK")} </h2>
        <div className="grid grid-cols-2 md:flex md:justify-evenly">
          {socialLinks.map((social, index) => (
            <div
            className={`flex flex-col items-center gap-1 hover:shadow-[0_0px_35px_rgba(0,122,255,1)] hover:border-[2px] hover:border-[solid] hover:border-[#007AFF] hover:p-2 rounded-lg p-2 transition-all duration-300 ${
              index === socialLinks.length - 1 ? "col-span-2 mx-auto md:col-span-0 md:m-0" : ""
            }`}
              key={index}
              title={social.name}
            >
              <a href={social.link} target="_blank" rel="noopener noreferrer">
                <img src={social.icon} alt={social.name} />
              </a>
              <div>
                <p className="text-[#007AFF]">{social.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
