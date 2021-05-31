import React, { useState } from "react";
import { validate, res } from "react-email-validator";
import "./Form.css";

export default function Form() {
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const onEmailChange = (event) => {
    setEmail(event.target.value);
    console.log(email);
  };

  const onSubmit = (evt) => {
    // const validator = validate(email);
    evt.preventDefault();
    setErrorMessage(res ? "Please enter a valid email" : "");
    console.log("KK");
    fetch("http://localhost:3000/users/subscribe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: email,
    })
      .then(() => {
        console.log("Done");
      })
      .catch((e) => console.log(e));
    // if (!!errorMessage.length) {
    // }

    // return validator;
  };

  return (
    <div className="formClass">
      <p>McGill's Official Hacker Collective</p>

      <form onSubmit={(evt) => onSubmit(evt)}>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email"
          onChange={(event) => onEmailChange(event)}
        />

        <input type="submit" value="➜" className="arrow" />

        {/* <p>{!!errorMessage.length ? errorMessage : undefined}</p> */}
      </form>
    </div>
  );
}
