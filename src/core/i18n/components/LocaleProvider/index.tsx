import React, { ReactNode, useState, useEffect } from 'react'

import { useRouter } from 'next/router'

import { DEFAULT_LOCALE } from 'core/i18n/constants'
import LocaleContext from 'core/i18n/context/LocaleContext'
import { LocaleType } from 'core/i18n/types'
import setLocaleStorage from 'core/i18n/utils/setLocaleStorage'

type Props = {
	locale?: LocaleType
	children: ReactNode
}

const LocaleProvider = ({ locale: routerLocale = DEFAULT_LOCALE, children }: Props) => {
	const [locale, setLocale] = useState(routerLocale)
	const router = useRouter()

	useEffect(() => {
		const locale = router.query?.locale as LocaleType
		if (!locale) return

		setLocale(locale)
		setLocaleStorage(locale)
	}, [])

	return (
		<LocaleContext.Provider value={{ locale, setLocaleContext: setLocale }}>
			{children}
		</LocaleContext.Provider>
	)
}

export default LocaleProvider
