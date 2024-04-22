import { Link } from 'react-router-dom';

import icon from '/vite.svg';

export default function Navbar() {
    const Datas = [
        { title: 'CV', link: '/Cv' },
        { title: 'Project', link: '/Project' },
        { title: 'Home', link: '/' },
    ];

    return (
        <nav>
            <img src={icon} alt="Icon" />
            <ul>
                {Datas.map((button, index) => (
                    <li key={index}>
                        <button>
                            <Link to={button.link}>{button.title}</Link>
                        </button>
                    </li>
                ))}
            </ul>
        </nav>
    );
};