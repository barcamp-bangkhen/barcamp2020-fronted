import styled from 'styled-components'
import {red, gray} from 'common/styles/colors'

export const Number = styled.span`
    color: ${gray[900]};
    position: absolute;
    left: 0;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 60px;
    height: 60px;
    background: ${red};
    border-radius: 50%;

    @media screen and (max-width: 765px) {
        width: 40px;
        height: 40px;
    }
`

export const FAQSContainer = styled.div`
    position: relative;

    &::after {
        content: "";
        position: absolute;
        background: ${red};
        height: 100%;
        width: 10px;
        top: 0;
        left: 0.9em;
        border-radius: 2em;
        z-index: -1;

        @media screen and (max-width: 765px) {
        width: 7px;
    }
    }
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
`

export const FAQSHeader = styled.h1`
    color: ${red};
    font-size: 48px;
    margin-top: 1.5em;
`