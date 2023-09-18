"use client"
import { useTodos } from '@/store/Todos'
import { useSearchParams } from 'next/navigation';
import React from 'react'

const Todos = () => {
    const {todos, toggleTodoAsCompleted, handleTodoDelete} = useTodos();
    const searchParams = useSearchParams();
    const todosfilter = searchParams.get('todos');
    let filterTodos = todos;
    if(todosfilter === "active") {
        filterTodos = filterTodos.filter((todo) => !todo.completed);
    }
    else if(todosfilter === "completed") {
        filterTodos = filterTodos.filter((todo) => todo.completed);
    }
  return (
    <ul className="main-task">
            {
                filterTodos.map((todo) => {
                    return <li key={todo.id}>

                        {/*Assigns a unique ID to the checkbox. The ID is created by concatenating the string "todo-" with the id property of the todo object.*/}
                        <input type="checkbox" id={`todo-${todo.id}`} checked={todo.completed} onChange={() => {
                            console.log(todo.completed)
                            toggleTodoAsCompleted(todo.id)}
                        } />

                        <label htmlFor={`todo-${todo.id}`}> {todo.task}</label>

                        {
                            todo.completed && (
                                <button type="button" onClick={() => handleTodoDelete(todo.id)}>
                                    Delete
                                </button>
                            )
                        }

                    </li>
                })
            }
        </ul>
  )
}

export default Todos
