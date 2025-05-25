import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
import { Navbar } from './components/Navbars/Navbar'
import { NavbarMobile } from './components/Navbars/NavbarMobile'
import { Home } from './pages/Home/Home'

const App = () =>{
   const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  // Update windowWidth on window resize
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth)

    // Attach resize event listener
    window.addEventListener('resize', handleResize)

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  // Define breakpoints for screen sizes
  const isMobile = windowWidth <= 768

   let routes = (
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
  )
  return (
    <div className='AppContainer'>
       {/* <Home /> */}
      <Router>
        {/* <ScrollToTop /> */}
        {!isMobile ? <Navbar /> : <NavbarMobile />}
        {routes}
      </Router>
    </div>
  );
}

// export default App;
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
