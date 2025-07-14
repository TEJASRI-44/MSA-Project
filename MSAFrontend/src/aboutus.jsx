import React from "react";
import "./AboutUs.css";

const AboutUs = () => {
  return (
    <div className="about-us">
      <h1>About Us</h1>

      <section className="company-info">
        <h2>About Company</h2>
        <p>
          <strong>Company Name:</strong> <i><b style={{fontSize:"Larger"}}>DreamScope</b></i>
        </p>
        <p>
          <strong>Description:</strong> MedTech Solutions Pvt. Ltd. specializes
          in developing automation and management software for the healthcare
          industry, aiming to improve efficiency and accuracy in medical and
          pharmaceutical operations.
        </p>
      </section>

      <section className="project-info">
        <h2>Project Name</h2>
        <p>Medicine Shop Automation (MSA)</p>
      </section>

      <section className="team-info">
        <h2>Team Members</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>ID</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Sukesh</td>
              <td>R200109</td>
              <td>rr200109@rguktrkv.ac.in</td>
            </tr>
            <tr>
              <td>Bharath</td>
              <td>R200301</td>
              <td>rr200301@rguktrkv.ac.in</td>
            </tr>
            <tr>
              <td>Saradhi</td>
              <td>R200267</td>
              <td>rr200267@rguktrkv.ac.in</td>
            </tr>
            <tr>
              <td>Teja Sri</td>
              <td>R200091</td>
              <td>rr200091@rguktrkv.ac.in</td>
            </tr>
            <tr>
              <td>Deepika</td>
              <td>R200145</td>
              <td>rr200145@rguktrkv.ac.in</td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default AboutUs;
