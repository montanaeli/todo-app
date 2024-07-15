import TodoItem from './TodoItem'

interface Props {
    todos: Todo[]
}

const TodoList = ({ todos }: Props) => {
    return (
        <div className="mt-8 rounded-md bg-white [&>article]:p-4">
            {todos.map((todo: Todo) => (
                <TodoItem key={todo.id} todo={todo} />
            ))}
        </div>
    )
}

export default TodoList
