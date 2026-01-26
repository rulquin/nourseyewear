import Header from './components/Header'
import Hero from './components/Hero'
import Why from './components/Why'
import ProductList from './components/ProductList'
import CTA from './components/CTA'
import SocialProof from './components/SocialProof'
import Footer from './components/Footer'
import './styles/global.css'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <section id="why">
          <Why />
        </section>
        <section id="products">
          <ProductList />
        </section>
        <CTA />
        <section id="testimonials">
          <SocialProof />
        </section>
      </main>
      <Footer />
    </>
  )
}

export default App
