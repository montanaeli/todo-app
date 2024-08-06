import TodoItem from './TodoItem'

interface Props {
    todos: Todo[]
    removeTodo: any
    updateTodo: any
}

const TodoList = ({ todos, removeTodo, updateTodo }: Props) => {
    return (
        <div className="mt-8 overflow-hidden rounded-md bg-white transition-all duration-1000 dark:bg-gray-800 [&>article]:p-4">
            {todos.map((todo: Todo) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    removeTodo={removeTodo}
                    updateTodo={updateTodo}
                />
            ))}
        </div>
    )
}

export default TodoList
