/* eslint-disable react/prop-types */
import './TabContent.scss';

export const TabContent = ({ data }) => {
  console.log(data);
  return (
    <ul className="content-container">
      {data.map((elem, index) => (
        <a key={index} href={elem.href}>
          <li>{elem.text}</li>
        </a>
      ))}
    </ul>
  );
};
