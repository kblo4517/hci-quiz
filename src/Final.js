import React, { useState } from 'react';
import {Link} from 'react-router-dom'

export default function Final() {


	const questions = [
		{
			questionText: 'Which phrase best describes the difference between user experience and usability?',
			answerOptions: [
				{ answerText: 'Usability refers to effectiveness and learnability while user experience refers to the users experience.', isCorrect: false },
				{ answerText: 'Usability is the users satisfaction with the product while user experience is focused on the pricing of the product.', isCorrect: false },
				{ answerText: 'User experience and usability are the same.', isCorrect: true },
				{ answerText: 'User experience and usability are closely tied to each other in order for a product to flourish.', isCorrect: false },
			],
		},
		{
			questionText: 'What are the common types of digital affordances?',
			answerOptions: [
				{ answerText: 'Strong affordance, Weak Affordance, Left Affordance, Right Affordance', isCorrect: false },
				{ answerText: 'Explicit affordance, Pattern affordance, Hidden affordance, and False affordance', isCorrect: true },
				{ answerText: 'Screen Affordance, Hidden Affordance, Positive Affordance', isCorrect: false },
				{ answerText: 'Affordances don\'t exist!', isCorrect: false },
			],
		},
		{
			questionText: 'Choose from the options below the best examples of conversing:',
			answerOptions: [
				{ answerText: 'Asking Apple Siri where the closest curry resturant is and her responding.', isCorrect: true },
				{ answerText: 'Typing in something into the Google search bar.', isCorrect: false },
				{ answerText: 'Talking to your family.', isCorrect: false },
				{ answerText: 'Inputting a task into a task tracker.', isCorrect: false },
			],
		},
		{
			questionText: 'How many interaction types are there?',
			answerOptions: [
				{ answerText: 'There are only two!', isCorrect: false },
				{ answerText: '12', isCorrect: false },
				{ answerText: '7', isCorrect: false },
				{ answerText: '5 that are common, but there are more.', isCorrect: true },
			],
		},
		{
			questionText: 'Which option best describes accessbility?',
			answerOptions: [
				{ answerText: 'I don\'t know what accessibility means.', isCorrect: false },
				{ answerText: 'Designing something for only one specific group of people.', isCorrect: false },
				{ answerText: 'Creating hardware/software for the extreme cases, while grabbing all those in between.', isCorrect: true },
				{ answerText: 'Desiging products for the average person.', isCorrect: false },
			],
		},
		{
			questionText: 'How many design rules are there?',
			answerOptions: [
				{ answerText: '8', isCorrect: true },
				{ answerText: '1', isCorrect: false },
				{ answerText: '12', isCorrect: false },
				{ answerText: 'There are literally hundreds.', isCorrect: false },
			],
		},
		{
			questionText: 'Name a few of the design rules.',
			answerOptions: [
				{ answerText: 'Striving for consistency, Design dialogue to yield closure,Let users reverse their actions', isCorrect: true },
				{ answerText: 'Create a webpage with lots of information, never provide a way out, always have many links on your webpage', isCorrect: false },
				{ answerText: 'There are no design rules, design how you want to.', isCorrect: true },
				{ answerText: 'Tell you users what to do, keep information to a minimum', isCorrect: false },
			],
		},
	];

	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};

	return (
		<>
		<div className='app'>
			{showScore ? (
				<>
					<div className="row">
						<div className='score-section text-center'>
							You scored {score} out of {questions.length}
						</div>
					</div>
				</>

			) : (
				<>
					<div className='question-section'>
						<div className='question-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section text-center'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
							<button className="btn theme_3 text-white start" onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
						))}
						<div className="row d-flex justify-content-start">
							<Link to="/home"><button className="btn theme_3 text-white start">Home</button></Link>
						</div>
					</div>
					<br/>
				</>
			)}
		</div>
		</>
	);
}