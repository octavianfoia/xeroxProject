/* eslint-disable react/prop-types */
// import { cardReportsData } from '../../cardData';
import './Card.scss';

import Booklet from '../../../assets/booklet.svg';
import { Button } from '../../utils/Button';

export const Card = ({ data, buttonContent }) => {
  return (
    <div className="card-container">
      <a href={data.address ? `${data.address}` : '/#'}>
        <div className="image-container">
          <img src={Booklet} alt="Booklet" />
        </div>
        <h3>{data.title}</h3>
        <p>{data.content}</p>
        <Button content={buttonContent} customClass="abutton" />
      </a>
    </div>
  );
};
