import { Controller } from "react-hook-form";
import Box from "@mui/material/Box";
import { IconButton, InputAdornment } from "@mui/material";

import TextFieldTopLabel from "../../components/TextFieldTopLabel";
import useLoginPage from "./hook";
import { NavLink } from "react-router-dom";
import mainPath from "../../configs/constants/path";

export default function LoginPage() {
  const { control, error, onSubmit, showPassword, onToggle } = useLoginPage();
  return (
    <div className="py-8">
      <div className="flex flex-col items-center justify-center p-2">
        <div className="mx-auto w-full min-w-[360px] space-y-6 max-w-md">
          <a href="/">
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
          </a>
          <div className="rounded-xl border bg-card text-card-foreground shadow text-left">
            <div className="flex flex-col space-y-1.5 p-6">
              <h3 className="text-xl font-semibold leading-none tracking-tight">
                Log in
              </h3>
              <p className="text-sm text-muted-foreground">
                Enter your details below to sign into your account.
              </p>
            </div>
            <div className="p-6 pt-0 flex flex-col gap-4">
              <form
                className="flex flex-col gap-4"
                onSubmit={onSubmit}
                method="post"
              >
                <Controller
                  control={control}
                  name="email"
                  render={({ fieldState, field }) => {
                    return (
                      <Box component="div" className="flex flex-col ">
                        <TextFieldTopLabel
                          label="Email"
                          error={!!fieldState.error?.message}
                          type="text"
                          InputProps={{
                            startAdornment: (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                className="lucide lucide-mail size-4 shrink-0 text-muted-foreground"
                              >
                                <rect
                                  width="20"
                                  height="16"
                                  x="2"
                                  y="4"
                                  rx="2"
                                ></rect>
                                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                              </svg>
                            ),
                          }}
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
                          type={showPassword ? "text" : "password"} // Đổi type dựa trên trạng thái
                          InputProps={{
                            startAdornment: (
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                className="lucide lucide-lock size-4 shrink-0 text-muted-foreground"
                              >
                                <rect
                                  width="18"
                                  height="11"
                                  x="3"
                                  y="11"
                                  rx="2"
                                  ry="2"
                                ></rect>
                                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                              </svg>
                            ),
                            endAdornment: (
                              <InputAdornment position="end">
                                <IconButton onClick={onToggle} edge="end">
                                  {showPassword ? (
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="24"
                                      height="24"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      stroke="currentColor"
                                      stroke-width="2"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      className="lucide lucide-eye size-4 shrink-0"
                                    >
                                      <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path>
                                      <circle cx="12" cy="12" r="3"></circle>
                                    </svg>
                                  ) : (
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="24"
                                      height="24"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      stroke="currentColor"
                                      stroke-width="2"
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      className="lucide lucide-eye-off size-4 shrink-0"
                                    >
                                      <path d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49"></path>
                                      <path d="M14.084 14.158a3 3 0 0 1-4.242-4.242"></path>
                                      <path d="M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143"></path>
                                      <path d="m2 2 20 20"></path>
                                    </svg>
                                  )}
                                </IconButton>
                              </InputAdornment>
                            ),
                          }}
                          link="Forgot your password?"
                          {...field}
                        />
                      </Box>
                    );
                  }}
                />

                <button
                  className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-9 px-4 py-2 w-full"
                  type="submit"
                >
                  Log in
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
            <div className="items-center p-6 pt-0 flex justify-center gap-1 text-sm text-muted-foreground">
              <span>Don't have an account?</span>
              <NavLink
                className="text-foreground underline"
                to={`/${mainPath.signup}`} // or to="/auth/signup" directly
              >
                Sign up
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
