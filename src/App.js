import "./App.css";
import Todo1 from "./components/Todo1";

function App() {
  const todos = [
    { id: 1, title: "wash dishes", completed: false },
    { id: 2, title: "make dinner", completed: true },
  ];
  return (
    <div className="App">
      {todos.map((todo) => (
        <Todo1 todo={todo} />
      ))}
    </div>
  );
}

export default App;
