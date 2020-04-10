import React from "react";

const UserComments = (props) => {
  return (
    <div>
      <label>Comment:</label>
      <textarea
        className="form-control"
        name="Comment"
        rows="2"
        onChange={props.onChange}
      />
    </div>
  );
};

export default UserComments;
