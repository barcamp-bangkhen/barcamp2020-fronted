import React from 'react'

import useI18n from 'core/i18n/hooks/useI18n'

import Container from 'common/components/Container'
import Text, { TitleText } from 'common/components/Text'

import {DetailText} from './styled'

import {
	EVENT_DETAIL_TITLE,
	EVENT_DETAIL,
	PARTICIPANT_TITLE,
	PARTICIPANTS_DETAIL,
	REASONS_TO_COME_TITLE,
	REASONS_TO_COME_DETAIL,
} from './locales'

const EventDetail = () => {
	const I18n = useI18n()
	return (
		<Container style={{height:"auto"}}>
			<TitleText>{I18n.t(EVENT_DETAIL_TITLE)}</TitleText>
			<DetailText>{I18n.t(EVENT_DETAIL)}</DetailText>
			<TitleText> {I18n.t(PARTICIPANT_TITLE)} </TitleText>
			<DetailText>{I18n.t(PARTICIPANTS_DETAIL)}</DetailText>
			<TitleText>{I18n.t(REASONS_TO_COME_TITLE)}</TitleText>
			<DetailText>{I18n.t(REASONS_TO_COME_DETAIL)}</DetailText>
		</Container>
	)
}

export default EventDetail
