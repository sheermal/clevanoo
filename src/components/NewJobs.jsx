import React from "react";

const NewJobs = () => {
  const jobListings = [
    {
      company: "TechCorp Solutions",
      position: "Senior Software Engineer",
      description: "Join our innovative team and work on cutting-edge technologies that shape the future of digital transformation.",
      requirements: [
        "5+ years of experience in full-stack development",
        "Expertise in React, Node.js, and cloud technologies"
      ]
    },
    {
      company: "Global Finance Inc",
      position: "Financial Analyst",
      description: "Analyze market trends and provide strategic financial insights to drive business growth and profitability.",
      requirements: [
        "Strong analytical and quantitative skills",
        "Experience with financial modeling and forecasting"
      ]
    },
    {
      company: "HealthTech Innovations",
      position: "Product Manager",
      description: "Lead product development initiatives and collaborate with cross-functional teams to deliver exceptional healthcare solutions.",
      requirements: [
        "Proven track record in product management",
        "Experience in healthcare or technology sectors"
      ]
    }
  ];

  return (
    <section className="pb-5 text-white position-relative" style={{ backgroundColor: '#2c3e50' }}>
      <div
        className="position-absolute w-100 h-100"
        style={{
          backgroundImage: 'url("/assets/images/latest-job-lisiting.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(3px)',
          zIndex: 0
        }}
      ></div>

      <div className="container position-relative pt-5" style={{ zIndex: 1 }}>
        <div className="row">
          <div className="col-lg-12">
            <div className="col-lg-6 mb-5" data-aos="fade-right">
              <h2 className="display-5 fw-bold mb-4">New & Random Jobs</h2>
              <p className="lead mb-4">
                It is a long established fact that a reader will be distracted by the readable content of a page then looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less.
              </p>
              <button className="btn btn-light btn-lg px-4 rounded-0">READ MORE</button>
            </div>
          </div>

          <div className="col-lg-12" data-aos="fade-left">
            <h2 className="display-5 fw-bold mb-4 text-center">Latest Job Listing</h2>
            <div className="row">
              {jobListings.map((job, index) => (
                <div key={index} className="col-lg-4 col-md-6 col-sm-12">
                  <div className="m-2">
                    <div className="card border-0 shadow h-100">
                      <div className="card-body p-4 d-flex flex-column justify-content-between">
                        <div className="d-flex align-items-center mb-3">
                          {/* <div
                          className="rounded-circle me-3"
                          style={{
                            width: '50px',
                            height: '50px',
                            background: 'linear-gradient(45deg, #007bff, #28a745, #ffc107, #dc3545)'
                          }}
                        ></div> */}
                          <div>
                            <h6 className="mb-1 fw-bold text-dark">{job.position}</h6>
                            {/* <p className="mb-0 text-primary fw-bold">{job.position}</p> */}
                          </div>
                        </div>
                        <p className="card-text text-muted mb-3">{job.description}</p>
                        <ul className="list-unstyled mb-3">
                          {job.requirements.map((req, reqIndex) => (
                            <li key={reqIndex} className="mb-2">
                              <i className="fas fa-check text-success me-2"></i>
                              <small className="text-muted">{req}</small>
                            </li>
                          ))}
                        </ul>
                        <button className="btn btn-primary btn-sm rounded-0">READ MORE</button>
                      </div>
                    </div>
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

export default NewJobs;
