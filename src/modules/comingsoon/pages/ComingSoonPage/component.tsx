import React from 'react'

import ComingSoonDetail from 'modules/comingsoon/components/ComingSoon'

import Flex from '../../../../common/components/Flex'
import HomeIcon from '../../../../common/components/icons/HomeIcon'
import LogoContainer from 'modules/home/components/RegisterSection/styled'

import createMeta from './createMeta'

const ComingSoonPage = () => (
	<LogoContainer>
		<Flex alignItems="center" justifyContent="center" direction="column">
			{createMeta()}
			<HomeIcon />
			<ComingSoonDetail />
		</Flex>
	</LogoContainer>
)

export default ComingSoonPage
