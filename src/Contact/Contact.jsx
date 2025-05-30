import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "./Contact.css";

export default function Contact() {
  return (
    <div className="Contact" id="Contact">
      <div className="Contact_Heading">
        <h1>Get In Touch</h1>
      </div>
      <div className="Contact_Content">
        <div className="Contact_Text">
          <p>
            I'm currently looking for new opportunities. Whether you have a
            question or just want to say hi, I'll try my best to get back to you!
          </p>
        </div>
        <div className="Contact_Links">
          <a
            href="mailto:ujjawal1014@gmail.com"
            className="Contact_Link"
            target="_blank"
            rel="noopener noreferrer"
            style={{ "--link-index": 0 }}
          >
            <FaEnvelope />
            <span>Email</span>
          </a>
          <a
            href="https://www.linkedin.com/in/ujjawal1014/"
            className="Contact_Link"
            target="_blank"
            rel="noopener noreferrer"
            style={{ "--link-index": 1 }}
          >
            <FaLinkedin />
            <span>LinkedIn</span>
          </a>
          <a
            href="https://github.com/ujjawal1014"
            className="Contact_Link"
            target="_blank"
            rel="noopener noreferrer"
            style={{ "--link-index": 2 }}
          >
            <FaGithub />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </div>
  );
} 