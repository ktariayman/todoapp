import React ,{useState} from 'react'
import './Todo.css'
import { List , ListItem , ListItemText , Button , Modal} from '@material-ui/core';
import db from './firebase';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    paper : {
        position:'absolute',
        width : 400,
        backgoundColor : theme.palette.background.paper,
        border:'2ox solid #000',
        boxShadow : theme.shadows[5],
        padding : theme.spacing(2,4,3)
    }
}));

function Todo(props) {
    const classes = useStyles();
    const [open , setOpen] = useState(false)
    const [input , setInput] = useState(props.todo.todo)
    const handleOpen = () =>{
        setOpen = (true)
    }
    const updateTodo = () =>{
        db.collection('todos').doc(props.todo.id).set ({
            todo : input
        }, {merge : true});
        setOpen(false)

    }
    return (
        <>
        <Modal
            open={open} 
            onClose ={e => setOpen(false)}
        >
            <div className={classes.paper}>
                <h2>i am a modal</h2>
                <input  placeholder={props.todo.todo} value={input} onChange={event => setInput(event.target.value)}/>
                <Button onClick={updateTodo}>Update Todo</Button>
            </div>
        </Modal>

        
       <List className="todo">
           <ListItem>
               <ListItemText primary={props.todo.todo}  />
           </ListItem>
           <Button onClick={e => setOpen(true)}>Change</Button>
           <DeleteForeverIcon 
                onClick={event => 
                     db.collection('todos').doc(props.todo.id).delete() 
                     }/>
       </List>
       </>
    )
}

export default Todo
