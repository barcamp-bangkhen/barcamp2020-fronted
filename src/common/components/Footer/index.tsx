import React from 'react'

import Contact from 'common/components/Contact'
import FireIcon from 'common/components/icons/FireIcon'

import { FooterContain, LicenseContainer, FooterWrapper } from './styled'



const Footer = () => {
	return (
		<FooterContain>
			<FooterWrapper>
				<Contact />
				<FireIcon/>
				<LicenseContainer>@barcamp2020</LicenseContainer>
			</FooterWrapper>
		</FooterContain>
	)
}

export default Footer
