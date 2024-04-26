/* eslint-disable react/prop-types */
import { Button } from '../../utils/Button';
import './FirstSection.scss';

export const FirstSection = ({
  bannerSubTitle,
  bannerSecondSubtitle,
  bannerContent,
}) => {
  return (
    <section id="section1" className="content">
      <p className="paragraph">{bannerContent}</p>
      <div className="subtitle-container">
        <p>{bannerSubTitle}</p>
        <div className="subtitle-buttons_container">
          <Button
            className="button-centered"
            size="big"
            hRef="https://www.xerox.com/downloads/usa/en/x/Xerox_CSR_Report.pdf"
            content="Csr annual report"
          />
          <Button
            className="button-centered"
            size="big"
            hRef="https://www.xerox.com/downloads/usa/en/c/corporate-social-responsibility-progress-summary.pdf"
            content="Progress summary"
          />
        </div>
      </div>
      <div className="second-container">
        <p>{bannerSecondSubtitle}</p>
        <p className="small-paragraph">
          Xerox assesses corporate social responsibility topics that are
          important to our stakeholders and those where we can have the greatest
          economic, social, and environmental impact at local, regional, and
          global levels. We update our materiality assessment every two to three
          years on average. In 2023, Xerox engaged a third party to lead us
          through a double materiality impact assessment See detailed
          information about the process, the list of material topics and key
          insights and observations.
        </p>
        <Button
          content="Learn more"
          hRef="https://www.xerox.com/downloads/usa/en/m/Materiality-Matrix.pdf"
        />
      </div>
      <hr style={{ width: '90%', margin: '0 auto' }}></hr>
    </section>
  );
};
