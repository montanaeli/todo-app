import CrossIcon from '@/app/components/icons/CrossIcon'
import IconCheck from './icons/IconCheck'

interface Props {
    todo: Todo
}

const TodoItem = ({ todo }: Props) => {
    const { id, title, completed } = todo
    return (
        <article className="flex gap-4 border-b border-b-gray-300">
            <button className="inline-block h-5 w-5 flex-none items-center rounded-full border-2">
                <IconCheck></IconCheck>
            </button>
            <p className="grow text-gray-600">{title}</p>
            <button className="flex-none">
                <CrossIcon />
            </button>
        </article>
    )
}

export default TodoItem
