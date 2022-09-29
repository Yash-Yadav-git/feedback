import React from "react";

const Button = ({ children, version, isDisabled, type }) => {
  return (
    <button
      className={`btn btn-${version}`}
      type={type}
      version={version}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
};

export default Button;
