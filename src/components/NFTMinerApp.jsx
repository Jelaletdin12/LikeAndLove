import Phone from "../assets/phone.png";

const MiningGuide = () => {
  return (
    <div className="flex  bg-white p-6 ">
      <div>
        <img src={Phone} alt="" />
      </div>
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          How Mining Works?
        </h2>

        <div className="space-y-6">
          <div className="flex items-start space-x-4">
            <div className="bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
              1
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">Get the NFT</h3>
              <p className="text-gray-600 mt-1">
                Acquire your preferred NFT from our marketplace
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
              2
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">
                Start the mining process
              </h3>
              <p className="text-gray-600 mt-1">
                Activate mining directly from your NFT dashboard
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
              3
            </div>
            <div>
              <h3 className="font-semibold text-gray-800">
                Collect your tokens
              </h3>
              <p className="text-gray-600 mt-1">
                Withdraw your LIKE tokens anytime to your wallet
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 p-4 bg-blue-50 rounded-lg">
          <p className="text-sm text-gray-600 leading-relaxed">
            Your NFTs will automatically mine valuable tokens, turning them into
            a source of income. Additional mechanics will speed up this process
            and increase your profit!
          </p>
        </div>

        <div className="mt-6 p-4 bg-red-50 border-l-4 border-red-400">
          <p className="text-sm text-red-600">
            Important: Your phone and its power are not used in mining —
            everything happens remotely via the internet.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MiningGuide;
