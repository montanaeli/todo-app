const TodoComputed = ({ computedItemsLeft, clearCompleted }: any) => {
    return (
        <section className="justify flex justify-between rounded-b-md bg-white px-4 py-4">
            <span className="text-gray-400">
                {computedItemsLeft} items left
            </span>
            <button className="text-gray-400" onClick={clearCompleted}>
                Clear completed
            </button>
        </section>
    )
}

export default TodoComputed
