import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "K. Kishore",
      title: "Product Director",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
      text: "The job portal helped me find my dream position. The matching algorithm is incredibly accurate and the support team is always helpful."
    },
    {
      name: "Sarah Johnson",
      title: "Senior Developer",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
      text: "I was able to transition into a new role within weeks. The platform's user experience and job recommendations are outstanding."
    },
    {
      name: "Michael Chen",
      title: "Marketing Manager",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
      text: "The career resources and networking opportunities provided by this platform have been invaluable for my professional growth."
    }
  ];

  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <button className="btn btn-primary rounded-pill px-4 py-2 mb-3">
            Testimonials
          </button>
          <h2 className="display-6 fw-bold text-dark mb-3">Happy Candidates Say About Us</h2>
          <p className="lead text-muted">
            Find your dream jobs. Carefully crafted after analyzing the needs of different industries.
          </p>
        </div>
        
        <div className="row align-items-center">
          <div className="col-lg-6 mb-5" data-aos="fade-right">
            <div className="text-center">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                alt="Happy Candidate"
                className="img-fluid rounded shadow-lg"
                style={{ maxWidth: '400px' }}
              />
            </div>
          </div>
          
          <div className="col-lg-6" data-aos="fade-left">
            <div className="testimonials-container">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="card border-0 shadow-sm mb-4">
                  <div className="card-body p-4">
                    <div className="d-flex align-items-center mb-3">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="rounded-circle me-3"
                        width="50"
                        height="50"
                        style={{ objectFit: 'cover' }}
                      />
                      <div>
                        <h6 className="mb-1 fw-bold">{testimonial.name}</h6>
                        <p className="mb-0 text-muted small">{testimonial.title}</p>
                      </div>
                    </div>
                    <p className="card-text text-muted">{testimonial.text}</p>
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

export default Testimonials;
