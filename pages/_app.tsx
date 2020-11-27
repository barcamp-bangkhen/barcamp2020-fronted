import React, { useEffect, useMemo } from 'react'

import { Provider } from 'mobx-react'
import { NextSeo } from 'next-seo'
import App, { AppContext, AppProps } from 'next/app'

import LocaleProvider from 'core/i18n/components/LocaleProvider'
import { DEFAULT_LOCALE, STORAGE_LOCALE_KEY } from 'core/i18n/constants'
import getLocalStorage from 'core/localStorage/getLocalStorage'
import initializeStore from 'core/store/utils/initializeStore'

import RootLayout from 'modules/root/components/RootLayout'

interface Props {
	stores: Record<string, any>
}

const MyApp = ({ Component, pageProps, stores }: AppProps & Props) => {
	useEffect(() => {
		const jssStyles = document.querySelector('#jss-server-side')
		if (jssStyles && jssStyles.parentNode) jssStyles.parentNode.removeChild(jssStyles)
	}, [])

	const mobxStores = useMemo(() => {
		const isServer = typeof window === 'undefined'

		return isServer ? stores : initializeStore(stores)
	}, [])

	const locale = useMemo(() => {
		const isServer = typeof window === 'undefined'

		return isServer ? DEFAULT_LOCALE : getLocalStorage(STORAGE_LOCALE_KEY)
	}, [])

	return (
		<LocaleProvider locale={locale}>
			<Provider {...mobxStores}>
				<RootLayout>
					<NextSeo title="Barcamp Bangkhen" />
					<Component {...pageProps} />
				</RootLayout>
			</Provider>
		</LocaleProvider>
	)
}

MyApp.getInitialProps = async (ctx: AppContext & Props) => {
	const stores = initializeStore()
	ctx.stores = stores

	const appProps = await App.getInitialProps(ctx)

	return {
		...appProps,
		stores,
	}
}

export function getServerSideProps() {
	return { props: { locale: DEFAULT_LOCALE } }
}

export default MyApp
