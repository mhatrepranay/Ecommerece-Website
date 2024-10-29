import React, { useState, useRef, useEffect } from "react";
import emailjs from '@emailjs/browser';
import { useLocation } from 'react-router-dom';
import AdminNav from "./AdminNav";

const SendReply = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);

    // Access email and fullName from the URL parameters
    const email = searchParams.get('email') || '';
    const fullName = searchParams.get('fullName') || '';

    const [replyEmailId, setReplyEmailId] = useState(email);
    const [replyFullName, setReplyFullName] = useState(fullName);
    const [messageBox, setMessageBox] = useState("");
    const [errorMsg, setErrorMsg] = useState("");
    const form = useRef();

    const sendEmail = async (e) => {
        e.preventDefault();
        try {
            await emailjs.sendForm('service_sit0u9k', 'template_v2ki28q', form.current, 'DvIZ-dbQFq8KvqfYo');
            console.log("Email sent successfully!");
        } catch (error) {
            console.error("Error sending email:", error);
        }
    };



    const handleSendMessage = async (e) => {
        e.preventDefault();
        console.log("handleSendMessage called"); // Add this line
        // Execute only the sendEmail function
        try {
            await sendEmail(e);
            console.log("Email sent successfully!");
        } catch (error) {
            console.error("Error sending email:", error);
        }
    };


    return (
        <>
            <AdminNav>

                <div>
                    <div className="container mb-5">
                        <div className="row">
                            <div className="col-12 text-center py-4 my-4">
                                <h1>Reply to Message</h1>
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
                                        <label htmlFor="replyFullName" className="form-label">
                                            Full Name
                                        </label>
                                        <input
                                            name="to_name"
                                            type="text"
                                            className="form-control"
                                            id="replyFullName"
                                            placeholder="Recipient's Name"
                                            value={replyFullName}
                                            onChange={(e) => setReplyFullName(e.target.value)}

                                            style={{ fontWeight: 'bold' }}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="replyEmailId" className="form-label">
                                            Email address
                                        </label>
                                        <input
                                            name="from_name"
                                            type="email"
                                            className="form-control"
                                            id="replyEmailId"
                                            placeholder="recipient@example.com"
                                            value={replyEmailId}
                                            onChange={(e) => setReplyEmailId(e.target.value)}

                                            style={{ fontWeight: 'bold' }}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="messageBox" className="form-label">
                                            Your Reply
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
                                        Send Reply
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

            </AdminNav>
        </>
    );
};

export default SendReply;
