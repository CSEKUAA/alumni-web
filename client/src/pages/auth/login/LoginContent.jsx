import { useForm } from "react-hook-form";
import { FieldController } from "components/_controllers";
import { OutlineInputField } from "components/widgets/inputs";
import { FilledButton } from "components/widgets/buttons";

import _styles from "./_styles.module.css";

function LoginContent() {
  const defaultValues = {
    email: "",
    password: "",
  };

  const { control, handleSubmit } = useForm({
    defaultValues: defaultValues,
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form className={_styles.container}>
      <h4 className={_styles.subtitle}>Already a Member?</h4>
      <FieldController
        name="email"
        control={control}
        rules={{
          required: {
            value: true,
            message: "Please provide email",
          },
          pattern: {
            value: /\S+@\S+\.\S+/,
            message: "Invalid email",
          },
        }}>
        <OutlineInputField type="email" placeholder="Enter your email" />
      </FieldController>
      <FieldController
        name="password"
        control={control}
        rules={{
          required: {
            value: true,
            message: "Please provide password",
          },
        }}>
        <OutlineInputField type="password" placeholder="Password" />
      </FieldController>
      <FilledButton type="submit" onClick={handleSubmit(onSubmit)}>
        Login
      </FilledButton>
    </form>
  );
}

export default LoginContent;
