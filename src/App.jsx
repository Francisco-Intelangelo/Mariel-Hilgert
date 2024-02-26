import { Route, Routes, useLocation } from 'react-router-dom'
import { useLayoutEffect } from 'react'
import NavBar from './components/NavBar/NavBar'
import Home from './pages/Home'
import Questions from './pages/Questions'
import "./App.css"
import Footer from './components/Footer/Footer'
import Reservation from './pages/Reservation'
import { MoreInfo } from './pages/MoreInfo'

const Wrapper = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return children;
};


function App() {
  return (
    <>
      <NavBar/>
      <Wrapper>
        <main className="App">
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/questions' element={<Questions/>}/>
            <Route path='/reservation' element={<Reservation/>}/>
            <Route path='/moreinfo' element={<MoreInfo/>}/>
          </Routes>
        </main>
      </Wrapper>
      <Footer/>
    </>
  )
}

export default App
