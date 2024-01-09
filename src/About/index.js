import React, {useState} from 'react';
import "./index.css";


const About = () => {
    const [isProfileHover, setProfileHover] = useState(false);

    return (
        <div className="d-flex flex-column align-items-center justify-content-center home-container mt-5">
            <div className="slide-bottom d-flex flex-row align-items-center justify-content-left home-card rounded-5 overflow-auto"> 
                <div className={`d-flex align-items-center justify-content-center pfp rounded-4`} 
                    onMouseEnter={() => setProfileHover(true)}
                    onMouseLeave={() => setProfileHover(false)}
                >
                    {isProfileHover && (
                        <div className='pfp-text text-white rounded-4'>
                            Corgi Corki
                        </div>
                    )}
                </div>
                <div className='ms-5 text-body-card rounded-5 comic-sans'>
                    <h1>Intro</h1>
                    <p className='mt-4 pe-3 lh-lg'>
                        Hi! I'm Jonathan! I'm a software engineer
                        who graduated from Northeastern University. I have a passion for writing 
                        understandable, simple code and in my free time you can catch me playing
                        tennis or video games. (I'm a corki one trick)

                    </p>
                </div>
            </div>
        </div>
    );
};

export default About;