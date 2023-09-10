import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    const fromName = form.current.querySelector('[name="name"]').value;
    const fromEmail = form.current.querySelector('[name="email"]').value;
    const message = form.current.querySelector('[name="message"]').value;

    const templateParams = {
      from_name: fromName,
      from_email: fromEmail,
      message: message
    };

    emailjs.send('service_6erq9js', 'template_b96h8du', templateParams, '3Yvs7CV-qUSayuQjb')
      .then((result) => {
          console.log(result.text);
          alert('Message sent successfully!');
      }, (error) => {
          console.log(error.text);
          alert('Failed to send message. Please try again later.');
      });
  };

  return (
    <section id="contact" className="text-center custom-top-padding">
      <h1 className="section-header display-4 mt-5 custom_headlines">Contact</h1>
      <div className="container">
        <div className="row justify-content-center">
          {/* Form Container */}
          <div className="col-sm-10 col-md-6">
            <div className="contact-wrapper d-flex justify-content-center">
              <form ref={form} id="contact-form" className="form-horizontal" onSubmit={sendEmail}>
                <div className="form-group">
                  <div className="col-sm-12">
                    <input type="text" className="form-control bg-dark text-white border-secondary" id="name" name="name" placeholder="Name" required />
                  </div>
                </div>
                <div className="form-group">
                  <div className="col-sm-12">
                    <input type="email" className="form-control bg-dark text-white border-secondary" id="email" name="email" placeholder="E-mail" required />
                  </div>
                </div>
                <textarea className="form-control bg-dark text-white border-secondary" rows="10" name="message" placeholder="Message" required />
                <button className="btn send-button glow-on-hover text-white btn btn-dark" id="submit" type="submit"> 
                  <div className="button-wrapper">  
                    <span className="send-text">Send</span>
                  </div>
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info Container */}
          <div className="col-sm-10 col-md-6">
            <div className="contact-info-container mt-4">
              <h2>Contact Information</h2>
              <p>Email: dennis.mariegaard.jensen(@)gmail.com</p>
              <p>Phone: +46 79013 9187</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;