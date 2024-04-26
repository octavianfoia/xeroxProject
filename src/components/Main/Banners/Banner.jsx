/* eslint-disable react/prop-types */

import './Banner.scss';

export const Banner = ({ bannerTitle }) => {
  return (
    <div className="banner">
      <div className="background">
        <span className="text">{bannerTitle}</span>
      </div>
    </div>
  );
};
