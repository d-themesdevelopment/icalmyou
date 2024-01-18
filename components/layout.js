/* eslint-disable prettier/prettier */
import Header from "./layout/Header"
import Footer from "./layout/Footer/Footer"

const Layout = ({ children }) => {
  return (
    <div className={`layout`}>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
