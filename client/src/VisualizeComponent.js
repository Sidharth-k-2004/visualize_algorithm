import React, { useState, useEffect, useRef } from 'react';
import './VisualizeComponent.css';

const SelectionSortVisualizer = ({ array }) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [comparisonIndex, setComparisonIndex] = useState(null);
  const [sortedIndices, setSortedIndices] = useState([]);
  const [steps, setSteps] = useState([]);
  const intervalRef = useRef(null);
  const [highlightLine, setHighlightLine] = useState(null);

  useEffect(() => {
    const newSteps = generateSelectionSortSteps([...array]);
    setSteps(newSteps);
    setCurrentStep(0);
    setComparisonIndex(null);
    setSortedIndices([]);
    setHighlightLine(null);
  }, [array]);

  const generateSelectionSortSteps = (arr) => {
    let steps = [];
    let sorted = [];
    for (let i = 0; i < arr.length; i++) {
      let minIndex = i;
      for (let j = i + 1; j < arr.length; j++) {
        steps.push({ array: [...arr], indices: [j, minIndex], line: 3 });
        if (arr[j] < arr[minIndex]) {
          minIndex = j;
        }
      }
      if (minIndex !== i) {
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
        steps.push({ array: [...arr], indices: [i, minIndex], line: 5 });
      }
      sorted.push(i);
      steps.push({ array: [...arr], sorted: [...sorted], line: 2 });
    }
    return steps;
  };

  const startAnimation = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      setCurrentStep((prevStep) => {
        if (prevStep < steps.length - 1) {
          setComparisonIndex(prevIndex => prevIndex !== null ? prevIndex + 1 : 0);
          setHighlightLine(steps[prevStep].line);
          setSortedIndices(steps[prevStep].sorted || []);
          return prevStep + 1;
        } else {
          clearInterval(intervalRef.current);
          setComparisonIndex(null);
          setHighlightLine(null);
          setSortedIndices(steps[prevStep].sorted || []);
          return prevStep;
        }
      });
    }, 1000); // Adjust the speed by changing the interval (in milliseconds)
  };

  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div className="sort-visualizer">
      <div className="array-container">
        {steps.length > 0 && steps[currentStep].array.map((value, index) => (
          <div
            className={`array-bar ${
              steps[currentStep].indices && (index === steps[currentStep].indices[0] || index === steps[currentStep].indices[1])
                ? 'comparison'
                : sortedIndices.includes(index)
                ? 'sorted'
                : ''
            }`}
            key={index}
            style={{
              height: `${value * 20}px`,
            }}
          >
            {value}
          </div>
        ))}
      </div>
      <button onClick={startAnimation} className="start-button">Start</button>
    </div>
  );
};

export default SelectionSortVisualizer;
