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


export default function Home() {

    //Hook for loading
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setLoading(true)
        }, 1000);
    }, [])
        

    //Variable for div animate
    const animateDiv = (div) => {
        div.classList.add('fade-in'); // Remplacez 'fade-in' par le nom de votre classe CSS d'animation
    };

    //Useeffect for animation div if entry in screen
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              animateDiv(entry.target);
            }
          });
        });
      
        const elements = document.querySelectorAll('.fade-in-target'); // Remplacez '.fade-in-target' par la classe des divs que vous souhaitez observer
      
        elements.forEach((element) => {
          observer.observe(element);
        });
    }, []);

    return (
        <div className='container-home'>
            <div className='welcome'> 
            <Navbar/>
            { loading &&
                <Welcome/>
            }
            </div>
        
            <div className='concept' id='concept'>
                <img src={background} className='concept-back-one'/>
                <img src={background} className='concept-back-two'/>
                <img src={background} className='concept-back-three'/>
                <Concept/>
            </div>
        
            <div className='work' id='work'> 
                <Work/>
            </div>
        
            <div className='contact' id='contact'> 
                <img src={background} className='concept-back-four'/>
                <img src={background} className='concept-back-five'/>
                <Contact/>
                <Footer/>
            </div>
      </div>
    )
}
