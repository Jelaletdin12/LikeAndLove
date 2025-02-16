case "Mining":
        return (
          <div className="items-center flex flex-col p-6 bg-[#161C31] rounded-[8px]">
            <div className="flex mb-6">
              <div>
                <h2 className="text-xl font-bold mb-4 text-white">
                NFT mining
                </h2>
               

                <div>
                  <p className="text-white mb-[-15px] mt-2.5">
                  Acquisition:
                  </p>
                  <ul>
                    <li>Purchase NFT through the Getgems platform or at another suitable site.  </li>
                    <li>Connect the TON wallet in our application – mining will start automatically. </li>
                  </ul>
                </div>

                <div>
                  <p>What do you get: </p>
                  <ul>
                    <li>Mining speed: 191.78 Likes and 1920 Loves per day.  </li>
                    <li>Tokens are credited automatically to the balance in the Mini App.</li>
                  </ul>
                </div>

                <div>
                  <p>Features:</p>
                 <ul>
                  <li>One NFT is linked to one account. If the NFT is transferred to another user, mining stops.  </li>
                  <li>After halving, the mining speed is reduced by 50%. </li>
                 </ul>
                </div>
                <div>
                  <p>Why is it profitable?</p>
                  <ul>
                    <li>Passive income: Earn tokens effortlessly.</li>
                    <li>Simplicity: Connect your wallet and you're done.</li>
                    <li>Early start: Manage to maximize your income before halving.</li>
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
                  <p className="text-white mb-[-15px] mt-2.5">
                    How does it work?
                  </p>
                  <ul>
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
                  <p>
                    Not a problem! If you missed a mailbox (for example, No. 3),
                    but the next one (No. 4) is available now, you can restore
                    the reward for the missed mailbox by paying for it with
                    **Like** tokens.{" "}
                  </p>
                </div>
                <div>
                  <p>Rewards for everyone! </p>
                  <p>Collect bonuses, enjoy the game and win!</p>
                </div>
                <div>
                  <p>In the plans:</p>
                  <p>
                    New games and activities that will make the process even
                    more interesting. Stay tuned!
                  </p>
                </div>
              </div>
              <img src={phone2} alt="App Screenshot" className="w-full mb-4" />
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

                <p>Adding funds to your balance:</p>
                <div>
                  <p className="text-white mb-[-15px] mt-2.5">
                    How does it work?
                  </p>
                  <ul>
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
                <ul>
                  <li>Follow the links of the partners.</li>
                  <li>Send posts to your friends in private messages.</li>
                  <li>Share stories and subscribe to channels. </li>
                  <li>
                    Confirm the completion of tasks using the code in the
                    application.{" "}
                  </li>
                </ul>
                <p>Go to the "Tasks" tab and start earning right now!</p>
              </div>
              <img src={phone2} alt="App Screenshot" className="w-full mb-4" />
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
                    <li>Confirm the operation.</li>/
                  </li>
                </ul>
                <p>Adding funds to your balance:</p>
                <div>
                  <p className="text-white mb-[-15px] mt-2.5">
                    You can top up your balance with USDT, TON, Like and Love.
                    For this:
                  </p>
                  <ul>
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
                <ul>
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
              <img src={phone2} alt="App Screenshot" className="w-full mb-4" />
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
                <p>How does it work?</p>
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
              <img src={phone3} alt="App Screenshot" className="w-full mb-4" />
            </div>
            <button className="bg-gradient-to-r from-[#007BFF] to-[#FF00FF] text-white px-6 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">
              Continue
            </button>
          </div>
        );