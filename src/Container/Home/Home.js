//Import React and function
import React, { useEffect, useState } from 'react'

//Import style
import './Home.css'

//Import component
import Navbar from '../../Component/Navbar/Navbar'
import Welcome from '../../Component/Welcome/Welcome'
import Concept from '../../Component/Concept/Concept'
import Work from '../../Component/Work/Work'
import Contact from '../../Component/Contact/Contact'
import Footer from '../../Component/Footer/Footer'

//Import pic
import background from '../../Data/img/backtest2.png'

//Import dom
import { Link } from 'react-router-dom';


export default function Home() {

    return (
        <div className='container-home'>
            <div className='welcome'> 
            <Navbar/>
            <Welcome/>
            </div>
        
            <div className='concept' id='concept'>
                <img src={background} className='concept-back-one' alt='background'/>
                <img src={background} className='concept-back-two' alt='background'/>
                <img src={background} className='concept-back-three' alt='background'/>
                <Concept/>
            </div>
        
            <div className='work' id='work'> 
                <Work/>
            </div>
        
            <div className='contact' id='contact'> 
                <img src={background} className='concept-back-four' alt='background'/>
                <img src={background} className='concept-back-five' alt='background'/>
                <Contact/>
                <Footer/>
            </div>

            {/*<div className='link'>
                <Link to="/legal">Mentions Légales</Link>
                <Link to="/legal">Politique de confidentialité</Link>
                <Link to="/legal">Conditions générales de vente</Link>
            </div>*/}

            <div className='copyright'> 
                Copyright © 2023 - All rights reserved
            </div>
      </div>
    )
}
