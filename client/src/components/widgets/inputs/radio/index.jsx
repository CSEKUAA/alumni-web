import { forwardRef } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import _styles from "./_styles.module.css";

const RadioInput = forwardRef((props, ref) => {
  const {
    label,
    error,
    value,
    key,
    helperText,
    ...others
  } = props;

  return (
    <div className={clsx(_styles.container, { [_styles.error]: error })}>
      <label key={key}>
        <input
          ref={ref}
          type="radio"
          value={value || ""}
          {...others}
        />
        &nbsp;{label}
      </label>
      {helperText && <span>{helperText}</span>}
    </div>
  );
});

RadioInput.propTypes = {
  error: PropTypes.bool,
  required: PropTypes.bool,
  label: PropTypes.string,
  helperText: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  key: PropTypes.string,
};

RadioInput.defaultProps = {
  label: "",
  error: false,
};
export default RadioInput;
