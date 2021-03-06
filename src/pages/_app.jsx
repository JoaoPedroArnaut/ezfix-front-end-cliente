import React, { useState, useEffect } from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { CarrinhoProvider } from '../contexts/Carrinho'
import { SessaoProvider } from '../contexts/Sessao'
import { useRouter } from 'next/router'
import NProgress from 'nprogress'
import '../styles/nprogress.css'
import '../styles/globals.css'
import { QueryClient, QueryClientProvider } from 'react-query'
import Main from '../components/Main'
import { ValidacoesProvider } from '../contexts/Validacoes'
library.add(fab, faCoffee)

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }) {

  const router = useRouter()
  const [fixed, setFixed] = useState(true);

  useEffect(() => {
    if (router.route == "/login" || router.route == "/cadastro") {
      setFixed(false)
    } else {
      setFixed(true)
    }

    const handleStart = () => {
      NProgress.start()
    }
    const handleStop = () => {
      NProgress.done()
    }

    router.events.on('routeChangeStart', handleStart)
    router.events.on('routeChangeComplete', handleStop)
    router.events.on('routeChangeError', handleStop)

    return () => {
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleStop)
      router.events.off('routeChangeError', handleStop)
    }
  }, [router])

  return (
    <QueryClientProvider client={queryClient}>
      <ValidacoesProvider>
        <CarrinhoProvider>
          <Main>
            <Component {...pageProps} />
          </Main>
        </CarrinhoProvider>
      </ValidacoesProvider>
    </QueryClientProvider>

  )
}

export default MyApp
