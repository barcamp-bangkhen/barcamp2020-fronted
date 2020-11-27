import dynamic from 'next/dynamic'

const LazyFAQSPage = dynamic(() => import('./component'))

export default LazyFAQSPage
