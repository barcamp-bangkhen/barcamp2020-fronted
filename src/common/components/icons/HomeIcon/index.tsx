import styled from 'styled-components'


const HomeIcon = styled.img`
        content: url('/static/images/Artwork/logo_name3.png');
        height: 65vh;
        display: block;
        
        @media screen and (max-width: 768px) {
                height: 80%;
                width: 80%;         
        }
	@media screen and (orientation: landscape){
		height: 65vh;
                width: auto;
	}
`

export default HomeIcon