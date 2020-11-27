import { STORAGE_LOCALE_KEY } from 'core/i18n/constants'
import { LocaleType } from 'core/i18n/types'
import setLocalStorage from 'core/localStorage/setLocalStorage'

export default function setLocaleStorage(locale: LocaleType) {
	setLocalStorage(STORAGE_LOCALE_KEY, locale)
}
