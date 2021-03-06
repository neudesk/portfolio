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
    body: `
      Builds cross-platform API<br />
      Responsible for most of the frontend Development<br />
      Makes sure that all codes is well-tested and backed by unit-tests<br />
      Attends daily standup meetings
    `
  },
  {
    company: 'Asseteq',
    position: 'Software Engineer',
    startDate: 'May 25, 2015',
    endDate: 'October 20, 2017',
    icon: '/assets/images/company_logos/asseteq.png',
    banner: '/assets/images/company_banners/asseteq.png',
    body: `
      Collaborate on developing micro-service APIs<br />
      Integrates APIs on front-facing web products<br />
      Develops test-unit coverage in almost 70% of all micro-services app<br />
      Attends daily stand-up meetings
    `
  },
  {
    company: 'Rentsurveyor',
    position: 'Ruby on Rails Developer',
    startDate: 'January 6, 2016',
    endDate: 'July 27, 2016',
    icon: '/assets/images/company_logos/rentsurveyor.png',
    banner: '/assets/images/company_banners/rentsurveyor.png',
    body: `
      Lead a development team which consists of 3 developers and 1 QA<br />
      Develops a geocoding feature for rentsurveyor.com; computes distance, driving path and more<br />
      Develop a data scraping script for data mining rental establishments in Australia<br />
      Host daily stand-up meetings
    `
  },
  {
    company: 'Iconstrategies BPO Inc.',
    position: 'Ruby on Rails Specialist',
    startDate: 'January 1, 2015',
    endDate: 'May 13, 2016',
    icon: '/assets/images/company_logos/iconstrategiesbpo.png',
    banner: '/assets/images/company_banners/iconstrategiesbpo.png',
    body: `
      Collaborate on developing core-API for zenoradio.com<br />
      Develops RCA, Broadcaster and Admin web based dashboard<br />
      Develops well-test codes using test-units and rspec<br />
      Suggests UI/UX approach in different user application features<br />
      Attend daily stand-up meetings
    `
  },
  {
    company: 'The Advitor Limited Group',
    position: 'Web Developer',
    startDate: 'February 21, 2012',
    endDate: 'April 4, 2014',
    icon: '/assets/images/company_logos/advitor.png',
    banner: '/assets/images/company_banners/advitor.png',
    body: `
      Sole developer for developing custom feature for open-source cloud-platform Openstack<br />
      Attend daily meetings
    `
  }
]

export const skillData = [
  {
    value: .95,
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
    value: .85,
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
  },
  {
    value: .75,
    color: colors.red600,
    name: 'php',
    label: 'PHP<br /><small>CodeIgniter</small>',
    icon: '/assets/images/programming_logos/codeigniter.png',
  }
];

export const skillChartOptions = {
  cutoutPercentage: 95,
  maintainAspectRatio: false
}

export const professionalOverview = `
  I have more than 5 years of experience, I worked with different companies across the globe. 
  <br />During these year I have learned lots of programming languages. Most of the projects I worked with is web based products.
  <br />For whatever application I'm working on weather it was an API or fullstack web products I always make sure codes are reusable, neat and easy to be read and well documented for other developers.
`;

export const professionalFacts = [
  {label: 'status', value: 'Employed, Looking for part-time'},
  {label: 'desired salary', value: 'To be discussed'},
  {label: 'educational level', value: 'BS Information Technology, Undergraduate'},
  {label: 'job type', value: 'Individual contractor'},
  {label: 'mobility', value: 'Willing to relocate'},
  {label: 'languages', value: 'English, Filipino'},
  {label: 'position', value: 'Software Engineer'},
  {label: 'industry', value: 'Web and mobile development'},
  {label: 'specialty', value: 'Backend and frontend development'},
  {label: 'hobbies', value: 'CSgo, DOTA, Unknown Players Battleground'}
];

export const personalQualities = [
  {
    icon: 'fa fa-code fa-2x',
    title: 'Tested Codes',
    description: 'A well tested code dictates the health of the application. I always make sure all codes are backed by unit-tests'
  },
  {
    icon: 'fa fa-clock-o fa-2x',
    title: 'On-Time',
    description: 'Keeping the completion of each task is always a must, but I never sacrifice the quality of the codes over speed'
  },
  {
    icon: 'fa fa-handshake-o fa-2x',
    title: 'Keeping a Promise',
    description: "When I say the job will be finish today, I'll make sure job is done next day meeting, even it cost me some overtimes"
  },
  {
    icon: 'fa fa-group fa-2x',
    title: 'Team player',
    description: "I am team player, I love working with bright people. I love sharing my knowledge and learning at the same time"
  }
];

export const contactData = [
  { icon: 'fa fa-paper-plane fa-2x', value: 'neumerance@live.com' },
  { icon: 'fa fa-link fa-2x', value: 'www.jonathancanaveral.com' },
  { icon: 'fa fa-skype fa-2x', value: 'neumerance' },
  { icon: 'fa fa-linkedin fa-2x', value: 'www.linkedin.com/in/neumerance/' },
  { icon: 'fa fa-phone fa-2x', value: '+63 047 613 5650' },
  { icon: 'fa fa-mobile fa-3x', value: '+63 947 731 0730' },
]