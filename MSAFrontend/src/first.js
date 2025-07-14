import React, { useState } from "react";
import { Link } from "react-router-dom";
import "font-awesome/css/font-awesome.min.css";
import NavbarWithCarousel from "./NavbarWithCarousel";
function First() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your form submission logic here
    console.log({ name, email, message });
  };

  const styles = {
    contactSection: {
      backgroundColor: "#f0f4f8",
      padding: "60px 20px",
    },
    contactContainer: {
      maxWidth: "600px",
      margin: "0 auto",
      padding: "20px",
      backgroundColor: "#ffffff",
      borderRadius: "8px",
      boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
    },
    contactTitle: {
      textAlign: "center",
      color: "#333",
      fontWeight: "bold",
      marginBottom: "20px",
    },
    contactSubtitle: {
      textAlign: "center",
      color: "#666",
      marginBottom: "30px",
    },
    contactForm: {
      display: "flex",
      flexDirection: "column",
    },
    formGroup: {
      marginBottom: "20px",
      position: "relative",
    },
    formLabel: {
      marginBottom: "5px",
      color: "#555",
      fontWeight: "600",
    },
    formInput: {
      padding: "10px 40px", // Add padding for the icon
      border: "1px solid #ddd",
      borderRadius: "4px",
      fontSize: "16px",
      transition: "border-color 0.3s",
    },
    icon: {
      position: "absolute",
      left: "10px",
      top: "50%",
      transform: "translateY(-50%)",
      color: "#007bff",
    },
    submitButton: {
      backgroundColor: "#007bff",
      color: "white",
      padding: "10px",
      border: "none",
      borderRadius: "4px",
      fontSize: "16px",
      fontWeight: "bold",
      cursor: "pointer",
      transition: "background-color 0.3s",
    },
    submitButtonHover: {
      backgroundColor: "#0056b3",
    },
  };
  return (
    <div>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Medical Shop - Quality Healthcare</title>
      <link rel="stylesheet" href="job_interacton.css" />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
      />
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n        /* Custom styles */\n        body {\n            background-color: #e4f0fc;\n            font-family: 'Roboto', sans-serif;\n            margin: 0;\n        }\n\n        .navbar {\n            background-color: transparent !important;\n            transition: background-color 0.3s;\n            z-index: 1000;\n        }\n\n        .navbar.scrolled {\n            background-color: rgba(0, 123, 255, 0.8) !important;\n        }\n\n        .navbar-brand {\n            font-weight: bold;\n            font-size: 30px;\n            text-decoration: underline;\n        }\n\n        a {\n            font-size: 20px;\n        }\n\n        .hero-section {\n            margin-top: -20px;\n        }\n\n        .carousel {\n            margin-top: -56px;\n            /* Adjusted to overlap with the navbar */\n        }\n\n        /* Transparent Navbar - Scrolled Effect */\n        .navbar.scrolled {\n            background-color: rgba(0, 123, 255, 0.8) !important;\n        }\n\n        .carousel-inner img {\n            height: 110vh;\n            /* object-fit: cover; */\n        }\n\n        .shop-now-block {\n            background: url('https://www.shutterstock.com/shutterstock/photos/1883969314/display_1500/stock-vector-cartoon-modern-medicine-clinic-skyscrapers-set-outdoor-facade-hospital-exterior-with-ambulance-car-1883969314.jpg') center/cover no-repeat;\n            color: #3e3c3c;\n            padding: 10px;\n            position: relative;\n            margin-top: 10px;\n            height: 250px;\n\n            background-size: cover;\n        }\n\n        .shop-now-block::after {\n            content: \"\";\n            background-color: #e4f0fc;\n            opacity: 0.5;\n            position: absolute;\n            top: 0;\n            left: 0;\n            right: 0;\n            bottom: 0;\n            z-index: 0;\n        }\n\n        .shop-now-content {\n            position: relative;\n            z-index: 1;\n        }\n\n        .section-content {\n            padding: 40px 20px;\n        }\n\n        footer {\n            background-color: #007bff;\n            color: #fff;\n            text-align: center;\n            padding: 10px 0;\n        }\n\n        .btn-primary {\n            background-color: #3e46e3;\n            opacity: 0.9;\n            border: none;\n            border-radius: 50px;\n        }\n\n        .btn-primary:hover {\n            background-color: #218838;\n        }\n\n        .product-section {\n            padding: 40px 20px;\n        }\n\n        .product-card {\n            margin-bottom: 30px;\n            height: 400px;\n            border: 1px solid #ddd;\n            border-radius: 10px;\n            box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);\n            background-color: #fff;\n        }\n\n        .product-img {\n  align:center;\n        width:80%;\n  height: 200px;\n            object-fit: cover;\n            border-top-left-radius: 10px;\n            border-top-right-radius: 10px;\n        }\n\n        .product-info {\n            padding: 15px;\n        }\n\n        .product-name {\n            font-weight: bold;\n            color: #333;\n        }\n\n        .product-description {\n            color: #555;\n            font-size: 14px;\n            margin-top: 10px;\n        }\n\n        .product-price {\n            color: #28a745;\n            font-weight: bold;\n            margin-top: 10px;\n        }\n    ",
        }}
      />
      <NavbarWithCarousel />
      {/* Shop Now Section */}
      <section className="shop-now-block">
        <div className="shop-now-content text-center">
          <h1 className="display-4">Your Trusted Medical Shop</h1>
          <p className="lead">
            Delivering quality healthcare products at your doorstep.
          </p>
          <Link to="/role" className="btn btn-primary btn-lg">
            Click Here
          </Link>
        </div>
      </section>
      {/* Products Section */}
      <section id="products" className="section-content ">
        <div className="container-fluid text-center">
          {/* <h2 class="mb-4">Our Products</h2> */}
          <div className="row">
            <div className="col-md-3">
              <div
                className="card p-3"
                style={{
                  backgroundColor: "rgb(255, 198, 74,0.8)",
                  height: "400px",
                }}
              >
                <img
                  src="https://img.freepik.com/free-vector/world-health-day-concept-healthcare-health-protection-global-international-event-april-flat-vector-illustration-design_1150-61899.jpg?t=st=1730652336~exp=1730655936~hmac=4705e75a08dfce4330cd91a949daf75168444db5d25a965cf64a0d748d3140db&w=740"
                  className="card-img-top"
                  alt="Medication"
                />
                <div className="card-body">
                  <br />
                  <h4 className="card-title">Medication</h4>
                  <p className="card-text">
                    High-quality prescription and over-the-counter medicines.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div
                className="card p-3"
                style={{
                  backgroundColor: "rgb(163, 255, 105,0.8)",
                  height: "400px",
                }}
              >
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxnyMwhxtpCUdXc1GLy1PMepRfsLyQM9xZwQ&s"
                  className="card-img-top"
                  alt="Supplements"
                />
                <div className="card-body">
                  <br />
                  <h4 className="card-title">Supplements</h4>
                  <p className="card-text">
                    Nutritional supplements to support your overall wellness.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div
                className="card p-3"
                style={{
                  backgroundColor: "rgb(254, 134, 118,0.8)",
                  height: "400px",
                }}
              >
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvhrnvniX5RV4XOZJAHvfI_q0OPtCHp2B-BQ&s"
                  className="card-img-top"
                  alt="First-Aid Kits "
                  height="180px"
                />
                <div className="card-body">
                  <br />
                  <h4 className="card-title">First-Aid Kits</h4>
                  <p className="card-text">
                    Essential first-aid kits for home, office, and travel.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div
                className="card p-3"
                style={{
                  backgroundColor: "rgb(93, 186, 248,0.8)",
                  height: "400px",
                }}
              >
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4IBz5e6gouNu2IjMWDIOhIKftQDiGhWHELw&s"
                  className="card-img-top"
                  alt="Medical Devices"
                />
                <div className="card-body">
                  <br />
                  <h4 className="card-title">Medical Devices</h4>
                  <p className="card-text">
                    Reliable medical devices like thermometers and blood
                    pressure monitors.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Product Section */}
      <section id="products" className="product-section">
        <div className="container-fluid">
          <h2 className="text-center mb-4">Our Products</h2>
          <div className="row">
            {/* Product 1 */}
            <div className="col-md-3">
              <div className="product-card">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5CNBwqj_BLAXNWIctxF2vmR8iE0eCkpUsVQ&s"
                  alt="PainRelief Plus"
                  className="product-img"
                  style={{ marginLeft: "30px" }}
                />
                <div className="product-info">
                  <h5 className="product-name">PainRelief Plus</h5>
                  <p className="product-description">
                    Effective for joint and muscle pain relief. Provides lasting
                    comfort and mobility.
                  </p>
                  <p className="product-price">$10.99</p>
                </div>
              </div>
            </div>
            {/* Product 2 */}
            <div className="col-md-3">
              <div className="product-card">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSq6jfNMYME_7HEjaQTIz95wXTe54O-u33qiA&s"
                  alt="AllergyEase Capsules"
                  className="product-img"
                  width="250px"
                />
                <div className="product-info">
                  <h5 className="product-name">AllergyEase Capsules</h5>
                  <p className="product-description">
                    Fast relief from seasonal allergies. Non-drowsy formula for
                    everyday use.
                  </p>
                  <p className="product-price">$15.49</p>
                </div>
              </div>
            </div>
            {/* Product 3 */}
            <div className="col-md-3">
              <div className="product-card">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt89ySK6nEKKIx5zcEwZeQvw78ur7_cgpQzA&s"
                  alt="CoughShield Syrup"
                  className="product-img"
                  width="190px"
                />
                <div className="product-info">
                  <h5 className="product-name">CoughShield Syrup</h5>
                  <p className="product-description">
                    Soothes cough and clears mucus. Natural ingredients for
                    respiratory support.
                  </p>
                  <p className="product-price">$8.99</p>
                </div>
              </div>
            </div>
            {/* Product 4 */}
            <div className="col-md-3">
              <div className="product-card">
                <img
                  src="https://cdn01.pharmeasy.in/dam/products_otc/M80997/sleep-well-2-1699264067.jpg?dim=400x0&dpr=1&q=100"
                  width="250px"
                  alt="SleepWell Tablets"
                  className="product-img"
                />
                <div className="product-info">
                  <h5 className="product-name">SleepWell Tablets</h5>
                  <p className="product-description">
                    Helps combat insomnia and promotes restful sleep. Wake up
                    refreshed.
                  </p>
                  <p className="product-price">$12.99</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            {/* Product 5 */}
            <div className="col-md-3">
              <div className="product-card">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0C6aOLXIaSYkxdpUe6CmNYNdesnV6_eGgqg&s"
                  alt="DigestiveHealth Pro"
                  className="product-img"
                  width="200px"
                />
                <div className="product-info">
                  <h5 className="product-name">DigestiveHealth Pro</h5>
                  <p className="product-description">
                    Supports digestive function and promotes a healthy gut. Easy
                    on the stomach.
                  </p>
                  <p className="product-price">$18.50</p>
                </div>
              </div>
            </div>
            {/* Product 6 */}
            <div className="col-md-3">
              <div className="product-card">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTt9uETnQydYIAggKWXlPA4ybFluMH6Hwua_Q&s"
                  className="product-img"
                  alt="ImmuneBoost Complex"
                />
                <div className="product-info">
                  <h5 className="product-name">ImmuneBoost Complex</h5>
                  <p className="product-description">
                    A blend of vitamins and minerals to strengthen immunity and
                    promote wellness.
                  </p>
                  <p className="product-price">$22.75</p>
                </div>
              </div>
            </div>
            {/* Product 7 */}
            <div className="col-md-3">
              <div className="product-card">
                <img
                  src="https://5.imimg.com/data5/SELLER/Default/2021/12/US/BK/SI/1124725/cardio-care-tablet-500x500.jpg"
                  className="product-img"
                  alt="CardioCare Pills"
                />
                <div className="product-info">
                  <h5 className="product-name">CardioCare Pills</h5>
                  <p className="product-description">
                    Promotes heart health and supports proper blood circulation.
                  </p>
                  <p className="product-price">$25.00</p>
                </div>
              </div>
            </div>
            {/* Product 8 */}
            <div className="col-md-3">
              <div className="product-card">
                <img
                  src="https://m.media-amazon.com/images/I/61JLK4rUzrL.jpg"
                  alt="EnergyBoost Drink"
                  className="product-img"
                  width="220px"
                />
                <div className="product-info">
                  <h5 className="product-name">EnergyBoost Drink</h5>
                  <p className="product-description">
                    Instant energy boost with essential electrolytes. Refresh
                    your body and mind.
                  </p>
                  <p className="product-price">$4.99</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            {/* Product 9 */}
            <div className="col-md-3">
              <div className="product-card">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbs3fAmN3FeQ5d-pMtqDTKIrXpqL7Kl6FF3Q&s"
                  className="product-img"
                  alt="FocusMind Capsules"
                />
                <div className="product-info">
                  <h5 className="product-name">FocusMind Capsules</h5>
                  <p className="product-description">
                    Enhances cognitive function and improves mental clarity and
                    focus.
                  </p>
                  <p className="product-price">$16.89</p>
                </div>
              </div>
            </div>
            {/* Product 10 */}
            <div className="col-md-3">
              <div className="product-card">
                <img
                  src="https://www.zeroharm.in/cdn/shop/files/boneheaalth-01.jpg?v=1718170492&width=1946"
                  alt="BoneStrong Tablets"
                  className="product-img"
                />
                <div className="product-info">
                  <h5 className="product-name">BoneStrong Tablets</h5>
                  <p className="product-description">
                    Rich in calcium and vitamin D3 to strengthen bones and
                    prevent osteoporosis.
                  </p>
                  <p className="product-price">$14.29</p>
                </div>
              </div>
            </div>
            {/* Product 11 */}
            <div className="col-md-3">
              <div className="product-card">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXZdlBWB8HG04R8x-Qw6rL6JxxuLPkp_xD4A&s"
                  alt="SkinGlow Cream"
                  className="product-img"
                />
                <div className="product-info">
                  <h5 className="product-name">SkinGlow Cream</h5>
                  <p className="product-description">
                    Enriched with natural ingredients to hydrate and brighten
                    your skin, giving it a radiant glow.
                  </p>
                  <p className="product-price">$19.95</p>
                </div>
              </div>
            </div>
            {/* Product 12 */}
            <div className="col-md-3">
              <div className="product-card">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMtyC_AFhIVlG5-Q-NudZTweLfrF1pcmzX9g&s"
                  alt="HairRevive Serum"
                  className="product-img"
                />
                <div className="product-info">
                  <h5 className="product-name">HairRevive Serum</h5>
                  <p className="product-description">
                    Nourishes hair roots and reduces hair fall. Provides
                    strength and shine to dull hair.
                  </p>
                  <p className="product-price">$23.50</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Section */}

      {/* Footer */}
      <footer>
        <div className="container-fluid">
          <p>© 2024 Medical Shop. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default First;
