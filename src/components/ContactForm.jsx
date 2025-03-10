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

  // Add validation state
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");
  const [responseType, setResponseType] = useState(""); // success or error

  // Validation functions
  const validateName = (name) => {
    if (!name.trim()) return t("Validation.nameRequired");
    if (name.trim().length < 2) return t("Validation.nameMinLength");
    if (name.trim().length > 50) return t("Validation.nameMaxLength");
    if (!/^[\p{L}\s'-]+$/u.test(name)) return t("Validation.nameInvalid");
    return "";
  };

  const validateEmail = (email) => {
    if (!email.trim()) return t("Validation.emailRequired");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      return t("Validation.emailInvalid");
    return "";
  };

  const validateMessage = (message) => {
    if (!message.trim()) return t("Validation.messageRequired");
    if (message.trim().length < 10) return t("Validation.messageMinLength");
    if (message.trim().length > 1000) return t("Validation.messageMaxLength");
    return "";
  };

  // Validate all fields
  const validateForm = () => {
    const nameError = validateName(formData.name);
    const emailError = validateEmail(formData.email);
    const messageError = validateMessage(formData.message);

    setErrors({
      name: nameError,
      email: emailError,
      message: messageError,
    });

    return !nameError && !emailError && !messageError;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form before submission
    if (!validateForm()) {
      setResponseMessage(t("Validation.pleaseFixErrors"));
      setResponseType("error");
      return;
    }

    setLoading(true);
    setResponseMessage("");
    setResponseType("");

    try {
      // Add rate limiting check (hypothetical implementation)
      const hasRecentSubmission = checkRecentSubmission();
      if (hasRecentSubmission) {
        setResponseMessage(t("Validation.tooManyRequests"));
        setResponseType("error");
        return;
      }

      // Sanitize input before sending
      const sanitizedData = {
        name: sanitizeInput(formData.name),
        email: sanitizeInput(formData.email),
        message: sanitizeInput(formData.message),
      };

      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbx_al4dZ96CwaJVyAZjVEkQQSGl0pmhRd3tezPiTjKh3tv73W4brv190SCQz7HMx_sU/exec",
        {
          method: "POST",
          mode: "no-cors",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(sanitizedData),
        }
      );

      // Store submission timestamp
      storeSubmissionTimestamp();

      setResponseMessage(t("ContactForm.messageSentSuccessfully"));
      setResponseType("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setResponseMessage(t("ContactForm.failedToSendMessage"));
      setResponseType("error");
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  // Simulated function to check for recent submissions (anti-spam)
  const checkRecentSubmission = () => {
    const lastSubmission = localStorage.getItem("lastFormSubmission");
    if (!lastSubmission) return false;

    const timeDiff = Date.now() - parseInt(lastSubmission);
    // Limit to one submission per minute (60000ms)
    return timeDiff < 60000;
  };

  // Store submission timestamp
  const storeSubmissionTimestamp = () => {
    localStorage.setItem("lastFormSubmission", Date.now().toString());
  };

  // Sanitize input
  const sanitizeInput = (input) => {
    // Basic sanitization to prevent XSS
    return input
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    // Real-time validation
    let validationError = "";
    if (name === "name") validationError = validateName(value);
    if (name === "email") validationError = validateEmail(value);
    if (name === "message") validationError = validateMessage(value);

    setErrors({
      ...errors,
      [name]: validationError,
    });
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;

    // Validate on blur
    let validationError = "";
    if (name === "name") validationError = validateName(value);
    if (name === "email") validationError = validateEmail(value);
    if (name === "message") validationError = validateMessage(value);

    setErrors({
      ...errors,
      [name]: validationError,
    });
  };

  const socialLinks = [
    { name: "X (Twitter)", icon: twitter, link: "#" },
    {
      name: "YouTube",
      icon: youtube,
      link: "https://www.youtube.com/@likemining",
    },
    {
      name: "TikTok",
      icon: tiktok,
      link: "https://www.tiktok.com/@likeminingjetton?_t=8omRImXjmAz&_r=1",
    },
    { name: "Telegram", icon: telegram, link: "https://t.me/like_mining" },
    {
      name: "Telegram Bot",
      icon: telegramBot,
      link: "https://t.me/Like_Project_Bot",
    },
    { name: "Instagram", icon: instagram, link: "#" },
    {
      name: "E-mail",
      icon: email,
      link: "mailto:likeminingjetton66@gmail.com",
    },
    {
      name: "GetGames",
      icon: getgames,
      link: "https://getgems.io/collection/EQDMvchkiDT6H2ufjqCecyLb6-S9YYE1-JzSC7D-AbJfee2g",
    },
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
        <div
          style={{
            background: "linear-gradient(to right, #007AFF, #F30EFF)",
          }}
          className="absolute inset-0 rounded-xl bg-gradient-to-r opacity-50"
        />

        <div className="relative bg-[#161C31] rounded-xl p-8">
          <h2 className="text-2xl text-[#007AFF] text-center mb-4">
            {t("ContactForm.CONTACTUS")}
          </h2>
          <p className="text-center text-white mb-8">
            {t("ContactForm.Wearealwaysintouchandopentonewsuggestions")}
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-5">
              <div className="flex flex-col">
                <input
                  type="text"
                  name="name"
                  placeholder={t("Validation.Name")}
                  className={`bg-[#1d293d] rounded-lg p-3 text-white w-full ${
                    errors.name ? "border border-red-500" : ""
                  }`}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={formData.name}
                  required
                  maxLength={50}
                  aria-invalid={errors.name ? "true" : "false"}
                  aria-describedby="name-error"
                />
                {errors.name && (
                  <p id="name-error" className="text-red-500 text-sm mt-1">
                    {errors.name}
                  </p>
                )}
              </div>
              <div className="flex flex-col">
                <input
                  type="email"
                  name="email"
                  placeholder="E-mail:"
                  className={`bg-[#1d293d] rounded-lg p-3 text-white w-full ${
                    errors.email ? "border border-red-500" : ""
                  }`}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={formData.email}
                  required
                  aria-invalid={errors.email ? "true" : "false"}
                  aria-describedby="email-error"
                />
                {errors.email && (
                  <p id="email-error" className="text-red-500 text-sm mt-1">
                    {errors.email}
                  </p>
                )}
              </div>
            </div>
            <div className="flex flex-col">
              <textarea
                name="message"
                placeholder={t("Validation.Message")}
                rows={4}
                className={`bg-[#1d293d] rounded-lg p-3 text-white w-full ${
                  errors.message ? "border border-red-500" : ""
                }`}
                onChange={handleChange}
                onBlur={handleBlur}
                value={formData.message}
                required
                maxLength={1000}
                aria-invalid={errors.message ? "true" : "false"}
                aria-describedby="message-error"
              />
              {errors.message && (
                <p id="message-error" className="text-red-500 text-sm mt-1">
                  {errors.message}
                </p>
              )}
              <div className="text-xs text-gray-400 text-right mt-1">
                {formData.message.length}/1000
              </div>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className={`uppercase cursor-pointer w-full md:w-max justify-center text-white px-8 py-2 rounded-[8px] hover:opacity-90 transition-opacity flex items-center gap-4 ${
                  loading ? "opacity-70 cursor-not-allowed" : ""
                }`}
                disabled={loading}
                style={{
                  background: "linear-gradient(to right, #007AFF, #F30EFF)",
                }}
              >
                {loading ? t("ContactForm.SENDING") : t("ContactForm.SEND")}
                <CircleArrowRight />
              </button>
            </div>
            {responseMessage && (
              <p
                className={`text-center ${
                  responseType === "error" ? "text-red-500" : "text-green-400"
                } mt-4`}
              >
                {responseMessage}
              </p>
            )}
          </form>
        </div>
      </div>

      {/* Social Networks */}
      <div className="text-center w-full mb-4">
        <h2 className="text-2xl font-bold text-white mb-8 uppercase">
          {" "}
          {t("ContactForm.SOCIALNETWORK")}{" "}
        </h2>
        <div className="grid grid-cols-2 md:flex md:justify-evenly">
          {socialLinks.map((social, index) => (
            <div
              className={`flex flex-col items-center gap-1 hover:shadow-[0_0px_35px_rgba(0,122,255,1)] hover:outline-[2px] hover:outline-[solid] hover:outline-[#007AFF] hover:p-2 rounded-lg p-2 transition-all duration-300 ${
                index === socialLinks.length - 1
                  ? "col-span-2 mx-auto md:col-span-0 md:m-0"
                  : ""
              }`}
              key={index}
              title={social.name}
            >
              <a href={social.link} rel="noopener noreferrer">
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
