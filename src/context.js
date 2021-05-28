import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';

const AppContext = React.createContext();

function AppProvider({ children }) {
  const [showNav, setShowNav] = useState(false);
  const [submenu, setSubmenu] = useState(false);
  const [location, setLocation] = useState({});

  const showSubMenu = (text, coordinate) => {
    setLocation(coordinate);
    setSubmenu(true);
  };
  console.log(location);
  return (
    <AppContext.Provider value={{ showNav, setShowNav, submenu, setSubmenu, showSubMenu, location }}>
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;

export { AppContext, AppProvider };

export const useGlobalContext = () => useContext(AppContext);

AppProvider.propTypes = PropTypes.element.isRequired;
