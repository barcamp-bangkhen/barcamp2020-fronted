import dynamic from 'next/dynamic'

const LazySessionPage = dynamic(() => import('./component'))

export default LazySessionPage
