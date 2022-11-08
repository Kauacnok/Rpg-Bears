import { X } from 'phosphor-react'
import { useState, FormEvent } from 'react'
import { useParams, useNavigate} from 'react-router-dom'

import { InputForm } from '../components/InputForm'

interface DeleteCharacterCardProps {
	isMenuOpen: any
}

export function DeleteCharacterCard({ isMenuOpen }: DeleteCharacterCardProps) {
	const navigate = useNavigate()

	const { id } = useParams<{ id: string }>()

	const [password, setPassword] = useState('')

	function closeMenu() {
		isMenuOpen(false)
	}

	async function handleSubmit(event: FormEvent) {
		event.preventDefault()

		navigate('/CharactersList')

		await fetch(`${import.meta.env.VITE_API_URL}/Character/Delete/${id}`, {
			method: "DELETE",
			headers: {
				"Content-type": "application/json",
			},
		})
	}

	return (
		<section className="bg-gray-700 fixed top-0 left-0 h-screen w-screen">
			<article className="flex flex-col w-[100%] h-[100%] justify-center items-center">
				<nav className="flex gap-10 justify-around mb-20 items-center">
					<h1>Deseja deletar o personagem?</h1>
					<button type="button" onClick={closeMenu}><X size={40} className="cursor-pointer" /></button>
				</nav>
				<form onSubmit={handleSubmit}>
					<InputForm typeInput="text" placeholderInput="Digite a senha do mestre para deletar o personagem" setValue={setPassword} />	
					<button 
						type="submit" 
						className="w-[100%] mx-auto px-5 py-2 bg-red-500 hover:bg-red-700 disabled:opacity-50"
						disabled={import.meta.env.VITE_UPDATE_CHARACTER_PASSWORD !== password}
					>
						Deletar o personagem
					</button>
				</form>
			</article>
		</section>
	)
}