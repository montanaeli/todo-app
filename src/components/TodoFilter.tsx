const TodoFilter = ({ changeFilter, filter }: any) => {
    return (
        <section className="container mx-auto mt-8 px-4">
            <div className="flex justify-center gap-4 rounded-md bg-white p-4 transition-all duration-1000 dark:bg-gray-800">
                <button
                    onClick={() => changeFilter('all')}
                    className={`${filter === 'all' ? 'text-blue-500 hover:text-gray-400' : 'text-gray-400 hover:text-blue-500'}`}
                >
                    All
                </button>
                <button
                    onClick={() => changeFilter('active')}
                    className={`${filter === 'active' ? 'text-blue-500 hover:text-gray-400' : 'text-gray-400 hover:text-blue-500'}`}
                >
                    Active
                </button>
                <button
                    onClick={() => changeFilter('completed')}
                    className={`${filter === 'completed' ? 'text-blue-500 hover:text-gray-400' : 'text-gray-400 hover:text-blue-500'}`}
                >
                    Completed
                </button>
            </div>
        </section>
    )
}

export default TodoFilter
