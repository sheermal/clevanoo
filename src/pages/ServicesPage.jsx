import React from "react";

const ServicesPage = () => {
  const services = [
    {
      icon: "fas fa-search",
      title: "Job Search & Matching",
      description: "Advanced search algorithms and AI-powered matching to connect you with the perfect job opportunities.",
      features: ["Smart job recommendations", "Industry-specific filtering", "Location-based search"]
    },
    {
      icon: "fas fa-file-alt",
      title: "Resume Building",
      description: "Professional resume templates and tools to help you stand out to potential employers.",
      features: ["Professional templates", "ATS-friendly formats", "Expert tips and guidance"]
    },
    {
      icon: "fas fa-users",
      title: "Recruitment Services",
      description: "Comprehensive recruitment solutions for companies looking to hire top talent.",
      features: ["Candidate sourcing", "Screening and assessment", "Interview coordination"]
    },
    {
      icon: "fas fa-graduation-cap",
      title: "Career Development",
      description: "Resources and training to help you advance your career and develop new skills.",
      features: ["Skill assessments", "Training programs", "Career coaching"]
    }
  ];

  return (
    <div className="container py-5 mt-5">
      <div className="text-center mb-5">
        <h1 className="display-4 fw-bold mb-4">Our Services</h1>
        <p className="lead">
          Comprehensive solutions to help both job seekers and employers succeed in today's competitive market.
        </p>
      </div>
      
      <div className="row g-4">
        {services.map((service, index) => (
          <div key={index} className="col-lg-6 col-xl-3" data-aos="fade-up" data-aos-delay={index * 100}>
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body text-center p-4">
                <div className="mb-4">
                  <i className={`${service.icon} fa-3x text-primary`}></i>
                </div>
                <h4 className="card-title fw-bold mb-3">{service.title}</h4>
                <p className="card-text text-muted mb-4">{service.description}</p>
                <ul className="list-unstyled text-start">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="mb-2">
                      <i className="fas fa-check text-success me-2"></i>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="text-center mt-5">
        <h3 className="mb-4">Ready to Get Started?</h3>
        <button className="btn btn-primary btn-lg px-5">Explore Jobs</button>
      </div>
    </div>
  );
};

export default ServicesPage;
