import Timeline from '@components/timeline';
import Caroussel from '@components/infinite_caroussel';

import projectData from '../data/project.json';
import iconData from '../data/icon.json';

export default function Project() {
    const { scolaire_Data, personnel_Data } = projectData;

    return (
        <>
            <Timeline Datas={scolaire_Data} Part="Scolaire" circleContent="1" />
            <Caroussel iconSource={iconData.codingIcon_Data} />
            <Timeline Datas={personnel_Data} Part="Personnel" circleContent="2" />
            <Caroussel iconSource={iconData.softwareIcon_Data} />
        </>
    );
};
