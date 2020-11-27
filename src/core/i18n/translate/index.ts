import IntlMessageFormat from 'intl-messageformat'

import { LocaleType } from 'core/i18n/types'
import getLocaleIndex from 'core/i18n/utils/getLocaleIndex'

export default function translate(
  dictionary: string[],
  locale: LocaleType,
  args?: Record<string, any>
) {
  const localeIndex = getLocaleIndex(locale)

  return new IntlMessageFormat(dictionary[localeIndex], locale).format(args)
}
