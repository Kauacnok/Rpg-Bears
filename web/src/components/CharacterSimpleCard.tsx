import { parseISO, format, differenceInHours } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { Link } from 'react-router-dom'

interface CharacterSimpleCardProps {
	id: number,
	name: string,
	createdAt: string
}

export function CharacterSimpleCard({ id, name, createdAt }: CharacterSimpleCardProps) {

	const createdAtDate = parseISO(createdAt)

	const formattedDate = format(createdAtDate, "'dia' dd 'de' MMMM', às ' HH:mm", {
		locale: ptBR
	})

	return (
		<Link to={`/Character/${id}`} className="p-10 pb-5 my-5 mx-5 border-[1px] bg-gray-500 border-gray-500 rounded-tl-lg rounded-br-lg cursor-pointer hover:bg-gray-600 hover:border-gray-600 hover:translate-y-[-4px] md:w-[450px] transition">
			<h1 className="mb-10">{ name }</h1>
			<span>Criado no {formattedDate}</span>
		</Link>
	)
}