import { render, screen, cleanup } from "@testing-library/react";
import renderer from "react-test-renderer";
import Todo1 from "../Todo1";

afterEach(() => {
  cleanup();
});

test("should render non-completed todo component", () => {
  const todo = { id: 1, title: "wash dishes", completed: false };

  render(<Todo1 todo={todo} />);
  const todoElement = screen.getByTestId("todo1");
  expect(todoElement).toBeInTheDocument();
  expect(todoElement).toHaveTextContent("wash dishes");
  expect(todoElement).not.toContainHTML("strike");
});

test("should render completed todo component", () => {
  const todo = { id: 2, title: "wash car", completed: true };

  render(<Todo1 todo={todo} />);
  const todoElement = screen.getByTestId("todo2");
  expect(todoElement).toBeInTheDocument();
  expect(todoElement).toHaveTextContent("wash car");
  expect(todoElement).toContainHTML("strike");
});

test("matches snapshot", () => {
  const todo = { id: 2, title: "wash car", completed: true };
  const tree = renderer.create(<Todo1 todo={todo} />).toJSON();
  console.log(tree);
  expect(tree).toMatchSnapshot();
});
