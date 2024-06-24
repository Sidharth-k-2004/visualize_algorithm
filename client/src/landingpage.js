import React, { useEffect, useState } from 'react';
import './landingpage.css'; 

const LandingPage = () => {
  const [showLines, setShowLines] = useState(false);
  const [showText, setShowText] = useState(false);
  const [lineVisible, setLineVisible] = useState([false, false]);
  const [borderVisible, setBorderVisible] = useState(true);

  const lines = [
    { text: "Welcome to Interactive Algorithm Visualizations.", className: "line1" },
    { text: "Explore, Learn, and Master Algorithms through Engaging 3D Animations!!!", className: "line2" }
  ];

  useEffect(() => {
    setTimeout(() => setShowLines(true), 1000); 
    setTimeout(() => setShowText(true), 3000); 

    if (showText) {
      lines.forEach((line, index) => {
        setTimeout(() => {
          setLineVisible(prev => {
            const newVisibility = [...prev];
            newVisibility[index] = true;
            return newVisibility;
          });
        },500 * index); // Adjust timing as needed
      });

      setTimeout(() => setBorderVisible(false), 8000); // Adjust this timeout to match your typing animation duration
    }
  }, [showText]);

  return (
    <div className='bgimage'>
      <div className='title'>
        <h3 className="gradient-text" style={{ animation: showText ? 'text-appear 1s ease-in-out forwards' : 'none' }}>AlgoMination</h3>
        {showLines && (
          <div className='lines'>
            <div className="line top"></div>
            <div className="line bottom"></div>
            <div className="line left"></div>
            <div className="line right"></div>
          </div>
        )}
      </div>
      {showText && (
        <div className='content'>
          {lines.map((line, index) => (
            <p key={index} className={`typewriter ${lineVisible[index] ? 'visible' : 'hidden'} ${line.className} ${borderVisible ? '' : 'no-border'}`}>{line.text}</p>
          ))}
        </div>
      )}
      <button className='btn'>Get Started &gt;&gt;</button>
    </div>
  );
};

export default LandingPage;
