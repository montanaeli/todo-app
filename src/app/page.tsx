'use client'

import { useState } from 'react'
import Header from './components/Header'
import TodoComputed from './components/TodoComputed'
import TodoCreate from './components/TodoCreate'
import TodoFilter from './components/TodoFilter'
import TodoList from './components/TodoList'

const initialStateTodos = [
    {
        id: 1,
        title: 'Complete online Javascript bluuweb curse',
        completed: true,
    },
    {
        id: 2,
        title: 'Go to the gym',
        completed: false,
    },
    {
        id: 3,
        title: '10 minutes meditation',
        completed: false,
    },
    {
        id: 4,
        title: 'Pick up groceries',
        completed: false,
    },
    {
        id: 5,
        title: 'Complete todo app from Frontend Mentor',
        completed: false,
    },
]

export default function Home() {
    const [todos, setTodos] = useState<Todo[]>(initialStateTodos)

    const createTodo = ({ title }: any) => {
        const newTodo = {
            id: Date.now(),
            title: title,
            completed: false,
        }
        setTodos([...todos, newTodo])
    }

    return (
        <div className="min-h-screen bg-gray-300 bg-[url('../../assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat">
            <Header />
            <main className="container mx-auto mt-8 px-4">
                <TodoCreate createTodo={createTodo} />
                <TodoList todos={todos} />
                <TodoComputed />
                <TodoFilter />
            </main>
            <footer className="mt-8 text-center">
                Drag and drop to reorder list
            </footer>
        </div>
    )
}
