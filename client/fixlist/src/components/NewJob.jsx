import axios from "axios";

import React, { useState } from "react";

const NewJob = () => {
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("");
  function handleSend() {
    axios
      .post("http://localhost:3000/jobs", {
        id: Date.now().toString(),
        title,
        location,
      })
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  }

  return (
    <div>
      <form onSubmit={handleSend}>
        <label>Job Title : </label>
        <input
          type="text"
          name="title"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <label>Job Location : </label>
        <input
          type="text"
          name="location"
          value={location}
          required
          onChange={(e) => setLocation(e.target.value)}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default NewJob;
