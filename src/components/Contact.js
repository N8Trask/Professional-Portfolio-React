import React, { useState } from "react";
import { validateEmail } from "../utils/helper";

function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errorMessages, setErrorMessages] = useState({
    name: "",
    email: "",
    message: "",
  });

  const { name, email, message } = formState;

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrorMessages = {};

    // Check for errors in each field and update the errorMessages state
    if (!name.trim()) {
      newErrorMessages.name = "Name is required.";
    }
    if (!validateEmail(email)) {
      newErrorMessages.email = "Your email is invalid.";
    }
    if (!message.trim()) {
      newErrorMessages.message = "Message is required.";
    }

    setErrorMessages(newErrorMessages);

    // If there are no validation errors, submit the form
    if (Object.keys(newErrorMessages).length === 0) {
      console.log("Submit Form", formState);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  return (
    <section>
      <h1 data-testid="h1tag">Contact Me</h1>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label> <br />
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            onBlur={handleChange}
          />
          {errorMessages.name && (
            <p className="error-text" style={{ color: "red" }}>
              {errorMessages.name}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="email">Email address: </label> <br />
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            onBlur={handleChange}
          />
          {errorMessages.email && (
            <p className="error-text" style={{ color: "red" }}>
              {errorMessages.email}
            </p>
          )}
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            rows="5"
            value={message}
            onChange={handleChange}
            onBlur={handleChange}
          />
          {errorMessages.message && (
            <p className="error-text" style={{ color: "red" }}>
              {errorMessages.message}
            </p>
          )}
        </div>
        <button data-testid="button" type="submit">
          Submit
        </button>
      </form>
    </section>
  );
}

export default Contact;
