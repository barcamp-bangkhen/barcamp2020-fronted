import React from 'react'

import Container from 'common/components/Container'
import { Number, FAQSContainer, FAQSText, FAQSTopic, FAQS, FAQSHeader } from './styled'
import Footer from 'common/components/Footer'

const FAQSDetail = () => {
	const questions = [
		{
			number: 1,
			topic: 'Lorem ipsum dolor sit',
			answer:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, ad obcaecati commodi illo hic libero voluptatem et eligendi consequatur odio.',
		},
		{
			number: 2,
			topic: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, dolorum!',
			answer:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, ad obcaecati commodi illo hic libero voluptatem et eligendi consequatur odio. dolor sit amet consectetur adipisicing elit dolor sit amet consectetur adipisicing elit dolor sit amet consectetur adipisicing elit',
		},
		{
			number: 3,
			topic: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
			answer: 'Lorem ipsum dolor sit amet consectetur adipisicin.',
		},
		{
			number: 4,
			topic: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, dolorum!',
			answer:
				'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, ad obcaecati commodi illo hic libero voluptatem et eligendi consequatur odio.',
		},
	]

	return (
		<div>
			<Container>
				<FAQSHeader>FAQS</FAQSHeader>
				<FAQSContainer>
					{questions.map((question, index) => {
						return (
							<FAQS key={index}>
								<FAQSTopic>
									<Number>{question.number}</Number>
									{question.topic}
								</FAQSTopic>
								<FAQSText>{question.answer}</FAQSText>
							</FAQS>
						)
					})}
				</FAQSContainer>
			</Container>
			<Footer />
		</div>
	)
}

export default FAQSDetail
