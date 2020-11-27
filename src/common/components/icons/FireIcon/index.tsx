import styled from 'styled-components'

const topFunction = () => {
	document.body.scrollIntoView({ behavior: 'smooth' })
}

const IconWrapper = styled.div`
	flex-grow: 1;
	display: flex;
	justify-content: center;
	align-items: center;
`

const Icon = styled.img`
	content: url('/static/images/Artwork/fire.png');
	height: 64px;
	scroll-behavior: smooth;
	cursor: pointer;
	@media screen and (max-width: 768px) {
		height: 42px;
	}
`

const FireIcon = () => {
	return (
		<IconWrapper>
			<Icon onClick={topFunction} />
		</IconWrapper>
	)
}

export default FireIcon
