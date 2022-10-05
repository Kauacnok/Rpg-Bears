import { Link } from 'react-router-dom'

interface HeaderProps {
	title: string,
	subTitle: string
}

export function Header({ title, subTitle }: HeaderProps) {
	return (
		<>
			<header className="relative bg-[url('../assets/noite-com-montanha.jpg')] w-screen h-[300px] bg-cover md:h-[520px]">
				<nav className="text-right pt-2">
					<ul className="inline">
						<li className="inline py-5 px-2 text-xs hover:underline cursor-pointer md:text-base"><Link to="/">Pagina inicial</Link></li>	
						<li className="inline py-5 px-2 text-xs hover:underline cursor-pointer md:text-base"><Link to="/CharactersList">Lista de personagens</Link></li>
						<li className="inline py-5 px-2 text-xs hover:underline cursor-pointer md:text-base md:mr-5"><Link to="/CreateCharacter">Criar um personagem</Link></li>
					</ul>
				</nav>
				<article className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
					<h1 className="text-center text-2xl md:text-4xl">{title}</h1>
					<p className="text-center text-sm">{subTitle}</p>
				</article>
			</header>
		</>
	)
}