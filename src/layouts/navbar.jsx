export default function Navbar() {
    const buttonsData = [
        { title: 'Test 1', link: '/lien-vers-test1' },
        { title: 'Test 2', link: '/lien-vers-test2' },
        { title: 'Test 3', link: '/lien-vers-test3' },
    ];

    return (
        <nav>
            <img src="" alt=""/>
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