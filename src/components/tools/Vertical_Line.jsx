const Connexion = ({ isLast, isSingle, circleContent, part }) => {
  const lineStyle = isSingle ? { height: '175px' } : {};
  return (
    <div className="connexion">
      <div className="line" style={lineStyle}></div>
      <div className="circle">{isLast ? circleContent : ''}</div>
      {isLast && <div className="text"><h2>{part}</h2></div>}
    </div>
  );
};

export default function Vertical_Line({ numberOfConnections, Part, circleContent }) {
  return (
    <div className="timeline">
      {[...Array(numberOfConnections)].map((_, index) => (
        <Connexion
          key={index}
          isLast={index === numberOfConnections - 1}
          isSingle={numberOfConnections === 1}
          part={Part}
          circleContent={circleContent}
        />
      ))}
    </div>
  );
}