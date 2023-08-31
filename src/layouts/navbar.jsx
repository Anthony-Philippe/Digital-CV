import { Link } from 'react-router-dom';

import icon from '/vite.svg';

export default function Navbar() {
    const Datas = [
        { title: 'Lien 1', link: '' },
        { title: 'Lien 2', link: '' },
        { title: 'CV', link: '/cv' },
    ];

    return (
        <nav>
            <img src={icon} alt="Icon"/>
            <ul>
                {Datas.map((button, index) => (
                    <li key={index}>
                        <button>
                            {index === Datas.length - 1 ? (
                                <Link to={button.link}>{button.title}</Link>
                            ) : (
                                <a href={button.link}>{button.title}</a>
                            )}
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
};