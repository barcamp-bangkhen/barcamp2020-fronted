import { useRouter } from 'next/router'

export default function useQuery() {
  const router = useRouter()

  return router.query
}
