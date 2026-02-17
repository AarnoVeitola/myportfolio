window.PORTFOLIO_DATA = {
  navLinks: [
    { href: '#about', label: 'About me' },
    { href: '#background', label: 'Background' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ],
  socialLinks: [
    {
      href: 'https://www.linkedin.com/in/aarnoveitola/',
      icon: 'linkedin',
      label: 'Open LinkedIn profile',
      sidebarRow: 1,
    },
    {
      href: 'https://github.com/AarnoVeitola',
      icon: 'github',
      label: 'Open GitHub profile',
      sidebarRow: 2,
    },
    {
      href: 'https://t.me/aarnoveitola',
      icon: 'telegram',
      label: 'Open Telegram profile',
      sidebarRow: 2,
    },
  ],
  contactForm: {
    endpoint: 'https://formspree.io/f/mykdjore',
    minSubmitDelayMs: 2500,
    successMessage: 'Thanks, your message has been sent.',
    errorMessage:
      'Message delivery failed. Please try again in a moment or use social links below.',
    unconfiguredMessage:
      'Contact form is not configured yet. Add your form endpoint in js/contentData.js.',
  },
  backgroundEntries: [
    {
      id: 'virta',
      title: 'Virta Ltd',
      reverse: false,
      periods: [
        {
          role: 'Junior Technical Solution Consultant',
          duration: 'May 2025-Aug 2025',
          paragraphs: [
            'I continued working at Virta for another summer, this time as a junior. I spent most of my summer on a software development project for the Pricing team, while also working on tasks like roaming integrations and testing.',
            'During the summer, I built internal full-stack tools using React, TypeScript, PHP, GraphQL, and Laravel, deploying via Kubernetes and AWS. I delivered automation solutions that streamlined customer migration workflows across pricing systems.',
            'I got to contribute to all phases of the software development life-cycle, from discovery and requirements analysis through design, development, and testing. Working on these topics with seasoned software engineers, architects, and testers was a very eye-opening experience, leaving me hungry for more.',
          ],
        },
        {
          role: 'Technical Solution Consultant Trainee',
          duration: 'May 2024-Apr 2025',
          paragraphs: [
            'I worked as a trainee at Virta Ltd for a year, helping the company to succeed in developing their EV charging platform, and helping gain large multinational customers.',
            "My tasks included mainly roaming integrations (OCPI, Hubject), charging hardware integration and testing (OCPP), and pricing-system migrations. Additionally, I also led technical requirement analysis and customer consultations to define solutions aligned with Virta's product strategy.",
          ],
        },
      ],
      image: {
        src: 'images/virta_logo_white_borderless_RGB.svg',
        className: 'position-image position-image-narrow',
        alt: 'Virta logo',
      },
    },
    {
      id: 'aalto',
      title: 'Aalto University',
      reverse: true,
      periods: [
        {
          role: "Master's student",
          duration: 'Sep 2024-present',
          paragraphs: [
            "Pursuing a Master's Degree in Human-Computer Interaction at the School of Science. Studying topics such as Interactive AI, Machine Learning, Deep Learning, User-Interfaces, User-Centered Design, and Service Design.",
            'I have also worked as a Research Assistant (Department of Applied Physics), building fusion and plasma physics research tools with Python, and as a Teaching Assistant (Department of Computer Science), teaching basics programming with Scala.',
          ],
        },
        {
          role: "Barchelor's student",
          duration: 'Sep 2021-Jun 2024',
          paragraphs: [
            "I started my university journey by studying a bachelor's degree in Applied Physics. I did not no exactly what I wanted to pursue, so I decided to challenge myself in the subjects I enjoyed the most, namely physics, mathematics, and programming.",
            "During the three years of studying physics, I studied the most mathematics and programming I could fit in my studies, and eventually ended up minoring in Computer Science. This lead me to continue with a master's degree in Computer Science.",
          ],
        },
      ],
      links: [
        {
          href: 'https://urn.fi/URN:NBN:fi:aalto-202310316708',
          label: "View my bachelor's thesis",
          external: true,
        },
      ],
      image: {
        src: 'images/logo-86680-1.png',
        className: 'position-image',
        alt: 'Aalto University logo',
      },
    },
    {
      id: 'ist',
      title: 'Instituto Superior Técnico',
      reverse: false,
      periods: [
        {
          role: 'Exchange studies',
          duration: 'Sep 2025-Jan 2026',
          paragraphs: [
            'I decided to take a break from studying at Aalto, and ventured off to Instituto Superior Técnico in Lisbon for half-a-year of exchange studies. Here, I am studying topics such as Data Analysis and Integration, Software Arcitechture, and Software Security.',
            'Outside of school, I spend a lot of time in the water, surfing, as well as exploring the city and local culture.',
          ],
        },
      ],
      image: {
        src: 'images/IST_A_RGB_NEG.png',
        className: 'position-image',
        alt: 'Instituto Superior Tecnico logo',
      },
    },
  ],
  projectEntries: [
    {
      id: 'portfolio',
      title: 'My portfolio',
      reverse: false,
      paragraphs: [
        'This project is my personal portfolio website, designed to showcase my background, skills, and selected work. The site is intentionally built without heavy frameworks, using semantic HTML, custom CSS on top of Bootstrap, and small JavaScript enhancements for interactivity.',
        'In addition to visual presentation, the project emphasizes code quality and maintainability. Automated formatting and linting are configured using Prettier, ESLint, and Stylelint, reflecting a modern frontend workflow and attention to long-term maintainability. The result is a clean, responsive, and easy-to-extend static website.',
      ],
      links: [
        {
          href: 'https://github.com/AarnoVeitola/myportfolio',
          label: 'View project on GitHub',
          external: true,
        },
      ],
      image: {
        src: 'images/portfolio.png',
        className: 'position-image',
        alt: 'Screenshot of portfolio project',
      },
    },
    {
      id: 'titanic-ml',
      title: 'Titanic Survival Prediction Using ML',
      reverse: true,
      paragraphs: [
        'This project explores how machine learning can be applied to historical data by predicting passenger survival on the Titanic. The task is formulated as a supervised binary classification problem using demographic and socio-economic features such as age, gender, passenger class, family relations, and ticket fare.',
        'Two models were implemented and compared: Logistic Regression and K-Nearest Neighbors (KNN). After data cleaning, feature selection, and preprocessing (including handling missing values and feature scaling), both models were evaluated using a train/validation/test split. KNN achieved the best validation performance and was selected as the final model, reaching approximately 78% accuracy on unseen test data.',
        'Beyond prediction accuracy, the project focuses on model evaluation and interpretation, using metrics such as accuracy, log loss, confusion matrices, and classification reports to understand strengths and limitations - particularly the challenge of class imbalance in survival outcomes. The project demonstrates a complete machine learning workflow, from data preprocessing to model comparison and evaluation, using Python and scikit-learn.',
      ],
      links: [
        {
          href: 'assets/ml-project.pdf',
          label: 'Read more here',
          external: true,
        },
      ],
      image: {
        src: 'images/titanic.png',
        className: 'position-image',
        alt: 'Titanic survival prediction project output',
      },
    },
    {
      id: 'distributed-storage',
      title: 'Architecting a Distributed Storage System (Google Drive)',
      reverse: false,
      paragraphs: ['TBD'],
      links: [
        {
          href: 'https://github.com/tecnico-softarch/as2025-g02',
          label: 'View project on GitHub',
          external: true,
        },
      ],
      image: null,
      imagePlaceholder: 'Image coming soon',
    },
    {
      id: 'focusegg',
      title: 'focusEGG',
      reverse: true,
      paragraphs: [
        'focusEGG is a product we worked with for a User-centered Product Development Project course for Aalto University. It is a modern pomodoro timer, which aims to aid students experiencing difficulties with focus and short attention span.',
        'Due to information flood caused by digitalization and social media, these symptoms are experienced by a significant portion of university students. focusEGG tackles these issues by providing a modern portable concentration timer, which integrates directly with your smartphone and is very accessible. The product consists of the timer itself and a mobile application, which communicate via Bluetooth.',
        'The product development was done with two User-Centered Design cycles, consisting of user-research, design and prototyping, and usability testing with real users. The prototype is built using an Arduino Nano microcontroller, programmed with C++.',
        'My role in this project was in User Research, User Testing, Prototype Design, and Hardware assembly.',
      ],
      image: {
        src: 'images/focusEGG.png',
        className: 'position-image',
        alt: 'focusEGG product concept',
      },
    },
    {
      id: 'etela-haaga-library',
      title: 'Customer Scene Investigation for Etelä-Haaga Library',
      reverse: false,
      paragraphs: [
        "This group project focused on understanding how senior customers experience and use services at the Etelä-Haaga Library. Through interviews with seniors and staff, questionnaires, observations, and affinity diagramming, we identified key user groups and mapped the end-to-end customer journey. The study revealed strengths such as the library's welcoming atmosphere, strong community role, and helpful staff, alongside recurring pain points including limited availability of popular books, long reservation queues, early closing hours, accessibility challenges, and difficulties with digital payment and printing services. Based on these insights, the project outlines service improvement opportunities that emphasize accessibility, clarity, and senior-friendly service design.",
      ],
      image: {
        src: 'images/etela-haaga.png',
        className: 'position-image',
        alt: 'Etela-Haaga library project deliverable',
      },
    },
    {
      id: 'planting-trees-app',
      title: 'Manual Data Collection - Reporting planted trees Mobile App',
      reverse: true,
      paragraphs: [
        'This group project focused on designing a mobile user interface for manually reporting planted trees as part of the BioAfrica project. The goal was to support environmental monitoring by enabling accurate and consistent data collection in the field. The UI concept includes a map-based interface for visualizing planting locations, a streamlined form for adding tree data, analytics for tracking impact over time, and a profile view for personal records. The design was guided by established usability heuristics and emphasizes clarity, minimalism, and ease of use, supporting both individual volunteers and organizations involved in tree planting and environmental restoration.',
      ],
      image: {
        src: 'images/planting-trees.png',
        className: 'position-image',
        alt: 'Tree planting reporting mobile app concept',
      },
    },
  ],
};
