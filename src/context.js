import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import data from './data';

const AppContext = React.createContext();

function AppProvider({ children }) {
  const [showNav, setShowNav] = useState(false);
  const [submenu, setSubmenu] = useState(false);
  const [location, setLocation] = useState({});
  const [subMenuPage, setsubMenuPage] = useState({ page: '', links: [] });

  const showSubMenu = (text, coordinate) => {
    const page = data.find((link) => link.page === text);
    setsubMenuPage(page);
    setLocation(coordinate);
    setSubmenu(true);
  };

  return (
    <AppContext.Provider value={{ showNav, setShowNav, submenu, setSubmenu, showSubMenu, location, subMenuPage }}>
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;

export { AppContext, AppProvider };

export const useGlobalContext = () => useContext(AppContext);

AppProvider.propTypes = PropTypes.element.isRequired;
