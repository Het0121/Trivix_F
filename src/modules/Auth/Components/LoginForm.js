import React, { useEffect, useState } from "react";
import Form from "../../../shared/Form/Form";
import Fields from "../../../shared/Form/Fields/Fields";
import * as yup from "yup";
import Header from "../../../shared/Header";
import { theme } from "../../../Theme/theme";
import { Button } from "../../../shared";
import { loginRequest } from "../Actions/Actions";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router";
import Cookies from "js-cookie";
const LoginForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { Data } = useSelector((state) => state.auth);

  const schema = yup.object().shape({
    password: yup
      .string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    userName: yup
      .string()
      .min(6, "Email must be at least 12 characters")
      .required("Email is required"),
  });

  const onSubmit = async (data) => {
    setLoading(true);
    const finalData = {
      userName: data.userName,
      password: data.password,
    };
    try {
      dispatch(loginRequest(finalData));
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    const token = Cookies.get("user");
    if (token) {
      navigate("/");
    }
  }, [Data, navigate]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100%",
      }}
    >
      <Header
        as={"h1"}
        title={"Sign in now"}
        style={{
          padding: "0px",
          color: theme.colors.black,
          fontWeight: "bold",
          marginTop: "5px",
        }}
      />
      <Header
        as={"h5"}
        title={"Please Sign in to continue our app"}
        style={{
          padding: "0px",
          color: "gray",
          fontWeight: "300",
          marginTop: "5px",
        }}
      />
      <div
        style={{
          width: "400px",
          padding: "20px",
          borderRadius: "8px",
        }}
      >
        <Form onSubmit={onSubmit} validateSchemas={schema}>
          <Fields.Input
            name="userName"
            type="text"
            placeholder="Enter your email"
            className="login-input"
            fluid
          />

          <Fields.Input
            name="password"
            type="password"
            placeholder="Enter your password"
            icon="eye outlined"
            className="login-input"
            fluid
          />
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Button
              type="submit"
              style={{
                background: theme.colors.blue,
                color: theme.colors.white,
                width: "83%",
                marginTop: "8px",
              }}
            >
              Submit
            </Button>
          </div>
        </Form>
      </div>
      <p style={{ marginTop: "15px", fontSize: "12px" }}>
        Don't have an account?{" "}
        <a href="/auth/signup" style={{ color: "#ff6b6b", fontWeight: "bold" }}>
          Sign up
        </a>
      </p>
      <p style={{ fontSize: "12px" }}>
        Become Our Agency{" "}
        <a href="#" style={{ color: "#ff6b6b", fontWeight: "bold" }}>
          Partner
        </a>
      </p>

      {/* Social Login */}
      <p style={{ fontSize: "12px", marginTop: "10px" }}>OR LOG IN BY</p>
      <div style={{ display: "flex", gap: "10px" }}>
        <Button
          circular
          color="google plus"
          icon="google"
          style={{ background: theme.colors.gray, color: theme.colors.blue }}
        />
        <Button
          circular
          color="facebook"
          icon="facebook"
          style={{ background: theme.colors.gray, color: theme.colors.blue }}
        />
      </div>
    </div>
  );
};

export default LoginForm;
