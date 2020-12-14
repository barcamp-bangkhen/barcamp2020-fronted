import styled from 'styled-components'
import {red, yellow} from 'common/styles/colors'

export const Number = styled.span`
    color: white;
    position: absolute;
    left: 0;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 60px;
    height: 60px;
    background: ${red};
    border-radius: 50%;
    box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.3);

    &::after {
        content: ".";
    }

    @media screen and (max-width: 765px) {
        width: 40px;
        height: 40px;
    }
`

export const FAQSContainer = styled.div`
    position: relative;
`

export const FAQSText = styled.p`
    padding-left: 3em;
`

export const FAQSTopic = styled.h3`
    position: relative;
    padding-left: 3em;
    color: ${red};
`

export const FAQS = styled.div`
    padding-bottom: 1em;
    position: relative;

    &::before {
        content: "";
        position: absolute;
        background: ${yellow};
        height: 90%;
        width: 10px;
        top: 0;
        left: 30px;
        transform: translateX(-50%);
        border-radius: 2em;
        transition: height 0.3s ease-in-out;

        @media screen and (max-width: 765px) {
            width: 7px;
            left: 20px;
        }
    }
`

export const FAQSHeader = styled.h1`
    color: ${red};
    font-size: 48px;
    margin-top: 1.5em;

    @media screen and (max-width: 765px) {
        text-align: center;
    }
`