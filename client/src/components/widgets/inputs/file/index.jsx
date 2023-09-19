import { forwardRef } from "react";
import PropTypes from "prop-types";
import clsx from "clsx";

import _styles from "./_styles.module.css";

const FileInputField = forwardRef((props, ref) => {
  const {
    startIcon,
    endIcon,
    label,
    error,
    helperText,
  } = props;

  const Icon = endIcon || startIcon;

  return (
    <div className={clsx(_styles.container, { [_styles.error]: error })}>
        <input
              type="file"
              id="image_upload"
              style={{ display: 'none' }}
            />
            <label
              htmlFor="image_upload"
              className={_styles.custom_file_upload}
            >
              {startIcon && <Icon className={_styles.icon} />}
              {label}
              {endIcon && <Icon className={_styles.icon} />}
              {helperText && <span>{helperText}</span>}
            </label>
    </div>
  );
});

FileInputField.propTypes = {
  error: PropTypes.bool,
  required: PropTypes.bool,
  label: PropTypes.string,
  helperText: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  endIcon: PropTypes.elementType,
  startIcon: PropTypes.elementType,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

FileInputField.defaultProps = {
  label: "",
  error: false,
};
export default FileInputField;
