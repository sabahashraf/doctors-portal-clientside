import React from "react";
import Banner from "../../Shares/Banner/Banner";
import Footer from "../../Shares/Footer";
import ContactForm from "./ContactForm";
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
      <ContactForm></ContactForm>
      <Footer></Footer>
    </div>
  );
};

export default Home;
