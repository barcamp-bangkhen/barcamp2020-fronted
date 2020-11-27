import React, { useEffect, useState } from 'react'

import useI18n from 'core/i18n/hooks/useI18n'

import Flex from 'common/components/Flex'
import Gap from 'common/components/Gap'
import Text, { TitleText } from 'common/components/Text'


import { SPONSOR_TITLE, CONTACT_FOR_SPONSOR, EMAIL } from './locales'
import {SponsorsWrapper, SponsorText, LogoWrapper1, LogoWrapper2, LogoWrapper3, Logo} from './styled'
import axios from 'axios'


const Sponsor = () => {

	const [sponsorPictureUrlL3, setSponsorPictureUrlL3] = useState([])
	const [sponsorPictureUrlL2, setSponsorPictureUrlL2] = useState([])
	const [sponsorPictureUrlL1, setSponsorPictureUrlL1] = useState([])

	const I18n = useI18n()


	const mapDataToPictureUrl = (data: any, lvl: number) => {
		return data.filter((d: any) => d.level == lvl).map((d: any) => {
			return { formats: d.picture[0].formats, alt: d.name }
		}
		)
	}

	useEffect(() => {
		axios.get("https://barcamp-296415-fvdpzyll3a-de.a.run.app/sponsors")
			.then((res) => {
				console.log(res.data)
				setSponsorPictureUrlL3(mapDataToPictureUrl(res.data, 3))
				setSponsorPictureUrlL2(mapDataToPictureUrl(res.data, 2))
				setSponsorPictureUrlL1(mapDataToPictureUrl(res.data, 1))
				
			}).catch((err) => {
				console.error(err);
			})
	}, [])

	return (
		<SponsorsWrapper id ="sponsor">
			<TitleText > {I18n.t(SPONSOR_TITLE)} </TitleText>
			<Flex alignItems="center" justifyContent="center" direction="column">
						<Logo>
						{
							sponsorPictureUrlL3.map((pic: any) => {
								return (
										<LogoWrapper1>
											<img src={`${pic.formats.large.url}`} alt={pic.alt} />
										</LogoWrapper1>
								)
							})
						}
						</Logo>
						<Logo>
						{
							sponsorPictureUrlL2.map((pic: any) => {
								return (
									<LogoWrapper2>
										<img src={`${pic.formats.medium.url}`} alt={pic.alt} />
									</LogoWrapper2>
								)
							})
						}
						</Logo>
						<Logo>
						{
							sponsorPictureUrlL1.map((pic: any) => {
								return (
									<LogoWrapper3>
										<img src={`${pic.formats.small.url}`} alt={pic.alt} />
									</LogoWrapper3>
								)
							})
						}
						</Logo>

					<SponsorText >{I18n.t(CONTACT_FOR_SPONSOR)}</SponsorText>
					<SponsorText>{I18n.t(EMAIL)}</SponsorText>


			</Flex>
		</SponsorsWrapper>
	)

}



export default Sponsor
