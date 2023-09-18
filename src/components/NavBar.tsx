"use client"
import React from 'react'
import Link from 'next/link'
import {useSearchParams} from 'next/navigation';
const NavBar = () => {
    const searchParams = useSearchParams();
    const todosfilter = searchParams.get('todos');
  return (
    <nav>
        <Link href="/" className={todosfilter === null ? "active" : ""}>All</Link>
        <Link href="/?todos=active" className={todosfilter === "active" ? "active" : ""}>Active</Link>
        <Link href="/?todos=completed" className={todosfilter === "completed" ? "active" : ""}>Completed</Link>
    </nav>
  )
}

export default NavBar
