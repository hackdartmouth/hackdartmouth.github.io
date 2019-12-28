const pages = [
  {
    visible: true,
    navText: 'ABOUT',
    href: 'about',
    backgroundImg: 'about_white.png',
    pageTitle: 'ABOUT',
    titleColor: '#50514c',
    bodyContent: [
      'We’ve come a long way since our first hackathon. After five iterations of HackDartmouth and four HackDays, we’re more excited than ever to innovate this year for our SIXTH HackDartmouth!',
      'Last year, we had our biggest hackathon to date, with [OUT OF DATE] ~250 people and 45 projects! This spring, HackDartmouth VI will again combine experiential learning with friendly competition. With company-sponsored workshops, mentors, and the chance to develop and refine skills, we’re bringing hundreds of students from across the nation to learn, hack, and create for a weekend.',
      'The day of the event features twenty-four hours of coding, swag, and amazing prizes! Mark your calendars for April 18-19, 2020 and check out some of the projects from our past hackathons in the meantime!',
    ],
    key: 'AboutBody',
  },
  {
    visible: true,
    navText: 'FAQ',
    href: 'faq',
    backgroundImg: 'faq.png',
    pageTitle: 'FAQ',
    titleColor: '#ffffff',
    bodyContent: [
      {
        title: 'What is a hackathon?',
        text: ' A hackathon is an event in which groups of hackers divided into teams develop a product. Hundreds of programmers get together to build something from scratch, be it a website, app, or some other product of their imagination. There will be lots of food and prizes, and opportunities to work with representatives from various companies.',
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
        title: 'What if I am not a student?',
        text: 'Interested in being a mentor or sponsor? Contact us at sponsors@hackdartmouth.io!',
      },
      {
        title: 'When is the deadline to register?',
        text: 'Non-Dartmouth students can register up to March 1st, and applications will be accepted on a rolling basis. Dartmouth students may register up to the day of the event.',
      },
      {
        title: 'Other questions?',
        text: " Shoot us an email at questions@hackdartmouth.io and we'll get back to you as soon as we can!",
      },
    ],
    key: 'FAQBody',
  },
  {
    visible: true,
    navText: 'SPONSORS',
    href: 'sponsors',
    backgroundImg: 'sponsors_green_long.png',
    pageTitle: 'SPONSORS',
    titleColor: '#ffffff',
    bodyContent: [
      {
        sponsorTier: 'SPROUT',
        amount: '$500',
        size: 10,
        sponsors: [
          'facebook.png',
          'google.png',
          'google.png',
          'facebook.png',
        ],
      },
      {
        sponsorTier: 'SHRUB',
        amount: '$1K',
        size: 10,
        sponsors: [
          'facebook.png',
          'google.png',
          'google.png',
        ],
      },
      {
        sponsorTier: 'TREE',
        amount: '$2.5K',
        size: 15,
        sponsors: [
          'facebook.png',
          'google.png',
        ],
      },
      {
        sponsorTier: 'REDWOOD',
        amount: '$5K',
        size: 20,
        sponsors: [
          'facebook.png',
          'google.png',
          'google.png',
        ],
      },
      {
        sponsorTier: 'LONE PINE',
        amount: '$10K',
        size: 25,
        sponsors: [
          'facebook.png',
          'google.png',
          'google.png',

        ],
      },
    ],
    key: 'SponsorBody',
  },
  {
    visible: true,
    navText: 'REGISTER',
    href: 'register',
    backgroundImg: 'register.png',
    pageTitle: 'REGISTER',
    titleColor: '#ffffff',
    bodyContent: {
      event: 'HackDartmouth VI',
      date: 'April 18-19, 2020',
      location: 'Thayer School of Engineering',
      info: 'Registration for non-Dartmouth students closes March 1. Dartmouth students may register up to the day of the hackathon',
      typeformUrl: 'https://hackdartmouth.typeform.com/to/eCsxvb',
    },
    key: 'RegisterBody',
  },
];

export default pages;
