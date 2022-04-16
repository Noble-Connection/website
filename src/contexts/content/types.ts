export interface IPage {
  label: string;
  href: string;
}

export interface IContentContext {
  charityName: string;
  contactNumber: string;
  emailAddress: string;
  navigation: IPage[];
  links: {
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
