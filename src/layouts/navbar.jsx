import '../sass/components/navbar.scss'

import icon from '/vite.svg'

export default function Navbar() {
    const buttonsData = [
        { title: 'Lien 1', link: '' },
        { title: 'Lien 2', link: '' },
        { title: 'Lien 3', link: '' },
    ];

    return (
        <nav>
            <img src={icon} alt="Icon"/>
            <ul>
                {buttonsData.map((button, index) => (
                    <li key={index}>
                        <button>
                            <a href={button.link}>{button.title}</a>
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
};