import {useState} from 'react'
import '../styles/globals.css'
import Layout from '../components/layout/Layout'

function MyApp({ Component, pageProps }) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleNav = () => setIsOpen((prevState) => !prevState)
  return (
    <Layout toggleNav={toggleNav} isOpen={isOpen}>
      <Component toggleNav={toggleNav} {...pageProps} />
    </Layout>
  )
}

export default MyApp
