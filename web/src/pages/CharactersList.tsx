import {useState, useEffect } from "react"

import { Header } from '../components/Header'
import { CharacterSimpleCard } from '../components/CharacterSimpleCard'

interface CharacterProps {
	id: number,
	name: string,
	createdAt: string,
}


export function CharactersList() {
    const [characters, setCharacters] = useState<any[]>([]);

    let categoryList: string[] = []

	const getApiData = async () => {
	  const response = await fetch(
	    `${import.meta.env.VITE_API_URL}/CharactersList`
	  ).then((response) => response.json());

	  return setCharacters(response);
	}

	useEffect(() => {
		getApiData();
	}, []);

	return (
		<>
			<Header title="Rpg Bears" subTitle="Lista de personagens" />
		
			<main className="flex flex-wrap flex-col">
				<article className="flex flex-wrap justify-center flex-col md:flex-row ">
					{
						categoryList = JSON.parse(JSON.stringify(characters)).map((character: CharacterProps) => {
							return (
								<CharacterSimpleCard key={character.id} id={character.id} name={character.name} createdAt={character.createdAt} />
							)
						})
					}		
				</article>
			</main>
		</>
	)
}
