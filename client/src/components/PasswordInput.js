import React from "react";

export const PasswordInput = props => (
    <div className="form loginForm">
      <input value={props.value} type="password" className="form-control" {...props} />
    </div>
  );