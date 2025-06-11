import React from 'react';
import './Responsibilities.css';
import { FaUsers, FaLaptopCode, FaHandshake, FaGraduationCap, FaCode, FaUserTie } from 'react-icons/fa';

const Responsibilities = () => {
    const responsibilities = [
        {
            icon: <FaUsers />,
            title: "Joint Sports Secretary",
            organization: "Student Council",
            period: "2022 - 2023",
            description: "Led and organized sports activities, managed teams, and coordinated inter-college tournaments. Successfully organized multiple sports events with 500+ participants.",
            achievements: [
                "Organized 5 major sports tournaments",
                "Increased sports participation by 40%",
                "Managed a team of 20 sports coordinators"
            ]
        },
        {
            icon: <FaLaptopCode />,
            title: "Web Developer Head",
            organization: "Nexus College Group",
            period: "2023 - Present",
            description: "Leading the web development team, managing projects, and ensuring high-quality web solutions for the college group.",
            achievements: [
                "Led development of college website",
                "Managed team of 5 web developers",
                "Implemented modern web technologies"
            ]
        },
        {
            icon: <FaHandshake />,
            title: "Co-Head of Web Developer Team",
            organization: "SPARSH College Fest",
            period: "2023",
            description: "Co-led the web development team for the annual college fest, ensuring smooth digital experience for all participants.",
            achievements: [
                "Developed fest registration portal",
                "Created event management system",
                "Coordinated with 10+ technical teams"
            ]
        },
        {
            icon: <FaGraduationCap />,
            title: "Web Developer Team Member",
            organization: "ATPAC (Alumni and Training Placement Academic Council)",
            period: "2023 - Present",
            description: "Part of the web development team responsible for maintaining and enhancing the council's digital presence and systems.",
            achievements: [
                "Developed placement portal",
                "Created alumni networking platform",
                "Implemented automated placement tracking system"
            ]
        },
        {
            icon: <FaCode />,
            title: "Junior Developer",
            organization: "Google Developer Student Clubs (GDSC)",
            period: "2023 - Present",
            description: "Contributing to GDSC projects and initiatives, learning and implementing Google technologies, and participating in development activities.",
            achievements: [
                "Participated in Google Solution Challenge",
                "Contributed to open-source projects",
                "Attended Google I/O and other tech events"
            ]
        },
        {
            icon: <FaUserTie />,
            title: "Coordinator",
            organization: "Association for Computing Machinery (ACM)",
            period: "2023 - Present",
            description: "Coordinating technical events, workshops, and activities for ACM chapter, promoting computer science education and professional development.",
            achievements: [
                "Organized technical workshops",
                "Coordinated coding competitions",
                "Managed chapter events and activities"
            ]
        }
    ];

    return (
        <section className="Responsibilities" id="responsibilities">
            <div className="Responsibilities_Container">
                <div className="Responsibilities_Header">
                    <h2 className="Responsibilities_Title">Responsibilities & Positions</h2>
                    <p className="Responsibilities_Subtitle">
                        Leadership roles and positions I've held, showcasing my ability to lead, 
                        organize, and make a positive impact in various organizations.
                    </p>
                </div>

                <div className="Responsibilities_Grid">
                    {responsibilities.map((role, index) => (
                        <div 
                            key={index} 
                            className="Responsibility_Card"
                            style={{ '--animation-order': index }}
                        >
                            <div className="Responsibility_Icon">
                                {role.icon}
                            </div>
                            <div className="Responsibility_Content">
                                <h3 className="Responsibility_Title">{role.title}</h3>
                                <div className="Responsibility_Organization">{role.organization}</div>
                                <div className="Responsibility_Period">{role.period}</div>
                                <p className="Responsibility_Description">{role.description}</p>
                                <ul className="Responsibility_Achievements">
                                    {role.achievements.map((achievement, idx) => (
                                        <li key={idx} className="Achievement_Item">
                                            <span className="Achievement_Bullet">•</span>
                                            {achievement}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Responsibilities; 