import { useState } from "react";
import InputComponent from "../components/InputComponent";
import { useSearchParams } from "react-router-dom";

function ContactPage() {
  const [inputs, setInputs] = useState({});

  const [useSearchParam, setuseSearchParam] = useSearchParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    setuseSearchParam({
      name: inputs.userName,
      email: inputs.userEmail,
      password: inputs.userPass,
    });

    setInputs({});
  };

  const handleInput = (even) => {
    const name = even.target.name;
    const value = even.target.value;

    setInputs((values) => ({ ...values, [name]: value }));
  };

  return (
    <div>
      <div className="formWrapper">
        <form onSubmit={handleSubmit}>
          <InputComponent
            type="text"
            placeholder="Name"
            required
            name="userName"
            value={inputs.userName || ""}
            handleInput={handleInput}
          />
          <br />

          <InputComponent
            type="email"
            placeholder="Emnail"
            required
            name="userEmail"
            value={inputs.userEmail || ""}
            handleInput={handleInput}
          />
          <br />

          <InputComponent
            type="password"
            placeholder="Password"
            required
            name="userPass"
            value={inputs.userPass || ""}
            handleInput={handleInput}
          />
          <br />
          <button>Submit</button>
        </form>
      </div>
      <div className="searchWrapp">
        <p>Name: {useSearchParam.get("name")}</p>
        <p>Email: {useSearchParam.get("email")}</p>
        <p>Password: {useSearchParam.get("password")}</p>
      </div>
    </div>
  );
}

export default ContactPage;
