import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { Twitter, Youtube, Mail, MessageCircle, Send } from "lucide-react";
import twitter from "../assets/x.png";
import youtube from "../assets/youtube.png";
import tiktok from "../assets/tiktok.png";
import telegram from "../assets/telegram.png";
import telegramBot from "../assets/telegramBot.png";
import instagram from "../assets/instagram.png";
import email from "../assets/email.png";
import getgames from "../assets/getGames.png";
import discord from "../assets/discord.png";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
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
    <div className="max-w-6xl mx-auto p-8">
      {/* Header */}
      <div className="flex items-center justify-center gap-3 mb-4">
        <img src={Logo} alt="Like & Love" className="w-12 h-12 rounded-full" />
        <h1 className="text-2xl font-bold">
          <span className="text-blue-500">LIKE</span>
          <span className="text-white">&</span>
          <span className="text-blue-500">LOVE</span>
          <span className="text-white"> PROJECT</span>
        </h1>
      </div>

      <p className="text-center text-gray-300 mb-8">
        We are always open to new partnerships.
        <br />
        Please describe your offer in the contact form below.
      </p>

      {/* Contact Form */}
      <div className="relative rounded-xl overflow-hidden mb-16 p-[3px]">
        {/* Gradient border */}
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#007AFF] to-[#F30EFF] opacity-50" />

        <div className="relative bg-[#161C31]  rounded-xl p-8">
          <h2 className="text-2xl text-blue-500 text-center mb-4">
            CONTACT US
          </h2>
          <p className="text-center text-gray-300 mb-8">
            We are always in touch and open to new suggestions!
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                placeholder="Name:"
                className="bg-slate-800 rounded-lg p-3 text-white w-full"
                onChange={handleChange}
                value={formData.name}
              />
              <input
                type="email"
                name="email"
                placeholder="E-mail:"
                className="bg-slate-800 rounded-lg p-3 text-white w-full"
                onChange={handleChange}
                value={formData.email}
              />
            </div>
            <textarea
              name="message"
              placeholder="Messages"
              rows={4}
              className="bg-slate-800 rounded-lg p-3 text-white w-full"
              onChange={handleChange}
              value={formData.message}
            />
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-2 rounded-2xl hover:opacity-90 transition-opacity flex items-center gap-2"
              >
                SEND
                <Send className="w-4 h-4" />
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Social Networks */}
      <div className="text-center">
        <h2 className="text-2xl font-bold text-white mb-8">SOCIAL NETWORK</h2>
        <div className="flex  justify-center gap-6">
          {socialLinks.map((social, index) => (
            <div
              className="flex flex-col items-center  gap-1 hover:shadow-[0_0px_35px_rgba(0,122,255,1)] hover:border-[2px] hover:border-[solid] hover:border-[#007AFF] hover:p-[15px] rounded-[8px]"
              key={index}
              href={social.link}
              title={social.name}
            >
              <a>
                <img src={social.icon} />
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
