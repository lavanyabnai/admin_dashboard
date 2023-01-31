import React from "react";
import { Form, Field, FormElement } from "@progress/kendo-react-form";
import { Input } from "@progress/kendo-react-inputs";
import { Checkbox } from "@progress/kendo-react-inputs";
import { Link } from "react-router-dom";

export const SignIn = () => {
  const [paswordType] = React.useState("password");
  return (
    <div className="App">
      <div className="relative h-screen flex">
        <div className="flex flex-col justify-center items-center h-screen min-w-fit w-2/5 z-0 bg-[#352a87] border-r-4 border-[ #352a87] ">
          <div className="w-64">
            <div className="w-72">
              <img
                src={require("../assets/logo/logo-white.png")}
                alt={"sign in icon"}
              />
            </div>
            <div className="flex flex-col h-16 text-6xl text-white font-light mt-8 justify-items-center items-center">Sign In</div>
            <div className=" text-white relative h-5 left-8 my-8">
              Don't have an account? <Link className=" text-sky-500 ml-4 hover:text-white" to="/signup">Sign up</Link>
            </div>
          </div>
          <div className="flex items-center">
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
                      <button type={"submit"} className="h-8 w-64 bg-[#0dcaf0] text-black rounded hover:bg-white">
                        Sign In
                      </button>
                    </Link>
                  </div>
                </FormElement>
              )}
            />
          </div>
        </div>
        <div className="h-screen w-screen m-auto "></div>
      </div>
    </div>
  );
};