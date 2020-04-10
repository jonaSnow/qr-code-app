import React from "react";

const User = (props) => {
  return (
    <div>
      <label>User:</label>
      <input
        className="form-control"
        name="Email"
        type="email"
        placeholder="Email"
        defaultValue="test@test.com"
        onChange={props.onChange}
      />
    </div>
  );
};

export default User;
