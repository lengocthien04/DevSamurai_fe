import { useForm } from "react-hook-form";
import { loginSchema, LoginSchema } from "../../rules/auth.rule";
import { zodResolver } from "@hookform/resolvers/zod";
import { useContext, useState } from "react";
import { AppContext } from "../../contexts/app.context";
import { useNavigate } from "react-router-dom";
import mainPath from "../../configs/constants/path";
import { isAxiosBadRequestError } from "../../utils/utils";
import { ErrorRespone } from "../../types/common.type";
import { useMutation } from "@tanstack/react-query";
import authApi from "../../apis/auth.api";
import { UserLoginDto } from "../../types/User/user.type";
import { setAccessTokenToLS, setProfileToLS } from "../../utils/auth";
import { useBoolean } from "../../hooks/use-boolean";

const useLoginPage = () => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { isValid, isDirty },
  } = useForm<LoginSchema>({
    defaultValues: {
      password: "",
      email: "",
    },
    mode: "onChange",
    resolver: zodResolver(loginSchema),
  });

  const [error, setError] = useState<string | null>(null);

  const { setIsAuthenticated, setLoadingPage, setProfile } =
    useContext(AppContext);

  const navigate = useNavigate();

  // ! Handle login
  const loginAccountMutation = useMutation({
    mutationFn: (body: UserLoginDto) => authApi.loginAccount(body),
  });
  const getProfileMutation = useMutation({
    mutationFn: authApi.getProfile,
  });
  const onSubmit = handleSubmit((data) => {
    if (!isValid && !isDirty) {
      setError("email or password is invalid");
      return;
    }
    setLoadingPage(true);
    loginAccountMutation.mutate(data, {
      onSettled() {
        setLoadingPage(false);
      },
      onSuccess: (response) => {
        setAccessTokenToLS(response.data.token);
        setIsAuthenticated(true);
        getProfileMutation.mutateAsync().then((response) => {
          setProfileToLS(response.data.data);
          setProfile(response.data.data);
        });

        navigate(mainPath.home);
      },
      onError: (error) => {
        if (isAxiosBadRequestError<ErrorRespone>(error)) {
          const formError = error.response?.data;
          if (formError) {
            setError("Email or password is invalid");
          }
        }
      },
    });

    setLoadingPage(false);
  });

  const { value: showPassword, onToggle } = useBoolean();

  return {
    control,
    error,
    onSubmit,
    reset,
    showPassword,
    onToggle,
  };
};

export default useLoginPage;
