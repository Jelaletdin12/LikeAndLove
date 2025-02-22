import { useState, useRef } from "react";
import Header from "./components/Header";
import MiningVisualization from "./components/MiningVisualization.jsx";
import NFTMinerApp from "./components/NFTMinerApp.jsx";
import NFTCollection from "./components/NFTCollection.jsx";
import NFTPrivilegeCards from "./components/NFTPrivilegeCards.jsx";
import MiningUpgrades from "./components/MiningUpgrades.jsx";
import FeatureCards from "./components/FeatureCards.jsx";
import RoadmapCarousel from "./components/RoadmapCarousel.jsx";
import BurningLike from "./components/BurningLike.jsx";
import ExchangeInterface from "./components/ExchangeInterface.jsx";
import VideoPlayer from "./components/VideoPlayer.jsx";
import StatisticsDashboard from "./components/StatisticsDashboard.jsx";
import ContactForm from "./components/ContactForm.jsx";
import "./App.css";



function App() {
  const [drawerVisible, setDrawerVisible] = useState(false);
  const featureCardsRef = useRef(null);

  const scrollToFeatureCards = () => {
    if (drawerVisible) {
      setDrawerVisible(false);
      setTimeout(() => {
        if (featureCardsRef.current) {
          featureCardsRef.current.scrollIntoView({ behavior: "smooth" });
        }
      }, 300); // Adjust the timeout duration as needed
    } else {
      if (featureCardsRef.current) {
        featureCardsRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }
  };
  return (
    <>
      <Header  scrollToFeatureCards={scrollToFeatureCards}
        drawerVisible={drawerVisible}
        setDrawerVisible={setDrawerVisible} />
      <MiningVisualization />
      <NFTMinerApp />
      <NFTCollection />
      <NFTPrivilegeCards />
      <MiningUpgrades />
      <div ref={featureCardsRef}>
        <FeatureCards />
      </div>
      <RoadmapCarousel />
      <BurningLike />
      <ExchangeInterface />
      <VideoPlayer />
      <StatisticsDashboard />
      <ContactForm />
    </>
  );
}

export default App;
