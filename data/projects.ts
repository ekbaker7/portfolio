export interface Project {
    id: number;
    name: string;
    description: string;
    url: string;
    technologies: string[];
    image: string;
}

export const projects: Project[] = [
    {
        id: 1,
        name: 'Party Simulator',
        description: 'My personal passion project, a website where you can generate a party of RPG characters and send them on various randomly generated events and watch the outcomes.',
        url: 'https://party-simulator.vercel.app/',
        technologies: ['NextJS', 'NodeJS', 'MongoDB', 'ReactJS', 'TypeScript', 'TailwindCSS'],
        image: '/project-images/party-simulator.png'
    },
    {
        id: 2,
        name: 'OpenAI Blog Generator',
        description: 'A website that uses the OpenAI API to generate blog posts based on a prompt, along with an SEO friendly title and keywords. Made during a Udemy course.',
        url: 'https://jellyfish-app-vpbfb.ondigitalocean.app/',
        technologies: ['NextJS', 'NodeJS', 'MongoDB', 'ReactJS', 'TailwindCSS', 'OpenAI', 'Chat-GPT 3.5', 'Stripe'],
        image: '/project-images/openai-blog-generator.jpg'
    },
    {
        id: 3,
        name: 'OpenTable Clone',
        description: 'An OpenTable clone built in NextJS. Users can search for restaurants, view their details, and make reservations. Made during a Udemy course.',
        url: 'https://reservation-project-ozz7.vercel.app/',
        technologies: ['NextJS', 'NodeJS', 'Postgres', 'ReactJS', 'TailwindCSS', 'Prisma', 'TypeScript'],
        image: '/project-images/reservation-project.png'
    },
    {
        id: 4,
        name: 'NextJS Blog',
        description: 'A blog built in NextJS leveraging a markdown-to-html convertor to parse files into blog posts.',
        url: 'https://blog-section-11.vercel.app/',
        technologies: ['NextJS', 'NodeJS', 'MongoDB', 'ReactJS', 'Markdown'],
        image: '/project-images/nextjs-blog.png'
    },
    {
        id: 5,
        name: 'Medical Informatics Client',
        description: 'Implemented communications, unit testing, and informatics using C#, MSSQL, and Angular for medical web-based dashboard, allowing regular synchronization plus bidirectional updates, and following strict coding compliances for FDA testing regulations and accurate lab testing.',
        url: '',
        technologies: ['.NET Core', 'C#', 'MSSQL', 'Angular', 'WiX', 'Git', 'Azure DevOps', 'REST APIs'],
        image: '/project-images/unavailable.png'
    },
    {
        id: 6,
        name: 'Energy Analytics Client #2',
        description: 'Utilized React, Node, Kinetica, and Amazon Document-based AWS database developing energy analytic website that tracked and displayed millions of datapoints in mere seconds while leveraging React and ES6 for in-depth filtering operations.',
        url: '',
        technologies: ['React', 'Node', 'Kinetica', 'AWS Dynamo DB', 'Jira'],
        image: '/project-images/unavailable.png'
    },
    {
        id: 7,
        name: 'Energy Analytics Client #1',
        description: 'Utilized ASP.NET MVC, MSQL, C#, and JavaScript to support existing energy analytics website, adding new features and fixing bugs while following SOLID principles.',
        url: '',
        technologies: ['ASP.NET MVC', 'JavaScript', 'JQuery', 'MSSQL', 'C#'],
        image: '/project-images/unavailable.png'
    },
    {
        id: 8,
        name: 'Banking Client',
        description: 'Utilized MSSQL Sevice Brokers to coordinate jobs between database instances.',
        url: '',
        technologies: ['MSSQL', 'Service Broker', 'Messaging Queue'],
        image: '/project-images/unavailable.png'
    },
    {
        id: 9,
        name: 'Investment Analytics Client',
        description: 'Developed SSIS packages for investment data project that set foundations for accurate ETL processes, utilizing dozens of efficient stored procedures transforming distinct data inputs into uniform outputs quickly. Also supported existing website for uploading and mapping Excel files that provided data for initial staging tables.',
        url: '',
        technologies: ['MSSQL', 'SSIS', 'Stored Procedures', 'AngularJS'],
        image: '/project-images/unavailable.png'
    },
];

export default projects;