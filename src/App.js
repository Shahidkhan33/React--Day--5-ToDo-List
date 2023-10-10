import './App.css';
import Input from './component/input';
import MyTodos from './component/MyTodos';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

function App() {


  const [todo, setTodo] = useState([]);
  const [todoCopy, setTodoCopy] = useState([]);
  const [allValues, setAllValues] = useState({ todoName: "", todoDescription: "" });

  const handleButton = (event) => {
    event.preventDefault();
    setTodo([...todo, { ...allValues }]);
    setTodoCopy([...todoCopy, { ...allValues }]);
    setAllValues({ todoName: "", todoDescription: "" });
  }

  const handleInput = (e) => {

    setAllValues(prevValue => {
      return { ...prevValue, id: uuidv4(), [e.target.name]: e.target.value, status: "Not Completed" }
    })
  }



  return (
    <div>
      <h3 className="title text-center mt-4 mb-4">My Todo</h3>
      <Input value={allValues} handleButton={handleButton} handleInput={handleInput} />
      <MyTodos setTodo={setTodo} todo={todo} setTodoCopy={setTodoCopy} todoCopy={todoCopy} />
    </div>

  );
}

export default App;
