import React from "react";
import Banner from "../../Shares/Banner/Banner";
import Content from "./Content";
import Info from "./Info";
import MakeAppointment from "./MakeAppointment";
import Services from "./Services";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <div className="px-12">
      <Banner></Banner>
      <Info></Info>
      <Services></Services>
      <Content></Content>
      <MakeAppointment></MakeAppointment>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
