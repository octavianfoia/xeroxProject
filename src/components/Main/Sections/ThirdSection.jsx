/* eslint-disable react/prop-types */
import './ThirdSection.scss';
import { cardRecognition } from '../../../cardData';
import { CardRecognition } from '../Card Components/CardRecognition';
import { DivSubCarduriCuMov } from '../Card Components/DivSubCarduriCuMov';
export const ThirdSection = () => {
  return (
    <section id="section3" className="cards-third-container">
      <p className="paragraph">Recognition</p>
      <div className="cards-container">
        {cardRecognition.map((elem, index) => (
          <CardRecognition key={index} data={elem} buttonContent="Learn more" />
        ))}
      </div>
      <DivSubCarduriCuMov />
    </section>
  );
};
