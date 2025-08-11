import React from "react";

const CareerTips = () => {
  const tips = [
    {
      title: "Networking Strategies",
      description: "Build meaningful professional relationships that can open doors to new opportunities and career growth.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    },
    {
      title: "Resume Optimization",
      description: "Learn how to craft a compelling resume that stands out to recruiters and hiring managers.",
      image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    },
    {
      title: "Interview Preparation",
      description: "Master the art of interviewing with proven techniques and confidence-building strategies.",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    },
    {
      title: "Skill Development",
      description: "Stay competitive by continuously upgrading your skills and staying current with industry trends.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
    }
  ];

  return (
    <section className="py-5 bg-white">
      <div className="container">
        <div className="text-center mb-5">
          <button className="btn btn-primary rounded-pill px-4 py-2 mb-3">
            Find Best Jobs
          </button>
          <h2 className="display-6 fw-bold text-dark mb-3">Quick Career Tips</h2>
          <p className="lead text-muted">
            Find your dream jobs. Carefully crafted after analyzing the needs of different industries.
          </p>
        </div>
        
        <div className="row g-4">
          {tips.map((tip, index) => (
            <div key={index} className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body p-0">
                  <img 
                    src={tip.image} 
                    alt={tip.title}
                    className="card-img-top"
                    style={{ height: '200px', objectFit: 'cover' }}
                  />
                  <div className="p-4">
                    <h5 className="card-title fw-bold mb-3">{tip.title}</h5>
                    <p className="card-text text-muted">{tip.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareerTips;
