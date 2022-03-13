import { IContentContext } from '../../contexts/content/types';

export const mockContentContext: IContentContext = {
  charityName: 'Noble Connection',
  contactNumber: '020 3633 8996',
  emailAddress: 'info@nobleconnection.co.uk',
  pages: {
    aboutUs: 'About Us',
    contactUs: 'Contact Us',
    donate: 'Donate',
  },
  links: {
    homePage: '/',
    aboutUs: '/about-us',
    contactUs: '/contact-us',
    donate: '/donate',
    facebook: 'https://www.facebook.com/noble.connection/',
    twitter: 'https://twitter.com/nobleconnection?lang=en',
    youtube:
      'https://www.youtube.com/channel/UCzVF8TF4o8wWSX3uNgSheFw/featured',
  },
  footer: {
    copyright: 'Copyright ©',
    charityRegistrationDetails: 'Charity Reg. No. 1186037',
    address: {
      registeredOfficeText: 'Registered Office',
      firstLine: '102 Islip Manor Road',
      town: 'Northolt',
      postcode: 'UB5 5EB',
      country: 'United Kingdom',
    },
  },
};
