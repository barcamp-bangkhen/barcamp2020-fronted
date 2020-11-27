import React from 'react'

import useI18n from 'core/i18n/hooks/useI18n'

import Flex from 'common/components/Flex'

import { TitleText } from '../../../../common/components/Text'

import { COMING_SOON } from './locales'

const ComingSoonDetail = () => {
	const I18n = useI18n()

	return (
			<Flex alignItems="center" justifyContent="center" direction="column">
				<TitleText>{I18n.t(COMING_SOON)}</TitleText>
			</Flex>
	)
}

export default ComingSoonDetail
