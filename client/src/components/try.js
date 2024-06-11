// import { AvatarCreator, AvatarCreatorConfig, AvatarExportedEvent } from '@readyplayerme/react-avatar-creator';
// import { Avatar } from "@readyplayerme/visage";
// import { useState } from "react";

// const config: AvatarCreatorConfig = {
//   clearCache: true,
//   bodyType: 'fullbody',
//   quickStart: false,
//   language: 'en',
// };

// const style = { width: '100%', height: '100vh', border: 'none' };

// export default function Avat() {
//   const [avatarUrl, setAvatarUrl] = useState('');
//   const handleOnAvatarExported = (event: AvatarExportedEvent) => {
//     setAvatarUrl(event.data.url);
//   };

//   return (
//       <>
//         <AvatarCreator subdomain="demo" config={config} style={style} onAvatarExported={handleOnAvatarExported} />
//         {avatarUrl && <Avatar modelSrc={avatarUrl} />}
//       </>
//   );
// }
import { AvatarCreator, AvatarCreatorConfig, AvatarExportedEvent } from '@readyplayerme/react-avatar-creator';
import { Avatar } from "@readyplayerme/visage";
import { useState } from "react";
import axios from 'axios'; // Import Axios for making HTTP requests

const config: AvatarCreatorConfig = {
  clearCache: true,
  bodyType: 'fullbody',
  quickStart: false,
  language: 'en',
};

const style = { width: '100%', height: '100vh', border: 'none' };

export default function AvatarCreation() {
  const [avatarUrl, setAvatarUrl] = useState('');

  const handleOnAvatarExported = (event: AvatarExportedEvent) => {
    setAvatarUrl(event.data.url);
  };

  const handleSaveAvatar = async () => {
    // Send the generated avatar data to the backend
    try {
      await axios.post('YOUR_BACKEND_API_URL', { avatarUrl });
      alert('Avatar saved successfully!');
    } catch (error) {
      console.error('Error saving avatar:', error);
      alert('Failed to save avatar. Please try again.');
    }
  };

  return (
    <>
      <AvatarCreator subdomain="demo" config={config} style={style} onAvatarExported={handleOnAvatarExported} />
      {avatarUrl && <Avatar modelSrc={avatarUrl} />}
      <button onClick={handleSaveAvatar}>Save Avatar</button>
    </>
  );
}
