import PropTypes from "prop-types";
import React, { forwardRef } from 'react';
import { Controller } from 'react-hook-form';

import _styles from "./_styles.module.css";

const RadioController = forwardRef((props, ref) => {
  const { children, name, control, label, options, rules, ...others } = props;
  const required = Boolean(rules?.required);

  return(
    <div className={_styles.radio_container}>
      <span className={_styles.radio_label}>{required && <span>*</span>}{label}</span>
      <div className={_styles.radio_option}>
        {options.map((option) => {
          return (
            <Controller
              key={option.value}
              ref={ref}
              name={name}
              control={control}
              defaultValue=""
              render={({ field, fieldState: { error } }) => (
                <>
                  {React.Children.map(children, (child) =>
                    React.cloneElement(child, {
                      ...field,
                      label: option.label,
                      value: option.value,
                      error: Boolean(error),
                      helperText: error?.message,
                    }),
                  )}
                </>
              )}
              rules={rules}
              {...others}
          />
          );
        })}
      </div>
    </div>
  );
});

RadioController.propTypes = {
  children: PropTypes.node,
  rules: PropTypes.object,
  name: PropTypes.string,
  control: PropTypes.any,
  label: PropTypes.string,
  options: {
    value: PropTypes.string,
    label: PropTypes.string,
  },
};

export default RadioController;
