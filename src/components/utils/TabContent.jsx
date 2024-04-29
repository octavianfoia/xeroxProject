/* eslint-disable react/prop-types */
import './TabContent.scss';

export const TabContent = ({ data }) => {
  return (
    <ul className="fourth-content-container">
      {data.map((elem, index) => (
        <a className="fourth-section-a-tag" key={index} href={elem.href}>
          <li>{elem.text}</li>
        </a>
      ))}
    </ul>
  );
};
