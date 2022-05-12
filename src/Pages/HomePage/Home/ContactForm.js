import React from "react";
import background from "../../../assets/images/appointment.png";
import Button from "../../Shares/Button";

const ContactForm = () => {
  return (
    <section
      className="text-center items-center py-12"
      style={{
        background: `url(${background})`,
      }}
    >
      <h3 className="text-xl font-bold text-primary text-center">Contact Us</h3>
      <h2 className="text-2xl text-white text-center">
        Stay Connected with us
      </h2>
      <form className="block mx-auto w-1/3 mt-7 ">
        <div className="form-control">
          {" "}
          <input
            type="email"
            name="email"
            placeholder="email"
            className="input input-bordered mb-3"
            id=""
          />
        </div>
        <div className="form-control">
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            className="input input-bordered mb-3"
            id=""
          />
        </div>
        <div className="form-control">
          {" "}
          <textarea
            name="message"
            id=""
            cols="20"
            rows="5"
            className="textarea textarea-bordered mb-5"
            placeholder="Your message"
          ></textarea>
        </div>
        <Button>Submit</Button>
      </form>
    </section>
  );
};

export default ContactForm;
