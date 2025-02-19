import React, { useState } from "react";
import { Modal } from "antd";
import phone1 from "../assets/phone1.png";
import phone2 from "../assets/phone2.png";
import phone3 from "../assets/phone3.png";
import phone4 from "../assets/phone4.png";
import phone5 from "../assets/phone5.png";
import phone6 from "../assets/phone6.png";
import phone7 from "../assets/phone7.png";

// Modal Content Component
const FeatureModal = ({ feature, isVisible, onClose }) => {
  // Get modal content based on feature
  const getModalContent = () => {
    switch (feature.title.highlight) {
      case "IN THE APP":
        return (
          <div className="items-center flex flex-col p-6 bg-[#161C31] rounded-[8px]">
            <div className="flex flex-col-reverse md:flex-row mb-6">
              <div>
                <h2 className="text-xl font-bold mb-4 text-white">
                  The First Step into the App
                </h2>
                <p className="text-white">
                  This moment will be your first step into the world of Web 3
                  and financial independence. Follow these simple steps to get
                  started:
                </p>
                <ul className="list-decimal pl-6 mt-4 text-white">
                  <li>Follow the link in the Telegram mini-application</li>
                  <li>Click the "Start" button to activate the process</li>
                  <li>
                    Connect your crypto wallet by following the on-screen
                    instructions
                  </li>
                </ul>
                <div>
                  <p className="text-white mb-[-15px] mt-2.5">
                    Now you have access to many possibilities!
                  </p>
                  <ul className="list-disc pl-6 mt-4 text-white">
                    <li>
                      Easy access for everyone: Master new Web3 technologies
                      without difficulties.
                    </li>
                    <li>
                      Participate in Decentralized Profitable Finance (DeFi):
                      Earn income from your assets.
                    </li>
                    <li>
                      Manage your assets with complete freedom and security:
                      Control your funds without intermediaries.
                    </li>
                    <li>
                      The speed and convenience of the application: All
                      operations are performed instantly, without delay.
                    </li>
                  </ul>
                </div>
                <p className="text-white pt-2.5">
                  You have become a full-fledged user of our platform and can
                  start using all these features today.
                </p>
              </div>
              <img src={phone1} alt="App Screenshot" className="w-full mb-4" />
            </div>
            <button className="bg-gradient-to-r from-[#007BFF] to-[#FF00FF] text-white px-6 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">
              Continue
            </button>
          </div>
        );
      case "WHEEL OF FORTUNE":
        return (
          <div className="items-center flex flex-col p-6 bg-[#161C31] rounded-[8px]">
            <div className="flex mb-6">
              <div>
                <h2 className="text-xl font-bold mb-4 text-white">
                  Prizes from the WHEEL OF FORTUNE?
                </h2>
                <p className="text-white">
                  One of the main features of our project is the Wheel of
                  Fortune, an exciting game mechanic that gives you a chance to
                  win cool prizes.: tokens, NFT, and other valuable rewards.
                </p>
                <ul className="list-decimal pl-6 mt-4 text-white">
                  <li>
                    You can spin the wheel every 6 hours, so you can try your
                    luck several times a day!{" "}
                  </li>
                  <li>
                    If you have NFT miners, special conditions apply for you:
                  </li>
                  <li>
                    If you own more than one NFT, the chance of winning Love
                    tokens in the Wheel of Fortune mechanics increases (as a
                    percentage from 2% to 20% of the winning amount).
                  </li>
                </ul>
                <div>
                  <p className="text-white mb-[-15px] mt-2.5">
                    In addition, the list of awards will be updated regularly,
                    so that even more interesting and valuable prizes await you
                    in the future.
                  </p>
                </div>
                <p className="text-white pt-2.5">
                  Just spin the wheel and enjoy the possibilities!
                </p>
              </div>
              <img src={phone2} alt="App Screenshot" className="w-full mb-4" />
            </div>
            <button className="bg-gradient-to-r from-[#007BFF] to-[#FF00FF] text-white px-6 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">
              Continue
            </button>
          </div>
        );
      case "STACKING":
        return (
          <div className="items-center flex flex-col p-6 bg-[#161C31] rounded-[8px]">
            <div className="flex mb-6">
              <div>
                <h2 className="text-xl font-bold mb-4 text-white">
                  How do internal transfers work?
                </h2>
                <p className="text-white">
                  Now you can quickly and conveniently transfer USDT, TON, Like
                  and Love tokens inside the app
                </p>
                <p className="text-white">How do I send tokens?</p>
                <ul className="list-decimal pl-6 mt-4 text-white">
                  <li> Go to the "Send" section.</li>
                  <li>Select the desired token: USDT, TON, Like or Love.</li>
                  <li>
                    Enter the recipient's ID manually or scan the QR code.
                  </li>
                  <li>Specify the transfer amount</li>
                </ul>
                <div>
                  <p className="text-white">How do I pay the commission?</p>
                  <p className="text-white mb-[-15px] mt-2.5">
                    You can choose one of the following options:
                  </p>
                  <ul className="list-disc pl-6 mt-4 text-white">
                    <li>
                      Pay the commission with tokens (USDT, TON, Like, Love).
                    </li>
                    <li>
                      Complete a simple task (for example, clicking on a link,
                      reposting, subscribing to a channel, etc.).
                    </li>
                  </ul>
                </div>
                <p className="text-white pt-2.5">
                  Complete tasks and transfer tokens without commission! All
                  details and settings are available in the app.
                </p>
              </div>
              <img src={phone3} alt="App Screenshot" className="w-full mb-4" />
            </div>
            <button className="bg-gradient-to-r from-[#007BFF] to-[#FF00FF] text-white px-6 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">
              Continue
            </button>
          </div>
        );
      case "CONVERSION":
        return (
          <div className="items-center flex flex-col p-6 bg-[#161C31] rounded-[8px]">
            <div className="flex mb-6">
              <div>
                <h2 className="text-xl font-bold mb-4 text-white">
                  Token Conversion
                </h2>
                <p className="text-white">
                  You can exchange tokens based on your card level, receiving
                  the best conditions and minimum commissions.
                </p>
                <p className="text-white">How does it work?</p>
                <ul className="list-decimal pl-6 mt-4 text-white">
                  <li> Select the tokens you want to exchange</li>
                  <li>
                    We will automatically select the current exchange rate for
                    you, which is calculated based on data from several leading
                    exchanges.
                  </li>
                  <li>
                    Depending on your card level, an individual commission is
                    applied:
                  </li>
                  <li>
                    <ul>
                      <li>Silver – 1%</li>
                      <li>Gold – 0.75%</li>
                      <li>Platinum – 0.5%</li>
                    </ul>
                  </li>
                  <li>
                    Before confirming the exchange, you will see the total
                    amount, including the commission.
                  </li>
                </ul>

                <p className="text-white pt-2.5">
                  Try token conversion right now and get maximum benefits
                </p>
              </div>
              <img src={phone4} alt="App Screenshot" className="w-full mb-4" />
            </div>
            <button className="bg-gradient-to-r from-[#007BFF] to-[#FF00FF] text-white px-6 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">
              Continue
            </button>
          </div>
        );
      case "DEPOSIT":
        return (
          <div className="items-center flex flex-col p-6 bg-[#161C31] rounded-[8px]">
            <div className="flex mb-6">
              <div>
                <h2 className="text-xl font-bold mb-4 text-white">
                  Fast DEPOSIT and WITHDRAWAL of funds?
                </h2>
                <p className="text-white">
                  You can withdraw USDT, TON, Like and Love tokens from your
                  internal balance to an external wallet. To do this:
                </p>
                <ul className="list-decimal pl-6 mt-4 text-white">
                  <li>
                    Go to the "Output" section.
                    <li>
                      Select the token you want to withdraw (Like, Love, USDT,
                      TON).
                    </li>
                    <li>Enter the address of the external wallet.</li>
                    <li>Confirm the operation.</li>
                  </li>
                </ul>
                <p className="text-white">Adding funds to your balance:</p>
                <div>
                  <p className="text-white ">
                    You can top up your balance with USDT, TON, Like and Love.
                    For this:
                  </p>
                  <ul className="text-white">
                    <li>Go to the "Input" section.</li>
                    <li>
                      Copy the project's wallet address or scan the QR code.
                    </li>
                    <li>
                      Make a transfer and the tokens will be credited
                      automatically.
                    </li>
                  </ul>
                </div>
                <p className="text-white pt-2.5">Important:</p>
                <ul className="text-white">
                  <li>
                    Replenishment takes place in a 1:1 ratio (sent tokens =
                    credited tokens).
                  </li>
                  <li>
                    Support for TRC20 Tether (USDT): You can now top up your
                    balance using the TRC20 USDT wallet.
                  </li>
                </ul>
              </div>
              <img src={phone5} alt="App Screenshot" className="w-full mb-4" />
            </div>
            <button className="bg-gradient-to-r from-[#007BFF] to-[#FF00FF] text-white px-6 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">
              Continue
            </button>
          </div>
        );
      case "TASKS":
        return (
          <div className="items-center flex flex-col p-6 bg-[#161C31] rounded-[8px]">
            <div className="flex mb-6">
              <div>
                <h2 className="text-xl font-bold mb-4 text-white">
                  Daily tasks
                </h2>
                <p className="text-white">
                  Earn rewards every day! Log in to the app daily and receive
                  bonuses that increase every day. Missed a day? The counter
                  will reset, but you can always start over!
                </p>

                <p className="text-white">Adding funds to your balance:</p>
                <div>
                  <p className="text-white">How does it work?</p>
                  <ul className="text-white">
                    <li>
                      {" "}
                      Log into the app every day and receive Love tokens (on
                      certain days – Like).{" "}
                    </li>
                    <li>
                      Keep track of your progress on a 10-day calendar. The
                      longer you log in in a row, the more bonuses you get!
                    </li>
                    <li>
                      Did you miss the day? Start over and get a bonus for the
                      first day.
                    </li>
                  </ul>
                </div>
                <p className="text-white pt-2.5">
                  Complete simple daily tasks and earn even more:
                </p>
                <ul className="text-white">
                  <li>Follow the links of the partners.</li>
                  <li>Send posts to your friends in private messages.</li>
                  <li>Share stories and subscribe to channels. </li>
                  <li>
                    Confirm the completion of tasks using the code in the
                    application.{" "}
                  </li>
                </ul>
                <p className="text-white">
                  Go to the "Tasks" tab and start earning right now!
                </p>
              </div>
              <img src={phone6} alt="App Screenshot" className="w-full mb-4" />
            </div>
            <button className="bg-gradient-to-r from-[#007BFF] to-[#FF00FF] text-white px-6 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">
              Continue
            </button>
          </div>
        );
      case "GAMES":
        return (
          <div className="items-center flex flex-col p-6 bg-[#161C31] rounded-[8px]">
            <div className="flex mb-6">
              <div>
                <h2 className="text-xl font-bold mb-4 text-white">
                  Daily in-game rewards!
                </h2>
                <p className="text-white">
                  Get rewards by logging into the game at the right time and
                  opening special boxes. Each mailbox is available at its own
                  time interval.
                </p>

                <div>
                  <p className="text-white">How does it work?</p>
                  <ul className="text-white">
                    <li>Log in to the game at the specified time.</li>
                    <li>Hold the button for 1 minute to open the drawer.</li>
                    <li>
                      Keep an eye on the time intervals so as not to miss the
                      boxes.
                    </li>
                  </ul>
                </div>
                <div>
                  <p className="text-white pt-2.5">Did you miss a mailbox?</p>
                  <p className="text-white">
                    Not a problem! If you missed a mailbox (for example, No. 3),
                    but the next one (No. 4) is available now, you can restore
                    the reward for the missed mailbox by paying for it with
                    **Like** tokens.{" "}
                  </p>
                </div>
                <div className="text-white">
                  <p>Rewards for everyone! </p>
                  <p>Collect bonuses, enjoy the game and win!</p>
                </div>
                <div className="text-white">
                  <p>In the plans:</p>
                  <p>
                    New games and activities that will make the process even
                    more interesting. Stay tuned!
                  </p>
                </div>
              </div>
              <img src={phone7} alt="App Screenshot" className="w-full mb-4" />
            </div>
            <button className="bg-gradient-to-r from-[#007BFF] to-[#FF00FF] text-white px-6 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">
              Continue
            </button>
          </div>
        );
      case "Mining":
        return (
          <div className="items-center flex flex-col p-6 bg-[#161C31] rounded-[8px]">
            <div className="flex mb-6">
              <div>
                <h2 className="text-xl font-bold mb-4 text-white">
                  NFT mining
                </h2>

                <div>
                  <p className="text-white">Acquisition:</p>
                  <ul className="text-white">
                    <li>
                      Purchase NFT through the Getgems platform or at another
                      suitable site.{" "}
                    </li>
                    <li>
                      Connect the TON wallet in our application – mining will
                      start automatically.{" "}
                    </li>
                  </ul>
                </div>

                <div className="text-white">
                  <p>What do you get: </p>
                  <ul>
                    <li>Mining speed: 191.78 Likes and 1920 Loves per day. </li>
                    <li>
                      Tokens are credited automatically to the balance in the
                      Mini App.
                    </li>
                  </ul>
                </div>

                <div className="text-white">
                  <p>Features:</p>
                  <ul>
                    <li>
                      One NFT is linked to one account. If the NFT is
                      transferred to another user, mining stops.{" "}
                    </li>
                    <li>After halving, the mining speed is reduced by 50%. </li>
                  </ul>
                </div>
                <div className="text-white">
                  <p>Why is it profitable?</p>
                  <ul>
                    <li>Passive income: Earn tokens effortlessly.</li>
                    <li>Simplicity: Connect your wallet and you're done.</li>
                    <li>
                      Early start: Manage to maximize your income before
                      halving.
                    </li>
                  </ul>
                </div>
              </div>
              <img src={phone5} alt="App Screenshot" className="w-full mb-4" />
            </div>
            <button className="bg-gradient-to-r from-[#007BFF] to-[#FF00FF] text-white px-6 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">
              Continue
            </button>
          </div>
        );
      case "sending":
        return (
          <div className="items-center flex flex-col p-6 bg-[#161C31] rounded-[8px]">
            <div className="flex mb-6">
              <div className="text-white">
                <h2 className="text-xl font-bold mb-4 text-white">
                  The mechanics of staking
                </h2>
                <p>
                  Staking is the process of locking your assets on the network
                  to participate in transaction verification and maintain its
                  security. In return, you receive a reward in the form of
                  additional tokens, the amount of which depends on the volume
                  and duration of the staking.
                </p>
                <div>
                  <p className="text-white ">How it works: </p>
                  <ul>
                    <li>
                      The entire staking process takes place in the Mini App
                    </li>
                    <li>You block the desired number of tokens.</li>
                    <li>Your tokens remain frozen for 14 days.</li>
                    <li>
                      Upon expiration, you will receive back the frozen amount
                      and accrued interest.
                    </li>
                    <li>There is no commission for staking</li>
                    <li>There are plans to add support for other tokens.</li>
                  </ul>
                </div>

                <div>
                  <p>Important:</p>
                  <ul>
                    <li>
                      The yield is calculated automatically, taking into account
                      the compound interest system. This means that the larger
                      the volume of staking, the higher the amount of accruals.
                    </li>
                  </ul>
                </div>
              </div>
              <img src={phone5} alt="App Screenshot" className="w-full mb-4" />
            </div>
            <button className="bg-gradient-to-r from-[#007BFF] to-[#FF00FF] text-white px-6 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">
              Continue
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
