import Tooltip from './tools/toolTip'

import { useEffect, useState } from 'react';

import '../sass/components/caroussel.scss'

const altStyles = {
  'VHDL': { transform: 'translateY(5px)' },
  'Packet Tracer': { transform: 'translateY(-10px)' },
  'KiCad': { transform: 'translateY(5px)' },
  'Nmap': { transform: 'translateY(-15px)' },
};

const renderLogosWithTooltips = (logos) => (
  logos.map((logo, index) => {
    const imageStyle = altStyles[logo.alt] ?? {};
    return (
      <Tooltip key={index} text={logo.alt}>
        <img src={`/icons/${logo.src}`} alt={logo.alt} style={imageStyle} />
      </Tooltip>
    );
  })
);

export default function infinite_Caroussel({ iconSource, speed}) {
  const calculatedSpeed = speed ?? iconSource.length / 0.5;

  const sections = Array.from({ length: 3 }, (_, index) => (
    <section key={index} style={{ "--speed": `${calculatedSpeed}s` }}>
      {renderLogosWithTooltips(iconSource)}
    </section>
  ));
    
  return (
    <div className="slider_icon">
      <div className="wrapper">
        {sections}
      </div>
    </div>
  );
}