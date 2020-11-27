import React from 'react'

import useI18n from 'core/i18n/hooks/useI18n'

import { FORM_TITLE } from './locales'

const RegisterForm = () => {
  const I18n = useI18n()

  return <div>{I18n.t(FORM_TITLE)}</div>
}

export default RegisterForm
