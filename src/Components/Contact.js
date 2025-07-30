import React, { Component } from "react";
import { motion } from "framer-motion";

class Contact extends Component {
  render() {
    if (!this.props.data) return null;

    const { name, address, phone, contactmessage } = this.props.data;
    const { street, city, state, zip } = address;

    return (
      <></>
      // <section id="contact">
      //   {/* Fade-in bottom animation */}
      //   <motion.div
      //     className="row section-head"
      //     initial={{ opacity: 0, y: 50 }}
      //     whileInView={{ opacity: 1, y: 0 }}
      //     transition={{ duration: 1 }}
      //     viewport={{ once: true }}
      //   >
      //     <div className="two columns header-col">
      //       <h1>
      //         <span>Get In Touch.</span>
      //       </h1>
      //     </div>

      //     <div className="ten columns">
      //       <p className="lead">{contactmessage}</p>
      //     </div>
      //   </motion.div>

      //   <div className="row">
      //     {/* Slide-in from left */}
      //     <motion.div
      //       className="eight columns"
      //       initial={{ opacity: 0, x: -100 }}
      //       whileInView={{ opacity: 1, x: 0 }}
      //       transition={{ duration: 1 }}
      //       viewport={{ once: true }}
      //     >
      //       <form action="" method="post" id="contactForm" name="contactForm">
      //         <fieldset>
      //           <div>
      //             <label htmlFor="contactName">
      //               Name <span className="required">*</span>
      //             </label>
      //             <input
      //               type="text"
      //               defaultValue=""
      //               size="35"
      //               id="contactName"
      //               name="contactName"
      //               onChange={this.handleChange}
      //             />
      //           </div>

      //           <div>
      //             <label htmlFor="contactEmail">
      //               Email <span className="required">*</span>
      //             </label>
      //             <input
      //               type="text"
      //               defaultValue=""
      //               size="35"
      //               id="contactEmail"
      //               name="contactEmail"
      //               onChange={this.handleChange}
      //             />
      //           </div>

      //           <div>
      //             <label htmlFor="contactSubject">Subject</label>
      //             <input
      //               type="text"
      //               defaultValue=""
      //               size="35"
      //               id="contactSubject"
      //               name="contactSubject"
      //               onChange={this.handleChange}
      //             />
      //           </div>

      //           <div>
      //             <label htmlFor="contactMessage">
      //               Message <span className="required">*</span>
      //             </label>
      //             <textarea
      //               cols="50"
      //               rows="15"
      //               id="contactMessage"
      //               name="contactMessage"
      //             ></textarea>
      //           </div>

      //           <div>
      //             <button className="submit">Submit</button>
      //             <span id="image-loader">
      //               <img alt="" src="images/loader.gif" />
      //             </span>
      //           </div>
      //         </fieldset>
      //       </form>

      //       <div id="message-warning"> Error boy</div>
      //       <div id="message-success">
      //         <i className="fa fa-check"></i>Your message was sent, thank you!
      //         <br />
      //       </div>
      //     </motion.div>

      //     {/* Slide-in from right */}
      //     <motion.aside
      //       className="four columns footer-widgets"
      //       initial={{ opacity: 0, x: 100 }}
      //       whileInView={{ opacity: 1, x: 0 }}
      //       transition={{ duration: 1 }}
      //       viewport={{ once: true }}
      //     >
      //       <div className="widget widget_contact">
      //         <h4>Address and Phone</h4>
      //         <p className="address">
      //           {name}
      //           <br />
      //           {street} <br />
      //           {city}, {state} {zip}
      //           <br />
      //           <span>{phone}</span>
      //         </p>
      //       </div>

      //       <div className="widget widget_tweets">
      //         <h4 className="widget-title">Latest Tweets</h4>
      //         <ul id="twitter">
      //           <li>
      //             <span>
      //               This is Photoshop's version of Lorem Ipsum. Proin gravida
      //               nibh vel velit auctor aliquet. Aenean sollicitudin, lorem
      //               quis bibendum auctor, nisi elit consequat ipsum
      //               <a href="./">http://t.co/CGIrdxIlI3</a>
      //             </span>
      //             <b>
      //               <a href="./">2 Days Ago</a>
      //             </b>
      //           </li>
      //           <li>
      //             <span>
      //               Sed ut perspiciatis unde omnis iste natus error sit
      //               voluptatem accusantium doloremque laudantium, totam rem
      //               aperiam, eaque ipsa quae ab illo inventore veritatis et
      //               quasi
      //               <a href="./">http://t.co/CGIrdxIlI3</a>
      //             </span>
      //             <b>
      //               <a href="./">3 Days Ago</a>
      //             </b>
      //           </li>
      //         </ul>
      //       </div>
      //     </motion.aside>
      //   </div>
      // </section>
    );
  }
}

export default Contact;
