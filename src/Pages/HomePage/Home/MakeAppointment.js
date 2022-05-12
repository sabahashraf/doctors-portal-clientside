import React from "react";
import doctor from "../../../assets/images/doctor.png";
import appointment from "../../../assets/images/appointment.png";
import Button from "../../Shares/Button";

const MakeAppointment = () => {
  return (
    <section
      style={{
        background: `url(${appointment})`,
      }}
      className="flex justify-center items-center"
    >
      <div className="flex-1">
        <img src={doctor} alt="" className="mt-[-120px] hidden lg:block" />
      </div>
      <div className="lg:flex-1 sm:w-full sm:ml-10">
        <h3 className="text-xl text-primary font-bold py-4">Appointment</h3>
        <h2 className="text-3xl py-3 text-white">Make an appointment Today</h2>
        <p className="text-white pb-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos odit sit
          quasi qui! Nam eum distinctio labore, ex quo quos repellat sequi culpa
          tempore animi odit sit itaque aut! Nulla eaque, quo nemo minus optio
          cumque. Quasi tempore totam error.
        </p>
        <Button>Get Started</Button>
      </div>
    </section>
  );
};

export default MakeAppointment;
