import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../actions/userActions";

const RegisterScreen = (props) => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [rePassword, setRePassword] = useState("");
  const [passwordError, setPasswordError] = useState();

  const userRegister = useSelector((state) => state.userRegister);
  let { loading, error, userInfo } = userRegister;

  const dispatch = useDispatch();
  const history = useHistory();

  const redirect = props.location.search
    ? props.location.search.split("=")[1]
    : "/";

  useEffect(() => {
    if (userInfo) {
      history.push(redirect);
    }
  }, [history, userInfo, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== rePassword) {
      setPasswordError("passwords don't match");
    } else {
      dispatch(register(name, email, password));
      history.push("/");
    }
  };
  return (
    <div className="form">
      <form onSubmit={submitHandler}>
        <ul className="form-container">
          <li>
            <h2>Create Account</h2>
          </li>
          <li>
            {loading && <div>Loading..</div>}
            {error && <div style={{ color: "red" }}>{error}</div>}
            {passwordError && (
              <div style={{ color: "red" }}>{passwordError}</div>
            )}
          </li>
          <li>
            <label htmlFor="name">Name</label>
            <input
              type="name"
              name="name"
              id="name"
              onChange={(e) => setName(e.target.value)}
            />
          </li>
          <li>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </li>
          <li>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </li>
          <li>
            <label htmlFor="rePassword">Re-Enter Password</label>
            <input
              type="password"
              id="rePassword"
              name="rePassword"
              onChange={(e) => setRePassword(e.target.value)}
            ></input>
          </li>
          <li>
            <button className="button primary" type="submit">
              Register
            </button>
          </li>
          <li>Already have an account?</li>

          <li>
            <Link
              className="button secondary text-center"
              to={redirect === "/" ? "signin" : `signin?redirect=${redirect}`}
            >
              Signin
            </Link>
          </li>
        </ul>
      </form>
    </div>
  );
};

export default RegisterScreen;
