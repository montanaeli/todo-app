import IconMoon from '@/components/icons/IconMoon'
import IconSun from '@/components/icons/IconSun'
import { useEffect, useState } from 'react'

const inicialStateDarkMode = localStorage.getItem('theme') == 'dark'

const Header = () => {
    const [darkMode, setDarkMode] = useState(inicialStateDarkMode)

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark')
            localStorage.setItem('theme', 'dark')
        } else {
            document.documentElement.classList.remove('dark')
            localStorage.setItem('theme', 'light')
        }
    })

    return (
        <header className={'container mx-auto px-4 pt-8 md:max-w-xl'}>
            <div className="flex justify-between">
                <h1 className="font-bold-600 text-3xl uppercase tracking-[0.3em] text-white">
                    Todo
                </h1>
                <button onClick={() => setDarkMode(!darkMode)}>
                    {darkMode ? <IconSun /> : <IconMoon />}
                </button>
            </div>
        </header>
    )
}

export default Header
