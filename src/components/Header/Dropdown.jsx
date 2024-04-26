/* eslint-disable react/prop-types */
import { MenuList } from './MenuList.jsx';
import './Dropdown.scss';

export const Dropdown = ({ submens, dropdown, depthLevel }) => {
  depthLevel = depthLevel + 1;
  const dropDownClass = depthLevel > 1 ? 'dropdown-submenu' : '';
  return (
    <ul className={`dropdown ${dropDownClass} ${dropdown ? 'show' : ''}`}>
      {submens.map((submenu, index) => (
        <MenuList items={submenu} key={index} depthLevel={depthLevel} />
      ))}
    </ul>
  );
};
