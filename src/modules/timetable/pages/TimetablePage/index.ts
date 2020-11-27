import dynamic from 'next/dynamic'

const LazyTimetablepage = dynamic(() => import('./component'))

export default LazyTimetablepage
