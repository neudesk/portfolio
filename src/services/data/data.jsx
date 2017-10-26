import * as colors from 'material-ui/styles/colors';

export const BasicInfo = {
  firstName: 'Jonathan',
  lastName: 'Canaveral'
};

export const JobTitles = ['ruby developer.', 'reactJS developer.', 'angularJS developer.', 'nodeJS express developer.'];
export const Overview = `Hello everyone, my name is Jonathan Senence Canaveral. I am from the Philippines.<br />
                         I'm an experienced fullstack software engineer specialize in web based related products. I started coding since 2008.<br />
                         During these years, I worked with awesome teams and projects. Please check my <a href="javascript:void(0)">portfolio</a> for my past and current projects.<br />
                         I'm a team player and a problem solver. If you find me interesting to your project, please feel free to contact me <a href="javascript:void(0)">here</a>.`

export const Employment = [
  {
    company: 'Crossover For Work',
    position: 'Ruby on Rails Architect',
    startDate: 'August 24, 2016',
    endDate: 'present',
    icon: '/assets/images/company_logos/crossover.png',
    banner: '/assets/images/company_banners/crossover.png',
    body: ``
  },
  {
    company: 'Asseteq',
    position: 'Software Engineer',
    startDate: 'May 25, 2015',
    endDate: 'October 20, 2017',
    icon: '/assets/images/company_logos/asseteq.png',
    banner: '/assets/images/company_banners/asseteq.png',
    body: ``
  },
  {
    company: 'Rentsurveyor',
    position: 'Ruby on Rails Developer',
    startDate: 'January 6, 2016',
    endDate: 'July 27, 2016',
    icon: '/assets/images/company_logos/rentsurveyor.png',
    banner: '/assets/images/company_banners/rentsurveyor.png',
    body: ``
  },
  {
    company: 'Iconstrategies BPO Inc.',
    position: 'Ruby on Rails Specialist',
    startDate: 'January 1, 2015',
    endDate: 'May 13, 2016',
    icon: '/assets/images/company_logos/iconstrategiesbpo.png',
    banner: '/assets/images/company_banners/iconstrategiesbpo.png',
    body: ``
  },
  {
    company: 'The Advitor Limited Group',
    position: 'Web Developer',
    startDate: 'February 21, 2012',
    endDate: 'April 4, 2015',
    icon: '/assets/images/company_logos/advitor.png',
    banner: '/assets/images/company_banners/advitor.png',
    body: ``
  }
]

export const skillData = [
  {
    value: .90,
    color: colors.red900,
    name: 'ruby',
    label: 'Ruby<br/><small>Ruby on Rails</small>',
    icon: '/assets/images/programming_logos/ruby.png',
  },
  {
    value: .80,
    color: colors.lightBlue900,
    name: 'python',
    label: 'Python<br/><small>Django Framework</small>',
    icon: '/assets/images/programming_logos/python.png',
  },
  {
    value: .90,
    color: colors.blue300,
    name: 'react',
    label: 'reactJS',
    icon: '/assets/images/programming_logos/react.png',
  },
  {
    value: .80,
    color: colors.redA700,
    name: 'angular',
    label: 'angularJS',
    icon: '/assets/images/programming_logos/angular.png',
  },
  {
    value: .75,
    color: colors.pink800,
    name: 'meteor',
    label: 'meteorJS<br/><small>expressNode</small>',
    icon: '/assets/images/programming_logos/meteor.png',
  }
];

export const skillChartOptions = {
  cutoutPercentage: 95,
  maintainAspectRatio: false
}