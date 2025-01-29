import { useState } from "react";
import "./App.css";

import "h8k-components";

// function JS declaration - might cause hoisting
function App() {
  // February 6, 2019 - React introduced react-hooks for lifecycle methods without writing class-component
  // name is internal state, setName() is the Setter"" method
  // advantageous since it encapsulates setting the internal-state of the react-component...without side-effects
  // array de-structuring
  // right-hand side is the 'initial-state'
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submittedData, setSubmittedData] = useState(null);
  const [error, setError] = useState("");

  // ES6-JS arrow-expression
  // arbitrary input-e expecting an 'event'

  // REQ3: Form validation
  // ~ should NOT be empty, on submission
  // ~ IF EMPTY, then DISPLAY "ERROR"
  // ~
  const handleSubmit = (e) => {
    // this prevents the automatic reloading-effect of a PC HTML form reset
    e.preventDefault();
    // TODO: Add logic to validate inputs and display submitted data
    // HINT: You can use the setError function

    // HINT: You can use the setSubmittedData function as below
    // setSubmittedData({ name, email, message });
  };

  // returns JSX-template (which is dynamic JS with HTML tags)
  return (
    <>
      <h8k-navbar header="Contact Form"/>

      {/* this is .App className selector */}
      <div className="App">

        {/* header-tag says Contact Form */}
        {/* REQ1: Form structure */}
        <h1>Contact Form</h1>
        {/* form-tag */}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            data-testid="name-input"
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            data-testid="email-input"
          />
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Message"
            data-testid="message-input"
          />

          {/* REQ2: Form submission */}
          {/* TODO: AFTER submission, THEN WIPE-OUT internal-state */}
          <button type="submit" data-testid="submit-button">
            Submit
          </button>
        </form>
        {error && (
          <p data-testid="error-message" className="error">
            {error}
          </p>
        )}

        {submittedData && (
          <div data-testid="submitted-data" className="submitted-data">

          {/* REQ4: Display submitted data */}
          {/* TODO: if VALIDATED, then DISPLAY in HTML */}
            <h2>Submitted Information</h2>
            <p>
              <strong>Name:</strong> {submittedData.name}
            </p>
            <p>
              <strong>Email:</strong> {submittedData.email}
            </p>
            <p>
              <strong>Message:</strong> {submittedData.message}
            </p>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
