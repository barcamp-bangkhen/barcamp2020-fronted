import dynamic from 'next/dynamic'

const LazyComingSoonPage = dynamic(() => import('./component'))

export default LazyComingSoonPage
