import { Header } from '../components/Header'
import { FaqCard } from '../components/FaqCard'

export function Home() {
	return (
		<>
			<Header title="Rpg Bears" subTitle="Neste topico voce podera sanar duvidas sobre o Rpg"/>
			<main className="bg-gray-700">
				<h2 className="text-lg text-center mt-4">FAQ perguntas frequentes</h2>
				<FaqCard question="Como funciona a criação de personagens?" answer="Visitando a aba ''Criar um personagem'', voce so precisa fornecer um nome para seu personagem (junto com seu nick do Discord), exemplo Binga-Binga (Nucador). É necessário ter a senha do grupo da Bears para criar um personagem" />
				<FaqCard question="Como funciona os numeros dos atributos?" answer="Os atributos são gerados aleatoriamente de a 1 até 5 assim como a classe do personagem é gerada aleatoriamente, o inventário começa vazio, e apenas o mestre pode dar algum item inicial" />
				<FaqCard question="Se eu morrer eu posso criar outro personagem?" answer="Fique conformado, o mestre vai dar um jeito de voce morrer, mas sim pode criar outro personagem" />
			</main>
		</>
	)
}