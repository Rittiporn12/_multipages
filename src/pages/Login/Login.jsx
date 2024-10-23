import React, { useRef } from "react";
import Form from "react-bootstrap/Form";
import { checkUsername } from "../../data/username";
import "./Login.css";

function Login({ setToken }) {
  const userRef = useRef();
  const passRef = useRef();

  return (
    <div className="login-container">
      <div className="login-box">
        <h2><b>LOGIN</b></h2>
        <Form.Group controlId="username">
          <Form.Label className="form-label"><i class="bi bi-person"></i> &nbsp;Username</Form.Label>
          <Form.Control
            type="text"
            placeholder="user"
            ref={userRef}
            className="form-control"
            style={{ fontSize: "15px" }}
          />
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label className="form-label"><i class="bi bi-lock"></i> &nbsp;Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="pass"
            ref={passRef}
            className="form-control"
            style={{ fontSize: "15px" }}
          />
        </Form.Group>
        <button
          className="btn btn-success"
          onClick={() => {
            const user = userRef.current.value.trim();
            const pass = passRef.current.value.trim();
            const userInfo = checkUsername(user, pass);
            if (userInfo === null) {
              alert("Username or password is wrong");
              userRef.current.value = "";
              passRef.current.value = "";
              userRef.current.focus();
            } else {
              setToken(userInfo.token);
            }
          }}
        >
          Login
        </button>
        <div className="forgot-password">Forgot password?</div>
      </div>
    </div>
  );
}

export default Login;
