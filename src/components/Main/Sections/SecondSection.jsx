import { cardReportsData, cardNumbersData } from '../../../cardData';
import './SecondSection.scss';
import { Card } from '../Card Components/Card';
import { CardNumbers } from '../Card Components/CardNumbers';

export const SecondSection = () => {
  return (
    <section id="section2" className="second-section-container">
      <p className="paragraph">How We Report</p>
      <div className="cards-container">
        {cardReportsData.map((elem, index) => (
          <Card key={index} data={elem} buttonContent="Learn more" />
        ))}
      </div>
      <div className="cards-numbers-container">
        <p className="paragraph">At A Glance</p>
        <div className="grid-container">
          {cardNumbersData.map((elem, index) => (
            <CardNumbers key={index} data={elem} />
          ))}
        </div>
      </div>
    </section>
  );
};
