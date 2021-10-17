import "./App.css";
import Todo from "./component/Todo";
function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo text="Learn React js" />
      <Todo text="Master React js" />
      <Todo text="Expand knowlege about React js" />
    </div>
  );
}

export default App;
