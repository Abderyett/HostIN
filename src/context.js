import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import data from './data';

const AppContext = React.createContext();

function AppProvider({ children }) {
  const [showNav, setShowNav] = useState(false);
  const [submenu, setSubmenu] = useState(false);
  const [location, setLocation] = useState({});
  const [position, setPosition] = useState({});
  const [cityName, setCityName] = useState('');
  const [showcity, setShowcity] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [tld, setTld] = useState('');

  const [subMenuPage, setsubMenuPage] = useState({ page: '', links: [] });

  const showSubMenu = (text, coordinate) => {
    const page = data.find((link) => link.page === text);
    setsubMenuPage(page);
    setLocation(coordinate);
    setSubmenu(true);
  };

  return (
    <AppContext.Provider
      value={{
        showNav,
        setShowNav,
        submenu,
        setSubmenu,
        showSubMenu,
        location,
        subMenuPage,
        position,
        setPosition,
        cityName,
        setCityName,
        showcity,
        setShowcity,
        searchTerm,
        setSearchTerm,
        tld,
        setTld,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;

export { AppContext, AppProvider };

export const useGlobalContext = () => useContext(AppContext);

AppProvider.propTypes = PropTypes.element.isRequired;
