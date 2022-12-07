import {useState, useEffect } from "react"

import { Header } from '../components/Header'
import { CharacterSimpleCard } from '../components/CharacterSimpleCard'
import { NavBarMobile } from '../components/NavBarMobile'

interface CharacterProps {
	id: number,
	name: string,
	createdAt: string,
}


export function CharactersList() {
    const [characters, setCharacters] = useState<any[]>([]);
    const [messageAlert, setMessageAlert] = useState('Carregando o banco de dados')

    let categoryList: string[] = []

	const getApiData = async () => {
		try {
			const response = await fetch(
				`${import.meta.env.VITE_API_URL}/CharactersList/`
			).then(
				(response) => response.json().then(data => ({statusOk: response.ok, body: data}))
			)

			if (response.statusOk === false) {
				setMessageAlert('O banco de dados está offline')
			}
			return setCharacters(response.body);
		} catch (error) {
			setMessageAlert('O banco de dados está offline')
			console.log(error)
		}
		
	}

	useEffect(() => {
		getApiData();
	}, []);


	return (
		<>
			<Header title="Rpg Bears" subTitle="Lista de personagens" />
		
			<main className="flex flex-wrap flex-col">
				<article className="flex flex-wrap justify-center flex-col md:flex-row ">
					{ characters.length > 0 ?
						categoryList = JSON.parse(JSON.stringify(characters)).map((character: CharacterProps) => {
							return (
								<CharacterSimpleCard key={character.id} id={character.id} name={character.name} createdAt={character.createdAt} />
							)
						}) : <span className="self-center p-10 my-5 mx-5 border-[1px] bg-gray-500 border-gray-500 rounded-tl-lg rounded-br-lg">{messageAlert}</span>
					}		
				</article>
			</main>
			<footer className="mt-20">
				<NavBarMobile typeIntImage={2} />	
			</footer>
		</>
	)
}
