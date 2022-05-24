import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from '@primer/react'
import { Sidebar } from '@/components/Sidebar'

function App ({ Component, pageProps }: AppProps) {
  return (
    // @ts-ignore
    <ThemeProvider>
      <main className={'flex'}>
        <div className="l">
          <Sidebar />
        </div>

        <div className="r">
          <Component {...pageProps} />
        </div>
      </main>
    </ThemeProvider>)
}

export default App
