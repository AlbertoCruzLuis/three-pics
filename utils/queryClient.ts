import { QueryClient } from "react-query"

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false
    }
  }
})

export const refetchAllQueries = async () => {
  await queryClient.refetchQueries()
}
