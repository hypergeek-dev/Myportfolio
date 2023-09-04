import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_6erq9js', 'template_b96h8du', form.current, '3Yvs7CV-qUSayuQjb')
      .then((result) => {
          console.log(result.text);
          alert('Message sent successfully');
      }, (error) => {
          console.log(error.text);
          alert('Failed to send message. Please try again later.');
      });
  };

  return (
    <section id="contact">
      <h1 className="section-header">Contact</h1>
      <div className="contact-wrapper">
        <form ref={form} id="contact-form" className="form-horizontal" onSubmit={sendEmail}>
          <div className="form-group">
            <div className="col-sm-12">
              <input type="text" className="form-control" id="name" name="name" placeholder="Name" required />
            </div>
          </div>

          <div className="form-group">
            <div className="col-sm-12">
              <input type="email" className="form-control" id="email" name="email" placeholder="E-mail" required />
            </div>
          </div>

          <textarea className="form-control" rows="10" name="message" placeholder="Message" required />

          <button className="btn send-button" id="submit" type="submit">
            <div className="button-wrapper">  
              <div className="alt-send-button">
                <span className="send-text">Send</span>
              </div>
            </div>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
