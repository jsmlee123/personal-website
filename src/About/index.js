import React, {useState} from 'react';
import "./index.css";

const corgi = 'https://i.pinimg.com/564x/e4/bb/1c/e4bb1c97bd9475a21381df583db5e50b.jpg';
const pfp = 'https://ih1.redbubble.net/image.2511197190.8729/bg,f8f8f8-flat,750x,075,f-pad,750x1000,f8f8f8.jpg'

const About = () => {
    

    return (
        <div className="d-flex flex-column align-items-center justify-content-center home-container mt-5">
            <div className="slide-bottom d-flex flex-row align-items-center justify-content-left home-card rounded-5 overflow-hidden"> 
                
                <div class="flip-card rounded-5">
                    <div class="flip-card-inner rounded-5">
                        <div class="flip-card-front rounded-5">
                            <img src={corgi} className='img rounded-5' alt="Avatar" />
                        </div>
                        <div class="flip-card-back rounded-5">
                            <img src={pfp} className='img rounded-5' alt="Avatar" />
                            
                        </div>
                    </div>
                </div> 


                <div className='ms-5 text-body-card rounded-5 comic-sans'>
                    <h1>About Me</h1>
                    <p className='mt-4 pe-3 lh-lg'>
                        Hi! I'm Jonathan, a new grad software engineer from Northeastern University interested in
                        Backend and Fullstack development. I have a passion for writing 
                        understandable, simple code and in my free time you can catch me playing
                        video games or playing tennis. <br/>(I'm a corki one trick)

                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;