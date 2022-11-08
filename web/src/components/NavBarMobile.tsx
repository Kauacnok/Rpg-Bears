import { Link } from 'react-router-dom'
import classNames from 'classnames'

interface NavBarMobileProps {
	typeIntImage: number // 1- Home 2- Characters list 3- Create Character
}

export function NavBarMobile({ typeIntImage }: NavBarMobileProps) {
	return (
		<>
			<menu className="fixed bg-gray-900 w-full h-16 border-[1px] border-gray-500 bottom-0 rounded-t-lg px-5 z-40 md:hidden">
				<ul className="flex flex-row h-full justify-center items-center gap-5">
					<li>
						<Link to="/">
							<img 
								src="https://i.imgur.com/N9tln92.png" 
								alt="Imagem de uma casa representando a pagina inicial"
								className={classNames("p-2 hover:border-2 hover:border-gray-300 hover:rounded", {
									'border-2 border-blue-700 rounded': typeIntImage === 1
								})} 
							/>
						</Link>
					</li>
					<li>
						<Link to="/CharactersList">
							<img 
								src="https://i.imgur.com/gxKkL2w.png"
								className={classNames("p-2 hover:border-2 hover:border-gray-300 hover:rounded", {
									'border-2 border-blue-700 rounded': typeIntImage === 2
								})} 
								alt="imagem de vários bonecos em fila representando a página lista de personagens" 
							/>
						</Link>
					</li>
					<li>
						<Link to="/CreateCharacter">
							<img src="https://i.imgur.com/I2fXaeF.png" 
								className={classNames("p-2 hover:border-2 hover:border-gray-300 hover:rounded", {
									'border-2 border-blue-700 rounded': typeIntImage === 3
								})} 
								alt="imagem de um boneco representando a página de criar um personagem"
							/>
						</Link>
					</li>
				</ul>
			</menu>
		</>
	)
}