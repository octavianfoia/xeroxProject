import { Button } from '../../utils/Button';
import './DivSubCarduriCuMov.scss';

export const DivSubCarduriCuMov = () => {
  return (
    <div className="big-container">
      <div className="text-container">
        <h2>Highlights & Awards</h2>
        <p>Making history for more than 100 years.</p>
        <Button size="big" />
      </div>
      <div className="text-container">
        <h2>Diversity, Inclusion & Belonging</h2>
        <p>Making this a better planet for everyone for more than 50 years.</p>
        <Button content="See how" size="big" />
      </div>
    </div>
  );
};
