import { Form, Field, FormElement } from "@progress/kendo-react-form";
import { Input } from "@progress/kendo-react-inputs";
import { Checkbox } from "@progress/kendo-react-inputs";
import { Link } from "react-router-dom";

export const SignUp = () => {
  return (
    <div className="App">
      <div className="relative h-screen flex">
        <div className="flex flex-col justify-center items-center h-screen min-w-fit w-2/5 z-0 bg-[#352a87] border-r-4 border-[ #352a87]">
          <div className="logo-wrapper w-64">
            <div className="logo w-72">
              <img
                src={require("../assets/logo/logo-white.png")}
                alt={"sign in icon"}
              />
            </div>
            <div className="flex flex-col h-16 text-6xl text-white font-light mt-8 justify-items-center items-center">Sign up</div>
            <div className="text-white relative h-5 left-8 my-8">
              Already have an account?{" "}
              <Link className="text-sky-500 ml-4 hover:text-white" style={{ textDecoration: "none" }} to="/">
                Sign In
              </Link>
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
                        name={"fullName"}
                        component={Input}
                        label={"Full Name"}
                      />
                    </div>
                    <div className="mb-3">
                      <Field
                        name={"email"}
                        type={"email"}
                        component={Input}
                        label={"Email"}
                      />
                    </div>
                    <div className="mb-3">
                      <Field
                        name={"password"}
                        type={"password"}
                        component={Input}
                        label={"Password"}
                      />
                      <div className="mb-3">
                        <Field
                          name={"Company"}
                          component={Input}
                          label={"Company"}
                        />
                      </div>
                    </div>
                  </fieldset>

                  <fieldset className={"k-form-fieldset"}>
                    <div
                      className="mb-3 text-white"
                      style={{ display: "flex" }}
                    >
                      <Checkbox />
                      <p>
                        {" "}
                        &nbsp; I agree to the{" "}
                        <span
                          style={{
                            color: "white",
                            textDecoration: "underline",
                          }}
                        >
                          Terms of Services{" "}
                        </span>{" "}
                        and <br></br>{" "}
                        <span
                          style={{
                            color: "white",
                            textDecoration: "underline",
                          }}
                        >
                          Privacy Policy
                        </span>{" "}
                      </p>
                    </div>
                    <div className="k-form-buttons">
                      <Link to="/home/dashboard" className="dashboard-button">
                        <button type={"submit"} className="sign-button h-8 w-64 bg-[#0dcaf0] text-black rounded hover:bg-white">
                          Create Free Account
                        </button>
                      </Link>
                    </div>
                  </fieldset>
                </FormElement>
              )}
            />
          </div>
        </div>

        <div className="frame-wrapper h-screen w-3/5 m-auto"></div>
      </div>
    </div>
  );
};
