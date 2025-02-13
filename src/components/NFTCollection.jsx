import VectorBig from "../assets/VectorBig.png";
export default function NFTCollection() {
  const nftItems = [
    "Like #113",
    "Like #1040",
    "Like #140",
    "Like #145",
    "Like #130",
    "Like #150",
  ];

  // Animasyon için özel CSS (global.css'e eklenmeli)
  // @keyframes scroll {
  //   0% { transform: translateX(0) }
  //   100% { transform: translateX(-50%) }
  // }

  return (
    <div className=" mx-auto px-4 py-8">
      <div className=" w-full grid grid-cols-[1fr_1fr] gap-[10px]">
        <div> 
          <h2 className="text-[80px] flex text-[white] font-black mb-4">
            The  <h1 className="text-[#007BFF] mr-2 ml-2"> NFT </h1>  Collection
          </h2>

          <p className="text-white text-[24px] mb-8 max-w-2xl mx-auto leading-8">
            To participate in mining and mine LIKI and LOVE tokens, you need to
            acquire at least one NFT from our collection on petgames.io. These
            digital assets not only provide access to mining and increased
            income, but are also valuable investments that can grow in value.
          </p>
        </div>
        <div className="flex justify-between items-center flex-col">
          <img className="w-[200px] h-[200px]" src={VectorBig} alt="" />
          <h3 className="text-white text-[24px] font-bold" >GetGames.io</h3>
        </div>
      </div>

      {/* Carousel Container */}
      <div className="relative overflow-hidden py-4">
        {/* Carousel Track - Animasyon için 'animate-scroll' sınıfı */}
        <div
          className="flex animate-scroll"
          style={{ animation: "scroll 20s linear infinite" }}
        >
          {[...nftItems, ...nftItems].map(
            (
              item,
              index // Çift kopya ile sonsuz döngü
            ) => (
              <div key={index} className="flex-shrink-0 w-64 mx-2">
                <div className="bg-gray-200 rounded-lg aspect-square mb-2"></div>
                <p className="text-gray-800 font-medium text-center">{item}</p>
              </div>
            )
          )}
        </div>
      </div>

      <div className="text-center mt-8">
        <a
          href="#"
          className="inline-block bg-gradient-to-r from-[#007BFF] to-[#FF00FF] text-white font-bold py-3 px-8 rounded-[8px] transition-colors duration-200"
        >
          BUY NFT
        </a>

       
      </div>
    </div>
  );
}
