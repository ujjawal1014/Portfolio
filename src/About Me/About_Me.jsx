import React from 'react';
import './About_Me.css';

const About_Me = () => {
    return (
        <section className="About_Me" id="about-me">
            <div className="About_Me_Container">
                <div className="About_Me_Header">
                    <h2 className="About_Me_Title">About Me</h2>
                    <p className="About_Me_Subtitle">
                        A passionate Full Stack Developer with a keen eye for creating elegant solutions
                    </p>
                </div>

                <div className="About_Me_Content">
                    <div className="About_Me_Image_Container">
                        <img 
                            src="https://placehold.co/400x400/6366f1/ffffff?text=Profile" 
                            alt="Profile" 
                            className="About_Me_Image" 
                        />
                    </div>

                    <div className="About_Me_Text_Content">
                        <p className="About_Me_Description">
                            I am a passionate Full Stack Developer with a strong foundation in both front-end and back-end technologies. 
                            My journey in web development has equipped me with the skills to create responsive, user-friendly applications 
                            that solve real-world problems. I thrive in collaborative environments and am constantly learning new technologies 
                            to stay at the forefront of web development.
                        </p>

                        <div className="About_Me_Stats">
                            <div className="Stat_Item" style={{ '--animation-order': 1 }}>
                                <div className="Stat_Number">2+</div>
                                <div className="Stat_Label">Years Experience</div>
                            </div>
                            <div className="Stat_Item" style={{ '--animation-order': 2 }}>
                                <div className="Stat_Number">10+</div>
                                <div className="Stat_Label">Projects Completed</div>
                            </div>
                            <div className="Stat_Item" style={{ '--animation-order': 3 }}>
                                <div className="Stat_Number">5+</div>
                                <div className="Stat_Label">Happy Clients</div>
                            </div>
                            <div className="Stat_Item" style={{ '--animation-order': 4 }}>
                                <div className="Stat_Number">3+</div>
                                <div className="Stat_Label">Years Learning</div>
                            </div>
                        </div>

                        <div className="About_Me_Skills">
                            <h3 className="Skills_Title">Technical Skills</h3>
                            <div className="Skills_List">
                                <span className="Skill_Tag">HTML5</span>
                                <span className="Skill_Tag">CSS3</span>
                                <span className="Skill_Tag">JavaScript</span>
                                <span className="Skill_Tag">React</span>
                                <span className="Skill_Tag">Node.js</span>
                                <span className="Skill_Tag">Express</span>
                                <span className="Skill_Tag">MongoDB</span>
                                <span className="Skill_Tag">Git</span>
                                <span className="Skill_Tag">Responsive Design</span>
                                <span className="Skill_Tag">UI/UX</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About_Me;
