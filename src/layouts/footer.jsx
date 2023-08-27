import '../sass/components/footer.scss'

import icon from '/vite.svg'

import { FaFacebook, FaLinkedin, FaInstagram, FaGithub } from 'react-icons/fa6'

export default function Footer() {
    const socialLinks = [
      { href: "lien_vers_facebook", icon: <FaFacebook />, label: "Facebook" },
      { href: "lien_vers_linkedin", icon: <FaLinkedin />, label: "LinkedIn" },
      { href: "https://www.instagram.com/an1hoph/", icon: <FaInstagram />, label: "Instagram" },
      { href: "lien_vers_github", icon: <FaGithub />, label: "GitHub" },
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
    )
  }
  