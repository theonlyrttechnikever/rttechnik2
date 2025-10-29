export interface TeamMember {
  id: string;
  namePl: string;
  nameEn: string;
  titlePl: string;
  titleEn: string;
  email?: string;
  phone?: string;
  image: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: '1',
    namePl: 'Bernhard Zach',
    nameEn: 'Bernhard Zach',
    titlePl: 'Prezes Zarządu',
    titleEn: 'President of the Board',
    email: 'zach@rttechnik.com',
    phone: '+48 604 776 066',
    image: '/teamMembers/Bernhard Zach.png'
  },
  {
    id: '2',
    namePl: 'mgr inż. Michał Krajka',
    nameEn: 'Michał Krajka, M.Sc. Eng.',
    titlePl: 'Dyrektor Operacyjny',
    titleEn: 'Chief Operating Officer (COO)',
    email: 'krajka@rttechnik.com',
    phone: '+48 784 487 676',
    image: '/teamMembers/Michal Krajka.png'
  },
  {
    id: '3',
    namePl: 'mgr inż. Mariusz Szafrański',
    nameEn: 'Mariusz Szafrański, M.Sc. Eng.',
    titlePl: 'Kierownik Kontraktu',
    titleEn: 'Contract Manager',
    email: 'szafranski@rttechnik.com',
    phone: '+48 606 614 264',
    image: '/teamMembers/Mariusz Szafrański.png'
  },
  {
    id: '4',
    namePl: 'mgr inż. Marcin Jeszka',
    nameEn: 'Marcin Jeszka, M.Sc. Eng.',
    titlePl: 'Kierownik Projektu',
    titleEn: 'Project Manager',
    email: 'jeszka@rttechnik.com',
    phone: '+48 608 589 442',
    image: '/teamMembers/Marcin Jeszka.png'
  },
  {
    id: '5',
    namePl: 'Kamil Szelejewski',
    nameEn: 'Kamil Szelejewski',
    titlePl: 'Projektant',
    titleEn: 'Designer',
    email: 'szelejewski@rttechnik.com',
    phone: '+48 608 582 752',
    image: '/teamMembers/Kamil Szelejewski.png'
  },
  {
    id: '6',
    namePl: 'Leszek Szelejewski',
    nameEn: 'Leszek Szelejewski',
    titlePl: 'Kierownik Montażu',
    titleEn: 'Assembly Manager',
    phone: '+48 604 101 743',
    image: '/teamMembers/Leszek Szelejewski.png'
  },
  {
    id: '7',
    namePl: 'Joanna Kavu',
    nameEn: 'Joanna Kavu',
    titlePl: 'Kierownik ds. Rozwoju',
    titleEn: 'Business Development Manager',
    email: 'kavu@rttechnik.com',
    phone: '+48 602 118 553',
    image: '/teamMembers/Joanna Kavu.png'
  }
];