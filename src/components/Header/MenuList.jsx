/* eslint-disable react/prop-types */
//import { FiPrinter } from 'react-icons/fi';
import './MenuList.scss';
import { useState, useEffect, useRef } from 'react';
import { Dropdown } from './Dropdown';

// eslint-disable-next-line react/prop-types
export const MenuList = ({ items, depthLevel }) => {
  const [dropdown, setDropdown] = useState(false);
  let ref = useRef();

  useEffect(() => {
    const handler = event => {
      if (dropdown && ref.current && !ref.current.contains(event.target)) {
        setDropdown(false);
      }
    };
    document.addEventListener('mousedown', handler);
    document.addEventListener('touchstart', handler);
    return () => {
      // Cleanup the event listener
      document.removeEventListener('mousedown', handler);
      document.removeEventListener('touchstart', handler);
    };
  }, [dropdown]);

  const onMouseEnter = () => {
    window.innerWidth > 960 && setDropdown(true);
  };

  const onMouseLeave = () => {
    window.innerWidth > 960 && setDropdown(false);
  };

  return (
    <li
      className="menu-items"
      ref={ref}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}>
      {items.submenu ? (
        <>
          <a
            type="button"
            aria-haspopup="menu"
            aria-expanded={dropdown ? 'true' : 'false'}
            onClick={() => setDropdown(prev => !prev)}>
            {items.title}{' '}
            {/* {depthLevel > 0 ? <span>&raquo;</span> : <span className="arrow" />} */}
          </a>
          <Dropdown
            depthLevel={depthLevel}
            submens={items.submenu}
            dropdown={dropdown}
          />
        </>
      ) : (
        <a href={items.link}>
          <div className="submenu-picture">
            {items.image && <img src={items.image}></img>}
            <p>{items.title}</p>
          </div>
        </a>
      )}
    </li>
  );
};
