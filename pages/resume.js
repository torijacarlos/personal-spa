import Layout from "../components/layout"
import Experience from "../components/experience"
import styles from "./index.module.scss"


export default function Resume() {
    return (
        <Layout title="Resume">
            <div>
                {experienceData.map((e) => {
                    return <Experience key={e.company+e.role} {...e} companyLink={companyLinks[e.company]}></Experience>
                })}
            </div>
            <div>
            </div>
        </Layout>
    )
}

const companyLinks = {
    "fondeadora": "https://fondeadora.com",
    "konfío": "https://konfio.mx",
    "netsoft": "https://netsoft.com"
};

const experienceData = [
    {
        company: "fondeadora",
        role: "VP of Engineering",
        startDate: new Date(2020, 6, 1),
        endDate: null,
        description: "",
        responsibilities: [],
    },
    {
        company: "konfío",
        role: "Lead Architect",
        startDate: new Date(2019, 1, 1),
        endDate: new Date(2020, 5, 31),
        description: "Bring Konfio to an stage in which we can provide our services in a Bank as a service (BaaS) model",
        responsibilities: [
          'Outline how a multiproduct ecosystem will work within our systems, leaning towards a bank as a service future',
          'Establish the architecture of the platform that supports the business operation and growth',
          'Design of procedures and standards that make more efficient the execution of the engineering teams',
          'Technical mentorship and training of the engineering team',
          'Creation and design of tools that improve the developer\'s efficiency by abstracting the complexity of services and environment setups while providing a smoother learning curve for Konfio\'s tech environment.',
        ],
    },
    {
        company: "konfío",
        role: "Tech Lead of Internal Tools",
        startDate: new Date(2017, 10, 1),
        endDate: new Date(2018, 12, 31),
        description: "My focus is to scale engineering teams with reliable metrics, structure and processes.",
        responsibilities: [
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
        company: "konfío",
        role: "Software Engineer",
        startDate: new Date(2016, 8, 8),
        endDate: new Date(2017, 9, 30),
        description: "The objective was to design and implement the systems that would allow the company to have a better understanding of the financial and operational aspects of the company",
        responsibilities: [
          'Implementation of a standard reporting package for financial analysis based on acquisition numbers, and vintage losses',
          'Development of the module that handles the verification process of a customer from approval to disbursement',
          'Integration with an external invoicing provider for customer invoices generation',
        ],
    },
    {
        company: "netsoft",
        role: "Software Engineer",
        startDate: new Date(2012, 9, 1),
        endDate: new Date(2016, 8, 1),
        description: "We created customizations for the ERP/CRM that would allow customers improve their operational efficiency",
        responsibilities: [
          'Creation of a system that would track inventory levels and sales orders to manage work orders for missing manufactured goods',
          'Development of a system that would help keep track of physical inventory against inventory registered in the system',
          'Implementation of proration algorithms for cost of goods',
          'Implementation of a POS system that would work across Panama with integration with an external invoicing provider',
        ],
    },
]
