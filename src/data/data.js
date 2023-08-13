export const personalFieldInfo = [
  { name: 'Full name', id: 'name', type: 'text', required: true },
  { name: 'Email', id: 'email', type: 'email' },
  { name: 'Phone number', id: 'phone', type: 'text' },
  { name: 'Address', id: 'address', type: 'text' },
];

export const educationFieldInfo = [
  { name: 'Institution', id: 'institution', type: 'text', required: true },
  { name: 'Degree', id: 'degree', type: 'text', required: true },
  { name: 'Start date', id: 'startDate', type: 'date' },
  { name: 'End date', id: 'endDate', type: 'date' },
];

export const experienceFieldInfo = [
  { name: 'Company', id: 'company', type: 'text', required: true },
  { name: 'Position', id: 'position', type: 'text', required: true },
  { name: 'Start date', id: 'startDate', type: 'date' },
  { name: 'End date', id: 'endDate', type: 'date' },
  { name: 'Location', id: 'location', type: 'text' },
  { name: 'Description', id: 'description', type: 'textarea' },
];

export const defaulTemp = {
  name: 'John Smith',
  email: 'maxmlller12@gmall.com',
  phone: '07123456789',
  address: 'London, UK',
  degree: 'Bachelors in Economics',
  university: 'London City University',
  universityLocation: 'New York City, US',
  degreeStartDate: '08/2020',
  degreeEndDate: 'present',

  firstJobTitle: 'UX & UI Designer',
  firstJobOrganization: 'Umbrella Inc.',
  firstJobLocation: 'New York City, US',
  firstJobDescription: `Designed and prototyped user interface patterns for various
                        clients in various industries, ranging from self-service apps
                        within the telecommunications-sector to mobile games for IOS and
                        Android`,
  firstJobStartDate: '08/2020',
  firstJobEndtDate: 'present',

  secondJobTitle: 'Research Assistant',
  secondJobOrganization: 'Black Mesa Labs',
  secondJobLocation: 'New York City, US',
  secondJobDescription: `Supported senior researchers on accessibility standards for the
                         open web. Created and usability tested wireframes and
                         prototypes. Produced interactive documentation for quick
                         onboarding of new researchers.`,
  secondJobStartDate: '04/2018',
  secondJobEndtDate: '02/2019',
};
