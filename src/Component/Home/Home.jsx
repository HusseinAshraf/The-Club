import React from "react";
import HomeSlider from "../HomeSlider/HomeSlider";
import OurClub from "../OurClub/OurClub";
import News from "../News/News";
import Offers from "../Offers/Offers";
import Sports from "../Sports/Sports";
import Gallery from "../Gallery/Gallery";

function Home() {
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
