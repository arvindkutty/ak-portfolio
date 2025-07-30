import React, { Component } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as brands from '@fortawesome/free-brands-svg-icons';

class Footer extends Component {
  render() {
    if (!this.props.data) return null;

    const networks = this.props.data.social.map((network) => (
      // <li key={network.name}>
      //   <a href={network.url} target="_blank">
      //     <i className={network.className}></i>
      //   </a>
      // </li>
      <li key={network.name}>
        <a href={network.url} target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={brands[network.iconName]} />
        </a>
      </li>
    ));

    return (
      <footer>
        <div className="row">
          <motion.div
            className="twelve columns"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <ul className="social-links">{networks}</ul>

            <ul className="copyright">
              <li>&copy; Copyright 2025 Aravind</li>
              <li>
                Design by Aravind
              </li>
            </ul>
          </motion.div>

          <div id="go-top">
            <a className="smoothscroll" title="Back to Top" href="#home">
              <i className="icon-up-open"></i>
            </a>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
