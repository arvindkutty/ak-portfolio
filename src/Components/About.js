import React, { Component } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

class About extends Component {
  render() {
    if (!this.props.data) return null;

    const { name, image, bio, address, phone, email, resumedownload } = this.props.data;
    const profilepic = process.env.PUBLIC_URL + "/images/" + image;
    //const profilepic = "images/" + image;
    const { street, city, state, zip } = address;
    const downloadLink = `${process.env.PUBLIC_URL}/${resumedownload}`;

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
              alt="Aravind Profile Pic"
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
                  {/* <a href={resumedownload} className="button">
                    <i className="fa fa-download"></i>Download Resume
                  </a> */}
                  <a
                    href={downloadLink}
                    className="button"
                    download
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={faDownload} /> Download Resume
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
