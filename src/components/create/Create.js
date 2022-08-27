import React, { useState } from "react";
import axios from "axios";
import Read from "../read/Read";

function Create() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const allDetails = { userName: name, userEmail: email };

    axios.post(`https://630a2e843249910032820119.mockapi.io/crud`, {
      allDetails,
    });
    setName("");
    setEmail("");
  };

  return (
    <div>
      <h1>Create Data</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Your Name"
          value={name}
          name="userName"
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <br />
        <input
          type="email"
          placeholder="Enter Your Email"
          value={email}
          name="userEmail"
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <br />
        <button type="submit">Submit</button>
      </form>
      <br />
      <Read />
    </div>
  );
}

export default Create;
