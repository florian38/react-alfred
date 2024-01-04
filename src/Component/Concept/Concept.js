//Import React
import React from 'react'

//Import icon
import { AiFillCheckCircle } from 'react-icons/ai';
import { BiTimer } from 'react-icons/bi';
import { GiClothes } from 'react-icons/gi';
import { TbIroning1 } from 'react-icons/tb';
import { RiDoubleQuotesR } from 'react-icons/ri';

//Import style
import './Concept.css'
import imgOne from '../../Data/img/stepone.jpg'
import imgTwo from '../../Data/img/steptwo.jpg'
import biker from '../../Data/img/biker.jpg'
import { motion } from 'framer-motion';

export default function Concept() {

    return (
        <motion.div 
            className='component-concept'
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
            <h1>Alfred, comment ça marche ? </h1>
            <p className='concept-slogan'><RiDoubleQuotesR size={20} fill={'#38B6FF'}/>Je suis la pour te faire gagner du temps et de l'argent !<RiDoubleQuotesR size={20} fill={'#38B6FF'}/></p>
            
            <motion.div 
                className='concept-div concept-mobile'
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

                <div className='concept-img  fade-in-target'  style={{backgroundImage: `url(${imgOne})` }}>
                    <div className='concept-cit'><RiDoubleQuotesR size={20} fill={'#38B6FF'}/>C'est le savoir faire qui compte.<RiDoubleQuotesR size={20} fill={'#38B6FF'}/></div>
                </div>

                <div className='concept-content'>
                    <p className='concept-step'>1er étape</p>
                    <h3>Télécharge notre app et précises nous tes envies</h3>
                    <p className='concept-text'>Tu as juste à t'inscrire et nous indiqué :</p>
                    <div className='concept-one-step'>
                        <p><AiFillCheckCircle size={20} fill={'#38B6FF'}/>Le nombre de machine</p>
                        <p><AiFillCheckCircle size={20} fill={'#38B6FF'}/>Le type de machine et les options</p>
                        <p><AiFillCheckCircle size={20} fill={'#38B6FF'}/>Et nous arrivons instantanément !</p>
                    </div>
                </div>
            </motion.div>

            <motion.div 
                className='concept-div'
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

                <div className='concept-content'>
                    <p className='concept-step'>2ème étape</p>
                    <h3>On récupére ton linge</h3>
                    <p className='concept-text'>Une fois que tu as lancé ta commande on vient récupérer ton linge directement chez toi. Alfred est disponible à partir de maintenant dans l'agglomération Grenobloise.</p>
                    <div className='concept-arg'><BiTimer size={30} fill={'#38B6FF'}/>Notre délai de récupération est inférieur à 30min</div>
                </div>

                <div className='concept-img  fade-in-target' style={{backgroundImage: `url(${biker})` }}>
                    <div className='concept-cit'><RiDoubleQuotesR size={20} fill={'#38B6FF'}/>Des professionnels de la livraison.<RiDoubleQuotesR size={20} fill={'#38B6FF'}/></div>
                </div>

            
            </motion.div>

            <motion.div 
                className='concept-div concept-mobile'
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

                <div className='concept-img  fade-in-target' style={{backgroundImage: `url(${imgTwo})` }}>
                    <div className='concept-cit'><RiDoubleQuotesR size={20} fill={'#38B6FF'}/>La qualité, notre priorité.<RiDoubleQuotesR size={20} fill={'#38B6FF'}/></div>
                </div>

                <div className='concept-content'>
                    <p className='concept-step'>3ème étape</p>
                    <h3>On te  livre ton linge tout beau</h3>
                    <p className='concept-text'>Une fois que le linge est nettoyé dans nos laveries certifiés partenaires. Nous te le ramenons directement dans un délai très court entre 1h et 4h. Et tout ça, à partir de <span>5,99 euros</span> seulement !</p>
                    <div className='concept-third-content'>
                        <div className='concept-third-arg'><GiClothes size={30} fill={'#38B6FF'}/>Linge plié</div>
                        <div className='concept-third-arg'><TbIroning1 size={30} fill={'#38B6FF'} stroke={'#38B6FF'}/>Repassage disponible</div>
                    </div>
                </div>


            </motion.div>
        </motion.div>
  )
}
