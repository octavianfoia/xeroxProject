/* eslint-disable react/prop-types */
import { Button } from '../../utils/Button';
import './CardRecognition.scss';

export const CardRecognition = ({ data, buttonContent }) => {
  return (
    <div className="card-container2">
      <a href={data.address ? `${data.address}` : '/#'}>
        <img src={data.image} alt="Image" />
        <h3>{data.title}</h3>
        <p>{data.content}</p>
        <Button content={buttonContent} customClass="abuttonn " />
      </a>
    </div>
  );
};
