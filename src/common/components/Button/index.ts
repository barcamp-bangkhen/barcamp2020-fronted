import styled from 'styled-components'
import {red, whiteC} from 'common/styles/colors'



const Button = styled.a`
    cursor: pointer;
    border: 2px solid ${whiteC};
    border-radius: 2rem ;
    padding: 0.5rem 2rem;
    border: 0 ;
    background-color: ${red};
    color: ${whiteC};
    text-align: center;
    text-transform:uppercase;
    font-weight:bold;
    font-size: 24px;
    /* height: 4rem; */
    outline:none;
    margin-bottom:30px;
    margin-top: 50px;
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.4);
    &:hover {
        background-color: ${whiteC};
        color: ${red};
    }

    @media screen and (max-width: 768px){
        font-size: 16px;

    }

`


export default Button