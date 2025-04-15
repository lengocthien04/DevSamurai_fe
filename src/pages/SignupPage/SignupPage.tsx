import { Box, IconButton, InputAdornment } from "@mui/material";
import { Controller } from "react-hook-form";
import TextFieldTopLabel from "../../components/TextFieldTopLabel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useSignupPage from "./hook";
import { NavLink } from "react-router-dom";
import mainPath from "../../configs/constants/path";
import { faEye, faEyeSlash, faCheck } from "@fortawesome/free-solid-svg-icons";

export default function SignupPage() {
  const { onToggle, showPassword, control, onSubmit } = useSignupPage();
  return (
    <div className="py-8">
      <div className="flex flex-col items-center justify-center p-2">
        <div className="mx-auto w-full min-w-[360px] space-y-6 max-w-md">
          <NavLink to={mainPath.home}>
            <div className="flex items-center space-x-2 justify-center">
              <div className="flex size-9 items-center justify-center p-1">
                <div className="flex size-7 items-center justify-center rounded-md border text-primary">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g>
                      <path
                        d="M7.81815 8.36373L12 0L24 24H15.2809L7.81815 8.36373Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M4.32142 15.3572L8.44635 24H-1.14809e-06L4.32142 15.3572Z"
                        fill="currentColor"
                      ></path>
                    </g>
                  </svg>
                </div>
              </div>
              <span className="font-bold">Acme</span>
            </div>
          </NavLink>
          <div className="rounded-xl border bg-card text-card-foreground shadow text-left">
            <div className="flex flex-col space-y-1.5 p-6">
              <h3 className="text-xl font-semibold leading-none tracking-tight">
                Sign up
              </h3>
              <p className="text-sm text-muted-foreground">
                Already have an account?{" "}
                <a className="text-foreground underline" href="/auth/login">
                  Log in
                </a>
              </p>
            </div>
            <div className="p-6 pt-0 flex flex-col gap-4">
              <form
                className="flex flex-col gap-4"
                onSubmit={(e) => {
                  e.preventDefault();
                  onSubmit(e);
                }}
              >
                <Controller
                  control={control}
                  name="username"
                  render={({ fieldState, field }) => {
                    return (
                      <Box component="div" className="flex flex-col ">
                        <TextFieldTopLabel
                          label="Name"
                          error={!!fieldState.error?.message}
                          helperText={fieldState.error?.message}
                          type="text"
                          {...field}
                        />
                      </Box>
                    );
                  }}
                />
                <Controller
                  control={control}
                  name="email"
                  render={({ fieldState, field }) => {
                    return (
                      <Box component="div" className="flex flex-col ">
                        <TextFieldTopLabel
                          label="Email"
                          error={!!fieldState.error?.message}
                          helperText={fieldState.error?.message}
                          type="text"
                          {...field}
                        />
                      </Box>
                    );
                  }}
                />
                <Controller
                  control={control}
                  name="password"
                  render={({ fieldState, field }) => {
                    return (
                      <Box component="div" className="flex flex-col">
                        <TextFieldTopLabel
                          label="Password"
                          error={!!fieldState.error?.message}
                          type={showPassword ? "text" : "password"}
                          helperText={fieldState.error?.message}
                          InputProps={{
                            endAdornment: (
                              <InputAdornment position="end">
                                <IconButton onClick={onToggle} edge="end">
                                  {showPassword ? (
                                    <FontAwesomeIcon
                                      icon={faEye}
                                      className="!text-muted-foreground !h-4"
                                    />
                                  ) : (
                                    <FontAwesomeIcon
                                      icon={faEyeSlash}
                                      className="!text-muted-foreground !h-4"
                                    />
                                  )}
                                </IconButton>
                              </InputAdornment>
                            ),
                          }}
                          {...field}
                        />
                        <ul className="list-none space-y-1 py-2">
                          {/* Mix of uppercase & lowercase letters */}
                          <li
                            className={`flex flex-row items-center px-4 ${
                              /[a-z]/.test(field.value) &&
                              /[A-Z]/.test(field.value)
                                ? "text-green-500"
                                : "text-muted-foreground"
                            }`}
                          >
                            {/[a-z]/.test(field.value) &&
                            /[A-Z]/.test(field.value) ? (
                              <FontAwesomeIcon
                                icon={faCheck}
                                className="text-[#17B26A] !text-xs mr-2"
                              />
                            ) : (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="5"
                                height="5"
                                fill="currentColor"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                className="mr-2 inline-block"
                              >
                                <circle cx="12" cy="12" r="10"></circle>
                              </svg>
                            )}
                            <p className="text-sm">
                              Mix of uppercase & lowercase letters
                            </p>
                          </li>
                          <li
                            className={`flex flex-row items-center px-4 ${
                              field.value.length >= 8
                                ? "text-green-500"
                                : "text-muted-foreground"
                            }`}
                          >
                            {field.value.length >= 8 ? (
                              <FontAwesomeIcon
                                icon={faCheck}
                                className="text-[#17B26A] !text-xs mr-2"
                              />
                            ) : (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="5"
                                height="5"
                                fill="currentColor"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                className="mr-2 inline-block"
                              >
                                <circle cx="12" cy="12" r="10"></circle>
                              </svg>
                            )}
                            <p className="text-sm">Minimum 8 characters long</p>
                          </li>

                          <li
                            className={`flex flex-row items-center px-4 ${
                              /\d/.test(field.value)
                                ? "text-green-500"
                                : "text-muted-foreground"
                            }`}
                          >
                            {/\d/.test(field.value) ? (
                              <FontAwesomeIcon
                                icon={faCheck}
                                className="text-[#17B26A] !text-xs mr-2"
                              />
                            ) : (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="5"
                                height="5"
                                fill="currentColor"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                className="mr-2 inline-block"
                              >
                                <circle cx="12" cy="12" r="10"></circle>
                              </svg>
                            )}
                            <p className="text-sm">Contain at least 1 number</p>
                          </li>
                        </ul>
                      </Box>
                    );
                  }}
                />
                <button
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2 w-full"
                  type="submit"
                >
                  Create account
                </button>
              </form>
              <p className="flex items-center gap-x-3 text-sm text-muted-foreground before:h-px before:flex-1 before:bg-border after:h-px after:flex-1 after:bg-border">
                Or continue with
              </p>
              <div className="flex flex-row gap-4">
                <button
                  className="justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 flex w-full flex-row items-center gap-2"
                  type="button"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="20"
                    height="20"
                  >
                    <path
                      fill="#4285F4"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09"
                    ></path>
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23"
                    ></path>
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22z"
                    ></path>
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53"
                    ></path>
                    <path fill="none" d="M1 1h22v22H1z"></path>
                  </svg>
                  Google
                </button>
                <button
                  className="justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-transparent shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2 flex w-full flex-row items-center gap-2"
                  type="button"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 21 21"
                  >
                    <path fill="#f25022" d="M1 1h9v9H1z"></path>
                    <path fill="#00a4ef" d="M1 11h9v9H1z"></path>
                    <path fill="#7fba00" d="M11 1h9v9h-9z"></path>
                    <path fill="#ffb900" d="M11 11h9v9h-9z"></path>
                  </svg>
                  Microsoft
                </button>
              </div>
            </div>
            <div className="items-center p-6 inline-block rounded-b-xl border-t bg-muted pt-6 text-xs text-muted-foreground">
              By signing up, you agree to our{" "}
              <NavLink className="text-foreground underline" to="/terms-of-use">
                Terms of Use
              </NavLink>{" "}
              and{" "}
              <NavLink
                className="text-foreground underline"
                to="/privacy-policy"
              >
                Privacy Policy
              </NavLink>
              . Need help?{" "}
              <NavLink className="text-foreground underline" to="/contact">
                Get in touch
              </NavLink>
              .
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
