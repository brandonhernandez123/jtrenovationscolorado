import logo from './logo.svg'
import './App.css'

import Navigation from './components/navbar'
import Landing from './components/Landing'
import About from './components/About'
import Services from './components/Services'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div  className="App">
      <Navigation />
      <section  className="parallax"  id="section1">
        <Landing />
      </section>
      <section  className="parallax"  id="section2">
        <About />
      </section>
    
      <section  className="parallax"  id="section3">
        <Services />
      </section>
      <section  className="parallax"  id="section4">
        <Gallery />
      </section>
      
      <section  className="parallax"  id="section6">
        <Contact />
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default App
