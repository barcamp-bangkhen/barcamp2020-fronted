import react from 'react'

import useI18n from 'core/i18n/hooks/useI18n'

import Container from 'common/components/Container'
import Flex from 'common/components/Flex'
import Detail from './locales'
import {Time, Event, DetailWrapper} from "./styled"

const TimeTable = () =>{

    return(
        <Container style={{marginTop:"5em", minHeight:"90vh"}}>
            <Flex justifyContent="center" alignItems="center" direction="column">
                <div >
                    {Detail.map((item, index) => {
                        return(
                            <DetailWrapper key={index}>
                                <Time>{item.time}</Time>
                                <Event>{item.event}</Event>
                            </DetailWrapper>
                        ) 
                    })}
                </div>
            </Flex>
        </Container>
    )
}

export default TimeTable