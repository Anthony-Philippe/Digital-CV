import Timeline from '@components/timeline';
import Caroussel from '@components/infinite_caroussel';

import cvData from '../data/cv.json';

export default function Cv() {
    const { formation_Data, experience_Data, softwareIcon_Data } = cvData;

    return (
        <>
            <Timeline Datas={formation_Data} Part="Formations" circleContent="1"/>
            <Caroussel iconSource={cvData.codingIcon_Data} />
            <Timeline Datas={experience_Data} Part="Formations" circleContent="2"/>
            <Caroussel iconSource={softwareIcon_Data} />
        </>
    );
};
