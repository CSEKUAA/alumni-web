import { useForm } from "react-hook-form";

import { FieldController } from "components/_controllers";
import { BaseCheckbox } from "components/widgets/checkboxs";
import { OutlinedButton } from "components/widgets/buttons";
import { OutlineInputField } from "components/widgets/inputs";
import { OutlineSelectField } from "components/widgets/selects";

import { UserPlusIcon } from "@heroicons/react/24/outline";

import { USER_ROLE } from "data/user-accessibility";

import _styles from "./_styles.module.css";

function Register() {
  const defaultValues = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    confirm_password: "",
    mobile: "",
    role: "student",
    is_active: true,
  };

  const { control, handleSubmit } = useForm({
    defaultValues: defaultValues,
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form className={_styles.container}>
      <h2 className={_styles.title}>Register</h2>
      <div className={_styles.flex_row}>
        <FieldController
          name="first_name"
          control={control}
          rules={{
            required: {
              value: true,
              message: "Please provide first name",
            },
          }}>
          <OutlineInputField label="First Name" />
        </FieldController>
        <FieldController name="last_name" control={control}>
          <OutlineInputField label="Last Name" />
        </FieldController>
      </div>
      <div className={_styles.flex_row}>
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
          <OutlineInputField label="Email" type="email" />
        </FieldController>
        <FieldController name="mobile" control={control}>
          <OutlineInputField label="Mobile" type="mobile" />
        </FieldController>
      </div>
      <div className={_styles.flex_row}>
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
          name="confirm_password"
          control={control}
          rules={{
            required: {
              value: true,
              message: "Please provide confirm password",
            },
          }}>
          <OutlineInputField label="Confirm Passowrd" type="confirm_password" />
        </FieldController>
      </div>
      <FieldController name="role" control={control}>
        <OutlineSelectField items={USER_ROLE} label="Role" />
      </FieldController>
      <FieldController name="is_active" control={control}>
        <BaseCheckbox label="Active" />
      </FieldController>
      <OutlinedButton
        type="submit"
        onClick={handleSubmit(onSubmit)}
        startIcon={UserPlusIcon}>
        Register
      </OutlinedButton>
    </form>
  );
}

export default Register;
