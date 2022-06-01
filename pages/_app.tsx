import '../styles/globals.css'
import { Toaster } from "react-hot-toast"
import type { AppProps } from 'next/app'
import { QueryClientProvider } from "react-query"
import { PageLayoutComponent } from 'layouts/PageLayout'
import { queryClient } from "utils/queryClient"
import { ReactQueryDevtools } from "react-query/devtools"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient} >
      <Toaster
        position='bottom-center'
        toastOptions={{ duration: 3000 }}
        />    
      <PageLayoutComponent>
        <Component {...pageProps} />
      </PageLayoutComponent>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}

export default MyApp
