import React from 'react';
import Home from './Home';
import Speakers from './Speakers';

export const ConfigContext = React.createContext();
// All we need to create shared context for the entire application. Hooks come in to 'consume' this app context.

const pageToShow = (pageName) => {
  if (pageName === 'Home') return <Home />;
  if (pageName === 'Speakers') return <Speakers />;
  return <div>Not Found</div>;
};

const configValue = {
  showSignMeUp: true,
  showSpeakerSpeakingDays: true,
};
// Below, we have wrapped our App component in a context provider and provided the configuration value above to it.
// Theoretically, this will allow us to use this value in any component below the app component. (Think the components list in DevTools)
const App = ({ pageName }) => {
  return (
    <ConfigContext.Provider value={configValue}>
      <div>{pageToShow(pageName)}</div>;
    </ConfigContext.Provider>
  );
};

export default App;
