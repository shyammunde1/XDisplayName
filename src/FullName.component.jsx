import React, { useState } from "react";

const FullName = () => {
  const [first, setFirstname] = useState("");
  const [last, setLastname] = useState("");
  const [fullName, setFullName] = useState("");

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (first.trim() !== "" && last.trim() !== "") {
      const fullName = `Full Name: ${first} ${last}`;
      setFullName(fullName);
    } else {
      setFullName("");
    }
  };

  const show = first.trim() === "" || last.trim() === "";

  return (
    <>
      <form onSubmit={formSubmitHandler}>
        <div className="container">
          <div>
            <label>First Name</label>
            <input
              type="text"
              value={first}
              onChange={(e) => setFirstname(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Last Name</label>
            <input
              type="text"
              value={last}
              onChange={(e) => setLastname(e.target.value)}
              required
            />
          </div>
          <button type="submit">Submit</button>
        </div>
      </form>
      {show && <p>{fullName}</p>}
    </>
  );
};

export default FullName;
