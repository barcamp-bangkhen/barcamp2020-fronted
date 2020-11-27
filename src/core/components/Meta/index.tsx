import React from 'react'

import Head from 'next/head'

import { MetaProps } from './types'

const Meta = ({ title }: MetaProps) => (
		<Head>
			<title>{title}</title>
		</Head>
	)

export default Meta
