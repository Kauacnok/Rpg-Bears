interface FaqCardProps {
	question: string,
	answer: string
}

export function FaqCard({ question, answer }: FaqCardProps) {
	return (
		<>
			<details className="pt-5 px-5">
				<summary className="mb-5 cursor-pointer">{ question }</summary>

				<p className="text-sm mb-2">{ answer }</p>
			</details>
		</>
	)
}