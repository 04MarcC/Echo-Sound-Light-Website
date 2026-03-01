
import { useState } from 'react';
import './App.css'
import { LoadingScreen } from './components/LoadingScreen'
import "./index.css"
import { Navbar } from './components/Navbar';
import { MobileMenu } from './components/MobileMenu';
import { Home } from './components/sections/Home';
import { About } from './components/sections/About';
import { Services } from './components/sections/Services';
import { Contact } from './components/sections/Contact';

function App() {
  const[isLoaded,setIsLoaded] = useState(false);
  const[menuOpen,setMenuOpen] = useState(false);
  


  return (
    <>
      {!isLoaded && <LoadingScreen onComplete= {() => setIsLoaded(true)} />}{" "}
        <div className={`min-h-screen transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"} bg-black text-gray-100`}>
    
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

        <div className="space-y-2">
        <Home />
        <About />
        <Services />
        <Contact />
        </div>

        

      
        </div>
    </>
  )
}

export default App
