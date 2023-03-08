import {useState, useEffect } from "react"
import { Link, useParams } from 'react-router-dom'
import { ArrowLeft } from 'phosphor-react'

import { Header } from '../components/Header'
import { NavBarMobile } from '../components/NavBarMobile'
import { DeleteCharacterCard } from '../components/DeleteCharacterCard'

export function CharacterFull() {
	const { id } = useParams<{ id: string }>()

	const [character, setCharacter] = useState<any[]>([]);

	const [character_ID, setCharacterID] = useState(0)

	const [isMenuOpen, setIsMenuOpen] = useState(false)

	const getApiData = async () => {
	  const response = await fetch(
	    `${import.meta.env.VITE_API_URL}/CharactersList`
	  ).then((response) => response.json());

	  response.map((character_u: any, index: number) => {
			if (character_u.id == Number(id)) {
				setCharacterID(Number(index))					
			}
		});

	  return setCharacter(response);
	}

	useEffect(() => {
		getApiData()
	}, [character_ID, setCharacterID])

	function openMenu() {
		setIsMenuOpen(true)
	}

	return (
		<>
			<Header title="Rpg Bears" subTitle="Ficha do personagem" />
			<nav className="flex justify-between mt-10 items-center bg-gray-700 p-5">
				<Link to={`/CharactersList`} className="rounded-full px-5 py-2 hover:bg-gray-500 transition" > <ArrowLeft size={40} /> </Link>
				<Link to={`/Character/Update/${id}`} className="rounded px-5 py-2 bg-green-500 hover:bg-green-700 transition">Editar</Link>
			</nav>
			<main>
				<article className="flex flex-col p-5 bg-gray-700 border-2 mx-2 mb-4 border-gray-500">
					<h2 className="text-[30px]">{character[character_ID]?.name}</h2>
					<span className="ml-2">Vida: {character[character_ID]?.life}</span>
					<p className="ml-2">Profissão: {character[character_ID]?.role}</p>
				</article>
				<article className="flex flex-col p-5 bg-gray-700 border-2 mx-2 mb-4 border-gray-500">
					<h2 className="text-[30px]">Atributos:</h2>
					<p className="ml-2">Força: {character[character_ID]?.force}</p>
					<p className="ml-2">Inteligência: {character[character_ID]?.inteligence}</p>
					<p className="ml-2">Constituição: {character[character_ID]?.constitution}</p>
					<p className="ml-2">Agilidade: {character[character_ID]?.agility}</p>
					<p className="ml-2">Charme: {character[character_ID]?.charisma}</p>
					<p className="ml-2">Velocidade: {character[character_ID]?.velocity}</p>
				</article>
				<article className="flex flex-col p-5 bg-gray-700 border-2 mx-2 mb-4 border-gray-500">
					<h2 className="text-[30px]">Inventário: </h2>
					<textarea value={character[character_ID]?.inventory} readOnly className="bg-gray-700 w-[90%] h-[400px] focus:outline-none"></textarea>
				</article>
				<aside>
					{isMenuOpen && <DeleteCharacterCard isMenuOpen={setIsMenuOpen} />}
				</aside>
				<footer>
					<button type="button" className="bg-red-500 w-[100%] p-2 rounded hover:bg-red-600 transition" onClick={openMenu}>Deletar personagem</button>
				</footer>
			</main>
			<footer className="mt-20">
				<NavBarMobile typeIntImage={2} />
			</footer>
		</>
	)
}