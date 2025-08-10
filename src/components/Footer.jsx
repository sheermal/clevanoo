import React from "react";

const Footer = () => {
  return (
    <footer className="py-5 bg-dark text-white">
      <div className="container text-center">
        <p className="mb-2">
          &copy; {new Date().getFullYear()} Clevanoo LLC. All rights reserved.
        </p>
        <div className="d-flex justify-content-center gap-3">
          <a className="text-white fs-5" href="#" aria-label="LinkedIn">
            <i className="fab fa-linkedin"></i>
          </a>
          <a className="text-white fs-5" href="#" aria-label="Twitter">
            <i className="fab fa-twitter"></i>
          </a>
          <a className="text-white fs-5" href="#" aria-label="Facebook">
            <i className="fab fa-facebook"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
