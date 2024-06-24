import './MainPage.css';
import SelectionSortVisualizer from './VisualizeComponent';
import React, { useState } from 'react';

const MainPage = () => {
  const [currentAlgo, setCurrentAlgo] = useState('Select Algorithm');
  const [currentLanguage, setCurrentLanguage] = useState('Select Language');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [customArray, setCustomArray] = useState([4, 5, 1, 2, 7, 6, 8]);
  const [inputValues, setInputValues] = useState('');

  const handleAlgoChange = (event) => {
    setCurrentAlgo(event.target.value);
  };

  const handleLanguageChange = (event) => {
    setCurrentLanguage(event.target.value);
  };

  const handleCustomizeClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleInputChange = (event) => {
    setInputValues(event.target.value);
  };

  const handleSubmit = () => {
    const valuesArray = inputValues.split(',').map(Number);
    setCustomArray(valuesArray);
    setIsModalOpen(false);
  };

  return (
    <div className="App">
      <header className="header">
        <button className="nav-button"><i className="fa fa-home" aria-hidden="true"></i></button>
        <h1 className="current-algo">{currentAlgo}</h1>
        <button className="profile-button"><i className="fa fa-user-circle-o" aria-hidden="true"></i></button>
      </header>
      <div className="container">
        <div className="left-container">
          <div className="top-section">
            <select className="algo-dropdown" onChange={handleAlgoChange}>
              <option>Select Algorithm</option>
              <option>Selection sorting</option>
              <option>Binary sorting</option>
              <option>insertion sorting</option>
              <option>merge sorting</option>
              <option>dijstra's shortest path</option>
            </select>
            <button className="customize-button" onClick={handleCustomizeClick}>
              Customize
            </button>
          </div>
          <div className="animation-section">
            <SelectionSortVisualizer array={customArray} />
          </div>
        </div>
        <div className="right-container">
          <div className="top-section">
            <select className="language-dropdown" onChange={handleLanguageChange}>
              <option>Select Language</option>
              <option>Python</option>
              <option>C</option>
              <option>Java</option>
              <option>C++</option>
              <option>Rust</option>
              <option>Go</option>
            </select>
            <div className="algo-description">
              description
            </div>
          </div>
          <div className="code-section">
            <pre className="code">
              
              <code>
{`function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }
  return arr;
}`}
              </code>
            </pre>
            <div className="tracker">
              {/* Tracker to track each movement according to the animation */}
            </div>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>&times;</span>
            <h2>Customize Array</h2>
            <input
              type="text"
              value={inputValues}
              onChange={handleInputChange}
              placeholder="Enter values separated by commas"
            />
            <button onClick={handleSubmit}>Submit</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default MainPage;
