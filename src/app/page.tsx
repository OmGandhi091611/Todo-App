import AddTodo from '@/components/AddTodo'
import NavBar from '@/components/NavBar'
import Todos from '@/components/Todos'
import React from 'react'
import "./globals.css"
import { RiTodoFill } from "react-icons/ri";
const page = () => {
  return (
    <main>
      <h2> <RiTodoFill className="icons"/> TODO <RiTodoFill className="icons" /></h2>
      <NavBar />
      <AddTodo />
      <Todos />
    </main>
  )
}

export default page
