import Phone from "../assets/phone.png";

const MiningGuide = () => {
  return (
    <div className="flex  bg-[#161C31] p-6 ">
      <div>
        <img src={Phone} alt="" />
      </div>
      <div>
        <h2 className="text-[80px] text-[white] font-black mb-4 leading-none">
          How it works Mining?
        </h2>

        <p className="text-[24px] text-white mb-10">
          It's as simple as that! Start earning LIKE Tokens with our NFTs:
        </p>
        <ul className="mb-10">
          <li className="text-[24px] text-white">1. Get the NFT</li>
          <li className="text-[24px] text-white">
            2. Start the mining process
          </li>
          <li className="text-[24px] text-white">3. Collect your tokens!</li>
        </ul>
        <p className="text-[24px] text-white mb-10">
          Your NFTS will automatically mine valuable tokens, turning them into a
          source of income. Additional mechanics will speed up this process and
          increase your profit!
        </p>
        <p className="text-[24px] text-white">
          Important: your phone and its power are not used in mining —
          everything happens remotely via the Internet
        </p>
      </div>
    </div>
  );
};

export default MiningGuide;
