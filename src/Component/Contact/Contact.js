//Import React and function
import React, { useState, useRef } from "react";

//Import style
import './Contact.css'

//Import icon
import { RiDoubleQuotesR } from 'react-icons/ri';

//Import fonction for send mail
import emailjs from "@emailjs/browser";

export default function Contact() {

    //UseRef for form
    const form = useRef();

    //Hook for email
    const [email, setEmail] = useState(false)


    //Function for send emails
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
            .sendForm(
                process.env.REACT_APP_SERVICE_ID,
                process.env.REACT_APP_TEMPLATE_ID,
                form.current,
                process.env.REACT_APP_USER_ID
            )
            .then(
                (result) => {
                    console.log(result.text);
                    console.log("message sent");

                },
                (error) => {
                    console.log(error.text);
                }
            );
        
        setEmail(true)
        form.current.reset()//Reset form
    };
    

    return (
        <div className='component-contact'>
            <h1>Contactez nous</h1>
            <p className='concept-slogan'><RiDoubleQuotesR size={20} fill={'#38B6FF'}/>Pour toutes autres questions, n'hésite pas à me contacter !<RiDoubleQuotesR size={20} fill={'#38B6FF'}/></p>
            <form ref={form} onSubmit={sendEmail}>
                <div className='contact-input'>
                    <input type='text' placeholder='Prénom' name='user_name' required></input>
                    <input type='text' placeholder='Email' name='user_email' required></input>
                </div>

                <div className='contact-message'>
                    <textarea placeholder='Message' name="message" required></textarea>
                </div>
                
                <div className='contact-button'>
                    {
                        email ?
                        <div className='contact-send'>Merci pour votre retour !</div>
                            :
                        <button onSubmit={sendEmail}>Envoyez</button>
                    }
                </div>
                
            </form>
        </div>
    )
}
