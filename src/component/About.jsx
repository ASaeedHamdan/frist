import React from 'react';

function About(props) {
    return (
        <div id='about'>
            <div className='about-image'>
                <img src={props.image} alt=''/>
            </div>
            
            <div className='adres'>
            <h1>{props.title}</h1>
                <div className='phone'>رقم الهاتف</div>
                <div className='mai'>البريد الالكتروني</div>
                <div className='parent'>
                      عناويني
                    <a href='#' >هنا</a>
                </div>
                <div className='parent'>
                     الاعدادات
                    <a href='#'>هنا</a>
                </div>

            </div>
           
            
        </div>
    )
}

export default About;
