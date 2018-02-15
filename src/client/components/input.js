import React from "react";

export default ({ type, action, value, name, classes, placeholder }) => (
  <input
    className={classes}
    type={type}
    name={name}
    onChange={action}
    placeholder={placeholder}
    defaultValue={value}
  />
);
