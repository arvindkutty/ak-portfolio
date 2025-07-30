import React, { Component } from "react";
import Lightbox from "yet-another-react-lightbox";
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import { motion } from "framer-motion";

class Portfolio extends Component {
  state = {
    isOpen: false,
    index: 0,
  };

  render() {
    if (!this.props.data) return null;

    const { isOpen, index } = this.state;

    const slides = this.props.data.projects.map((project) => ({
      src: process.env.PUBLIC_URL + "/images/portfolio/" + project.image,
      title: project.title,
      description: project.description || "", // optional field
    }));

    const projects = this.props.data.projects.map((project, idx) => {
      const projectImage = process.env.PUBLIC_URL + "/images/portfolio/" + project.image;

      return (
        <div key={idx} className="columns portfolio-item">
          <div
            className="item-wrap"
            style={{ cursor: "pointer" }}
            onClick={() => this.setState({ isOpen: true, index: idx })}
          >
            <img
              alt={project.title}
              src={projectImage}
              style={{ width: "100%", height: "auto" }}
            />
            <div style={{ textAlign: "center" }}>{project.title}</div>
          </div>
        </div>
      );
    });

    return (
      <section id="portfolio">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="row">
            <div className="twelve columns collapsed">
              <h1>Check Out Some of My Works.</h1>

              <div
                id="portfolio-wrapper"
                className="bgrid-quarters s-bgrid-thirds cf"
              >
                {projects}
              </div>
            </div>
          </div>
        </motion.div>

        {isOpen && (
          <Lightbox
            open={isOpen}
            close={() => this.setState({ isOpen: false })}
            index={index}
            slides={slides}
            plugins={[Captions]}
            captions={{ showToggle: true, descriptionTextAlign: "center" }}
          />
        )}
      </section>
    );
  }
}

export default Portfolio;
