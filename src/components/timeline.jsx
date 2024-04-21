//import Fade from 'react-reveal/Fade'

import Vertical_Line from './tools/Vertical_Line'

import '../sass/components/timeline.scss'

function renderColumnData(data) {
  return data.map((item, index) => (
    <div className="content" key={index}>
      <h1>{item.year}</h1>
      <h2>{item.title}</h2>
      <p>{item.desc}</p>
      <a>{item.sub}</a>
      <p className="info">{item.info}</p>
    </div>
  ))
}

export default function Timeline({ Datas, Part, circleContent }) {
  const column1Data = Datas ? Datas.filter((_, index) => index % 2 === 0) : [];
  const column3Data = Datas ? Datas.filter((_, index) => index % 2 !== 0) : [];

  const numberOfConnections = Datas ? Datas.length + 1 : 1;

  return (
    <div className="timeline_Content">
      <div className="col">
        {renderColumnData(column1Data)}
      </div>
      <div className="col">
        <Vertical_Line numberOfConnections={numberOfConnections} Part={Part} circleContent={circleContent} />
      </div>
      <div className="col">
        {renderColumnData(column3Data)}
      </div>
    </div>
  );
}