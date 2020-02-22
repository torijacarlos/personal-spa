module.exports = {
  siteMetadata: {
    title: `torijacarlos`,
    description: `love building stuff. developer, architect, gamer, artist, baker, otaku.`,
    author: `@torijacarlos`,
    additional: [
      {
        title: "contact",
        values: [
          'hi@torijacarlos.com',
          'mexico city',
        ]
      },
      {
        title: "languages",
        values: [
            'python',
            'javascript',
            'php',
            'sql',
        ]
      },
      {
        title: "tools",
        values: [
            'aws',
            'docker',
            'git',
            'vs code',
        ]
      },
    ],
    experience: [
      {
        position: 'lead architect',
        company: 'konfío',
        color: 'konfio',
        web: 'https://konfio.mx',
        term: 'jan. 2019 – now (1 year 2 month)',
        responsibility: 'Bring Konfio to an stage in which we can provide our services in a Bank as a service (BaaS) model',
        tasks: [
          'Outline how a multiproduct ecosystem will work within our systems, leaning towards a bank as a service future',
          'Establish the architecture of the platform that supports the business operation and growth',
          'Design of procedures and standards that make more efficient the execution of the engineering teams',
          'Technical mentorship and training of the engineering team',
          'Creation and design of tools that improve the developer\'s efficiency by abstracting the complexity of services and environment setups while providing a smoother learning curve for Konfio\'s tech environment.',
        ],
      },
      {
        position: 'tech lead of internal tools',
        company: 'konfío',
        color: 'konfio',
        web: 'https://konfio.mx',
        term: 'oct. 2017 – dic. 2018 (1 year 3 months)',
        responsibility: 'My focus is to scale engineering teams with reliable metrics, structure and processes.',
        tasks: [
          'Redesign of the main in-house ERP/CRM that handles the transactions and history of the customers while providing the required reporting for finance, compliance and collections.',
          'Architecture design and implementation of the internal tools that function as a Platform for every team in the company',
          'Design of the event-based architecture that allows us to improve the experience of the customer by removing synchronous processes and creates a better tracking of the history of a client',
          'Automatization of manual processes that created uncertainty and friction in the customers journey.',
          'Design of the architecture required to handle facilities that gives us an easier way to allocate debt while improving reporting',
          'Project management across teams covering finance, collections, verification, sales, payments and platform.',
          'Technical mentorship and training of the engineering team',
        ],
      },
      {
        position: 'software engineer',
        company: 'konfío',
        color: 'konfio',
        web: 'https://konfio.mx',
        term: 'aug. 2016 – sept. 2017 (1 year 2 months)',
        responsibility: 'The objective was to design and implement the systems that would allow the company to have a better understanding of the financial and operational aspects of the company',
        tasks: [
          'Implementation of a standard reporting package for financial analysis based on acquisition numbers, and vintage losses',
          'Development of the module that handles the verification process of a customer from approval to disbursement',
          'Integration with an external invoicing provider for customer invoices generation',
        ],
      },
      {
        position: 'software engineer',
        company: 'netsoft',
        color: 'netsoft',
        web: 'https://netsoft.com/',
        term: 'sept. 2012 – aug. 2016 (4 years)',
        responsibility: 'We created customizations for the ERP/CRM that would allow customers improve their operational efficiency',
        tasks: [
          'Creation of a system that would track inventory levels and sales orders to manage work orders for missing manufactured goods',
          'Development of a system that would help keep track of physical inventory against inventory registered in the system',
          'Implementation of proration algorithms for cost of goods',
          'Implementation of a POS system that would work across Panama with integration with an external invoicing provider',
        ],
      },
    ],
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
}
