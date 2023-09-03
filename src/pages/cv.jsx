import Navbar from '@layouts/navbar';
import Footer from '@layouts/footer';

import Timeline from '@components/timeline';
import Caroussel from '@components/infinite_caroussel';

import { formation_Data, codingIcon_Data, softwareIcon_Data } from '../data/cv'

export default function Home() {
    return (
        <>
            <Navbar />
            <Timeline Datas={formation_Data} Part="Formations" circleContent="1"/>
            <Caroussel iconSource={codingIcon_Data} />
            <Caroussel iconSource={softwareIcon_Data} />
            <Footer />
        </>
    );
};