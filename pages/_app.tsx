import '@styles/globals.css'
import type { FC } from 'react'
import type { NextComponentType } from 'next'
import type { AppProps as NextAppProps } from 'next/app'
import DefaultLayout from '@layouts/default'

type ComponentProp = NextComponentType & {
  getLayout?: () => FC<{}>
}

type AppProps = NextAppProps & { Component: ComponentProp }

function Application({ Component, pageProps }: AppProps) {
  const getLayout =
    Component.getLayout || ((page) => <DefaultLayout>{page}</DefaultLayout>)

  return getLayout(<Component {...pageProps} />)
}

export default Application
