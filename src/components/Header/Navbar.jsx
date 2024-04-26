import './Navbar.scss';
import xeroxLogo from '../../assets/xerox_logo.png';
import { ImSearch } from 'react-icons/im';
import { menuList } from '../../menuList.js';
import { MenuList } from './MenuList.jsx';

export const Navbar = () => {
  return (
    <nav className="navbar">
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
        <div className="navbar-elements_search">
          <ImSearch />
        </div>
      </div>
    </nav>
  );
};
