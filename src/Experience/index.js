import experiences from './experience.json';
import './index.css';


const ExperienceBlock = (props) => {
    const exp = props.experience;
    const bullets = exp.Description;
    const transition = props.transition;
    return (
        <div className={`${transition} d-flex flex-column align-items-left justify-content-top home-card rounded-5 mb-5 ps-4 experience-card`}> 
            <h2>{exp.Title}</h2>
            <h4>{exp.Company}</h4>
            <h6 className='mt-1'>{exp.TimeFrame}</h6>
            <div className='d-flex flex-column flex-grow-1 rounded-5 p-3 mt-1 experience-description'>
                <ul>
                    {
                        bullets.map((bullet) => (
                            <li>{bullet}</li>
                        ))
                    }
                </ul>
            </div>
        </div>
    );

};


const Experience = () => {
    return (
        <div className='d-flex flex-column flex-grow-1 align-items-center experience-container'>
            <div className='mt-5'>
                {
                    experiences.map((e, index) => (
                        <ExperienceBlock experience={e} transition={index % 2 == 0 ? "slide-left" : "slide-right"}/>   
                    ))
                }
            </div>    
        </div>
    );
};

export default Experience;