import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const TextInputGroup = ({
  label,
  name,
  value,
  onChange,
  type,
  placeholder,
  error
}) => {
  return (
    <div className="form-group">
      <label htmlFor={name}> {label} </label>
      <input
        type={type}
        name={name}
        //classnames() - is from classnames library
        className={classnames("form-control form-control-lg", {
          "is-invalid": error
        })}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      {/* {error} - will be shown as error below the input tags - this invalid-feedback and is-invalid is both bootstrap classes */}
      {error && <div className="invalid-feedback"> {error}</div>}
    </div>
  );
};

//required props types
TextInputGroup.prototype = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  error: PropTypes.string
};

// the default values of props
TextInputGroup.defaultProps = {
  type: "text"
};
export default TextInputGroup;
