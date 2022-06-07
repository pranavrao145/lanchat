import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const navigate = useNavigate();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    Cookies.set("username", username); // set a cookie containing a username
    setConfirmed(true);
  };

  useEffect(() => {
    if (confirmed) {
      navigate("/chat");
    }
  });

  return (
    <React.Fragment>
      <div className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-one-fifth"></div>
            <div className="column">
              <form onSubmit={handleSubmit}>
                <div className="box">
                  <div className="field">
                    <label className="label">Username</label>
                    <div className="control">
                      <input
                        className="input"
                        type="text"
                        placeholder="Enter username"
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="field">
                    <button
                      type="submit"
                      className="button is-fullwidth is-link"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="column is-one-fifth"></div>
          </div>{" "}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Login;
