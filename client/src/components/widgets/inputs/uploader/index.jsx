import { forwardRef } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import _styles from "./_styles.module.css";

const UploaderInputField = forwardRef((props, ref) => {
  const {
    label,
    error,
    value,
    fullwidth,
    required,
    helperText,
    placeholder,
    className,
    ...others
  } = props;

  return (
    <div
      className={clsx(_styles.container, {
        [_styles.fullwidth]: fullwidth,
        [_styles.error]: error,
      })}>
      {label && (
        <label className={_styles.label}>
          {required && <span>*</span>}
          {label}
        </label>
      )}
      <input
        ref={ref}
        type="file"
        value={value || ""}
        placeholder={placeholder}
        className={clsx(_styles.input_field, className)}
        {...others}
      />
      {helperText && <span className={_styles.helper_message}>{helperText}</span>}
    </div>
  );
});

UploaderInputField.propTypes = {
  error: PropTypes.bool,
  fullwidth: PropTypes.bool,
  required: PropTypes.bool,
  label: PropTypes.string,
  helperText: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UploaderInputField.defaultProps = {
  label: "",
  error: false,
  required: false,
  fullwidth: true,
  placeholder: "Please enter",
};
export default UploaderInputField;
