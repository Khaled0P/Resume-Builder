export const personalFieldInfo = [
  { name: 'Full name', id: 'name', type: 'text', required: true },
  { name: 'Email', id: 'email', type: 'email' },
  { name: 'Phone number', id: 'phone', type: 'text' },
  { name: 'Address', id: 'address', type: 'text' },
];

export const educationFieldInfo = [
  { name: 'Institution', id: 'institution', type: 'text', required: true },
  { name: 'Degree', id: 'degree', type: 'text', required: true },
  { name: 'Start date', id: 'degreeStartDate', type: 'month' },
  { name: 'End date', id: 'degreeEndDate', type: 'month' },
];

export const experienceFieldInfo = [
  { name: 'Company', id: 'company', type: 'text', required: true },
  { name: 'Position', id: 'position', type: 'text', required: true },
  { name: 'Start date', id: 'startDate', type: 'month' },
  { name: 'End date', id: 'endDate', type: 'month' },
  { name: 'Location', id: 'location', type: 'text' },
  { name: 'Description', id: 'description', type: 'textarea' },
];

export const defaulTemp = {
  name: 'John Smith',
  email: 'maxmlller12@gmall.com',
  phone: '07123456789',
  address: 'London, UK',
};

export const defaultEducation = [
  {
    degree: 'Bachelors in Economics',
    institution: 'London City University',
    universityLocation: 'New York City, US',
    degreeStartDate: '08/2020',
    degreeEndDate: 'present',
  },
];
export const defaultExperience = [
  {
    jobTitle: 'UX & UI Designer',
    jobOrganization: 'Umbrella Inc.',
    jobLocation: 'New York City, US',
    jobDescription: `Designed and prototyped user interface patterns for various
                        clients in various industries, ranging from self-service apps
                        within the telecommunications-sector to mobile games for IOS and
                        Android`,
    jobStartDate: '08/2020',
    jobEndtDate: 'present',
  },
  {
    jobTitle: 'Research Assistant',
    jobOrganization: 'Black Mesa Labs',
    jobLocation: 'New York City, US',
    jobDescription: `Supported senior researchers on accessibility standards for the
                         open web. Created and usability tested wireframes and
                         prototypes. Produced interactive documentation for quick
                         onboarding of new researchers.`,
    jobStartDate: '04/2018',
    jobEndtDate: '02/2019',
  },
];
