import Timeline from '@components/timeline';

import projectData from '../data/project.json';

export default function Project() {
    const { scolaire_Data, personnel_Data } = projectData;

    return (
        <>
            <Timeline Datas={scolaire_Data} Part="Scolaire" circleContent="1" />
            <Timeline Datas={personnel_Data} Part="Personnel" circleContent="2" />
        </>
    );
};
