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
        'Welcome to HackDartmouth 2020! Join us for Dartmouth’s sixth annual hackathon, an event that brings together over 250 students with a passion for technology. The day of the event features 24 hours of coding, swag, and amazing prizes! Before the event, feel free to checkout out some our [past projects](https://hackdartmouthv.devpost.com/submissions).',
      ],
      upcomingDate: '18 Apr 2020 07:30:00 EST',
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
      {
        title: 'What is a hackathon?',
        text: 'A hackathon is an event in which groups of hackers divided into teams develop a product. Hundreds of programmers get together to build something from scratch, be it a website, app, or some other product of their imagination. There will be lots of food and prizes, and opportunities to work with representatives from various companies.',
      },
      {
        title: 'Who can attend?',
        text: 'Any university student (graduate or undergraduate) is welcome to participate! We also admit high school students with parental permission. Anyone and everyone is welcome to come and see what participants are working on, though, so feel free to swing by.',
      },
      {
        title: 'What kind of experience do I need?',
        text: "Depends on what you're looking to make! A little background in programming and/or hardware will be helpful, but you'll have plenty of opportunity to join teams and learn from Dartmouth students, students from other schools, and mentors. We’ll also have workshops if you are interested in learning a particular skill. 24 hours is plenty of time to learn something new!",
      },
      {
        title: 'Do I need an idea or a team?',
        text: 'Nope! Although you can sign up with teammates, you can also sign up as an individual, and we will help place you on a team.',
      },
      {
        title: 'What can I build?',
        text: 'You can build whatever you want: websites, programs, mobile apps, anything! However, all code must be written during the hackathon - feel free to use open source libraries and APIs.',
      },
      {
        title: 'How many people can be on a team?',
        text: 'We recommend working in teams of 3-4 people, though participants in the past have worked solo or in pairs as well. However, if your team would like to submit your project for prize consideration, we have a hard limit of 4 members per team.',
      },
      {
        title: 'What do I need to bring?',
        text: "Laptop, cellphone, chargers, toiletries, sleeping bag (if planning to sleep at venue). Food will be provided! Please don't bring alcohol, drugs, or soldering equipment.",
      },
      {
        title: 'What can I win?',
        text: 'A panel of judges will decide on the winning hacks based on criteria of creativity, usefulness, technical difficulty, and form. The top prizes are TBA. Previous prizes have included drones, Apple watches, speakers, TVs, and other awesome tech.',
      },
      {
        title: 'How can I support the hackathon?',
        text: 'If you are interested in being a mentor or sponsor, contact us [here](sponsors@hackdartmouth.io)!',
      },
      {
        title: 'When is the deadline to register?',
        text: 'Non-Dartmouth students can register up to March 1st, and applications will be accepted on a rolling basis. Dartmouth students may register up to the day of the event.',
      },
      {
        title: 'Other questions?',
        text: 'Shoot us an [email](questions@hackdartmouth.io) and we’ll get back to you as soon as we can!',
      },
    ],
    key: 'FAQBody',
  },
  {
    visible: true,
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
        sponsorTier: 'SHRUB',
        amount: '$1K',
        size: 12,
        sponsors: [
          'microsoft.png',
          'tomtom.png',
        ],
      },
      {
        sponsorTier: 'TREE',
        amount: '$2.5K',
        size: 15,
        sponsors: [
          'appian.png',
          'minerva.png',
        ],
      },
      {
        sponsorTier: 'REDWOOD',
        amount: '$5K',
        size: 20,
        sponsors: [
          'facebook.png',
          'intralinks.png',
          'wayfair.png',
        ],
      },
    ],
    key: 'SponsorBody',
  },
  {
    visible: true,
    navText: 'REGISTER',
    href: 'register',
    sectionColor: '#5f936a',
    pageTitle: 'Register for HackDartmouth VI',
    titleColor: '#ffffff',
    bodyContent: {
      event: 'HackDartmouth VI',
      date: 'April 18-19, 2020',
      location: 'Thayer School of Engineering',
      info: 'Registration for non-Dartmouth students closes March 1st. Dartmouth students may register up to the day of the hackathon',
      typeformUrl: 'https://hackdartmouth.typeform.com/to/foXT8j',
    },
    key: 'RegisterBody',
  },
];

export default pages;
