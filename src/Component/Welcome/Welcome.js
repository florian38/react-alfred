//Import React
import React from 'react'

//Import style
import './Welcome.css'

//Import pic
import apple from '../../Data/img/appStore.png'
import google from '../../Data/img/PlayStore .png'
import later from '../../Data/img/later.png'
import background from '../../Data/img/backtest2.png'
import background3 from '../../Data/img/phone.png'

export default function Welcome() {

    
    return (
        <div className='component-welcome'>

            <img src={background} className='welcome-background'></img>

            <h1>Même les héros du quotidien ont besoin de leur Alfred !</h1>

            <p>On s'occupe de ta lessive ! Notre application bientôt disponible</p>

            <div className='welcome-content'>
                <img src={later} className='welcome-later'/>
            </div>
            
            <img src={background3} className='welcome-background3'></img>
            <img src={background} className='welcome-background4'></img>

        </div>
    )
}

/*<p>Télécharge notre application et on s'occupe de ta lessive ! </p>*/

/*            <div className='welcome-content'>
                <img src={apple}/>
                <img src={google}/> 
            </div>
            */