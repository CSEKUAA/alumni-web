import { useForm } from "react-hook-form";
import { FieldController } from "components/_controllers";
import { FileInputField, OutlineInputField, RadioInput } from "components/widgets/inputs";
import { FilledButton } from "components/widgets/buttons";
import { BaseCheckbox } from "components/widgets/checkboxs";
import {RadioController} from "components/_controllers";
import { CloudArrowUpIcon } from "@heroicons/react/24/outline";
import _styles from "./_styles.module.css";


function RegistrationContent() {
  const defaultValues = {
    name: "",
    passing_year: "",
    student_id: "",
    discipline: "",
    email: "",
    gender: "",
    image: "",
    terms_conditions: false,
  };

  const genderOptions = [
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' },
  ];

  const { control, handleSubmit } = useForm({
    defaultValues: defaultValues,
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  let fullWidth, halfWidth;
  const getWidth = window.innerWidth;
  if (getWidth > 600) {
    fullWidth = '420px';
    halfWidth = '200px';
  } else {
    fullWidth = '100%';
    halfWidth = '100%';
  }

  return (
    <form className={_styles.container}>
    <h4 className={_styles.title}>Registration Form</h4>
      <div className={_styles.field_container}>
        <FieldController
          name="name"
          control={control}
          width={fullWidth}
          rules={{
            required: {
              value: true,
              message: "Please provide name",
            },
          }}>
          <OutlineInputField label="Name" type="text" placeholder="" />
        </FieldController>
        <FieldController
          name="student_id"
          control={control}
          width={halfWidth}
          rules={{
            required: {
              value: true,
              message: "Please provide student ID",
            },
          }}>
          <OutlineInputField label="Student ID" type="text" placeholder="" />
        </FieldController>
        <FieldController
          name="passing_year"
          control={control}
          width={halfWidth}
          rules={{
            required: {
              value: true,
              message: "Please provide passing year",
            },
          }}>
          <OutlineInputField label="Passing Year" type="text" placeholder="" />
        </FieldController>
        <FieldController
          name="discipline"
          control={control}
          width={fullWidth}
          rules={{
            required: {
              value: true,
              message: "Please provide discipline",
            },
          }}>
          <OutlineInputField label="Discipline" type="text" placeholder="" />
        </FieldController>
        <FieldController
          name="email"
          control={control}
          width={fullWidth}
          rules={{
            required: {
              value: true,
              message: "Please provide email",
            },
          }}>
          <OutlineInputField label="Email" type="email" placeholder="" />
        </FieldController>
        <RadioController name="gender" control={control} label="Gender" options={genderOptions} rules={{
            required: {
              value: true,
              message: "Please select gender",
            },
          }}>
          <RadioInput />
        </RadioController>
        <FieldController name="image" control={control} width={fullWidth}>
          <FileInputField startIcon={CloudArrowUpIcon} label="Upload your photo" />
        </FieldController>
        <FieldController name="terms_conditions" control={control} width='3%' rules={{
            required: {
              value: true,
              message: "Please agree to the terms and conditions",
            },
          }}>
          <BaseCheckbox label="I agree to the Alumni Terms of Service" />
        </FieldController>
      </div>
      <FilledButton type="submit" onClick={handleSubmit(onSubmit)}>
          Next
      </FilledButton>
    </form>
  );
}

export default RegistrationContent;
