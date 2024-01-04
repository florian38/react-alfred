//Import React and function
import React, { useState, useEffect } from 'react'

//Import style
import './Navbar.css'
import { motion } from 'framer-motion';

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
        <motion.div 
            className='component-navbar '
            initial={{
                opacity: 0,
                y: -50,
            }}
            whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                duration: 1,
                delay: 0.1,
                },
            }}>

            <div className='navbar-mobile' style={{display: `${isOpen ?'flex' : 'none'}`}}>
                <p>Accueil</p>
                <p onClick={() => handleScroll('#concept')}>Concept</p>
                <p onClick={() => handleScroll('#work')}>Nous suivre</p>
                <p onClick={() => handleScroll('#contact')}>Contact</p>
            </div>

            <div className='navbar-left'>
                <img src={logo} alt='logo'/>
            </div>

            <div className='navbar-right'>
                <div><p>Accueil</p></div>
                <div><p onClick={() => handleScroll('#concept')}>Concept</p></div>
                <div><p onClick={() => handleScroll('#work')}>Nous suivre</p></div>
                <div><p onClick={() => handleScroll('#contact')}>Contact</p></div>
            </div>

            <div className='navbar-hamburger' style={{color : `${isOpen ? 'white' : 'black' }`}}>
                <Hamburger toggled={isOpen} toggle={setOpen} size={40}/>
            </div>

            <img src={background2} className='welcome-background2' alt='background'></img>

        </motion.div>
    )
}
