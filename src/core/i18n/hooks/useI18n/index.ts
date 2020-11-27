import { useCallback } from 'react'

import useLocale from 'core/i18n/hooks/useLocale'
import translate from 'core/i18n/translate'

export default function useI18n() {
  const locale = useLocale()

  const t = useCallback(
    (messages: string[], args?: Record<string, any>) => translate(messages, locale, args),
    [locale]
  )

  return { t, locale }
}
