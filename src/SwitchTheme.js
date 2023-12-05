import React from 'react';
import ThemeSwitcher from './ThemeSwitcher';

const themes = [
  { background: '#282c34', text: '#ffffff' },
  { background: '#61dafb', text: '#000000' },
  // Add more themes as needed
];

const App = () => {
  return (
    <div>
      {/* Other components */}
      <ThemeSwitcher themes={themes} />
      {/* Other components */}
    </div>
  );
};

export default App;