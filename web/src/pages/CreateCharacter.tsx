import { useNavigate } from 'react-router-dom'
import { useState, FormEvent } from 'react'

import { Header } from '../components/Header'
import { InputForm } from '../components/InputForm'

export function CreateCharacter() {
	const navigate = useNavigate()

	const [name, setName] = useState('')
	const [password, setPassword] = useState('')

	async function handleSubmit(event: FormEvent) {
		event.preventDefault()

		const newCharacter = { name }

		navigate('/CharactersList')

		await fetch(`${import.meta.env.VITE_API_URL}/CreateCharacter`, {
			method: "POST",
			body: JSON.stringify(newCharacter),
			headers: {
				"Content-type": "application/json",
			},
		})
	}

	return (
		<>
			<Header title="Rpg Bears" subTitle="Criar um personagem" />
			<main>
				<form onSubmit={handleSubmit} className="bg-gray-700 flex flex-col pl-2 pb-2">
					<h2 className="flex items-center pl-2 my-10 text-center">
						<p className="mx-auto">Ficha do personagem</p>
					</h2>
					<InputForm key="1" typeInput="text" placeholderInput="Nome do personagem (coloque seu nick no discord junto)" setValue={setName} />
					<InputForm key="2" typeInput="password" placeholderInput="Digite a senha para criar o personagem" setValue={setPassword} />
					<button 
						type="submit" 
						className="w-[100%] mx-auto px-5 py-2 bg-green-500 hover:bg-green-700 disabled:opacity-50"
						disabled={import.meta.env.VITE_CREATE_CHARACTER_PASSWORD !== password}
					>
						Criar um personagem
					</button>
				</form>
			</main>
		</>
	)
}
