import React from "react";
import Form from "./addTodoForm";
const page = () => {
  return (
    <div className="container">
      <Form />
      <section className="todoContainer"></section>
    </div>
  );
};

export default page;
