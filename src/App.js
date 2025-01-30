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

  // NOTE: this seems to be the catch-all data used from all the input-tags
  const [submittedData, setSubmittedData] = useState(null);

  const [error, setError] = useState("");

  // ES6-JS arrow-expression
  // arbitrary input-e expecting an 'event'

  // REQ3: Form validation
  // ~ should NOT be empty, on submission
  // ~ IF EMPTY, then DISPLAY "ERROR"
  // ~

  const notEmptyFn = (elem, index) => {
    return (elem.value && elem.value !== "")
  };

  const simplifiedNotEmptyFn = (elem, index) => (elem.hasOwnProperty('value') && elem.value !== "");

  /**
   * 📌 Breakdown of the !! Operator
	•	First ! (logical NOT): Converts a value into a boolean and negates it. If the value is truthy (i.e., something like a non-empty string, a number other than zero, or an object), it becomes false. If the value is falsy (like null, undefined, 0, false, ""), it becomes true.
	•	Second ! (logical NOT): Negates the result of the first !, turning it back into its opposite boolean value.
   */

  // check for null or undefined
  const eloquentNotEmptyFn = (elem, index) => elem && 'value' in elem && elem.value.trim() !== '';

  const handleSubmit = (e) => {
    // this prevents the automatic reloading-effect of a PC HTML form reset
    e.preventDefault();
    // TODO: Add logic to validate inputs and display submitted data
    // HINT: You can use the setError function
    console.log(e);
    console.log(e.target);
    const formState = e.target;
    const [...miiState] = formState;
    console.log(miiState);

    // Iterate over each elem in miiState[].array
    // using .map() or .find()
    // if each elem - has .VALUE property
    // then check if it's FALSY

    // IF SOME ARE EMPTY STRINGS ""
    // all higher-order functions EXPECT a FUNCTION REFERENCE, and NOT immediately invoking it.
    if (!miiState.some(eloquentNotEmptyFn)) {
      // const error = new Error("All fields are required.")
      setError("All fields are required.");
      // return;
    } else {
      setError("");
    }
    // then THROW ERROR MESSAGE
    // ==>  "All fields are required." T

    // P: check if empty

    // if ( name && email && message ) {
      // throw
    // }
    // if-true, then throw error


    // If-statement-comes-first ~ check validation


    // HINT: You can use the setSubmittedData function as below
    if (name && email && message ) {
      setSubmittedData({ name, email, message });
      setName("");
      setEmail("");
      setMessage("");
    }

    // TODO: then reset all input fields
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
            // onChange: This is a built-in HTML event that fires whenever the value of an input field changes. It works in plain HTML as well as in React.
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            // custom data attribute (part of the data-* attributes in HTML). These attributes are often used for testing, debugging, or tracking elements in an application.
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

        {/* ERROR-HANDLING-BLOCK */}
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
