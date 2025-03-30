import React from "react";
import Header from "../components/Header";
import Hero from "../sections/Hero";
import Services from "../sections/Services";
import WorkFlow from "../sections/WorkFlow";
import TeamValues from "../sections/TeamValues";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Services />
      <WorkFlow />
      <TeamValues />
      <Footer />
    </div>
  );
};

export default Home;
