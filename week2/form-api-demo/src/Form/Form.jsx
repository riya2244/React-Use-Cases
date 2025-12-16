import { useState, useEffect, useRef, useContext } from "react";
import { UserContext } from "../UserContext";
import useSubmit from "../useSubmit";
import InputField from "./InputField";
import SubmitButton from "./SubmitButton";

function Form() {
  const { setUser } = useContext(UserContext);

  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const { loading, success, error: apiError, submitData } = useSubmit();

  // Auto-focus first input
  useEffect(() => {
    nameRef.current.focus();
  }, []);

  // Validation
  useEffect(() => {
    setNameError(
      name.trim().length < 3 ? "Name must be at least 3 characters" : ""
    );
  }, [name]);

  useEffect(() => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setEmailError(!emailPattern.test(email) ? "Invalid email" : "");
  }, [email]);

  useEffect(() => {
    setPasswordError(
      password.length < 6 ? "Password must be at least 6 characters" : ""
    );
  }, [password]);

  const isFormValid =
    !nameError && !emailError && !passwordError && name && email && password;

  async function handleSubmit(e) {
    e.preventDefault();
    if (!isFormValid) return;

    // Send only safe fields to Reqres
    const result = await submitData("https://reqres.in/api/users", {
      name,
      job: "developer", // required dummy field for Reqres POST
    });

    if (result) {
      setUser(result);
      setName("");
      setEmail("");
      setPassword("");
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register</h2>

      <InputField
        label="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        error={nameError}
        inputRef={nameRef}
        placeholder="Enter name"
      />

      <InputField
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        error={emailError}
        inputRef={emailRef}
        placeholder="Enter email"
      />

      <InputField
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        error={passwordError}
        inputRef={passwordRef}
        placeholder="Enter password"
      />

      {apiError && <p style={{ color: "red" }}>{apiError}</p>}
      {success && <p style={{ color: "green" }}>{success}</p>}

      <SubmitButton loading={loading} disabled={loading || !isFormValid} />
    </form>
  );
}

export default Form;
