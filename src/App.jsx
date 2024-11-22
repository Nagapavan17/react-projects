import { useState } from 'react'

import './App.css'
import Home from './components/Home/Home'
import Contact from './components/Contact/Contact'
import Gallery from './components/Gallery/Gallery'

import About from './components/About/About'
import Blog from './components/Blog/Blog'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Services from './components/Services/Services'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path='/blogs'  element={<Blog />} />
            <Route path='/gallery' element={<Gallery />} />
            <Route path='/Services' element={<Services />} />
          </Routes>

       </Router>
       
      
    </>
  )
}

export default App
