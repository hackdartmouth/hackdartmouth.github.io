const pages = [
  {
    visible: true,
    navText: 'ABOUT',
    href: 'about',
    sectionColor: '#ffffff',
    pageTitle: 'ABOUT',
    titleColor: '#5f936a',
    bodyContent: {
      blurb: [
        'Welcome to HackDartmouth 2022!\n\nThe team is gearing up to host a fantastic ~hybrid~ hackathon this Spring! Like years prior, the event features 24 hours of coding, swag, and amazing prizes!\n\nBefore the event, feel free to check out some of our [past projects](https://hackdartmouthv.devpost.com/submissions).',
      ],
      upcomingDate: '16 Apr 2022 07:30:00 EST',
    },
    key: 'AboutBody',
  },
  {
    visible: true,
    navText: 'FAQ',
    href: 'faq',
    sectionColor: '#024b40',
    pageTitle: 'FAQ',
    titleColor: '#ffffff',
    bodyContent: [
      // {
      //   title: 'What\'s a virtual hackathon?',
      //   text: 'A hackathon is an event in which groups of hackers divide into teams to develop a product. This year, we’ll be hosting our hackathon online. Hundreds of programmers from around the world will team-up to build something from scratch, be it a website, app, or some other product of their imagination.',
      // },
      {
        title: 'Who can attend?',
        text: 'Due to recent spikes in COVID rates in our area, this hackathon will be limited to Dartmouth students.',
      },
      {
        title: 'Do I need experience?',
        text: "Depends on what you're looking to make! A little background in programming will be helpful, but you'll have plenty of opportunity to join teams and learn from Dartmouth students, students from other schools, and mentors. We’ll also have workshops if you are interested in learning a particular skill. There is plenty of time to learn something new!",
      },
      {
        title: 'Do I need a team?',
        text: "Nope! While teams can be specified on the application, you won't officially create your team until the event. You do not have to sign up with a team, we will host a team formation social before hacking begins!",
      },
      {
        title: 'What can I build?',
        text: 'You can build whatever you want: websites, programs, mobile apps, anything! However, all code must be written during the hackathon - feel free to use open source libraries and APIs.',
      },
      {
        title: 'How many people can be on a team?',
        text: 'We recommend working in teams of 3-4 people, though participants in the past have worked solo or in pairs as well. However, if your team would like to submit your project for prize consideration, we have a hard limit of 4 members per team.'
      },
      {
        title: 'What can I win?',
        text: 'A panel of judges will decide on the winning hacks based on criteria of creativity, usefulness, technical difficulty, and form. The top prizes are TBA. Previous prizes have included drones, Apple watches, Nintendo switches, bluetooth speakers, and other awesome tech.'
      },
      // {
      //   title: 'How will prizes and swag work?',
      //   text: 'Given the virtual format of the hackathon, this year we’ll be mailing swag to everyone that submits a project! We’ll be shipping out swag and prizes anywhere in the US and requests outside of the US will be approved on a case-by-case basis.',
      // },
      {
        title: 'How can I support the hackathon?',
        text: 'If you are interested in being a mentor or sponsor, contact us [here](mailto:dartmouthhackathon@gmail.com)!',
      },
      {
        title: 'When is the deadline to register?',
        text: 'Registration is open until the day of the hackathon!',
      },
      {
        title: 'Other questions?',
        text: 'Shoot us an [email](mailto:dartmouthhackathon@gmail.com) and we’ll get back to you as soon as we can!',
      }
    ],
    key: 'FAQBody',
  },
  {
    visible: false,
    navText: 'SCHEDULE',
    href: 'schedule',
    sectionColor: '#cde3db',
    pageTitle: 'SCHEDULE',
    titleColor: '#5f936a',
    bodyContent: [
      {
        DayOfWeek: 'Saturday',
        events: [
          {
            time: '9:00 AM',
            event: 'Check-in',
          },
          {
            time: '11:00 AM',
            event: 'Opening Ceremony',
          },
          {
            time: '12:00 PM',
            event: 'Hacking begins; Lunch',
          },
          {
            time: '6:30 PM',
            event: 'Dinner',
          },
        ],
      },
      {
        DayOfWeek: 'Sunday',
        events: [
          {
            time: '7:00 AM',
            event: 'Breakfast',
          },
          {
            time: '10:30 AM',
            event: 'Hacking ends; Submissions due',
          },
          {
            time: '11:30 AM',
            event: 'Lunch',
          },
          {
            time: '12:30 PM',
            event: 'Judging begins',
          },
          {
            time: '2:00 PM',
            event: 'Final presentations; Closing ceremony',
          },
        ],
      },
    ],
    key: 'ScheduleBody',
  },
  {
    visible: true,
    navText: 'SPONSORS',
    href: 'sponsors',
    sectionColor: '#9BCFB8',
    pageTitle: 'SPONSORS',
    titleColor: '#ffffff',
    bodyContent: [
      {
        //sponsorTier: 'PARTNERS',
        //amount: '$xK',
        size: 20,
        sponsors: [
          
          {src:'tomtom.png', link: 'https://www.tomtom.com/en_us/'},
          {src:'googlecloud.png', link: 'https://cloud.google.com/'},
          {src:'stickermule.png', link: 'https://www.stickermule.com/uses/laptop-stickers?utm_source=sponsorship&utm_medium=referral&utm_campaign=HACKDARTMOUTH2022'},
          {src:'echo3D.png', link: 'https://www.echo3d.co/'},
          {src:'magnuson.png', link: 'https://magnuson.dartmouth.edu/'},
          {src:'dartmouth_cs.png', link: 'https://web.cs.dartmouth.edu/'},
          {src:'scm.png', link: 'https://www.scm-lp.com/'},
          // duplicated sponsor images for scrolling effect
          {src:'tomtom.png', link: 'https://www.tomtom.com/en_us/'},
          {src:'googlecloud.png', link: 'https://cloud.google.com/'},
          {src:'stickermule.png', link: 'https://www.stickermule.com/uses/laptop-stickers?utm_source=sponsorship&utm_medium=referral&utm_campaign=HACKDARTMOUTH2022'},
          {src:'echo3D.png', link: 'https://www.echo3d.co/'},
          {src:'magnuson.png', link: 'https://magnuson.dartmouth.edu/'},
          {src:'dartmouth_cs.png', link: 'https://web.cs.dartmouth.edu/'},
          {src:'scm.png', link: 'https://www.scm-lp.com/'},
          // duplicated sponsor images for scrolling effect
        ],
      },
      /* {
        sponsorTier: 'SHRUB',
        amount: '$1K',
        size: 12,
        sponsors: [
          // {src:'microsoft.png', link: 'https://www.microsoft.com/en-us/'}
        ],
      }, */
      /* {
        sponsorTier: 'TREE',
        amount: '$2.5K',
        size: 15,
        sponsors: [
          {src:'appian.png', link: 'https://www.appian.com/'},
          // {src:'minerva.png', link: 'https://www.minervaanalytics.co/'},
          {src:'tomtom.png', link: 'https://www.tomtom.com/en_us/'}
        ],
      }, */
      /* {
        sponsorTier: 'REDWOOD',
        amount: '$5K',
        size: 20,
        sponsors: [
          {src:'facebook.png', link: 'https://www.facebook.com/'},
          // {src:'intralinks.svg', link: 'https://www.intralinks.com/'},
          // {src:'wayfair.png', link: 'https://www.wayfair.com/'}
        ],
      }, */
    ],
    key: 'SponsorBody',
  },
  {
    visible: false,
    navText: 'REGISTER',
    href: 'register',
    sectionColor: '#5f936a',
    pageTitle: 'Register for HackDartmouth VII',
    titleColor: '#ffffff',
    bodyContent: {
      event: 'HackDartmouth VII',
      date: 'April 16-1th, 2022',
      location: 'Thayer School of Engineering, 1 Engineering Dr. Hanover, NH 03755',
      info: 'Registration for Dartmouth students closes the day of the Hackathon.',
      typeformUrl: 'https://hackdartmouth.typeform.com/to/LU7ubUtU',
    },
    key: 'RegisterBody',
  },
];

export default pages;
