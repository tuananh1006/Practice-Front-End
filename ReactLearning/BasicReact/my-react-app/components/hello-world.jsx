import React, { useState } from "react";
import New from "./new";
const Welcome = () => {
  const message = "Welcome to React JS";
  const [name, setName] = useState("");
  const [submittedName, setSubmit] = useState("");

  const handleInputChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmit(name);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">
          Name <input type="text" value={name} onChange={handleInputChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
      <div>{submittedName && <p>Submitted Name: {submittedName}</p>}</div>
      <New message={message}></New>
    </div>
  );
};

export default Welcome;
