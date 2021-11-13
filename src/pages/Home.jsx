import React from "react";
import {
  Navbar,
  Announcement,
  Slider,
  Categories,
  Products,
  Newsletter,
  Footer,
} from "../components";

const Home = () => {
  return (
    <>
      <Navbar />
      <Announcement />
      <Slider />
      <Categories />
      <Products />
      <Newsletter />
      <Footer />
    </>
  );
};

export default Home;
