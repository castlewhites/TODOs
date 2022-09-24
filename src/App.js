import './App.css';
import React from 'react';
import { GetDone } from './GetDone';
import { Progreso } from './Progreso';
import { Search } from './Shearch';
import { List } from './List';
import { Item } from './Item';
import { Button } from './Button';

const todos = [
  {text: "cortar cebolla", completed: true},
  {text: "tomar el curso de react", completed: false},
  {text: "llorar", completed: false},

]

function App() {
  return (
    <main>
      <GetDone/>
      <Progreso/>
      <Search/>
      <List>
        {todos.map(todo => (
          <Item
            key={todo.text}
            text={todo.text}
            completed={todo.completed}  
          />
        ))}
      </List>
      <Button/>
    </main>

  );
}

export default App;
