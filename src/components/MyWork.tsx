'use client';
import { ExpandArrowLink, GlowCard } from '@/components';
import clsx from 'clsx';
import Image, { StaticImageData } from 'next/image';
import { inventory, crowdfunding } from '../../public/projects/';

interface Project {
  href: string;
  name: string;
  description: string;
  full: boolean;
  github: string;
  live_link: string;
  image: {
    src: StaticImageData;
  };
}

const projects: Project[] = [
  {
    href: '/apps/realtor-simplified',
    name: 'Inventory & Invoicing WebApp',
    full: true,
    description: ' Leveraging Next.js, I developed the frontend interface for the project and implemented endpoints to efficiently retrieve data from MongoDB. Utilizing MongoDB Atlas, I securely stored the information pertaining to jewelry items. Ultimately, I deployed the website on Vercel, ensuring its accessibility and performance.',
    image: { src: inventory },
    github: 'https://github.com/sahil0233/Samskarabillingwebsite',
    live_link: 'https://samskarabilling.vercel.app/'
  },
  {
    href: '/apps/loteria-monarca',
    name: 'Crowdfunding Decentralized App',
    full: true,
    description: 'Developed a responsive website using React and implemented smart contracts in Solidity for backend functionality. I connected the smart contract database to the frontend using the Thirdweb library. Then deployed the project on google cloud. This setup enables users to create campaigns and donate Ethereum to other campaigns seamlessly.',
    image: { src: crowdfunding },
    github: 'https://coinraise-ten.vercel.app/',
    live_link: 'https://github.com/sahil0233/Coinraise'
  },
];

export default function MyWork() {
  return (
    <div className="relative z-10 mt-20 @container">
      <div className="grid grid-cols-1 gap-8 pt-10 @3xl:grid-cols-2">
        {projects.map((project) => (
          <GlowCard
            key={project.name}
            className={clsx('hover:shadow-my_work_yellow/90 flex justify-center items-center flex-col @xl:flex-row gap-2', project.full ? ' @2xl:h-[50vh] @3xl:col-span-2' : 'h-[60vh] @3xl:col-span-1')}
            glowClassName="from-[#ffdc8b] to-[#ffdc8b]"
          > 
            <div>
              <h3 className='text-lg @2xl:text-xl @3xl:text-3xl text-my_work_yellow mb-4'>
                {project.name}
              </h3>
              <p className='text-white text-sm @md:text:xs @2xl:text-md'>
              {project.description}
              </p>
              <ul className=' pr-4 flex gap-4 pt-2 text-white text-xs'>
                <li className='hover:cursor-pointer border rounded-md hover:border-2 hover:border-my_work_yellow'><a href={project.live_link} target="_blank" rel="noopener noreferrer"><img src='./logos/link.png' width={25} height={25} /> </a></li>
                <li className='hover:cursor-pointer border rounded-md hover:border-2 hover:border-my_work_yellow'><a href={project.github} target="_blank" rel="noopener noreferrer"><img src='./logos/github-logo.webp' width={25} height={25} /></a></li>
              </ul>
            </div>
            
            <Image
              placeholder="blur"
              className={clsx(
                'my-projects-img-shadow',
                project.full ? ' @md:w-[80%] @xl:w-[50%] @2xl:w-[55%] @md:rounded-tl-md bottom-0 right-0' : 'bottom-0 @xl:right-0 @xl:w-[70%] @3xl:w-full'
              )}
              src={project.image.src}
              alt=""
            />
          </GlowCard>
        ))}
      </div>
    </div>
  );
}
