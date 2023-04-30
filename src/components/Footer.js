import React from 'react';
import linkedin from '../assets/icons8-linkedin-24.png'
import github from '../assets/icons8-github-24.png'
import angellist from '../assets/icons8-angellist-24.png'
import girl from '../assets/icons8-google-drive-32.png';


function Footer() {
    return (
        <>
            <div className='footer'>
                <div className='h-con' style={{ display: 'flex' }}>
                   <div > <a href='https://drive.google.com/file/d/1zXlo1zWxoW2VuAGxS7173mvFWxtmsci8/view?usp=share_link' target="_blank" style={{display:'flex',alignItems:'center', marginRight:'50px'}}>
                    <img src={girl} alt='img' width="24px"/>
                        Resume - Sanskriti                     
                        </a></div>
                    <a href='https://www.linkedin.com/in/sanskriti-dwivedi-692630166/' target="_blank">
                        <img src={linkedin} alt='img' /> </a>
                    <a href='https://github.com/sanskritidwi' target="_blank">
                        <img src={github} alt='img' /> </a>
                    <a href='https://angel.co/u/sanskriti-dwivedi-2' target="_blank">
                        <img src={angellist} alt='img' /> </a>
                </div>
            </div>
        </>
    )
}

export default Footer;