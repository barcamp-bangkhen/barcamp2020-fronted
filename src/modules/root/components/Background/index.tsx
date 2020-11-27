import React from 'react'

import {
	BG,
	BackgroundWrapper,
	Layer1,
	Layer2,
	Layer3,
	Layer4,
	Layer5,

} from './styled'

const Background = () => {
	return (

		<BackgroundWrapper>
			<Layer5 />
			<Layer4 />
			<Layer3 />
			<Layer2 />
			<Layer1 />
			<BG />
		</BackgroundWrapper>
	)
}

export default Background
