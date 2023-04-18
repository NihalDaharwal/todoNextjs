import React from "react";

import Form from "./addTodoForm";
import { TodoItem } from "@/components/serverComponent";

const page = () => {
  return (
    <div className="container">
      <Form />
      <section className="todosContainer">
        <TodoItem
          title={"Sample Task"}
          description={"asdssas sfsffssss sfasfass"}
        />
      </section>
    </div>
  );
};

export default page;
