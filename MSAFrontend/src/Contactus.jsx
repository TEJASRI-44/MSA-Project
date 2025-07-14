import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import CustomAlert from "./CustomAlert"; // Import the custom alert
import "./contactus.css";

const ContactUs = () => {
  const [name, setName] = useState({ firstName: "", lastName: "" });
  const [email, setEmail] = useState("");
  const [comments, setComments] = useState("");
  const [alertVisible, setAlertVisible] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setAlertVisible(true); // Show the alert
  };

  const handleCloseAlert = () => {
    setAlertVisible(false); // Hide the alert
    // Clear form fields after submission
    setName({ firstName: "", lastName: "" });
    setEmail("");
    setComments("");
  };

  return (
    <div className="contact-us-container">
      {/* Custom Alert */}
      {alertVisible && (
        <CustomAlert
          message={`Your response has been recorded successfully, ${name.firstName} ${name.lastName}. We will contact you soon!`}
          onClose={handleCloseAlert}
        />
      )}

      {/* Contact Information Section */}
      <div className="contact-info">
        <div className="address">
          <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" />
          <h2>ADDRESS</h2>
          <p>Medical Shop Automation</p>
          <p>RGUKT RKVALLEY</p>
          <p>IDUPULAPAYA</p>
          <p>VEMPALLI</p>
          <p>KADAPA</p>
          <p>ANDHRA PRADESH</p>
          <p>INDIA - 516330</p>
        </div>
        <div className="phone-email">
          <FontAwesomeIcon icon={faPhone} className="icon" />
          <h2>PHONE</h2>
          <p>Medical Shop Automation</p>
          <p>9876543210 - MSA phone</p>
          <p>MSA 24/7 Service Department</p>
          <p>(Press 0 for emergency calls)</p>
          <FontAwesomeIcon icon={faEnvelope} className="icon" />
          <h2>EMAIL</h2>
          <p>Request for Proposal: info@msagroup.com</p>
          <p>Bid Opportunities: estimating@msagroup.com</p>
          <p>Service Calls: service@msagroup.com</p>
          <p>Employment: recruiting@msagroup.com</p>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="form-container">
        <h2>Message Us</h2>
        <form onSubmit={handleSubmit}>
          <div className="name-input">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              value={name.firstName}
              onChange={(e) => setName({ ...name, firstName: e.target.value })}
              required
            />
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              value={name.lastName}
              onChange={(e) => setName({ ...name, lastName: e.target.value })}
              required
            />
          </div>
          <div className="email-input">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="comments-input">
            <label htmlFor="comments">Comments</label>
            <textarea
              id="comments"
              value={comments}
              onChange={(e) => setComments(e.target.value)}
            ></textarea>
          </div>
          <button type="submit">SUBMIT</button>
        </form>
        <p className="note">
          If you wish to be considered for employment at Weifield, please do not
          send a message here - instead, complete Weifield's job application and
          our Human Resources department will contact you after reviewing your
          information.
        </p>
      </div>
    </div>
  );
};

export default ContactUs;
