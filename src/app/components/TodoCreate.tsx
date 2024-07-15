import { useState } from 'react'

const TodoCreate = ({ createTodo }: any) => {
    const [title, setTitle] = useState('')

    const handleSubmitAddTodo = (e: { preventDefault: () => void }) => {
        e.preventDefault()
        if (!title.trim()) {
            return setTitle('')
        }
        createTodo({ title })
        setTitle('')
    }

    return (
        <form
            onSubmit={handleSubmitAddTodo}
            className="flex items-center gap-4 overflow-hidden rounded-md bg-white px-4 py-4"
        >
            <span className="inline-block h-5 w-5 items-center rounded-full border-2"></span>
            <input
                className="w-full text-gray-400 outline-none"
                type="text"
                placeholder="Create a new todo ..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            ></input>
        </form>
    )
}

export default TodoCreate
