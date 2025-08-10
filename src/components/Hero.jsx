import React from "react";
import Typewriter from "typewriter-effect";

const Hero = () => {
  const scrollToAbout = (e) => {
    e?.preventDefault();
    const about = document.getElementById("about");
    if (!about) return;
    about.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section
      id="hero"
      className="hero d-flex align-items-center text-center text-white"
    >
      <div className="container" data-aos="zoom-in">
        <h1 className="display-5 fw-bold">
          <Typewriter
            options={{
              strings: ["Welcome to Our Website"],
              autoStart: true,
              loop: false,
              delay: 60,
            }}
          />
        </h1>
        <p className="lead">Your success starts here.</p>
        <button className="btn btn-primary btn-lg mt-3" onClick={scrollToAbout}>
          Learn More
        </button>
      </div>
    </section>
  );
};

export default Hero;
