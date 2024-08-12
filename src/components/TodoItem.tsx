import CrossIcon from '@/components/icons/IconCross'
import IconCheck from './icons/IconCheck'
import React from 'react'

interface Props {
    todo: Todo
    updateTodo: any
    removeTodo: any
}

const TodoItem = React.forwardRef<HTMLElement, Props>(
    ({ todo, updateTodo, removeTodo, ...props }: Props, ref) => {
        const { id, title, completed } = todo
        return (
            <article
                {...props}
                ref={ref}
                className="flex gap-4 border-b border-b-gray-300"
            >
                {/* <button className="inline-block h-5 w-5 flex-none items-center rounded-full border-2"></button> */}
                <button
                    className={`h-5 w-5 flex-none rounded-full border-2 ${
                        completed
                            ? 'grid place-items-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'
                            : 'inline-block items-center'
                    }`}
                    onClick={() => updateTodo(id)}
                >
                    {completed && <IconCheck />}
                </button>
                <p
                    className={`grow text-gray-600 dark:text-gray-400 ${completed && 'line-through'}`}
                >
                    {title}
                </p>
                <button className="flex-none" onClick={() => removeTodo(id)}>
                    <CrossIcon />
                </button>
            </article>
        )
    }
)

export default TodoItem
