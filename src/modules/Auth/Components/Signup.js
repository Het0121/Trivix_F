import Cookies from "js-cookie";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import * as yup from "yup";
import { Button } from "../../../shared";
import Fields from "../../../shared/Form/Fields/Fields";
import Form from "../../../shared/Form/Form";
import Header from "../../../shared/Header";
import { theme } from "../../../Theme/theme";
import { SignupRequest } from "../Actions/Actions";

const SignupAgency = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const { Data } = useSelector((state) => state.auth);
  const schema = yup.object().shape({
    password: yup
      .string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    userName: yup.string().required("Email is required"),
    agencyName: yup.string().required("AgencyName is required"),
    email: yup.string().required("Email is required"),
    agencyPhoneNo: yup.string().required("AgencyPhoneNo is required"),
  });

  const onSubmit = async (data) => {
    setLoading(true);
    const finalData = {
      userName: data.userName,
      agencyName: data.agencyName,
      email: data.email,
      agencyPhoneNo: data.agencyPhoneNo,
      password: data.password,
    };
    console.log(finalData);
    try {
      dispatch(SignupRequest(finalData));
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    const token = Cookies.get("user");
    if (token) {
      navigate("/auth/login");
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
        title={"Sign up as Agency"}
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
            placeholder="Enter your UserName"
            className="login-input"
            fluid
          />
          <Fields.Input
            name="agencyName"
            type="text"
            placeholder="Enter your AgencyName"
            className="login-input"
            fluid
          />
          <Fields.Input
            name="email"
            type="email"
            placeholder="Enter your Email"
            className="login-input"
            fluid
          />

          <Fields.Input
            name="password"
            type="password"
            placeholder="Enter your Password"
            icon="eye outlined"
            className="login-input"
            fluid
          />

          <Fields.Input
            name="agencyPhoneNo"
            type="number"
            placeholder="Enter your AgencyPhoneNo"
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

export default SignupAgency;
