import Header from './components/Header'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import EarlyBird from './components/EarlyBird'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <EarlyBird />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
