import React, { useState } from "react";

const Subscription = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle subscription logic here
    console.log("Subscribing email:", email);
    setEmail("");
  };

  return (
    <section className="text-white position-relative" style={{ backgroundColor: '#2c3e50' }}>
      <div
        className="position-absolute w-100 h-100"
        style={{
          backgroundImage: 'url("/assets/images/subscribe.png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'blur(3px)',
          zIndex: 0
        }}
      ></div>

      <div className="container position-relative py-5" style={{ zIndex: 1 }}>
        <div className="text-center">
          <h2 className="display-5 fw-bold mb-4">Subscribe now for job updates and alerts</h2>
          <p className="lead mb-5">
            Find your dream jobs. Carefully crafted after analyzing the needs of different industries.
          </p>

          <div className="row justify-content-center">
            <div className="col-lg-6 col-md-8">
              <form onSubmit={handleSubmit} className="d-flex gap-3">
                <input
                  type="email"
                  className="form-control form-control-lg"
                  placeholder="Enter Your Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit" className="btn btn-primary btn-lg px-4">
                  Enter
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscription;
