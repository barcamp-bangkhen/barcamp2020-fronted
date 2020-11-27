import { FaBars } from 'react-icons/fa'
import styled, { css } from 'styled-components'

import Flex from 'common/components/Flex'
import Gap from 'common/components/Gap'

export const NAV_BAR_HEIGHT = '8vh'

export const NavContainer = styled(Flex)`
	width: 90%;
	margin: auto;
`
export const NavWrapper = styled(Flex)`
	min-height: ${NAV_BAR_HEIGHT};
	position: fixed;
	top: 0;
	width: 100vw;
	${props => props.className === 'trans' &&
		css`
			background-color: transparent;
		`}

	${props => props.className === 'color' &&
		css`
			background-color: #f4e9da;
			-webkit-transition: background-color 1000ms linear;
		`}
`
export const NavLink = styled.a`
	color: #433f4f;
	font-size: 1.5vw;
	position: relative;
	margin: 0 3rem;
	
	&:after {
		content: '';
		width: 0%;
		height: 6px;
		background-color: #da6353;
		border-radius: 2px;
		position: absolute;
		left: 0px;
		bottom: -6px;
		transition: width 0.5s ease-out;
	}

	&:hover&:after {
		width: 100%;
	}

	&:hover {
		color: #da6353;
	}

	@media screen and (max-width: 1024px) {
		font-size: 2.5vw;
	}
	${props => props.className &&
		css`
			color: #da6353;
			&:after {
				content: '';
				width: 100%;
				height: 6px;
				background-color: #da6353;
				border-radius: 2px;
				position: absolute;
				left: 0px;
				bottom: -6px;
			}
		`}
`
export const Bars = styled(FaBars)`
	display: none;
	float: right;
	font-size: 1.5rem;
	color: black;
	cursor: pointer;

	@media screen and (max-width: 768px) {
		display: inline;
		position: absolute;
		right: 0;
	}
`

export const NavItems = styled(Gap)`
	@media screen and (max-width: 768px) {
		display: none;
	}
`
export const LangGap = styled(Gap)`
	@media screen and (max-width: 768px) {
		display: none;
	}
	@media screen and (max-width: 1024px) {
		font-size: 2vw;
	}
`
