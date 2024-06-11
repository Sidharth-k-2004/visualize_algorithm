import React, { useState } from 'react';
import AvatarViewer from './AvatarViewer';
import './AvatarCreator.css';

const AvatarCreator = () => {
  const [options, setOptions] = useState({
    hairstyle: 'short',
    clothing: 'casual',
    glasses: 'none',
    shoes: 'sneakers'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOptions((prevOptions) => ({ ...prevOptions, [name]: value }));
  };

  return (
    <div className="avatar-creator">
      <h2>Customize Your Avatar</h2>
      <div className="avatar-viewer">
        <AvatarViewer options={options} />
      </div>
      <div className="customize-options">
        <label>
          Hairstyle:
          <select name="hairstyle" value={options.hairstyle} onChange={handleChange}>
            <option value="short">Short</option>
            <option value="long">Long</option>
            <option value="bun">Bun</option>
          </select>
        </label>

        <label>
          Clothing:
          <select name="clothing" value={options.clothing} onChange={handleChange}>
            <option value="casual">Casual</option>
            <option value="formal">Formal</option>
            <option value="sporty">Sporty</option>
          </select>
        </label>

        <label>
          Glasses:
          <select name="glasses" value={options.glasses} onChange={handleChange}>
            <option value="none">None</option>
            <option value="round">Round</option>
            <option value="square">Square</option>
          </select>
        </label>

        <label>
          Shoes:
          <select name="shoes" value={options.shoes} onChange={handleChange}>
            <option value="sneakers">Sneakers</option>
            <option value="boots">Boots</option>
            <option value="sandals">Sandals</option>
          </select>
        </label>
      </div>
    </div>
  );
};

export default AvatarCreator;
