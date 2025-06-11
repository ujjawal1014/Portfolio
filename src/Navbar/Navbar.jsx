import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const sections = ['home', 'about-me', 'education', 'skills', 'project', 'achievements', 'contact'];
            const scrollPosition = window.scrollY + 100;

            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        document.body.style.overflow = !isMenuOpen ? 'hidden' : 'auto';
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
        document.body.style.overflow = 'auto';
    };

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const offset = 80; // Adjust this value based on your navbar height
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
            closeMenu();
        }
    };

    return (
        <nav className={`Navbar ${isScrolled ? 'Navbar_Scrolled' : ''}`}>
            <div className="Navbar_Container">
                <a href="#home" className="Navbar_Logo" onClick={() => scrollToSection('home')}>
                    Portfolio
                </a>

                <div className={`Navbar_Links ${isMenuOpen ? 'Navbar_Links_Active' : ''}`}>
                    <a 
                        href="#home" 
                        className={`Navbar_Link ${activeSection === 'home' ? 'Navbar_Link_Active' : ''}`}
                        onClick={() => scrollToSection('home')}
                    >
                        Home
                    </a>
                    <a 
                        href="#about-me" 
                        className={`Navbar_Link ${activeSection === 'about-me' ? 'Navbar_Link_Active' : ''}`}
                        onClick={() => scrollToSection('about-me')}
                    >
                        About
                    </a>
                    <a 
                        href="#education" 
                        className={`Navbar_Link ${activeSection === 'education' ? 'Navbar_Link_Active' : ''}`}
                        onClick={() => scrollToSection('education')}
                    >
                        Education
                    </a>
                    <a 
                        href="#skills" 
                        className={`Navbar_Link ${activeSection === 'skills' ? 'Navbar_Link_Active' : ''}`}
                        onClick={() => scrollToSection('skills')}
                    >
                        Skills
                    </a>
                    <a 
                        href="#project" 
                        className={`Navbar_Link ${activeSection === 'project' ? 'Navbar_Link_Active' : ''}`}
                        onClick={() => scrollToSection('project')}
                    >
                        Projects
                    </a>
                    <a 
                        href="#achievements" 
                        className={`Navbar_Link ${activeSection === 'achievements' ? 'Navbar_Link_Active' : ''}`}
                        onClick={() => scrollToSection('achievements')}
                    >
                        Achievements
                    </a>
                    <a 
                        href="#contact" 
                        className={`Navbar_Link ${activeSection === 'contact' ? 'Navbar_Link_Active' : ''}`}
                        onClick={() => scrollToSection('contact')}
                    >
                        Contact
                    </a>
                    <a 
                        href="#contact" 
                        className="Navbar_Button"
                        onClick={() => scrollToSection('contact')}
                    >
                        Hire Me
                    </a>
                </div>

                <div className="Navbar_Menu" onClick={toggleMenu}>
                    {isMenuOpen ? <FaTimes /> : <FaBars />}
                </div>
            </div>
        </nav>
    );
};

export default Navbar; 