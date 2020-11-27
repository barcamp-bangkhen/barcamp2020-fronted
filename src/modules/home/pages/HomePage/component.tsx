import React from 'react'

import Footer from 'common/components/Footer'
import EventDetail from 'modules/home/components/EventDetail'
import Map from 'modules/home/components/Location'
import RegisterSection from 'modules/home/components/RegisterSection'
import Sponsor from 'modules/home/components/Sponsor'


import createMeta from './createMeta'

const HomePage = () => (
	<div>
		{createMeta()}
				<RegisterSection />
				<EventDetail />
				<Map />
				<Sponsor />
				<Footer/>
	</div>
)

export default HomePage
