import {useState, useEffect } from "react"
import { Link, useParams } from 'react-router-dom'
import { ArrowLeft } from 'phosphor-react'

import { Header } from '../components/Header'

export function CharacterFull() {
	const { id } = useParams<{ id: string }>()

	const [character, setCharacter] = useState<any[]>([]);

	const getApiData = async () => {
	  const response = await fetch(
	    `${import.meta.env.VITE_API_URL}/Character/${id}`
	  ).then((response) => response.json());

	  return setCharacter(response);
	}

	useEffect(() => {
		getApiData();
	}, [])

	console.log(character)

	return (
		<>
			<Header title="Rpg Bears" subTitle="Ficha do personagem" />
			<nav className="flex justify-between mt-10 items-center bg-gray-700 p-5">
				<Link to={`/CharactersList`} className="rounded-full px-5 py-2 hover:bg-gray-500 transition" > <ArrowLeft size={40} /> </Link>
				<Link to={`/Character/Update/${id}`} className="rounded px-5 py-2 bg-green-500 hover:bg-green-700 transition">Editar</Link>
			</nav>
			<main>
				<article className="flex flex-col p-5 bg-gray-700 border-2 mx-2 mb-4 border-gray-500">
					<h2 className="text-[30px]">{character[0]?.name}</h2>
					<span className="ml-2">Vida: {character[0]?.life}</span>
					<p className="ml-2">Profissão: {character[0]?.role}</p>
				</article>
				<article className="flex flex-col p-5 bg-gray-700 border-2 mx-2 mb-4 border-gray-500">
					<h2 className="text-[30px]">Atributos:</h2>
					<p className="ml-2">Força: {character[0]?.force}</p>
					<p className="ml-2">Inteligência: {character[0]?.inteligence}</p>
					<p className="ml-2">Constituição: {character[0]?.constitution}</p>
					<p className="ml-2">Agilidade: {character[0]?.agility}</p>
					<p className="ml-2">Charme: {character[0]?.charisma}</p>
					<p className="ml-2">Velocidade: {character[0]?.velocity}</p>
				</article>
				<article className="flex flex-col p-5 bg-gray-700 border-2 mx-2 mb-4 border-gray-500">
					<h2 className="text-[30px]">Inventário: </h2>
					<textarea value={character[0]?.inventory} readOnly className="bg-gray-700 w-[90%] h-[400px]"></textarea>
				</article>
			</main>
		</>
	)
}