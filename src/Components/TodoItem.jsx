import * as React from 'react';
import { red } from '@mui/material/colors';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import CircleOutlinedIcon from '@mui/icons-material/CircleOutlined';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export default function TodoItem({todo, deleteTodo}) {
  const [setOpenDialog] = React.useState(false);

  return (
    <ListItem 
      secondaryAction={
        <IconButton 
          edge="end" 
          aria-label="deletar" 
          onClick={() => 
            deleteTodo(todo.id)}
        > 
        <HighlightOffIcon 
          sx={{ color: red[500] }} /> 
        </IconButton> } 
          disablePadding>

      <ListItemButton 
        role={undefined} dense
      >
        <ListItemIcon>
          <Checkbox 
            edge="start" 
            tabIndex={-1} 
            disableRipple icon={<CircleOutlinedIcon />} 
            checkedIcon={<CheckCircleIcon />}
          />
        </ListItemIcon>
        <ListItemText 
          primary={todo.text} 
          onClick={() => 
            setOpenDialog(true)} 
        />
      </ListItemButton>
    </ListItem>
  );
}
