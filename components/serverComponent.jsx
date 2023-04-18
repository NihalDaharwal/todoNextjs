import React from "react";

export const TodoItem = ({ title, description }) => {
  return (
    <div className="todo">
      <div></div>
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
};
