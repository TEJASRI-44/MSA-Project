import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const NavbarWithCarousel = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Navbar */}
      <nav
        className={`navbar navbar-expand-lg navbar-dark fixed-top ${
          isScrolled ? "scrolled" : ""
        }`}
      >
        <div className="container-fluid">
          <img
            className="logo"
            src="https://res.cloudinary.com/dsdcaxwpg/image/upload/v1730001554/logo_msa_e2z3fj.png"
            alt="logo"
          />

          <p className="logo-text"> Medical Shop</p>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#about"
                  style={{ color: "black" }}
                >
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#services"
                  style={{ color: "black" }}
                >
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#products"
                  style={{ color: "black" }}
                >
                  Products
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#contact"
                  style={{ color: "black" }}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section with Combined Carousel */}
      <section className="hero-section">
        <div
          id="heroCarousel"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="https://img.freepik.com/free-vector/vector-banner-online-pharmacy-service_107791-7615.jpg?t=st=1730648339~exp=1730651939~hmac=64e38dbb4de1ef9586ef9d65206420c0eb79ff8cd8930fbf4777b7bf8865cf16&w=996"
                className="d-block w-100"
                alt="Slide 1"
                onError={(e) => {
                  e.target.src = "fallback-image-url.jpg";
                }} // Fallback for image error
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://img.freepik.com/premium-photo/blurred-picture-medicine-shelf-drug-store-pharmacy-shop-interiors_1036975-248249.jpg?semt=ais_hybrid"
                className="d-block w-100"
                alt="Slide 2"
                onError={(e) => {
                  e.target.src = "fallback-image-url.jpg";
                }} // Fallback for image error
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://www.shutterstock.com/image-illustration/3d-online-pharmacy-store-buy-260nw-2192726065.jpg"
                className="d-block w-100"
                alt="Slide 3"
                onError={(e) => {
                  e.target.src = "fallback-image-url.jpg";
                }} // Fallback for image error
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#heroCarousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#heroCarousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </section>

      {/* Optional: Add some CSS styles */}
      <style jsx>{`
        .navbar.scrolled {
          background-color: rgba(255, 255, 255, 0.9);
          transition: background-color 0.3s ease;
        }
        .hero-section {
          margin-top: 56px; /* Adjust based on navbar height */
        }
      `}</style>
    </>
  );
};

export default NavbarWithCarousel;
