//Import React and Function
import React from 'react'

//Import style
import './Footer.css'

//Import pic
import logo from '../../Data/img/alfred.png'

//Import icon
import { AiFillInstagram } from 'react-icons/ai';
import { SiTiktok } from 'react-icons/si';

export default function Footer() {

    return (
        <div className='component-footer' id="section1" >
            <div>
                <img src={logo} alt='logo'/>
            </div>

            <div>
                <h3>Contact</h3>
                <div className='footer-item'>
                    <p>06.04.03.23.78</p>
                    <p>contact@monalfred.fr</p>
                </div>
            </div>

            <div>
                <h3>Rejoins nous</h3>
                <div className='footer-item'>
                    <div>
                        <a href='https://www.instagram.com/monalfred_fr/'><AiFillInstagram size={40} className='footer-icon' /></a>
                        <a href='https://www.tiktok.com/@mon_alfred'><SiTiktok size={32} className='footer-icon'/></a>
                    </div>      
                </div>
            </div>
        </div>
    )
}
