import { PrismaClient } from '@prisma/client'
import express from 'express'

const prisma = new PrismaClient({
	log: ['query']
})

function randomIntFromInterval(min: number, max: number) { 
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function CharacterRole() {

	const roles: string[] = ["Arqueiro", "Paladino", "Ilusionista", "Mago elementar", "Alquimista", "Caçador", "Espadachim", "Necromante"]
	let selectRole = roles[randomIntFromInterval(0, 7)]
	const elements: string[] = [" do fogo", " da água", " da terra", " do ar"]

	if (selectRole === "Mago elementar") {
		selectRole += elements[randomIntFromInterval(0, 3)]
	}

	return selectRole
}

export const routes = express.Router()

routes.get('/CharactersList', async(req, res) => {
	const characters = await prisma.character.findMany()

	res.json(characters)
})

routes.get('/Character/:id', async(req, res) => {

	const { id } = req.params

	const character = await prisma.character.findUnique({
		where: {
			id: Number(id)
		}
	})

	res.json(character)
})

routes.post('/CreateCharacter', async (req, res) => {
	const { name } = req.body

	const Character = await prisma.character.create({
  		data: { name, force: randomIntFromInterval(1, 5), agility: randomIntFromInterval(1, 5), velocity: randomIntFromInterval(1, 5), charisma: randomIntFromInterval(1, 5), inteligence: randomIntFromInterval(1, 5), constitution: randomIntFromInterval(1, 5), role: CharacterRole() },
	})

	res.status(201)
})

routes.put('/Character/Update/:id', async (req, res) => {
	const { id } = req.params
	const { name, life_data, inventory } = req.body

	const updateUser = await prisma.character.update({
		where: {
			id: Number(id)
		},
		data: {
			name: name,
			life: Number(life_data),
			inventory: inventory
		},
	})

	res.status(201)
})