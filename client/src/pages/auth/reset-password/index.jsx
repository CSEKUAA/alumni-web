import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";

import { FieldController } from "components/_controllers";
import { FilledButton } from "components/widgets/buttons";
import { OutlineInputField } from "components/widgets/inputs";

import { ApiResponseLoader } from "components/modules/loaders";

import { WrenchScrewdriverIcon } from "@heroicons/react/24/outline";

import { resetPassword } from "services/rest-api/auth";
import { handleFormError } from "services/error-handling";
import useNavigation from "hooks/useNavigation";

import _styles from "./_styles.module.css";

function ResetPassword() {
  const { params } = useNavigation();
  const token = params?.token;

  const defaultValues = {
    token: token,
    password: "",
    confirmPassword: "",
  };

  const { control, handleSubmit, watch, setError } = useForm({
    defaultValues: defaultValues,
  });
  const password = watch("password");

  const { isPending, mutate } = useMutation({
    mutationFn: resetPassword,
    onError: (error) => {
      handleFormError(error, setError);
    },
    onSuccess: (data) => {
      toast.success("Successfully Create Account");
    },
  });

  const onSubmit = (data) => {
    mutate(data);
  };

  if (isPending) return <ApiResponseLoader />;

  return (
    <form className={_styles.form}>
      <h2 className={_styles.title}>Reset Password</h2>
      <FieldController
        name="password"
        control={control}
        rules={{
          required: {
            value: true,
            message: "Please provide password",
          },
        }}>
        <OutlineInputField label="Passowrd" type="password" />
      </FieldController>
      <FieldController
        name="confirmPassword"
        control={control}
        rules={{
          required: {
            value: true,
            message: "Please provide confirm password",
          },
          validate: (value) =>
            !Boolean(value) || value === password || "Password mismatch",
        }}>
        <OutlineInputField label="Confirm Passowrd" type="password" />
      </FieldController>
      <FilledButton
        type="submit"
        onClick={handleSubmit(onSubmit)}
        startIcon={WrenchScrewdriverIcon}>
        Reset Password
      </FilledButton>
    </form>
  );
}

export default ResetPassword;
