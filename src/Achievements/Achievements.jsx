import React from 'react';
import './Achievements.css';
import { FaTrophy, FaMedal, FaAward, FaCertificate, FaStar, FaGraduationCap, FaCode, FaLaptopCode, FaCodeBranch } from 'react-icons/fa';

const Achievements = () => {
    const achievements = [
        {
            icon: <FaTrophy />,
            title: "GWOC Hackathon Winner",
            description: "Won the GirlScript Winter of Code Hackathon for creating Mudbery Studio website.",
            date: "2023",
            badge: "Winner"
        },
        {
            icon: <FaMedal />,
            title: "GATE Qualified",
            description: "Successfully qualified in the Graduate Aptitude Test in Engineering (GATE).",
            date: "2023",
            badge: "Qualified"
        },
        {
            icon: <FaCode />,
            title: "DSA Certification",
            description: "Completed comprehensive Data Structures and Algorithms certification, mastering advanced problem-solving techniques.",
            date: "2023",
            badge: "Certified"
        },
        {
            icon: <FaLaptopCode />,
            title: "Web Development Certification",
            description: "Earned certification in full-stack web development, covering modern frameworks and best practices.",
            date: "2023",
            badge: "Certified"
        },
        {
            icon: <FaCodeBranch />,
            title: "Competitive Programming Achievements",
            description: "Solved 500+ problems on LeetCode and achieved a peak rating of 1778 on CodeChef, demonstrating strong problem-solving skills.",
            date: "2023",
            badge: "Expert"
        },
        {
            icon: <FaAward />,
            title: "Odoo Hackathon Participant",
            description: "Participated in the Odoo Hackathon, showcasing technical skills and innovation.",
            date: "2023",
            badge: "Participant"
        },
        {
            icon: <FaCertificate />,
            title: "Web Wonders Participant",
            description: "Participated in Web Wonders competition, demonstrating web development expertise.",
            date: "2023",
            badge: "Participant"
        },
        {
            icon: <FaStar />,
            title: "PRMO & RMO Qualified",
            description: "Qualified in both Pre-Regional Mathematics Olympiad (PRMO) and Regional Mathematics Olympiad (RMO).",
            date: "2022",
            badge: "Qualified"
        },
        {
            icon: <FaGraduationCap />,
            title: "Joint Sports Secretary",
            description: "Served as Joint Sports Secretary, leading and organizing sports activities and events.",
            date: "2022",
            badge: "Leadership"
        }
    ];

    return (
        <section className="Achievements" id="achievements">
            <div className="Achievements_Container">
                <div className="Achievements_Header">
                    <h2 className="Achievements_Title">Achievements</h2>
                    <p className="Achievements_Subtitle">
                        A collection of my academic, technical, and leadership achievements that showcase my 
                        dedication to excellence in various domains.
                    </p>
                </div>

                <div className="Achievements_Grid">
                    {achievements.map((achievement, index) => (
                        <div 
                            key={index} 
                            className="Achievement_Card"
                            style={{ '--animation-order': index }}
                        >
                            <div className="Achievement_Icon">
                                {achievement.icon}
                            </div>
                            <h3 className="Achievement_Title">{achievement.title}</h3>
                            <p className="Achievement_Description">{achievement.description}</p>
                            <span className="Achievement_Date">{achievement.date}</span>
                            <span className="Achievement_Badge">{achievement.badge}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Achievements; 