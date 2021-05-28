import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';

const AppContext = React.createContext();

function AppProvider({ children }) {
  const [showNav, setShowNav] = useState(false);
  const [submenu, setSubmenu] = useState(false);
  return <AppContext.Provider value={{ showNav, setShowNav, submenu, setSubmenu }}>{children}</AppContext.Provider>;
}

export default AppProvider;

export { AppContext, AppProvider };

export const useGlobalContext = () => useContext(AppContext);

AppProvider.propTypes = PropTypes.element.isRequired;
