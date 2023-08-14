import '@/styles/globals.css'
import Layout from '../components/Layout'

export function myApp({ Component, pageProps }) {
  return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
  )
}

export default myApp