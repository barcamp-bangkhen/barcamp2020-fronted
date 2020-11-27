import styled from 'styled-components'

const Container = styled.div`
	padding: 15px 100px 60px 100px;
	font-size: 1.7rem;
	height:100vh;
	overflow: auto;
	@media screen and (max-width: 768px) {
		padding: 15px 40px 10px 40px;
		font-size: 1.1rem;
		height:auto;
	}
`

export default Container
