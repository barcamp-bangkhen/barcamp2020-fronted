import { LOCALE_LIST, DEFAULT_LOCALE_INDEX } from 'core/i18n/constants'
import { LocaleType } from 'core/i18n/types'

export default function getLocaleIndex(locale: LocaleType) {
  return LOCALE_LIST.includes(locale)
    ? LOCALE_LIST.indexOf(locale)
    : DEFAULT_LOCALE_INDEX
}
