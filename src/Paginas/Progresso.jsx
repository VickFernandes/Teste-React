import { Container, List, Paper } from '@mui/material';
import React, { useState } from 'react';
import Form from '../Components/Form';
import TodoItem from '../Components/TodoItem';
import TodayIcon from '@mui/icons-material/Today';

export default function Progresso() {
    const [todos, setTodos] = useState([]);
    const todoHandler = (todo) => {
    setTodos([...todos, todo]);
    };

    const deleteTodo = (id) => {
      var filtered = todos.filter((todo)=>todo.id !== id);
      setTodos(filtered)
    };

  return(
    <Container  
      maxWidth="md" 
      style={{marginTop: "10em"}}
    >
      <Paper style={{ padding: '1em 2em 2em' }}>

        <h1 style={{fontSize:'35px', marginRight: '0.1em'}}>
          <TodayIcon 
          color="primary" 
          style={{ position:'relative', fontSize: '50px', top: '10px', marginRight: '19px'}} 
          />Hoje
        </h1>

      <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
        {todos.map ((todo) => (
          <div 
          key={todo.id}>
            <TodoItem 
            todo={todo} deleteTodo={deleteTodo} />
          </div>
        ))}
      </List>
      
      <Form style={{marginTop: "10em"}}
      todoHandler={todoHandler} 
      />
      </Paper>
    </Container>
  );
}
