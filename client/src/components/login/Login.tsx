import React from "react";
import Cookies from "js-cookie";
import { Navigate } from "react-router-dom";

interface ILoginProps {}
interface ILoginState {
  username: string;
  confirmed: boolean;
}

class Login extends React.Component<ILoginProps, ILoginState> {
  constructor(props: ILoginProps) {
    super(props);

    this.state = {
      username: "",
      confirmed: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ username: e.target.value });
  }

  handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    Cookies.set("username", this.state.username); // set a cookie containing a username
    this.setState({ username: this.state.username, confirmed: true });
  }

  render() {
    return this.state.confirmed ? (
      <Navigate to="/chat" />
    ) : (
      <React.Fragment>
        <div className="section">
          <div className="container">
            <div className="columns">
              <div className="column is-one-fifth"></div>
              <div className="column">
                <form onSubmit={this.handleSubmit}>
                  <div className="box">
                    <div className="field">
                      <label className="label">Username</label>
                      <div className="control">
                        <input
                          className="input"
                          type="text"
                          placeholder="Enter username"
                          onChange={this.handleChange}
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
  }
}

export default Login;
