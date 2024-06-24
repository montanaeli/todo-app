import CrossIcon from '@/app/components/icons/CrossIcon'
import Header from './components/Header'

export default function Home() {
    return (
        <div className="min-h-screen bg-gray-300 bg-[url('../../assets/images/bg-mobile-light.jpg')] bg-contain bg-no-repeat">
            <Header />
            <main className="container mx-auto mt-8 px-4">
                <form className="flex items-center gap-4 overflow-hidden rounded-t-md bg-white px-4 py-4">
                    <span className="inline-block h-5 w-5 items-center rounded-full border-2"></span>
                    <input
                        className="w-full text-gray-400 outline-none"
                        type="text"
                        placeholder="Create a new todo ..."
                    ></input>
                </form>
                <div className="mt-8 rounded-md bg-white [&>article]:p-4">
                    <article className="flex gap-4 border-b border-b-gray-300">
                        <button className="inline-block h-5 w-5 flex-none items-center rounded-full border-2"></button>
                        <p className="grow text-gray-600">
                            Complete online Javascript curse in blueweb
                        </p>
                        <button className="flex-none">
                            <CrossIcon />
                        </button>
                    </article>
                    <article className="flex gap-4 border-b border-b-gray-300">
                        <button className="inline-block h-5 w-5 flex-none items-center rounded-full border-2"></button>
                        <p className="grow text-gray-600">
                            Complete online Javascript curse in blueweb
                        </p>
                        <button className="flex-none">
                            <CrossIcon />
                        </button>
                    </article>{' '}
                    <article className="flex gap-4 border-b border-b-gray-300">
                        <button className="inline-block h-5 w-5 flex-none items-center rounded-full border-2"></button>
                        <p className="grow text-gray-600">
                            Complete online Javascript curse in blueweb
                        </p>
                        <button className="flex-none">
                            <CrossIcon />
                        </button>
                    </article>
                    <section className="justify flex justify-between rounded-b-md bg-white px-4 py-4">
                        <span className="text-gray-400">5 items left</span>
                        <button className="text-gray-400">
                            Clear completed
                        </button>
                    </section>
                </div>
                <section className="container mx-auto mt-8 px-4">
                    <div className="flex justify-center gap-4 rounded-md bg-white p-4">
                        <button className="hover:text-blue-600">All</button>
                        <button className="hover:text-blue-600">Active</button>
                        <button className="hover:text-blue-600">
                            Completed
                        </button>
                    </div>
                </section>
            </main>
            <footer className="mt-8 text-center">
                Drag and drop to reorder list
            </footer>
        </div>
    )
}
