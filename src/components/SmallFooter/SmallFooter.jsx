import React, {useContext} from 'react'
import classes from './SmallFooter.module.css'
import {Context} from '../../context/index'

export const SmallFooter = () => {
    const context = useContext(Context)

    return (
        <div className={[classes.footer, context.state.theme === "LIGHT" ? "invert-again" : undefined, context.state.theme === "LIGHT" ? classes.light : undefined].join(" ")}>
           <p onClick={() => context.filterTodos("All")} className={context.state.filterOption === "All" ? classes.active : undefined}>All</p>
           <p onClick={() => context.filterTodos("Active")} className={context.state.filterOption === "Active" ? classes.active : undefined}>Active</p>
           <p onClick={() => context.filterTodos("Completed")} className={context.state.filterOption === "Completed" ? classes.active : undefined}>Completed</p>
        </div>
    )
}