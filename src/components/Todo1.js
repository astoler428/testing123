import React from "react";
//third
export default function Todo1({ todo }) {
  const { id, title, completed } = todo;
  const h1 = <h1>{title}</h1>;
  const text = completed ? <strike>{h1}</strike> : h1;
  return <div data-testid={`todo${id}`}>{text}</div>;
}
