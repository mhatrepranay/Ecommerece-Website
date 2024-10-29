import React, { useState, useRef } from "react";
import emailjs from '@emailjs/browser';
import msgservice from "../services/msgservice";
import "./Contact.css";

const Contact = () => {
  const [fullName, setFullName] = useState("");
  const [emailId, setEmailId] = useState("");
  const [messageBox, setMessageBox] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      await emailjs.sendForm('service_sit0u9k', 'template_v2ki28q', form.current, 'DvIZ-dbQFq8KvqfYo');
      console.log("Email sent successfully!");
    } catch (error) {
      console.log("Error sending email:", error);
    }
  };

  const saveMsg = async (e) => {
    e.preventDefault();

    if (!fullName || !emailId || !messageBox) {
      setErrorMsg("Please fill in all details before sending the message.");
      setTimeout(() => {
        setErrorMsg("");
      }, 3000);
      return;
    }

    setErrorMsg("");

    const contactus = {
      fullName,
      emailId,
      messageBox
    };

    try {
      await msgservice.saveMsg(contactus);
      setFullName("");
      setEmailId("");
      setMessageBox("");
      console.log("Message saved successfully!");
    } catch (error) {
      console.error("Error saving message:", error);
    }
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();

    // Execute both functions simultaneously using Promise.all()
    try {
      await Promise.all([sendEmail(e), saveMsg(e)]);
      console.log("Email and message saved successfully!");
    } catch (error) {
      console.error("Error sending email and saving message:", error);
    }
  };

  return (
    <div>
      <div className="container mb-5">
        <div className="row">
          <div className="col-12 text-center py-4 my-4">
            <h1>Have Some Questions?</h1>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-md-5 d-flex justify-content-center">
            <img
              src="/assets/contact.gif"
              alt="Contact Us"
              className="contact-image"
            />
          </div>
          <div className="col-md-6">
            <form className="contact-form" ref={form} onSubmit={handleSendMessage}>
              <div className="mb-3">
                <label htmlFor="fullName" className="form-label">
                  Full Name
                </label>
                <input
                  name="to_name"
                  type="text"
                  className="form-control"
                  id="fullName"
                  placeholder="Pranay Mhatre"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="emailId" className="form-label">
                  Email address
                </label>
                <input
                  name="from_name"
                  type="email"
                  className="form-control"
                  id="emailId"
                  placeholder="name@example.com"
                  value={emailId}
                  onChange={(e) => setEmailId(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="messageBox" className="form-label">
                  Your Message
                </label>
                <textarea
                  name="message"
                  className="form-control"
                  id="messageBox"
                  rows="5"
                  value={messageBox}
                  onChange={(e) => setMessageBox(e.target.value)}
                ></textarea>
              </div>
              {errorMsg && <div className="error-message">{errorMsg}</div>}
              <button
                type="submit"
                id="send-button"
                className="btn btn-dark"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
