import styled from 'styled-components'
import Container from 'common/components/Container'
import Text from 'common/components/Text'
import {orange} from 'common/styles/colors'


export const SponsorsWrapper = styled(Container)`
	background-color: ${orange};
	height:auto;
`

export const SponsorText = styled(Text)`
	white-space:pre-line;
`

export const LogoWrapper1 = styled.div`
	width:40%;
	display:flex;
	padding:20px;
	justify-content: center;
	align-items: center;
	/* width:100%; */
	svg,img {
		 width: 100%;
		 height:100%;

	 }

`
export const LogoWrapper2 = styled.div`
	width:30%;
	display:flex;
	padding:20px;
	justify-content: center;
	align-items: center;
	/* width:100%; */
	svg,img {
		 width: 100%;
		 height:100%;

	 }

`
export const LogoWrapper3 = styled.div`
	width:20%;
	display:flex;
	padding:20px;
	justify-content: center;
	align-items: center;
	/* width:100%; */
	svg,img {
		 width: 100%;
		 height:100%;

	 }

`

export const Logo = styled.div`
	overflow: hidden;
	display: flex;
	flex-wrap:wrap;
	justify-content:center;
	align-items: center;
	margin: 1rem 0 ;

`

export const Level1Container = styled(Logo)`

`

export const Level2Container = styled(Logo)`
`

export const Level3Container = styled(Logo)`
`
