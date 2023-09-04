// modules/contact/index.js
import React from 'react';


const Contact = () => {
  return (
    <section id="contact">
      <h1 className="section-header">Contact</h1>
      <div className="contact-wrapper">
        <form id="contact-form" className="form-horizontal">
          <div className="form-group">
            <div className="col-sm-12">
              <input type="text" className="form-control" id="name" placeholder="NAME" name="name" value="Name" required />
            </div>
          </div>

          <div className="form-group">
            <div className="col-sm-12">
              <input type="email" className="form-control" id="email" placeholder="EMAIL" name="email" value="E-mail" required />
            </div>
          </div>

          <textarea className="form-control" rows="10" placeholder="MESSAGE" name="message" value="Message" required />

          <button className="btn btn-primary send-button" id="submit" type="submit" value="SEND">
  <div className="button-wrapper">  
    <div className="alt-send-button">
      <i className="fa fa-paper-plane"></i><span className="send-text">Send</span>
    </div>
  </div>
</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
