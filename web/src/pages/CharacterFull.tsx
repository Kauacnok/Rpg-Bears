import {useState, useEffect } from "react"
import { Link, useParams } from 'react-router-dom'
import { ArrowLeft } from 'phosphor-react'

import { Header } from '../components/Header'

export function CharacterFull() {
	const { id } = useParams<{ id: string }>()

	const [character, setCharacter] = useState<any[]>([]);

	let character_id_get = 0

	const getApiData = async () => {
	  const response = await fetch(
	    `${import.meta.env.VITE_API_URL}/CharactersList`
	  ).then((response) => response.json());

	  return setCharacter(response);
	}

	useEffect(() => {
		getApiData();
		const Character_ID = character.map((character_u: any) => {
		if (Number(character_u.id) === Number(id)) {
			character_id_get = Number(id)
		}
	})
	}, [])

	console.log(character_id_get)

	return (
		<>
			<Header title="Rpg Bears" subTitle="Ficha do personagem" />
			<nav className="flex justify-between mt-10 items-center bg-gray-700 p-5">
				<Link to={`/CharactersList`} className="rounded-full px-5 py-2 hover:bg-gray-500 transition" > <ArrowLeft size={40} /> </Link>
				<Link to={`/Character/Update/${id}`} className="rounded px-5 py-2 bg-green-500 hover:bg-green-700 transition">Editar</Link>
			</nav>
			<main>
				<article className="flex flex-col p-5 bg-gray-700 border-2 mx-2 mb-4 border-gray-500">
					<h2 className="text-[30px]">{character[character_id_get]?.name}</h2>
					<span className="ml-2">Vida: {character[character_id_get]?.life}</span>
					<p className="ml-2">Profissão: {character[character_id_get]?.role}</p>
				</article>
				<article className="flex flex-col p-5 bg-gray-700 border-2 mx-2 mb-4 border-gray-500">
					<h2 className="text-[30px]">Atributos:</h2>
					<p className="ml-2">Força: {character[character_id_get]?.force}</p>
					<p className="ml-2">Inteligência: {character[character_id_get]?.inteligence}</p>
					<p className="ml-2">Constituição: {character[character_id_get]?.constitution}</p>
					<p className="ml-2">Agilidade: {character[character_id_get]?.agility}</p>
					<p className="ml-2">Charme: {character[character_id_get]?.charisma}</p>
					<p className="ml-2">Velocidade: {character[character_id_get]?.velocity}</p>
				</article>
				<article className="flex flex-col p-5 bg-gray-700 border-2 mx-2 mb-4 border-gray-500">
					<h2 className="text-[30px]">Inventário: </h2>
					<textarea value={character[character_id_get]?.inventory} readOnly className="bg-gray-700 w-[90%] h-[400px]"></textarea>
				</article>
			</main>
		</>
	)
}