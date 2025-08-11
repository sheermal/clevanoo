import React from "react";

const AboutPage = () => {
  return (
    <div className="container py-5 mt-5">
      <div className="row">
        <div className="col-lg-8 mx-auto text-center">
          <h1 className="display-4 fw-bold mb-4">About Our Job Portal</h1>
          <p className="lead mb-4">
            We are dedicated to connecting talented professionals with innovative companies, 
            creating opportunities that drive digital transformation and lasting competitive advantage.
          </p>
          <p className="mb-4">
            Our platform leverages advanced AI technology to match candidates with the perfect job opportunities, 
            ensuring both employers and job seekers find their ideal match.
          </p>
          <div className="row mt-5">
            <div className="col-md-4 mb-4">
              <div className="text-center">
                <i className="fas fa-users fa-3x text-primary mb-3"></i>
                <h4>500+ Live Jobs</h4>
                <p>Constantly updated job listings across all industries</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="text-center">
                <i className="fas fa-handshake fa-3x text-primary mb-3"></i>
                <h4>Smart Matching</h4>
                <p>AI-powered algorithms for perfect job-candidate matches</p>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="text-center">
                <i className="fas fa-chart-line fa-3x text-primary mb-3"></i>
                <h4>Career Growth</h4>
                <p>Resources and tools to advance your professional journey</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
