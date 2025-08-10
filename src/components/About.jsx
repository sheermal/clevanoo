import React from "react";
import content from "../content";

const About = () => {
  return (
    <section id="about" className="py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6" data-aos="fade-right">
            <h2>About Us – Clevanoo LLC</h2>
            <p className="lead">{content.aboutIntro}</p>
            <p>{content.ourStory}</p>
          </div>
          <div className="col-lg-6" data-aos="fade-left">
            <div className="row g-3">
              {content.highlights.map((h, i) => (
                <div
                  key={i}
                  className="col-6 text-center"
                  data-aos="zoom-in"
                  data-aos-delay={i * 100}
                >
                  <div className="p-4 border rounded shadow-sm team-member">
                    <div className="mb-3" style={{ fontSize: 34 }}>
                      {h.icon}
                    </div>
                    <h5>{h.title}</h5>
                    <p className="small">{h.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
