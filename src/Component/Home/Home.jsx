import React, { useState, useEffect } from "react";
import HomeSlider from "../HomeSlider/HomeSlider";
import OurClub from "../OurClub/OurClub";
import News from "../News/News";
import Offers from "../Offers/Offers";
import Sports from "../Sports/Sports";
import Gallery from "../Gallery/Gallery";
import Loading from "../Loading/Loading";

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
      <Loading/>
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
