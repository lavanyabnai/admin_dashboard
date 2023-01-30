import React from "react";
import { Form, Field, FormElement } from "@progress/kendo-react-form";
import { Input } from "@progress/kendo-react-inputs";
import { Checkbox } from "@progress/kendo-react-inputs";
import { Link } from "react-router-dom";

export const SignIn = () => {
  const [paswordType] = React.useState("password");
  return (
    <div className="App">
      <div className="sign-in-page">
        <div className="sign-in-wrapper">
          <div className="logo-wrapper">
            <div className="logo">
              <img
                src={require("../assets/logo/logo-white.png")}
                alt={"sign in icon"}
              />
            </div>
            <div className="banner">Sign In</div>
            <div className="account text-white">
              Don't have an account? <Link to="/signup">Sign up</Link>
            </div>
          </div>
          <div className="inputs-wrapper">
            <Form
              render={(formRenderProps) => (
                <FormElement
                  style={{
                    maxWidth: 650,
                  }}
                >
                  <fieldset className={"k-form-fieldset"}>
                    <div className="mb-3">
                      <Field
                        name={"email"}
                        type={"email"}
                        component={Input}
                        label={"Email"}
                      />
                    </div>
                    <div className="mb-3" style={{ display: "flex" }}>
                      <Field
                        name={"password"}
                        type={paswordType}
                        component={Input}
                        label={"Password"}
                      />
                    </div>
                  </fieldset>
                  <fieldset className={"k-form-fieldset"}>
                    <div className="mb-3 text-white">
                      <Checkbox label={"Remember Me"} />
                    </div>
                  </fieldset>

                  <div className="k-form-buttons">
                    <Link
                      to="/home/dashboard"
                      className="dashboard-button"
                      style={{ textDecoration: "none" }}
                    >
                      <button type={"submit"} className="sign-button">
                        Sign In
                      </button>
                    </Link>
                  </div>
                </FormElement>
              )}
            />
          </div>
        </div>
        <div className="frame-wrapper"></div>
      </div>
    </div>
  );
};