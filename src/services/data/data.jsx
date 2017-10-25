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
    icon: '/assets/images/crossover.png',
    body: ``
  },
  {
    company: 'Asseteq',
    position: 'Software Engineer',
    startDate: 'May 25, 2015',
    endDate: 'October 20, 2017',
    icon: '/assets/images/crossover.png',
    body: ``
  },
  {
    company: 'Iconstrategies BPO Inc.',
    position: 'Ruby on Rails Specialist',
    startDate: 'January 1, 2015',
    endDate: 'May 13, 2016',
    icon: '/assets/images/crossover.png',
    body: ``
  },
  {
    company: 'The Advitor Limited Group',
    position: 'Web Developer',
    startDate: 'February 21, 2012',
    endDate: 'April 4, 2015',
    icon: '/assets/images/crossover.png',
    body: ``
  }
]

export const skillData = [
  {
    value: .90,
    color: colors.red900,
    name: 'ruby',
    label: 'Ruby / Ruby on Rails'
  }
];

export const skillChartOptions = {
  cutoutPercentage: 95,
  maintainAspectRatio: false
}