import React from 'react';
import ReactDOM from 'react-dom';
import { FaTimes } from 'react-icons/fa';
import { useGlobalContext } from '../context';

function Sidebar() {
  const { showNav, setShowNav } = useGlobalContext();
  return ReactDOM.createPortal(
    <aside className="Sidebar">
      <div className={showNav ? 'sidebar-warpper show' : 'sidebar-warpper'}>
        <aside className="modal-container">
          <button type="button" className="close-btn" onClick={() => setShowNav(false)}>
            <FaTimes />
          </button>
        </aside>
      </div>
    </aside>,

    document.querySelector('#modal')
  );
}

export default Sidebar;
