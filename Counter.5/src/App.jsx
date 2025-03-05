import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([
    {
      title: "go to gym",
      description: "go to gym at 6pm",
      completed: false
    },
    {
      title: "go to school",
      description: "go to school at 8am",
      completed: true
    },
    {
      title: "go to school",
      description: "go to school at 000am",
      completed: true
    }
  ]);
   function addTodo() {
    const newTodo = {
      title: "new todo",
      description: "new todo description",
      
    };
  
    setTodos([...todos, newTodo]);
  }
  return (
    <div>
      <h1>Counter App</h1>
      <button onClick={addTodo}>Add a random todo</button>
      {todos.map(function(todo) {
        return (
          <Todo title={todo.title} description={todo.description}  />
        );
      })}
    </div>
  );
}

// component
function Todo(props) {
  return (
    <div>
      <h3>{props.title}</h3>
      <h2>{props.description}</h2>
      <button>Mark as completed</button>
    </div>
  );
}

export default App;
