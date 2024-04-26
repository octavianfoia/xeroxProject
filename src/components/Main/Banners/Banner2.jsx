/* eslint-disable react/prop-types */
import './Banner2.scss';

export const Banner2 = ({ bannerTitle, bannerSubTitle, children }) => {
  return (
    <div className="banner2">
      <div className="background">
        <span className="subtext">{bannerSubTitle}</span>
        <span className="text">{bannerTitle}</span>
        {children}
      </div>
    </div>
  );
};
