'use client'

import { useEffect, useState } from 'react'
import Header from '../components/Header'
import TodoComputed from '../components/TodoComputed'
import TodoCreate from '../components/TodoCreate'
import TodoFilter from '../components/TodoFilter'
import TodoList from '../components/TodoList'

import { DragDropContext } from '@hello-pangea/dnd'

export default function Home() {
    const [todos, setTodos] = useState<Todo[] | []>([])

    const [todosInitialized, setTodosInitialized] = useState<boolean>(false)

    useEffect(() => {
        // TODO: Improvement, use @uidotdev/usehooks to avoid setting todos to the localstorage
        const storedTodos = localStorage.getItem('todos')
        const initialStateTodos = storedTodos ? JSON.parse(storedTodos) : []
        setTodos(initialStateTodos)
        setTodosInitialized(true)
    }, [])

    useEffect(() => {
        if (todosInitialized) {
            localStorage.setItem('todos', JSON.stringify(todos))
        }
    }, [todos])

    const createTodo = ({ title }: any) => {
        const newTodo = {
            id: Date.now(),
            title: title,
            completed: false,
        }
        setTodos([...todos, newTodo])
    }

    const removeTodo = (id: number) => {
        setTodos(todos.filter((todo) => todo.id !== id))
    }

    const updateTodo = (id: number) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        )
    }

    const computedItemsLeft = () => {
        return todos.filter((todo) => !todo.completed).length
    }

    const clearCompleted = () => {
        setTodos(todos.filter((todo) => !todo.completed))
    }

    const [filter, setFilter] = useState('all')

    const changeFilter = (filter: any) => setFilter(filter)

    const filteredTodos = () => {
        switch (filter) {
            case 'all':
                return todos
            case 'active':
                return todos.filter((todo) => !todo.completed)
            case 'completed':
                return todos.filter((todo) => todo.completed)
            default:
                return todos
        }
    }

    const handleDragEnd = (result: { destination: any; source: any }) => {
        if (!result.destination) return

        const startIndex = result.source.index
        const endIndex = result.destination.index

        const copyArray = [...todos]
        const [reorderedItem] = copyArray.splice(startIndex, 1)

        copyArray.splice(endIndex, 0, reorderedItem)

        setTodos(copyArray)
    }

    return (
        <div className="min-h-screen bg-gray-300 bg-[url('../../assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat md:bg-[url('../../assets/images/bg-desktop-light.jpg')] dark:bg-gray-900 dark:bg-[url('../../assets/images/bg-mobile-dark.jpg')] md:dark:bg-[url('../../assets/images/bg-desktop-light.jpg')]">
            <Header />
            <main className="container mx-auto mt-8 px-4 md:max-w-xl">
                <TodoCreate createTodo={createTodo} />
                <DragDropContext onDragEnd={handleDragEnd}>
                    <TodoList
                        todos={filteredTodos()}
                        removeTodo={removeTodo}
                        updateTodo={updateTodo}
                        setTodos={() => {}}
                    />
                </DragDropContext>
                <TodoComputed
                    computedItemsLeft={computedItemsLeft()}
                    clearCompleted={clearCompleted}
                />
                <TodoFilter changeFilter={changeFilter} filter={filter} />
            </main>
            <footer className="mt-8 text-center dark:text-gray-400">
                Drag and drop to reorder list
            </footer>
        </div>
    )
}
