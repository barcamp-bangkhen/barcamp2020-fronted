import dynamic from 'next/dynamic'

const LazyHomePage = dynamic(() => import('./component'))

export default LazyHomePage
