/* eslint-disable react/prop-types */

import './TabComponent.scss';
export const TabComponent = ({ data, keyItem, onSelect, isActive }) => {
  return (
    <li
      className={`list-item ${isActive === keyItem ? 'active' : ''}`}
      key={keyItem}>
      <button
        className={isActive === keyItem ? 'active' : ''}
        onClick={() => {
          onSelect(data.tabTitle, keyItem);
        }}>
        {data.tabTitle}
      </button>
    </li>
  );
};
