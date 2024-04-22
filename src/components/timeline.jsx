//import Fade from 'react-reveal/Fade'

import Vertical_Line from './tools/Vertical_Line'

import '../sass/components/timeline.scss'

function renderColumnData(data, columnType) {
  return data.map((item, index) => (
    <div className="content" key={index}>
      <h1 className='colored'>{item.period}</h1>
      <h2>{item.activity}</h2>
      <p className='info'>{item.sub}</p>
      <h3>{item.organization}</h3>
      {item.info && Object.entries(item.info).map(([key, value]) => (
        <p key={key} className={`info ${columnType === 'right' ? 'bullet-start' : 'bullet-end'}`}>{value}</p>
      ))}
      {item.place && (
        <div className="place">
          {Object.entries(item.place).map(([key, value], i, arr) => (
            <span key={key} className='text'>
              {`${value}`}
              {i !== arr.length - 1 ? ',' : ''}
            </span>
          ))}
        </div>
      )}
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
        {renderColumnData(column1Data, 'left')}
      </div>
      <div className="col">
        <Vertical_Line numberOfConnections={numberOfConnections} Part={Part} circleContent={circleContent} />
      </div>
      <div className="col">
        {renderColumnData(column3Data, 'right')}
      </div>
    </div>
  );
}