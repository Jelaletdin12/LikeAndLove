export default function NFTCollection() {
    const nftItems = ['Like #113', 'Like #1040', 'Like #140', 'Like #145', 'Like #130', 'Like #150'];
    
    // Animasyon için özel CSS (global.css'e eklenmeli)
    // @keyframes scroll {
    //   0% { transform: translateX(0) }
    //   100% { transform: translateX(-50%) }
    // }
    
    return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">The NFT Collection</h2>
        
        <p className="text-gray-600 mb-8 text-center max-w-2xl mx-auto leading-relaxed">
          To participate in mining and mine LIKI and LOVE tokens, you need to acquire at least one NFT from our collection on petgames.io. These digital assets not only provide access to mining and increased income, but are also valuable investments that can grow in value.
        </p>
  
        {/* Carousel Container */}
        <div className="relative overflow-hidden py-4">
          {/* Carousel Track - Animasyon için 'animate-scroll' sınıfı */}
          <div className="flex animate-scroll" style={{ animation: 'scroll 20s linear infinite' }}>
            {[...nftItems, ...nftItems].map((item, index) => ( // Çift kopya ile sonsuz döngü
              <div key={index} className="flex-shrink-0 w-64 mx-2">
                <div className="bg-gray-200 rounded-lg aspect-square mb-2"></div>
                <p className="text-gray-800 font-medium text-center">{item}</p>
              </div>
            ))}
          </div>
        </div>
  
        <div className="text-center mt-8">
          <a 
            href="#" 
            className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full transition-colors duration-200"
          >
            BUY NFT
          </a>
          
          <div className="mt-6">
            <p className="text-gray-500 text-sm">
              Visit our marketplace at{' '}
              <a href="#" className="text-blue-500 hover:underline">
                petgames.io
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }