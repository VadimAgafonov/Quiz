import React, { useState } from 'react'
import './index.scss'

const questions = [
	{
		title: 'Что больше всего любит Женька?',
		variants: ['Спать', 'Есть', 'Учиться'],
		correct: 1,
	},
	{
		title: 'Самая любимая еда Женьки?',
		variants: [
			'Пиво из Saldens',
			'Шоколад',
			'Бургеры',
		],
		correct: 1,
	},
	{
		title: 'Какие животные больше всего нравятся Женьке',
		variants: [
			'Собачки',
			'Хомячки',
			'Котики',
		],
		correct: 2,
	},
]

function Result({ correct }) {
	return (
		<div className='result'>
			<img src='https://cdn-icons-png.flaticon.com/512/2278/2278992.png' />
			<h2>
				Вы отгадали {correct} ответа из {questions.length}
			</h2>
			<a href='/'>
				<button>Попробовать снова</button>
			</a>
		</div>
	)
}

function Game({ step, question, onClickVariant }) {
	const percentage = Math.round((step / questions.length) * 100)

	return (
		<>
			<div className='progress'>
				<div
					style={{ width: `${percentage}%` }}
					className='progress__inner'
				></div>
			</div>
			<h1>{question.title}</h1>
			<ul>
				{question.variants.map((text, index) => (
					<li onClick={() => onClickVariant(index)} key={text}>
						{text}
					</li>
				))}
			</ul>
		</>
	)
}

function App() {
	const [step, setStep] = useState(0)
	const [correct, setCorrect] = useState(0)
	const question = questions[step]

	const onClickVariant = index => {
		console.log(step, index)
		setStep(step + 1)

		if (index === question.correct) {
			setCorrect(correct + 1)
		}
	}

	return (
		<div className='App'>
			{step !== questions.length ? (
				<Game step={step} question={question} onClickVariant={onClickVariant} />
			) : (
				<Result correct={correct} />
			)}
			{/* <Result /> */}
		</div>
	)
}

export default App
