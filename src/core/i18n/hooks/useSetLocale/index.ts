import { useCallback } from 'react'

import { useRouter } from 'next/router'
import qs from 'qs'

import { DEFAULT_LOCALE } from 'core/i18n/constants'
import { useLocaleContext } from 'core/i18n/context/LocaleContext'
import { LocaleType } from 'core/i18n/types'
import setLocaleStorage from 'core/i18n/utils/setLocaleStorage'

export default function useSetLocale() {
	const router = useRouter()
	const { setLocaleContext } = useLocaleContext()

	const setLocale = useCallback(
		(locale: LocaleType = DEFAULT_LOCALE) => {
			const { origin, pathname, search } = window.location
			const query = qs.parse(search.replace('?', ''))

			query.locale = locale
			router.push(`${origin}${pathname}`, { query: qs.stringify(query) })

			setLocaleStorage(locale)
			setLocaleContext(locale)
		},
		[router, setLocaleContext],
	)

	// const setLocale = useCallback(
	// 	(locale: LocaleType = DEFAULT_LOCALE) => {
	// 		const pathname = router.pathname

	// 		router.push({ pathname }, { pathname }, { locale })
	// 		setLocalStorage(STORAGE_LOCALE_KEY, locale)
	// 	},
	// 	[router],
	// )

	return setLocale
}
