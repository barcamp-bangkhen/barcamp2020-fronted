import React from 'react'


import ComingSoonPage from '../../../comingsoon/pages/ComingSoonPage/component'
import LogoContainer from 'modules/home/components/RegisterSection/styled'
import Footer from 'common/components/Footer'
import TimeTable from 'modules/timetable/components/TimeTable'

import createMeta from './createMeta'

const TimetableDetail = () => {
	return (
		<div>
			{createMeta()}
				<TimeTable/>
				<div style={{backgroundColor:"red"}}>
				<Footer />
				</div>
		</div>
	)
}

export default TimetableDetail
