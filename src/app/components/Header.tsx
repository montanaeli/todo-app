import MoonIcon from '@/app/components/icons/MoonIcon'

const Header = () => {
    return (
        <header className="container mx-auto px-4 pt-8">
            <div className="flex justify-between">
                <h1 className="font-bold-600 text-3xl uppercase tracking-[0.3em] text-white">
                    Todo
                </h1>
                <button>
                    <MoonIcon />
                </button>
            </div>
        </header>
    )
}

export default Header
