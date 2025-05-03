// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'spearb0lt', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/portfolio/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 16, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      // manual: {
      //   // Properties for manually specifying projects
      //   projects: ['spearb0lt/gitprofile', 'spearb0lt/pandora'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      // },
    },










    // external: {
    //   header: 'My Projects',
    //   // To hide the `External Projects` section, keep it empty.
    //   projects: [
    //     {
    //       title: 'Project 1',
    //       description:
    //         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
    //       imageUrl:
    //         'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
    //       link: 'https://example.com',
    //     },
    //     {
    //       title: 'Project 2',
    //       description:
    //         'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
    //       imageUrl:
    //         'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
    //       link: 'https://example.com',
    //     },
    //   ],
    // },










  },
  seo: {
    title: 'Portfolio of Shubhro Dev',
    description: '',
    imageURL: 'https://drive.google.com/file/d/18sTzSUYaQArf--3JYT39jzbdPjjWf8C8/view?usp=drive_link',
  },
  social: {
    linkedin: 'shubhro-dev',
    twitter: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: 'shubhro_x',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'shubhro2004@gmail.com',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/1RqHGYUSd7BZ5jXVpHWGCiMBniABKdEx4/view?usp=drive_link', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    // 'PHP',
    // 'Laravel',
    'Python',
    'Tensorflow',
    'Keras',
    'Pandas',
    'Numpy',
    'Matplotlib',
    'Seaborn',
    'Scikit-learn',
    'Jupyter Notebook',
    'Jupyter Lab',
    'PyCharm',
    'VS Code',
    'HTML',
    'CSS',
    'JavaScript',
    'Flask',
    'Django',
    'JavaScript',
    'React.js',
    'Node.js',
    'Nest.js',
    'MySQL',
    'PostgreSQL',
    'Git',
    // 'Docker',
    // 'PHPUnit',
    // 'CSS',
    // 'Antd',
    'Tailwind',
  ],
  experiences: [
    {
      company: 'IIT-Varanasi(BHU)',
      position: 'Research Intern',
      from: 'June 2024',
      to: 'October 2024',
      companyLink: 'https://iitbhu.ac.in/',
    },
    {
      company: 'Jadavpur University',
      position: 'Research Intern',
      from: 'May 2024',
      to: 'August 2024',
      companyLink: 'https://www.cmaterju.in/',
    },
  ],
  certifications: [
    {
      name: 'Supervised Machine Learning: Regression and Classification',
      body: 'Stanford Online & DeepLearning.AI',
      year: 'June 2024',
      link: 'coursera.org/verify/ASRP9DMB4AWT',
    },

    {
      name: 'Advanced Learning Algorithms',
      body: 'Stanford Online & DeepLearning.AI',
      year: 'July 2024',
      link: 'coursera.org/verify/QRFNGE5XCQLL',
    },

    {
      name: 'Unsupervised Learning, Recommenders, Reinforcement Learning',
      body: 'Stanford Online & DeepLearning.AI',
      year: 'September 2024',
      link: 'coursera.org/verify/VOS952H925R2',
    },
    {
      name: 'Machine Learning Specialization',
      body: 'Stanford Online & DeepLearning.AI',
      year: 'September 2024',
      link: 'https://www.coursera.org/specializations/machine-learning-introduction',
    },
    {
      name: 'Neural Networks and Deep Learning',
      body: 'DeepLearning.AI & Coursera',
      year: 'October 2024',
      link: 'https://www.coursera.org/learn/neural-networks-deep-learning',
    },
    {
      name: 'Improving Deep Neural Networks: Hyperparameter Tuning, Regularization and Optimization',
      body: 'DeepLearning.AI & Coursera',
      year: 'October 2024',
      link: 'https://www.coursera.org/learn/deep-neural-network',
    },
    {
      name: 'Structuring Machine Learning Projects',
      body: 'DeepLearning.AI & Coursera',
      year: 'November 2024',
      link: 'https://www.coursera.org/learn/machine-learning-projects',
    },

    {
      name: 'Convolutional Neural Networks',
      body: 'DeepLearning.AI & Coursera',
      year: 'December 2024',
      link: 'https://www.coursera.org/learn/convolutional-neural-network',
    },

    {
      name: 'Sequence Models',
      body: 'DeepLearning.AI & Coursera',
      year: 'January 2024',
      link: 'https://www.coursera.org/learn/nlp-sequence-models',
    },

    {
      name: 'Deep Learning Specialization',
      body: 'DeepLearning.AI & Coursera',
      year: 'January 2024',
      link: 'https://www.coursera.org/specializations/deep-learning',
    },
  
    


















  ],
  educations: [
    {
      institution: 'Rajiv Gandhi Institute of Petroleum Technology',
      degree: 'B.Tech in Computer Science and Engineering',
      from: '2022',
      to: '2026',
    },
    {
      institution: 'Bharaitiya Vidya Bhavans Kolkata',
      degree: 'Class 12',
      from: '2021',
      to: '2022',
    },
    {
      institution: 'Julien Day School Kolkata',
      degree: 'Class 10',
      from: '2019',
      to: '2020',
    },
  ],
  publications: [
    // {
    //   title: 'Publication Title',
    //   conferenceName: '',
    //   journalName: 'Journal Name',
    //   authors: 'John Doe, Jane Smith',
    //   link: 'https://example.com',
    //   description:
    //     'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    // },
    {
      title: 'Lung Cancer Identification from CT Scans using a Soft-attention enabled Deep Transfer Learning Model',
      conferenceName: 'IEEE Conference on Intelligent Systems, Advanced Computing and Communication (ISACC 2025)',
      journalName: '',
      authors: 'Shubhro Dev, Pragyadipta Sinha Roy, Neelotpal Chakraborty, Ram Sarkar',
      link: 'http://dx.doi.org/10.1109/ISACC65211.2025.10969319',
      description:
        'A fine-tuned DTL model of DenseNet121 which is equipped with a soft attention-based mechanism, is implemented for lung cancer identification from CT scans. The training and evaluation of the proposed system is done on standard datasets like IQ-OTH/NCCD as well as LIDC-IDRI, and a comparison of the performance is done with some standard methods. The proposed system scores the highest accuracy of 99.56% when evaluated on IQ-OTH/NCCD dataset. In the case of the LIDC-IDRI dataset, the proposed system achieves an accuracy of 95.41%, which is better than that achieved by most of the standard methods.',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      // 'light',
      'dark',
      'cupcake',
      // 'bumblebee',
      'emerald',
      // 'corporate',
      'synthwave',
      'retro',
      // 'cyberpunk',
      'valentine',
      'halloween',
      // 'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      // 'fantasy',
      // 'wireframe',
      'black',
      'luxury',
      'dracula',
      // 'cmyk',
      // 'autumn',
      // 'business',
      // 'acid',
      // 'lemonade',
      'night',
      'coffee',
      // 'winter',
      // 'dim',
      // 'nord',
      'sunset',
      // 'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // // Optional Footer. Supports plain text or HTML.
  // footer: `Made with <a 
  //     class="text-primary" href="https://github.com/spearb0lt/gitprofile"
  //     target="_blank"
  //     rel="noreferrer"
  //   >GitProfile</a> and ❤️`,

  // enablePWA: true,
};

export default CONFIG;
