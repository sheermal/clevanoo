import React from "react";

const JobGallery = () => {
  const galleryImages = [
    "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1518600506278-4e8ef466b810?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=1200&auto=format&fit=crop"
  ];

  const Track = () => (
    <div className="marquee-track">
      {[...galleryImages, ...galleryImages].map((image, index) => (
        <div className="marquee-item" key={index}>
          <img src={image} alt={`Professional ${index + 1}`} className="marquee-image" />
          <div className="marquee-overlay">
            <div className="overlay-content">
              <h6 className="mb-2 fw-bold">Open Positions</h6>
              <button className="btn btn-sm">View Job</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-6 fw-bold text-dark">Our Latest Jobs</h2>
        </div>

        <div className="position-relative">
          {/* Top row - scroll right */}
          <div className="gallery-marquee marquee-right mb-4">
            <div className="marquee-viewport">
              <Track />
            </div>
          </div>

          {/* Bottom row - scroll left */}
          <div className="gallery-marquee marquee-left mt-4">
            <div className="marquee-viewport">
              <Track />
            </div>
          </div>

          {/* Center Overlay */}
          <div className="position-absolute top-50 start-50 translate-middle text-center d-none d-md-block">
            <div className="bg-white rounded-circle p-4 shadow-lg" style={{ width: '200px', height: '200px' }}>
              <div className="d-flex flex-column justify-content-center align-items-center h-100">
                <h3 className="fw-bold text-primary mb-2">500+</h3>
                <p className="mb-0 text-muted small">Our Latest Jobs</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobGallery;
