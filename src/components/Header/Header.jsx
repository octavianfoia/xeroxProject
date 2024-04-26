/* eslint-disable react/jsx-no-undef */
import './Header.scss';
import { Navbar } from './Navbar';
import { Banner } from '../Main/Banners/Banner';
import { UtilitiesSection } from './UtilitiesSection';
import { FirstSection } from '../Main/Sections/FirstSection';
import { bannerContent } from '../../menuList';
import { SecondSection } from '../Main/Sections/SecondSection';
import { ThirdSection } from '../Main/Sections/ThirdSection';
import { FourthSection } from '../Main/Sections/FourthSection';

export const Header = () => {
  return (
    <div>
      <header className="header">
        <UtilitiesSection />
        <Navbar />
      </header>
      <Banner bannerTitle="Corporate Social Responsibility" />
      <FirstSection
        bannerSubTitle="Corporate Social Responsibility Report"
        bannerSecondSubtitle="Materiality at Xerox"
        bannerContent={bannerContent}
      />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
    </div>
  );
};
