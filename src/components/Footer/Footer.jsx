import { footerData } from '../../footerData';
import { TabElement } from './TabElement';
import './Footer.scss';

export const Footer = () => {
  return (
    <footer>
      <div className="table-container">
        {footerData.map((elem, index) => (
          <TabElement key={index} data={elem} />
        ))}
      </div>
      <ul className="usefull-links">
        {footerData
          .filter(elem => elem.target === 'useful-links')[0]
          .content.map((elem, index) => (
            <li key={index}>
              <a href={elem.href}>{elem.title}</a>
            </li>
          ))}
      </ul>
      <p className="credits">
        © 1986 - 2024 Xerox Corporation. All rights reserved. Xerox® is a
        trademark of Xerox Corporation in the United States and/or other
        countries.
      </p>
    </footer>
  );
};
