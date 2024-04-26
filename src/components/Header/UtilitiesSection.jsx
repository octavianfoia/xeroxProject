import './UtilitiesSection.scss';
import { FiLogIn } from 'react-icons/fi';
import { RxGlobe } from 'react-icons/rx';
import { VscAccount } from 'react-icons/vsc';
import { PiBasket } from 'react-icons/pi';

export const UtilitiesSection = () => {
  return (
    <div className="header-utils">
      <div className="header-utils__inline">
        <a href="https://www.xerox.com/country-select">
          <RxGlobe />
          <p>United States</p>
        </a>
        <a href="https://www.accounts.xerox.com/auth/login.jsf?locale=en_US">
          <VscAccount />
          <p>Account</p>
        </a>
        <a href="https://www.accounts.xerox.com/auth/login.jsf?&locale=en_US">
          <FiLogIn />
          <p>Log In</p>
        </a>
        <a href="https://www.shop.xerox.com/?utm_source=xcom&utm_medium=referral&utm_campaign=header">
          <PiBasket />
          <p>Shop</p>
        </a>
      </div>
    </div>
  );
};
