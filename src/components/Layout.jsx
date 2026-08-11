import Navbar from './Navbar'
import Footer from './Footer'

import FloatingActionButtons from './FloatingActionButtons'

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
      <FloatingActionButtons />
    </>
  )
}
