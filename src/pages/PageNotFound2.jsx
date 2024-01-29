import React from 'react'
import Footer from '../component/Footer'
import Header from '../component/Header'
import Navbar from '../component/Navbar'
import image404 from '../assets/images/img404.svg'
import companies from '../assets/images/image 1174.png'
import { Link } from 'react-router-dom'
import '../pages/pagenotfound.css'

const PageNotFound2 = () => {
  return (
    <>
    <Header/>
    <Navbar/>
    <main>
    <div className="notfound">
        <div className="not-heading">
          <h1>404 Not Found</h1>
          <div>
            <span>Home.</span>
            <span>Pages.</span>
            <span>404 Not Found</span>
          </div>
        </div>
      </div>
      <div className='img404'>
       <Link to='/'><img src={image404}></img></Link> 
      </div>
      <div className='companies3'>
      <img src={companies}></img>

      </div>

    </main>
    <Footer/>
    </>

  )
}

export default PageNotFound2