import React, { Component } from "react";
import { motion } from "framer-motion";

class About extends Component {
  render() {
    if (!this.props.data) return null;

    const { name, image, bio, address, phone, email, resumedownload } = this.props.data;
    const profilepic = "images/" + image;
    const { street, city, state, zip } = address;

    return (
      <section id="about">
        <motion.div
          className="row"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="three columns">
            <img
              className="profile-pic"
              src={profilepic}
              alt="Nordic Giant Profile Pic"
            />
          </div>
          <div className="nine columns main-col">
            <h2>About Me</h2>

            <p>{bio}</p>
            <div className="row">
              <div className="columns contact-details">
                <h2>Contact Details</h2>
                <p className="address">
                  <span>{name}</span>
                  <br />
                  <span>
                    {street}
                    <br />
                    {city} {state}, {zip}
                  </span>
                  <br />
                  <span>{phone}</span>
                  <br />
                  <span>{email}</span>
                </p>
              </div>
              <div className="columns download">
                <p>
                  <a href={resumedownload} className="button">
                    <i className="fa fa-download"></i>Download Resume
                  </a>
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    );
  }
}

export default About;
