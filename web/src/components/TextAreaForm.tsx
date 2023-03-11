import { SyntheticEvent } from 'react'

interface TextAreaFormProps {
	placeholderInput: string,
	setValue: Function,
	dataDefaultValue: string | number | undefined
}

export function TextAreaForm({placeholderInput, setValue, dataDefaultValue}: TextAreaFormProps) {

	function addDataOnTextArea(event: SyntheticEvent, value: Function, defaultValue: string | number | undefined) {
		let target = event.target as HTMLInputElement
  		target.value == "" ? value(defaultValue) : value(target.value)
  	}

	return (
		<>
			<h2 className="block bt-2 ml-2">Inventário</h2>
			<textarea key="24" className="bg-gray-900 block rounded w-[90%] px-5 h-14 mb-2 ml-2 focus:outline-none focus:border-b-2 focus:border-purple-600" required onChange={event =>  addDataOnTextArea(event, setValue, dataDefaultValue)} ></textarea>
		</>
	)
}