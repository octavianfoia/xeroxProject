// import { FiPrinter } from 'react-icons/fi';
import Printer from './assets/printer.svg';
import Laser from './assets/printer-laser.svg';
import MFPrinter from './assets/printer-mfp.svg';
import AllPrinters from './assets/printer-all.svg';
import SeacrhPrinters from './assets/search-printers.svg';

export const bannerContent = `Behaving responsibly as a global citizen is an inextricable part of
our heritage, and we uphold the highest ideals of integrity,
innovation and excellence in all we do. We turn investments in
innovation into technology and services that help our customers be
more productive, profitable and sustainable. We do this with the same
core values our founder established decades ago. Learn more about how
we conduct business ethically and in an environmentally and socially
conscious manner to help our customers, empower our people, and
protect our planet.`;

export const menuList = [
  //*Printers & Supplies
  {
    title: 'Printers & Supplies',
    submenu: [
      {
        title: 'Printers',
        submenu: [
          {
            title: 'Home Office Printers',
            link: 'https://www.xerox.com/en-us/office/home-office-printers',
            image: Printer,
          },
          {
            title: 'Office Laser Printers',
            link: 'https://www.xerox.com/en-us/office/printers',
            image: Laser,
          },
          {
            title: 'Multifunction/All-in-One Printers',
            link: 'https://www.xerox.com/en-us/office/multifunction-printers',
            image: MFPrinter,
          },
          {
            title: 'Digital Sheet-fed Printing Presses',
            link: 'https://www.xerox.com/en-us/digital-printing/digital-presses',
            image: MFPrinter,
          },
          {
            title: 'All Printers',
            link: 'https://www.xerox.com/en-us/printing-equipment',
            image: AllPrinters,
          },
          {
            title: 'Product Finder',
            link: 'https://www.xerox.com/en-us/product-finder',
            image: SeacrhPrinters,
          },
        ],
      },
      {
        title: 'Printer Supplies',
        submenu: [
          {
            title: 'Supplies Finder',
            link: 'https://www.xerox.com/en-us/printer-supplies',
          },
          {
            title: 'Metered Supplies Log-in',
            link: 'https://www.accounts.xerox.com/auth/login.jsf?app=MYS&locale=en_US',
          },
          {
            title: 'Everyday Toner for non-Xerox printers',
            link: 'https://www.xerox.com/en-us/about/corporate-social-responsibility#:~:text=Everyday%20Toner%20for%20non%2DXerox%20printers',
          },
          {
            title: 'Check Your Order Status',
            link: 'https://www.accounts.xerox.com/auth/login.jsf?app=OSF&locale=en_US',
          },
          {
            title: 'Recycle Xerox Supplies',
            link: 'https://www.xerox.com/en-us/about/recycling-toner-and-cartridges',
          },
          {
            title: 'Shop online',
            link: 'https://www.shop.xerox.com/?utm_source=xcom&utm_medium=referral&utm_campaign=flyout',
          },
          { title: 'Scanners', link: 'https://www.xeroxscanners.com/en/us' },
        ],
      },
    ],
  },
  //*Solutions & Services
  {
    title: 'Solutions & Services',
    submenu: [
      {
        title: 'Featured Software',
        submenu: [
          {
            title: 'All Featured Software',
            link: 'https://www.xerox.com/en-us/smarter-workflow-management-software',
          },
          {
            title: 'Print Management Software',
            link: 'https://www.xerox.com/en-us/office/software-solutions',
          },
          {
            title: 'Workplace Solutions',
            link: 'https://www.xerox.com/en-us/office/print-management-solutions',
          },
          {
            title: 'Print Production Workflow Software',
            link: 'https://www.xerox.com/en-us/digital-printing/workflow',
          },
          {
            title: 'XMPie Personalization Software',
            link: 'https://www.xerox.com/en-us/digital-printing/workflow-software/printing-software/xmpie-personalized-communication-software',
          },
          {
            title: 'DocuShare Enterprise Content Management',
            link: 'https://www.xerox.com/en-us/services/enterprise-content-management',
          },
          {
            title: 'CareAR Remote AR Support',
            link: 'https://www.xerox.com/en-us/innovation/remote-augmented-reality-support',
          },
          {
            title: 'Content Hub',
            link: 'https://www.xerox.com/en-us/office/software-solutions/content-hub',
          },
          {
            title: 'Workflow Central',
            link: 'https://www.xerox.com/en-us/office/software-solutions/workflow-central',
          },
        ],
      },
      {
        title: 'Office Printing Solutions',
        submenu: [
          {
            title: 'Office Printing Solutions Overview',
            link: 'https://www.xerox.com/en-us/office',
          },
          {
            title: 'Office Workflow Solutions',
            link: 'https://www.xerox.com/en-us/office/office-workflow-solutions',
          },
          {
            title: 'Print Management Software',
            link: 'https://www.xerox.com/en-us/office/software-solutions',
          },
          {
            title: 'ConnectKey Technology',
            link: 'https://www.xerox.com/en-us/connectkey',
          },
          {
            title: 'Workflow Apps',
            link: 'https://www.xerox.com/en-us/connectkey/workplace-apps',
          },
          {
            title: 'Mobile Solutions',
            link: 'https://www.xerox.com/en-us/office/mobile-solutions',
          },
        ],
      },
      {
        title: 'Industry',
        submenu: [
          {
            title: 'Education',
            link: 'https://www.xerox.com/en-us/services/education-solutions',
          },
          {
            title: 'Financial Services',
            link: 'https://www.xerox.com/en-us/services/financial-solutions',
          },
          {
            title: 'Government',
            link: 'https://www.xerox.com/en-us/services/government-solutions',
          },
          {
            title: 'Healthcare',
            link: 'https://www.xerox.com/en-us/services/healthcare-solutions',
          },
          {
            title: 'Legal',
            link: 'https://www.xerox.com/en-us/services/legal-solutions',
          },
          {
            title: 'Retail',
            link: 'https://www.xerox.com/en-us/services/retail-business-solutions',
          },
        ],
      },
      { title: 'Global Document Services', link: '' },
      { title: 'Production Print Solutions', link: '' },
      { title: 'Small and Medium Business Solutions', link: '' },
      { title: 'IT Services', link: '' },
      { title: 'Robotic Process Automation', link: '' },
      { title: 'Insights', link: '' },
    ],
  },
  //*Customer Support
  {
    title: 'Customer Support',
    submenu: [
      {
        title: 'All Support and Drivers',
        submenu: [
          {
            title: 'Support and Drivers',
            link: 'https://www.support.xerox.com/en-us',
          },
          {
            title: 'Register your product',
            link: 'https://www.office.xerox.com/cgi-bin/dispatch_reg.pl?locale=en_US',
          },
          {
            title: 'Printer Security',
            link: 'https://security.business.xerox.com/en-us/',
          },
        ],
      },
      {
        title: 'MySupport',
        link: 'https://www.xerox.com/en-us/about/my-support',
      },
      {
        title: 'Support Community Forum',
        link: 'https://forum.support.xerox.com/',
      },
      {
        title: 'Contact Us',
        link: 'https://www.xerox.com/en-us/about/contact-us',
      },
    ],
  },
  {
    title: 'Partners',
    submenu: [
      {
        title: 'Sell Xerox products and services',
        link: '',
      },
      {
        title: 'Log in to your partner portal',
        link: '',
      },
      {
        title: 'Buy products and services',
        link: '',
      },
    ],
  },
];
