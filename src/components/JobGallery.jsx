import React from "react";

const JobGallery = () => {
  const galleryImages = [
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
  ];

  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-6 fw-bold text-dark">Our Latest Jobs</h2>
        </div>
        
        <div className="position-relative">
          <div className="row g-2">
            {galleryImages.map((image, index) => (
              <div key={index} className="col-lg-4 col-md-4 col-4">
                <div className="gallery-item position-relative">
                  <img 
                    src={image} 
                    alt={`Professional ${index + 1}`}
                    className="img-fluid rounded"
                    style={{ 
                      width: '100%', 
                      height: '200px', 
                      objectFit: 'cover' 
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
          
          {/* Center Overlay */}
          <div className="position-absolute top-50 start-50 translate-middle text-center">
            <div className="bg-white rounded-circle p-4 shadow-lg" style={{ width: '200px', height: '200px' }}>
              <div className="d-flex flex-column justify-content-center align-items-center h-100">
                <h3 className="fw-bold text-primary mb-2">500+</h3>
                <p className="mb-0 text-muted small">Our Latest Jobs</p>
              </div>
            </div>
            
            {/* Company Info Card */}
            <div className="mt-3">
              <div className="card border-0 shadow-sm">
                <div className="card-body text-center p-3">
                  <h6 className="mb-1 fw-bold">Company Name</h6>
                  <p className="mb-0 text-muted small">Candidate Type</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobGallery;
