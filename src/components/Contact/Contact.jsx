import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Contact.css";

const ContactForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Show toast message
    toast.success("Sending Message!", {
    //   position: toast.POSITION.TOP_LEFT,
      autoClose: 2000, // Close toast after 2 seconds
    });

    // Delay opening mail app to let user see the toast
    setTimeout(() => {
      const mailToLink = `mailto:thisisrajansapkota@gmail.com?subject=Message%20from%20${encodeURIComponent(
        firstName
      )}%20${encodeURIComponent(lastName)}&body=${encodeURIComponent(
        message
      )}%0D%0A%0D%0AContact%20Details:%0D%0AEmail:%20${encodeURIComponent(
        email
      )}%0D%0APhone:%20${encodeURIComponent(phoneNumber)}`;
      window.location.href = mailToLink;
    }, 2000); // Open mail app after 2 seconds

    // Reset form fields (optional)
    setFirstName("");
    setLastName("");
    setPhoneNumber("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="contact-form-container" id="contact">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            type="tel"
            id="phoneNumber"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Type Your Message</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows="5"
            required
          ></textarea>
        </div>
        <button className="contactBtn" type="submit">SEND</button>
      </form>
      <p>mailto: &quot;thisisrajansapkota@gmail.com&quot;</p>
      <p>Click &lsquo;SEND&lsquo; to open your default email client.</p>
      <ToastContainer />
    </div>
  );
};

export default ContactForm;
