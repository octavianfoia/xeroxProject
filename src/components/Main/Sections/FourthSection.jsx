/* eslint-disable react/jsx-no-undef */
import { useState } from 'react';
import { Button } from '../../utils/Button';
import { Banner2 } from '../Banners/Banner2';
import './FourthSection.scss';
import { tableData } from '../../../tableData';
import { TabComponent } from '../../utils/TabComponent';
import { TabContent } from '../../utils/TabContent';

export const FourthSection = () => {
  const [tabContent, setTabContent] = useState('Governance');
  const [activeIndex, setIsActive] = useState(0);
  const handleSelect = (tabName, index) => {
    setTabContent(tabName);
    setIsActive(index);
    console.log(tabName);
  };
  return (
    <section id="section4" className="section4-container">
      <a
        className="a-banner"
        style={{ cursor: 'pointer' }}
        href="https://www.xerox.com/en-us/about/corporate-social-responsibility/report-archive">
        <div className="fourth-section-container">
          <Banner2
            bannerTitle="Take a look back at our past reports"
            bannerSubTitle="Past reports">
            <Button
              size="big"
              content="archive"
              hRef="https://www.xerox.com/en-us/about/corporate-social-responsibility/report-archive"
            />
          </Banner2>
        </div>
      </a>
      <div className="sub_container">
        <h2>Our Commitments</h2>
        <p>
          We fully embrace our social and environmental responsibilities, and we
          are committed to conducting business in ways that positively impact
          the world.
        </p>
        <div className="table_container">
          <div className="around">
            <menu className="table_menu">
              {tableData.map((elem, index) => (
                <TabComponent
                  isActive={activeIndex}
                  key={index}
                  keyItem={index}
                  data={elem}
                  onSelect={handleSelect}
                />
              ))}
            </menu>
            <TabContent
              data={
                tableData.filter(elem => elem.tabTitle === tabContent)[0]
                  .content
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
};
