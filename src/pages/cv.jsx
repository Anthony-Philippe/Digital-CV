import Timeline from '@components/timeline';
import Caroussel from '@components/infinite_caroussel';

import cvData from '../data/cv.json';
import iconData from '../data/icon.json';

export default function Cv() {
    const { formation_Data, experience_Data } = cvData;

    return (
        <>
            <Timeline Datas={formation_Data} Part="Formations" circleContent="1" />
            <Caroussel iconSource={iconData.codingIcon_Data} />
            <Timeline Datas={experience_Data} Part="Expériences" circleContent="2" />
            <Caroussel iconSource={iconData.softwareIcon_Data} />
        </>
    );
};
