import Button from "../button/button.component";
import "../form-input/form-input.styles.scss";

import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();

const defaultFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  console.log("formFields", formFields);

  const resetFormFields = () => {
    setFormFields(defaultFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    // Check if email and password match
    console.log("userCredential.user", userCredential.user);
    alert("You have successfully logged in!");
    window.location.href("localhost:3000/");
    // console.log("Object.keys(userCredential)", Object.keys(userCredential));
    // Where do we get the user's email and password from
    // Or is this something that Firebase provides somehow
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="group">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <label>email</label>
        <input
          className="form-input"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <label>password</label>
        <input
          className="form-input"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <Button type="submit">SIGN IN</Button>
        <Button type="submit" buttonType="google">
          SIGN IN WITH GOOGLE
        </Button>
      </form>
    </div>
  );
};

export default SignInForm;
