import {useState, useEffect, FormEvent } from "react"
import { Link, useParams, useNavigate} from 'react-router-dom'
import { ArrowLeft } from 'phosphor-react'

import { Header } from '../components/Header'
import { NavBarMobile } from '../components/NavBarMobile'
import { InputForm } from '../components/InputForm'
import { TextAreaForm } from '../components/TextAreaForm'

export function UpdateCharacter() {
	const { id } = useParams<{ id: string }>()

	const navigate = useNavigate()

	const [character, setCharacter] = useState<any[]>([]);
	const [character_ID, setCharacterID] = useState(0)

	const getApiData = async () => {
	  const response = await fetch(
	    `${import.meta.env.VITE_API_URL}/CharactersList`
	  ).then((response) => response.json());
	  
		response.map((character_u: any, index: number) => {
			if (character_u.id == Number(id)) {
				setCharacterID(Number(index))					
		}})
	  return setCharacter(response);
	}

	useEffect(() => {
		getApiData();
	}, [])

	const [name, setName] = useState("")
	const [life, setLife] = useState(0)
	const [inventory, setInventory] = useState("")
	const [password, setPassword] = useState("")

	function addedNameToInput() {
		setName(character[character_ID]?.name)
	}

	function addedLifeToInput() {
		setLife(character[character_ID]?.life)
	}

	function addedInventoryToInput() {
		setInventory(character[character_ID]?.inventory)
	}

	async function handleSubmit(event: FormEvent) {
		event.preventDefault()

		name == undefined && setName(character[character_ID]?.name)
		life == undefined && setLife(Number(character[character_ID]?.life))
		inventory == undefined && setInventory(character[character_ID]?.inventory)
		
		const life_data = Number(life)

		const Character_Data = { name, life_data, inventory }

		navigate('/CharactersList')

		await fetch(`${import.meta.env.VITE_API_URL}/Character/Update/${id}`, {
			method: "PUT",
			body: JSON.stringify(Character_Data),
			headers: {
				"Content-type": "application/json",
			},
		})

	}

	return (
		<>
			<Header title="Rpg Bears" subTitle=" Atualizar ficha do personagem" />
			<nav className="flex justify-between mt-10 items-center bg-gray-700 p-5">
				<Link to={`/Character/${id}`} className="rounded-full px-5 py-2 hover:bg-gray-500 transition" > <ArrowLeft size={40} /> </Link>
				<p className="mx-auto">Ficha do personagem</p>
			</nav>
			<form onSubmit={handleSubmit} className="bg-gray-700 flex flex-col pl-2 pb-2">
				<InputForm key="1" typeInput="text" placeholderInput="Nome do personagem" setValue={setName} isUpdateCharacter={true} dataDefaultValue={character[character_ID]?.name} value={name} />
				<div className="flex justify-start items-center">
					<p className="bg-gray-700 px-5 py-2 my-5 border-r-2 border-r-gray-500">Dado atual: { name == undefined ? character[character_ID]?.name : name}</p>	
					<button type="button" className="ml-4 px-4 py-2 bg-green-500 rounded hover:bg-green-700 transition" onClick={((e) => { addedNameToInput() })}>Adicionar valor atual ao input</button>
				</div>
				<InputForm key="2" typeInput="number" placeholderInput="Vida do personagem" setValue={setLife} isUpdateCharacter={true} dataDefaultValue={character[character_ID]?.life} value={life} />
				<div className="flex justify-start items-center">
					<p className="bg-gray-700 px-5 py-2 my-5 border-r-2 border-r-gray-500">Dado atual: { life == undefined ? character[character_ID]?.life : life}</p>
					<button type="button" className="ml-4 px-4 py-2 bg-green-500 rounded hover:bg-green-700 transition" onClick={((e) => { addedLifeToInput() })}>Adicionar valor atual ao input</button>
				</div>
				<TextAreaForm key="3" placeholderInput="Inventário do personagem" setValue={setInventory} dataDefaultValue={character[character_ID]?.inventory} value={inventory} />
				<div className="flex justify-start items-center">
					<p className="bg-gray-700 px-5 py-2 my-5 border-r-2 border-r-gray-500">Dado atual: { inventory == undefined ? character[character_ID]?.inventory : inventory}</p>
					<button type="button" className="ml-4 px-4 py-2 bg-green-500 rounded hover:bg-green-700 transition" onClick={((e) => { addedInventoryToInput() })}>Adicionar valor atual ao input</button>
				</div>
				<InputForm key="4" typeInput="password" placeholderInput="Digite a senha do mestre para confirmar as alterações" setValue={setPassword} />

				<button 
					type="submit" 
					className="w-[100%] mx-auto px-5 py-2 bg-green-500 hover:bg-green-700 disabled:opacity-50"
					disabled={import.meta.env.VITE_UPDATE_CHARACTER_PASSWORD !== password}
				>
					Atualizar um personagem
				</button>
			</form>
			<footer className="mt-20">
				<NavBarMobile typeIntImage={2} />	
			</footer>
		</>
	)
}