//Import React and function
import React, { useState, useEffect } from 'react'

//Import style
import './Navbar.css'

//Import pic
import logo from '../../Data/img/logo Alfred.png'
import background2 from '../../Data/img/backtest4.png'

//Hamburger
import Hamburger from 'hamburger-react'


export default function Navbar() {

    //Hook for know if hamburger is open
    const [isOpen, setOpen] = useState(false)

    //Use effect for display none the hamburger if resolution > 1000
    useEffect(() => {
        const handleResize = () => {
          if(window.innerWidth > 1000){
            setOpen(false)
          }
        };
    
        window.addEventListener('resize', handleResize);
    
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, []);

    // Function smooth scroll
    function smoothScroll(target) {

        const element = document.querySelector(target);

        window.scrollTo({
            top: element.offsetTop,
            behavior: 'smooth',
        });
    }

    //Handle Scroll
    const handleScroll = (target) => {
        smoothScroll(target);
    };
    
    return (
        <div className='component-navbar '>

            <div className='navbar-mobile' style={{display: `${isOpen ?'flex' : 'none'}`}}>
                <a>Accueil</a>
                <a onClick={() => handleScroll('#concept')}>Concept</a>
                <a onClick={() => handleScroll('#work')}>Nous suivre</a>
                <a onClick={() => handleScroll('#contact')}>Contact</a>
            </div>

            <div className='navbar-left'>
                <img src={logo}/>
            </div>

            <div className='navbar-right'>
                <div><a>Accueil</a></div>
                <div><a onClick={() => handleScroll('#concept')}>Concept</a></div>
                <div><a onClick={() => handleScroll('#work')}>Nous suivre</a></div>
                <div><a onClick={() => handleScroll('#contact')}>Contact</a></div>
            </div>

            <div className='navbar-hamburger' style={{color : `${isOpen ? 'white' : 'black' }`}}>
                <Hamburger toggled={isOpen} toggle={setOpen} size={40}/>
            </div>

            <img src={background2} className='welcome-background2'></img>

        </div>
    )
}
