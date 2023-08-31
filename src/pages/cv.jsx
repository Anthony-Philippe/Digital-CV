import Navbar from '../layouts/navbar';
import Footer from '../layouts/footer';

import Timeline from '../components/timeline';
import { formation_Data } from '../data/cv'

export default function Home() {
    return (
        <>
            <Navbar />
            <Timeline Datas={formation_Data} Part="Formations" circleContent="1"/>
            <Footer />
        </>
    );
};