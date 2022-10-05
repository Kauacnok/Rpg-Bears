interface TextAreaFormProps {
	placeholderInput: string,
	setValue: Function,
	dataDefaultValue: any
}

export function TextAreaForm({placeholderInput, setValue, dataDefaultValue}: TextAreaFormProps) {

	function addDataOnTextArea(event: any, value: Function, defaultValue: any) {
  		event.target.value == "" ? value(defaultValue) : value(event.target.value)
  	}

	return (
		<>
			<h2 className="block bt-2 ml-2">Inventário</h2>
			<textarea key="24" className="bg-gray-900 block rounded w-[90%] px-5 h-14 mb-2 ml-2" required onChange={event =>  addDataOnTextArea(event, setValue, dataDefaultValue)} ></textarea>
		</>
	)
}