import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './AvatarViewer.css';

const AvatarViewer = ({ options }) => {
  const [avatarUrl, setAvatarUrl] = useState('');

  useEffect(() => {
    const fetchAvatar = async () => {
      try {
        const { hairstyle, clothing, glasses, shoes } = options;
        const response = await axios.get(
          `https://robohash.org/${hairstyle}-${clothing}-${glasses}-${shoes}.png`
        );
        setAvatarUrl(response.config.url);
      } catch (error) {
        console.error('Error fetching avatar:', error);
      }
    };

    fetchAvatar();
  }, [options]);

  return (
    <div className="avatar">
      {avatarUrl ? <img src={avatarUrl} alt="Avatar" /> : <p>Loading avatar...</p>}
    </div>
  );
};

export default AvatarViewer;
