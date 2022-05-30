import '../styles/globals.css'
import '../styles/github.css'
import type { AppProps } from 'next/app'
import { Box, ThemeProvider, theme } from '@primer/react'
import { Sidebar } from '@/components/Sidebar'
import { useColorScheme } from '../helpers/useColorScheme'

function App ({ Component, pageProps }: AppProps) {
  const { scheme } = useColorScheme()

  return (
    // @ts-ignore
    <ThemeProvider
      colorMode={scheme === 'dark' ? 'night' : 'day'}
      preventSSRMismatch={true}
      theme={theme}
    >
      <Box className={'main-container flex'}
           bg={'canvas.default'}
      >
        <Box className="l"
             bg={'canvas.overlay'}
             borderRightColor={'border.default'}
        >
          <Sidebar/>
        </Box>

        <Box className="r"
             bg={'canvas.default'}
        >
          <Component {...pageProps} />
        </Box>
      </Box>
    </ThemeProvider>
  )
}

export default App
