import React from "react";
import Service from "./Service";
import fluoride from "../../../assets/images/fluoride.png";
import cavity from "../../../assets/images/cavity.png";
import whitening from "../../../assets/images/whitening.png";

const Services = () => {
  const services = [
    {
      _id: 1,
      name: "Flouride Treatment",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae magnam pariatur quis ",
      img: fluoride,
    },
    {
      _id: 2,
      name: "Cavity Filling",
      description:
        "voluptate et laborum assumenda nobis. Eveniet quidem reprehenderit odio quam similique, excepturi quo dolor eum, earum nostrum dolorum?",
      img: cavity,
    },
    {
      _id: 1,
      name: "Teeth Whitening",
      description:
        "voluptate et laborum assumenda nobis. Eveniet quidem reprehenderit odio quam similique, excepturi quo dolor eum, earum nostrum dolorum?",
      img: whitening,
    },
  ];
  return (
    <div className="my-28">
      <div className="text-center mb-10 ">
        <h3 className="text-primary text-xl font-bold uppercase">
          Our Services
        </h3>
        <h2 className="text-4xl">Services We Provide</h2>
      </div>
      <div className="grid  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 ">
        {services.map((service) => (
          <Service key={service._id} service={service}></Service>
        ))}
      </div>
    </div>
  );
};

export default Services;
