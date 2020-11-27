import styled from 'styled-components'

import {orange} from 'common/styles/colors'
import Flex from 'common/components/Flex'

export const FooterContain = styled.div`
	height: 10vh;
	@media screen and (orientation: landscape) and (max-width:768px){
		height:20vh;
	}
	display: flex;
	align-items: center;
	background-color: ${orange};
`
export const LicenseContainer = styled.div`
	flex-grow: 1;
	color: gray;
	@media screen and (max-width: 768px) {
		font-size: 12px;
	}
	display: flex;
	align-items: center;
	justify-content: flex-end;
`

export const FooterWrapper = styled.div`
	width: 90%;
	margin: auto;
	display: flex;
	align-items: center;
	justify-content: space-between;
`