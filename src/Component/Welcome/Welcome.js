//Import React
import React from 'react'

//Import style
import './Welcome.css'
import { motion } from 'framer-motion';


//Import pic
import later from '../../Data/img/later.png'
import background from '../../Data/img/backtest2.png'
import background3 from '../../Data/img/phone1.png'

export default function Welcome() {

    
    return (
        <motion.div 
            className='component-welcome'
            initial={{
                opacity: 0,
                y: 50,
            }}
            whileInView={{
                opacity: 1,
                y: 0,
                transition: {
                duration: 1,
                delay: 0.4,
                },
            }}>

            <div className='welcome-img'>
                <img src={background} className='welcome-background' alt='background'></img>
            </div>
            
            <div className='welcome-content'>

                <h1>Même les héros du quotidien ont besoin de leur Alfred !</h1>

                <img src={background3} className='welcome-background3' alt='phone'></img>

                <p>On s'occupe de ta lessive ! Notre application bientôt disponible</p>

                <img src={later} className='welcome-later' alt='background'/>

            </div>

            <img src={background} className='welcome-background4' alt='store'></img>
            <img src={background} className='welcome-background5' alt='store'></img>

        </motion.div>
    )
}

/*<p>Télécharge notre application et on s'occupe de ta lessive ! </p>*/

/*            <div className='welcome-content'>
                <img src={apple}/>
                <img src={google}/> 
            </div>
            */

            /*            <img src={background} className='welcome-background4'></img>
*/