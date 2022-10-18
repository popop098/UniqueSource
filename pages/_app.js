import '../styles/globals.css'
import Header from "../components/Header";
import Nav from "../components/Nav";
function MyApp({ Component, pageProps }) {
  return <>
    <Header />
    <Nav />
    <div className="bg-white">
      <Component {...pageProps} />
    </div>

  </>
}

export default MyApp
