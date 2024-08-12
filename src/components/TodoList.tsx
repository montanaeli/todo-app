import TodoItem from './TodoItem'
import { Droppable, Draggable } from '@hello-pangea/dnd'

interface Props {
    todos: Todo[]
    removeTodo: any
    updateTodo: any
    setTodos: any
}

const TodoList = ({ todos, removeTodo, updateTodo, setTodos }: Props) => {
    return (
        // <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="todos">
            {(provided, snapshot) => (
                <ul
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    className="mt-8 overflow-hidden rounded-md bg-white transition-all duration-1000 dark:bg-gray-800 [&>article]:p-4"
                >
                    {todos.map((todo: Todo, index: number) => (
                        <Draggable
                            index={index}
                            key={todo.id}
                            draggableId={`${todo.id}`}
                        >
                            {(draggableProvider) => (
                                <TodoItem
                                    key={todo.id}
                                    todo={todo}
                                    removeTodo={removeTodo}
                                    updateTodo={updateTodo}
                                    ref={draggableProvider.innerRef}
                                    {...draggableProvider.dragHandleProps}
                                    {...draggableProvider.draggableProps}
                                />
                            )}
                        </Draggable>
                    ))}
                    {provided.placeholder}
                </ul>
            )}
        </Droppable>
        // </DragDropContext>
    )
}

export default TodoList
