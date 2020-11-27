import { useLocaleContext } from 'core/i18n/context/LocaleContext'

export default function useLocale() {
	const localeContext = useLocaleContext()

	return localeContext.locale
}
