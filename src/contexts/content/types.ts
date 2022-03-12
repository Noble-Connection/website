export interface IContentContext {
  charityName: string;
  contactNumber: string;
  emailAddress: string;
  pages: {
    aboutUs: string;
    contactUs: string;
    donate: string;
  };
  links: {
    homePage: string;
    aboutUs: string;
    contactUs: string;
    donate: string;
    facebook: string;
    twitter: string;
    youtube: string;
  };
  footer: {
    copyright: string;
    charityRegistrationDetails: string;
    address: {
      registeredOfficeText: string;
      firstLine: string;
      town: string;
      postcode: string;
      country: string;
    };
  };
}
