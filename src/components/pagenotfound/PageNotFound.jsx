import React from 'react'
import './PageNotFound.css'
import ME from '../../assets/me3.png'
import ME2 from '../../assets/me3.png'
import ME3 from '../../assets/me3.png'



const PageNotFound = () => {
  return (
    <section className='pagenotfound' id="pagenotfound">   
        <div className="pagenotfound-text">
            <div className="center-box">
                <h1>404</h1>
                <h2>Dear User!</h2>
                <h3>When I wrote this code, only God and I knew how it worked.</h3>
                <p>Now, only God knows it, sorry...</p>
                <p>Page Not Found!</p>
                <a href="/" class="button">Jump on!</a>
            </div>
        </div>
        <div className='pagenotfound-images'> 
            <div className="center-box">
                <div className='image'>
                 <div className='main-img'>
                    <img src={ME} alt="me"/>
                 </div>
                </div>
                <div className="anim">
                    <img className="png4" src={ME3} alt="vmi"/>
                    <img className="png5" src={ME2} alt="vmi"/>
                    
		        </div>
            </div>
        </div>  
    </section>
  )
}

export default PageNotFound

