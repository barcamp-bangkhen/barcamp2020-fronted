import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components'

export const BG = createGlobalStyle`
body{
	background-repeat: no-repeat;
	background-attachment:  fixed;
	height:100%;
}
`
export const BackgroundWrapper = styled.div`
	position: fixed;
	top: 0;
	right: 0;
	bottom: 0;
	left: 0;
	z-index: -10;
	height:100%;
	background: linear-gradient(121deg, rgba(255,255,255,1) 0%, rgba(239,220,205,1) 14%, rgba(236,213,198,1) 100%);
`


export const Layer1 = styled.img`
	content: url('/static/images/Artwork/background/layer1.png');
	position: absolute;
	width: 100%;
	z-index: -3;
	bottom: 0;
	left: 0;

	animation: fade 7s infinite ease-in-out;
	@keyframes fade {
		0% {
			opacity: 100%;
		}
		50% {
			opacity: 0;
		}
		100%{
			opacity:100%;
		}
	}
	@media screen and (max-width: 768px){
		visibility:hidden;
	}
`
export const Layer2 = styled.img`
	content: url('/static/images/Artwork/background/layer2.png');
	position: absolute;
	width: 100%;
	z-index: -2;
	bottom: 0;
	left: 0;

	animation: fade 7s infinite ease-in-out;
	@keyframes fade {
		0% {
			opacity: 1;
		}
		50% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
	@media screen and (max-width: 768px){
		visibility:hidden;
	}
`

export const Layer3 = styled.img`
	content: url('/static/images/Artwork/background/layer3.png');
	position: absolute;
	width: 100%;
	z-index: -1;
	bottom: 0;
	left: 0;
	animation: fade 7s infinite ease-in-out;
	@keyframes fade {
		0% {
			opacity: 1.0;
		}
		50% {
			opacity: 0.0;
		}
		100% {
			opacity: 1.0;
		}
	}

	@keyframes wait {
		0% {
			opacity: 1;
		}
		100% {
			opacity: 1;
		}
	}

	@media screen and (max-width: 768px){
		visibility:hidden;
	}

`
export const Layer4 = styled.img`
	content: url('/static/images/Artwork/background/layer4.png');
	position: absolute;
	width: 100%;
	z-index: -2;
	top: 0;
	right: 0;
	animation: fade 7s infinite ease-in-out;
	@keyframes fade {
		0% {
			opacity: 1;
		}
		50% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
	@media screen and (max-width: 768px){
		visibility:hidden;
	}
`
export const Layer5 = styled.img`
	content: url('/static/images/Artwork/background/layer5.png');
	position: absolute;
	width: 100%;
	z-index: -1;
	top: 0;
	right: 0;
	animation: fade 7s infinite ease-in-out;
	@keyframes fade {
		0% {
			opacity: 1;
		}
		50% {
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
	@media screen and (max-width: 768px){
		visibility:hidden;
	}
`
export const TopDot = styled.img`
	content: url('/static/images/Artwork/background/top_dot.png');
	position: absolute;
	width: 100%;
	z-index: 0;
	@media screen and (max-width: 768px){
		visibility:hidden;
	}
`

export const LeftDot = styled.img`
	content: url('/static/images/Artwork/background/left_dot.png');
	position: absolute;
	width: 100%;
	z-index: 0;

	animation: flashing 3s infinite ease-out;
	@keyframes flashing {
		0% {
			color: red;
		}
		50% {
			color: lighten(red);
		}
		100% {
			color: red;
		}
	}
	@media screen and (max-width: 768px){
		visibility:hidden;
	}
`

export const RightDot = styled.img`
	content: url('/static/images/Artwork/background/right_dot.png');
	position: absolute;
	width: 100%;
	z-index: -1;
	top: 2rem;
	animation: flashing 3s infinite ease-out;
	@keyframes flashing {
		0% {
			/* opacity:1.0; */
			color: red;
		}
		50% {
			/* opacity: 0.5; */
			color: lighten(red);
		}
		100% {
			/* opacity: 1.0; */
			color: red;
		}
	}
	@media screen and (max-width: 768px){
		visibility:hidden;
	}
`

export const Sparkle = styled.img`
	content: url('/static/images/Artwork/background/sparkle.png');
	position: absolute;
	width: 100%;
	z-index: -2;
	animation: winkwup 10s infinite alternate ease-in-out;
	@keyframes winkwup{
		0%{
			opacity:1;
		}
		100%{
			opacity:0;
		}
	}
	@media screen and (max-width: 768px){
		visibility:hidden;
	}
`

export const Triangle = styled.img`
	content: url('/static/images/Artwork/background/triangle.png');
	position: absolute;
	z-index: -1;
	@media screen and (max-width: 768px){
		visibility:hidden;
	}
`

export const RightCircle = styled.img`
	content: url('/static/images/Artwork/background/left_circle.png');
	position: absolute;
	width: 100%;
	z-index: -4;
	left: 74rem;
	/* animation: fade 7s infinite ease-in-out; */
	opacity:0.5;
	@keyframes fade {
		0% {
			opacity: 0.5;
		}
		50% {
			opacity: 0;
		}
		100% {
			opacity: 0.5;
		}
	}
	@media screen and (max-width: 768px){
		visibility:hidden;
	}
`

export const LeftCircle = styled.img`
	content: url('/static/images/Artwork/background/left_circle.png');
	position: absolute;
	width: 100%;
	z-index: -5;
	bottom: 0px;
	left: 20px;

	/* animation: fade 7s infinite ease-in-out; */
	@keyframes fade {
		0% {
			opacity: 0.5;
		}
		50% {
			opacity: 0;
		}
		100% {
			opacity: 0.5;
		}
	}
	@media screen and (max-width: 768px){
		visibility:hidden;
	}
`
