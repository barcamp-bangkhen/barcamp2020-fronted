import React from 'react'
import Link from 'next/link'

import Button from 'common/components/Button/index'
import Flex from 'common/components/Flex'
import HomeIcon from 'common/components/icons/HomeIcon'


import LogoContainer  from './styled'


const RegisterSection = () => (
	<LogoContainer>
		<Flex alignItems="center" justifyContent="center" direction="column">
			<HomeIcon/> 
				<Button  href="https://forms.gle/tDkHRRZNZGNHshBf6" target="_blank" >REGISTER NOW</Button>
			{/* <RightDot/>
			<Sparkle/>
			<Triangle/> */}
		</Flex>
	</LogoContainer>

)

export default RegisterSection
