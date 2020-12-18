import React from 'react'

import Container from 'common/components/Container'
import { Session, SessionTopic, SessionText, SessionCollapse, Arrow, SessionHeader } from './styled'
import Footer from 'common/components/Footer'

const SessionDetail = () => {
	const toggleSession = (id: string) => {
		const session = document.getElementById(id)
		session.classList.toggle('show')
	}

	const sessions = [
		{
			id: 1,
			header: "Lorem ipsum dolor sit, amet consect.",
			time: "10:00",
			room: "Room 301",
			choices: [
				"Choice 1",
				"Choice 2",
				"Choice 3",
				"Choice 4",
				"Choice 5",
			]
		},
		{
			id: 2,
			header: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore, hic.",
			time: "12:00",
			room: "Room 423",
			choices: [
				"Choice 1",
				"Choice 2",
				"Choice 3",
				"Choice 4",
				"Choice 5",
			]
		},
		{
			id: 3,
			header: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
			time: "16:00",
			room: "Room 501",
			choices: [
				"Choice 1",
				"Choice 2",
				"Choice 3",
				"Choice 4",
				"Choice 5",
			]
		}
	]

	return (
		<div>
			<Container>
				<SessionHeader>Session</SessionHeader>
				{sessions.map((session, index) => {
					return (
						<Session key={index} id={session.id.toString()}>
							<SessionTopic onClick={() => {toggleSession(session.id.toString())}}>
								{session.header}
								<Arrow />
								<SessionText>
									<p className="session-time">{session.time}</p>
									<p className="session-room">{session.room}</p>
								</SessionText>
							</SessionTopic>
							<SessionCollapse>
								{session.choices.map((choice, index) => {
									return <p key={index}>{choice}</p>
								})}
							</SessionCollapse>
						</Session>
					)
				})}
			</Container>
			<Footer />
		</div>
	)
}

export default SessionDetail
