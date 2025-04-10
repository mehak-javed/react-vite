import { MdMessage } from 'react-icons/md'
import { MdCall } from "react-icons/md";
import Button from '../Button/Button'
import styles from './Contact.module.css'
import { MdMail } from "react-icons/md";
import { useState } from 'react';


const ContactForm = () => {

    const [name, setName] = useState("Ammar");
    const [email, setEmail] = useState("support@webDrift.com")
    const [text, setText]= useState("I LOVE MY HUBBY ❤️");
    const onSubmit = (event) => {
        event.preventDefault();

        setName(event.target[0].value);
        setEmail(event.target[1].value);
        setText(event.target[2].value);

        console.log({
            name,
            email,
            text,
        });

    };
  return (
    <section className={`${styles.contain_form}`}>
        
        <div>
           <div className={`${styles.contact_form}`}>
            <div className={`${styles.top_btn}`}>
                <Button text="VIA CHAT SUPPORT" icon = {<MdMessage fontSize={24}/>}/>
                <Button text="VIA CALL" icon = {<MdCall fontSize={24}/>}/>
            </div>
            <Button isOutline = {true} text="VIA EMAIL FORM" icon = {<MdMail fontSize={24}/>}/>
            </div>
            <form onSubmit={onSubmit}>
                <div className={`${styles.form_control}`}>
                    <label htmlFor="name">Name</label>
                    <input type="text" name='name'/>
                </div>
                <div className={`${styles.form_control}`}>
                    <label htmlFor="email">Email</label>
                    <input type="email" name='email'/>
                </div>
                <div className={`${styles.form_control}`}>
                    <label htmlFor="text">Text</label>
                    <textarea type="text" name='name' rows={7}/>
                </div>
                <div style={{
                    display: "flex",
                    justifyContent: "end",
                    marginTop: "10px",
                }}>
                    <Button text="SUBMIT"/>
                </div>

            </form>
           
        </div>
        <div className={`${styles.contact_Image}`}>
            <img src="/images/banner.svg" alt="" />
        </div>
           {/* <div>
            {name + " " + email + " " + text + " "}
           </div> */}
    </section>
  )
}

export default ContactForm