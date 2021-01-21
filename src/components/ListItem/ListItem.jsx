import React, {useContext} from 'react'
import classes from './ListItem.module.css'
import {CheckBox} from '../CheckBox/CheckBox'
import {Context} from '../../context/index'
import {Draggable} from 'react-beautiful-dnd'

export const ListItem = ({todo, index}) => {
    const context = useContext(Context)

    const toggleComplete = () => {
        context.toggleCompleteTodo(todo.id, !todo.isComplete)
    }

    return (
        <Draggable draggableId={todo.id + ""} index={index}>
            {(provided) => (
                <li ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} className={[classes.listItem, context.state.theme === "LIGHT" ? classes.light : undefined].join(" ")}>
                    <CheckBox onClick={toggleComplete} checked={todo.isComplete}/>
                    <p className={todo.isComplete? classes.completeTodo : undefined} >{todo.name}</p>
                    <i className="fas fa-times" onClick={() => context.deleteTodo(todo.id)}></i>
                </li>
            )}
        </Draggable>
    )
}