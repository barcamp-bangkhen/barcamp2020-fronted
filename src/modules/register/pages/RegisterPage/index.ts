import dynamic from 'next/dynamic'

const LazyRegisterPage = dynamic(() => import('./component'))

export default LazyRegisterPage
