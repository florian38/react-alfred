//Import React and function
import React from 'react'

//Import style
import './Work.css'
import { motion } from 'framer-motion';

//Import icon
import { RiDoubleQuotesR } from 'react-icons/ri';
import { AiOutlineInstagram } from 'react-icons/ai';

//Import pic
import pic1 from '../../Data/img/pic1.jpg'
import pic2 from '../../Data/img/pic2.jpg'
import pic3 from '../../Data/img/pic3.jpg'
import pic4 from '../../Data/img/pic4.jpg'

export default function Work() {
    
    return (
        <motion.div 
            className='component-work'
            initial={{
                opacity: 0,
                y: 50,
            }}
            whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                duration: 1,
                delay: 0.1,
                },
            }}>
            <h1>Suivez nous !</h1>
            <p className='concept-slogan'><RiDoubleQuotesR size={20} fill={'#38B6FF'}/>La galerie de notre excellent travail !<RiDoubleQuotesR size={20} fill={'#38B6FF'}/></p>
            <div className='work-pic'>
                <img src={pic1} className='pic-one '/>
                <img src={pic2} className='pic-two'/>
                <img src={pic3} className='pic-three'/>
                <img src={pic4} className='pic-four'/>
                <div className='work-app'><AiOutlineInstagram size={55} fill={'grey'} className='work-icon'/><a href='https://www.instagram.com/monalfred_fr/' className='work-link'>@monalfred_fr</a></div>
            </div>
        </motion.div>
    )
}
