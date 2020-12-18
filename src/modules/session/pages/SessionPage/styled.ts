import styled from 'styled-components'
import {red, yellow} from 'common/styles/colors'

export const Arrow = styled.span`
    position: absolute;
    height: 0;
    width: 0;
    border-left: 1rem solid transparent;
    border-right: 1rem solid transparent;
    border-top: 1.7rem solid ${red};
    border-radius: 3px;
    top: 1.5rem;
    right: 1.5rem;
    transition: transform 0.1s ease;

    @media screen and (max-width: 765px) {
        border-left: 0.5rem solid transparent;
        border-right: 0.5rem solid transparent;
        border-top: 0.8rem solid ${red};
    }
`

export const SessionTopic = styled.div`
    position: relative;
    background: rgb(251,190,75);
    background: linear-gradient(225deg, rgba(251,190,75,0.7973564425770308) 0%, rgba(237,92,77,0.788953081232493) 87%);
    padding: 1rem 2rem;
    cursor: pointer;
    transition: color 0.1s ease;

    &:hover {
        background: rgb(237,92,77);
        color: white;
    }

    &:hover ${Arrow} {
        border-top-color: ${yellow}
    }

    @media screen and (max-width: 765px) {
        text-align: center;
    }
`

export const SessionText = styled.div`
    display: flex;
    margin-top: 1rem;

    p {
        margin: 0;
        padding-right: 5rem;
    }

    @media screen and (max-width: 765px) {
        justify-content: space-around;

        p {
            padding-right: unset;
        }
    }
`

export const SessionCollapse = styled.div`
    padding: 0rem 2rem;
    max-height: 0;
    transition: all 0.3s ease-in-out;

    &.show {
        
    }

    p {
        margin: 0;
        padding: 1rem 0;
    }
`

export const Session = styled.div`
    background: white;
    border-radius: 1rem;
    margin-top: 1rem;
    overflow: hidden;
    box-shadow: 3px 5px 20px rgba(0, 0, 0, 0.1);

    &.show ${SessionCollapse} {
        max-height: 500px;
    }

    &.show ${SessionTopic} {
        background: rgb(237,92,77);
        color: white;
    }

    &.show ${SessionTopic} ${Arrow} {
        transform: rotate(180deg);
        border-top-color: ${yellow}
    }
`

export const SessionHeader = styled.h1`
    color: ${red};
    font-size: 48px;
    margin-top: 1.5em;

    @media screen and (max-width: 765px) {
        text-align: center;
    }
`