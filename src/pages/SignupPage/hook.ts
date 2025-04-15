import { zodResolver } from "@hookform/resolvers/zod";
import { useBoolean } from "../../hooks/use-boolean";
import { registerSchema, RegisterSchema } from "../../rules/auth.rule";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import authApi from "../../apis/auth.api";
import { UserCreate } from "../../types/User/user.type";
import mainPath from "../../configs/constants/path";
import { useNavigate } from "react-router-dom";

const useSignupPage = () => {
  const { value: showPassword, onToggle } = useBoolean();

  const {
    control,
    handleSubmit,
    formState: { isValid, isDirty },
  } = useForm<RegisterSchema>({
    defaultValues: {
      password: "",
      email: "",
      username: "",
    },
    mode: "onChange",
    resolver: zodResolver(registerSchema),
  });

  //! Handle register
  const registerAccountMutation = useMutation({
    mutationFn: (body: UserCreate) => authApi.registerAccount(body),
  });

  const navigate = useNavigate();

  const onSubmit = handleSubmit((data) => {
    if (!isValid && !isDirty) {
      return;
    }
    registerAccountMutation.mutate(data, {
      onSuccess: () => {
        navigate(`/${mainPath.login.replace(/^\//, "")}`);
      },
      onError: () => {},
    });
  });

  return {
    showPassword,
    onToggle,
    control,
    onSubmit,
  };
};

export default useSignupPage;
