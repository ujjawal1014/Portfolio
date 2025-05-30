import { useState, useEffect } from "react";
import "./Navbar_Link.css";

export default function Navbar_link() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    document.body.style.overflow = !isOpen ? 'hidden' : 'auto';
  };

  const closeMenu = () => {
    setIsOpen(false);
    document.body.style.overflow = 'auto';
  };

  // Close menu on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (isOpen) {
        closeMenu();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isOpen]);

  const menuItems = [
    { text: 'HOME', href: '#Home' },
    { text: 'ABOUT', href: '#About_Me' },
    { text: 'EDUCATION', href: '#Education' },
    { text: 'SKILLS', href: '#Skills' },
    { text: 'PROJECTS', href: '#Projects' },
    { text: 'ACHIEVEMENTS', href: '#Achievement' },
    { text: 'CONTACT', href: '#Contact' }
  ];

  return (
    <>
      <div className={`hamburger ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={`Navbar_link ${isOpen ? 'active' : ''}`}>
        {menuItems.map((item, index) => (
          <a
            key={item.text}
            href={item.href}
            onClick={closeMenu}
            style={{ '--index': index }}
          >
            {item.text}
          </a>
        ))}
      </div>
    </>
  );
}
