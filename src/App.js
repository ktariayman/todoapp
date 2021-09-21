import React , {useState,useEffect } from 'react';
import './App.css'; 
import { Button , FormControl , Input , InputLabel} from '@material-ui/core';
import Todo from './Todo';
import db from './firebase'
import firebase from 'firebase';
function App() {
  const [todos , setTodos] = useState([]);
  const [input , setInput] = useState('');

  useEffect(() => {
    db.collection('todos').orderBy('timestamp' , 'desc' ).onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc =>({
        id : doc.id,
        todo : doc.data().todo}
        )))
    })
    }, [])
  const addtodo = (e) =>{
    e.preventDefault();

    db.collection('todos').add({
      todo: input,
      timestamp : firebase.firestore.FieldValue.serverTimestamp()
    })

    setTodos([...todos,input]);
    setInput(''); // to clear the input after onclick action in the button
  }

  return (
    <div className="App">
      <h1>TodoApp </h1>
      <form>
        <FormControl>
          <InputLabel>Write Something Todo 💪</InputLabel>
          <Input value={input} onChange={e =>setInput(e.target.value) } />
        </FormControl>
    
      <Button  disabled={!input} onClick= {addtodo} variant="contained" color="secondary">
      Add todo
      </Button>
      </form>

      <ul className="ul__todo">
        {todos.map(todo => (
          <Todo todo= {todo} />
          // <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
