import './Navbar.scss';
import { useState, useEffect, useRef } from 'react';
import xeroxLogo from '../../assets/xerox_logo.png';
import { ImSearch } from 'react-icons/im';
import { menuList } from '../../menuList.js';
import { MenuList } from './MenuList.jsx';

export const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);
  let navbarRef = useRef();

  useEffect(() => {
    let handler = e => {
      if (!navbarRef.current.contains(e.target)) {
        setShowSearch(false);
      }
    };
    document.addEventListener('mousedown', handler);

    return () => {
      document.removeEventListener('mousedown', handler);
    };
  });
  return (
    <nav ref={navbarRef} className="navbar">
      <div className="navbar-elements">
        <a href="">
          <div className="navbar-elements_logo">
            <img
              style={{
                maxWidth: '145px',
                maxHeight: '30px',
                width: 'auto',
                height: 'auto',
              }}
              src={xeroxLogo}
              alt="Xerox logo"
            />
          </div>
        </a>
        <ul className="navbar-elements_categories">
          {menuList.map((menu, index) => {
            const depthLevel = 0;
            return (
              <MenuList items={menu} key={index} depthLevel={depthLevel} />
            );
          })}
        </ul>
        <div
          style={{ cursor: 'pointer' }}
          onClick={() => setShowSearch(prev => !prev)}
          className="navbar-elements_search">
          <ImSearch />
        </div>
      </div>
      {showSearch && (
        <div className="search-container">
          <p>Search</p>
          <div className="search-bar">
            <input type="text-area" />
          </div>
        </div>
      )}
    </nav>
  );
};
