"use client"
import { useTodos } from '@/store/Todos';
import React, { FormEvent, useState } from 'react'

const AddTodo = () => {
    const [todo, setTodo] = useState("");
    const {handleAddTodo} = useTodos();
    const handleFormSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        handleAddTodo(todo);
        setTodo("");
    }
  return (
    <form onSubmit={handleFormSubmit}>
        <input type="text" placeholder='Write your todo' name='' id='' value={todo} onChange={(event) => setTodo(event.target.value)}/>
        <button type='submit'>ADD</button>
    </form>
  )
}

export default AddTodo
