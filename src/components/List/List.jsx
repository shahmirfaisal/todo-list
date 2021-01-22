import React, {useContext} from 'react'
import classes from './List.module.css'
import {ListItem} from '../ListItem/ListItem'
import {Footer} from '../Footer/Footer'
import {Context} from '../../context/index'
import { DragDropContext, Droppable } from 'react-beautiful-dnd';

export const List = () => {
    const context = useContext(Context)

    let todos = [...context.state.todos];
    if(context.state.filterOption === "Active") {
        todos = todos.filter(todo => !todo.isComplete)
    } else if(context.state.filterOption === "Completed") {
        todos = todos.filter(todo => todo.isComplete)
    }

    const handleDragEnd = (result) => {
        if(!result.destination) return;
        context.sortTodos(result.source.index, result.destination.index);
    }

    return (
        <DragDropContext onDragEnd={handleDragEnd}>
            <Droppable droppableId="todos">
                {(provided) => (
                    <ul {...provided.droppableProps} ref={provided.innerRef} className={[classes.list, context.state.theme === "LIGHT" ? "invert-again" : undefined,context.state.theme === "LIGHT" ? classes.light : undefined].join(" ")}>
                        {todos.map((todo, index) => (
                            <ListItem key={todo.id} index={index} todo={todo}/>
                        ))}
                        {provided.placeholder}
                        <Footer />
                    </ul>
                )}
            </Droppable>
        </DragDropContext>
    );
}