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
    }
];

export default projects;