import { IconButton, InputAdornment, TextField } from '@mui/material';
import React, { useState } from 'react';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

export default function Form({ addTodo }) {
  const [text, setText] = useState(null);
  const [id, setId] = useState(0);

  const todoCreate = (text) => {
    const todoObj = { text: text, id: id };
    setId(id + 1);
    addTodo(todoObj);
    document.getElementById("standard-basic").value=null
  };

  return (
    <div style={{ display:"flex", justifyContent:"center"}}>
      <TextField 
        label="Adicionar uma nova tarefa"
        id="standard-basic"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <IconButton sx={{marginRight:'0.74em'}} variant="text" onClick={() => todoCreate(text)}> 
                <AddCircleOutlineIcon /> 
              </IconButton>
            </InputAdornment>
            ),
          }}
        sx={{margin:'0.3em', width:'100em'}}
        color='primary'
        variant="standard" 
        onChange={(e) => 
          setText(e.target.value)}
      />
    </div>
  );
}
