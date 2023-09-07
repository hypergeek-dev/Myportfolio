import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  // Create a ref to hold the form element
  const form = useRef();

  // Function to handle form submission and send email
  const sendEmail = (e) => {
    // Prevent default form submission behavior
    e.preventDefault();

    // Retrieve form field values
    const fromName = form.current.querySelector('[name="name"]').value;
    const fromEmail = form.current.querySelector('[name="email"]').value;
    const message = form.current.querySelector('[name="message"]').value;

    // Create an object to hold email parameters
    const templateParams = {
      from_name: fromName,
      from_email: fromEmail,
      message: message
    };

    // Use emailjs to send the email
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
      <h1 className="section-header display-4">Contact</h1> 
      <div className="contact-wrapper d-flex justify-content-center"> 
        {/* Form for collecting contact details */}
        <form ref={form} id="contact-form" className="form-horizontal" onSubmit={sendEmail}>
          <div className="form-group">
            <div className="col-sm-12">
              {/* Input field for name */}
              <input type="text" className="form-control bg-dark text-white border-secondary" id="name" name="name" placeholder="Name" required />
            </div>
          </div>

          <div className="form-group">
            <div className="col-sm-12">
              {/* Input field for email */}
              <input type="email" className="form-control bg-dark text-white border-secondary" id="email" name="email" placeholder="E-mail" required />
              {/* Added Bootstrap classes for styling */}
            </div>
          </div>

          {/* Textarea for message */}
          <textarea className="form-control bg-dark text-white border-secondary" rows="10" name="message" placeholder="Message" required />
          {/* Added Bootstrap classes for styling */}

          {/* Submit button */}
          <button className="btn btn-outline-light send-button" id="submit" type="submit"> {/* Added Bootstrap button classes */}
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