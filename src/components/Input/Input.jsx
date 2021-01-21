import React, { useState,useContext } from 'react'
import classes from './Input.module.css'
import {CheckBox} from '../CheckBox/CheckBox'
import {Context} from '../../context/index'

export const Input = () => {
    const context = useContext(Context);
    const [todo, setTodo] = useState("");

    const changeTodo = (e) => {
        setTodo(e.target.value);
    };

    const addTodo = () => {
        if(!todo.trim().length) return;
        context.addTodo(todo);
        setTodo("")
    };

    return (
    <div className={[classes.container, context.state.theme === "LIGHT" ? "invert-again" : undefined, context.state.theme === "LIGHT" ? classes.light : undefined].join(" ")}>
        <CheckBox checked={!!todo.trim().length} onClick={addTodo} />
        <input type="text" placeholder="Add a new todo..." value={todo} onChange={changeTodo} />
    </div>
    );
}