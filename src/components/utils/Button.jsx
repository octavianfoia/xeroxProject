/* eslint-disable react/prop-types */
import './Button.scss';

export const Button = ({
  size = 'small',
  backgroundColor = 'primary',
  hRef = '/#',
  content = 'Learn more',
  customClass = '',
}) => {
  return (
    <button
      className={`button ${backgroundColor} ${size} ${customClass}`}
      onClick={() => {
        window.open(hRef, '_blank');
      }}>
      {content.toUpperCase()}
    </button>
  );
};
