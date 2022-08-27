import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function Update() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const { id } = useParams();
  const navigate = useNavigate();
  console.log(id);

  useEffect(() => {
    axios
      .get(`https://630a2e843249910032820119.mockapi.io/crud/${id}`)
      .then((res) => {
        console.log(res);
        setName(res.data.allDetails.userName);
        setEmail(res.data.allDetails.userEmail);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const allDetails = {
      userName: name,
      userEmail: email,
    };
    axios.put(`https://630a2e843249910032820119.mockapi.io/crud/${id}`, {
      allDetails,
    });
    setName("");
    setEmail("");

    navigate("/");
  };

  return (
    <div>
      <h1>Update Data</h1>
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
    </div>
  );
}

export default Update;
