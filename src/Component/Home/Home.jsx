import React, { useState, useEffect } from "react";
import HomeSlider from "../HomeSlider/HomeSlider";
import OurClub from "../OurClub/OurClub";
import News from "../News/News";
import Offers from "../Offers/Offers";
import Sports from "../Sports/Sports";
import Gallery from "../Gallery/Gallery";

function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="w-20 h-20 border-8 border-t-8 border-t-[#004d4d] border-gray-200 rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <>
      <HomeSlider />
      <OurClub />
      <News />
      <Offers />
      <Sports />
      <Gallery />
    </>
  );
}

export default Home;
