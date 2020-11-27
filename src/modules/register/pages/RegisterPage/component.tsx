import React from 'react'

import ContentContainer from 'common/components/ContentContainer'

import RegisterForm from 'modules/register/components/RegisterForm'

import createMeta from './createMeta'

const RegisterPage = () => (
	<ContentContainer>
		{createMeta()}
		<RegisterForm />
	</ContentContainer>
)

export default RegisterPage
