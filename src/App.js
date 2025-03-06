import "./App.css";
import { useState } from "react";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [showFullName, setShowFullName] = useState(false);

  return (
    <div className="App">
      <h2>Full Name Display</h2>
      <form onSubmit={(e) => {
            e.preventDefault();
            setShowFullName(true);
          }}>
        <label htmlFor="first-name">First Name:</label>
        <input
          name="first-name"
          required
          value={firstName}
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
        ></input>
        <br />
        <label htmlFor="last-name">Last Name:</label>
        <input
          name="last-name"
          required
          value={lastName}
          onChange={(e) => {
            setLastName(e.target.value);
          }}
        ></input>
        <br />
        <button
          type="submit"
          
        >
          Submit
        </button>
      </form>
      {showFullName ? `Full Name:${firstName} ${lastName}` : null}
    </div>
  );
}

export default App;
