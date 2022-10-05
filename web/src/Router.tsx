import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { CharactersList } from './pages/CharactersList'
import { CreateCharacter } from './pages/CreateCharacter'
import { CharacterFull } from './pages/CharacterFull'
import { UpdateCharacter } from './pages/UpdateCharacter'

export function Router() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/CharactersList" element={<CharactersList />} />
				<Route path="/CreateCharacter" element={<CreateCharacter />} />
				<Route path="/Character/:id" element={<CharacterFull />} />
				<Route path="/Character/Update/:id" element={<UpdateCharacter />} />
			</Routes>
		</>
	)
}