import icon from '/vite.svg'

import { FaFacebook, FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa6'

export default function Footer() {
  const socialLinks = [
    { href: "lien_vers_facebook", icon: <FaFacebook />, label: "Facebook" },
    { href: "https://www.linkedin.com/in/anthony--philippe", icon: <FaLinkedin />, label: "LinkedIn" },
    { href: "lien_vers_instagram", icon: <FaInstagram />, label: "Instagram" },
    { href: "https://github.com/Anthony-Philippe", icon: <FaGithub />, label: "GitHub" },
  ];

  const SocialLink = ({ href, children }) => (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );

  return (
    <footer>
      <section>
        <img src={icon} alt="Icon" />
        <p>DindonDesAlpes</p>
      </section>
      <section>
        {socialLinks.map((link, index) => (
          <SocialLink key={index} href={link.href}>
            {link.icon}
          </SocialLink>
        ))}
      </section>
    </footer>
  );
}