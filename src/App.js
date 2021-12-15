import logo from "./logo.svg";
import "./App.css";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img
          src={logo}
          className="App-logo"
          alt="logo"
          width={200}
          height={200}
        />
        <TodoList />
      </header>
    </div>
  );
}

export default App;
