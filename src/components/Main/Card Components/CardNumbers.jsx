/* eslint-disable react/prop-types */
import './CardNumbers.scss';

export const CardNumbers = ({ data }) => {
  return (
    <div className="grid-item">
      <h3>{data.score}</h3>
      <p>{data.content}</p>
    </div>
  );
};
