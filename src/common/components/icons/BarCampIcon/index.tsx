import styled from 'styled-components'

const BarCampIcon = styled.img`
	content: url('/static/images/Artwork/logo.png');
	height: 6vh;
	width: auto;
	float: left;

	/* @media screen and(max-width: 768px) and (orientation:portrait) {
		float: left;
		display: inline;
		top: 0;
		transform: translate(-100%, 75%);
		cursor: pointer;
	} */

	@media screen and (max-width: 768px) and (orientation: landscape) {
		height: 16vh;
		display: inline;
		/* border:1px solid black; */
		cursor: pointer;
	}
`

export default BarCampIcon
