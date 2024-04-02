import illustration from '../assets/animated/cat-astronaut.svg'

export default function Hero() {
    const Datas = [
        { content: 'Anthony Philippe' },
        { content: 'Premier projet React - Vite.JS' }
    ];

    const title = Datas[0]?.content;
    const paragraph = Datas[1]?.content;

    return (
        <div className="hero">
            <div className="container">
            <h1>{title}</h1>
                <p>{paragraph}</p>
                <img src={illustration} alt="Cat"/>
            </div>
        </div>
    );
}