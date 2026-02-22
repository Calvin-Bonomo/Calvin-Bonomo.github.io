import Image from 'next/image'
import type { ProjectInfo } from '../components/ProjectCard'
import ProjectCard from '../components/ProjectCard'
import projectData from '../public/Projects.json'

const projects: ProjectInfo[] = projectData.projects as ProjectInfo[]

export default function Home() {
  return (
      <div>
        <div className="px-7 py-7 mb-10 grid gap-x-5 md:grid-cols-2 md:py-50">
            <h1 className="font-bold md:self-end text-4xl text-center pb-4 md:ml-100 md:text-6xl md:pb-0 md:text-start">Hi, I'm Calvin!</h1>
            <div className="flex justify-start text-center md:row-span-2 md:w-full">
            <Image className="rounded-xl md:w-3xs"
                src="/Profile.jpg"
                width={599}
                height={599}
                alt="Headshot of Calvin Bonomo"
            />
            </div>
            <p className="pt-4 md:pt-0 md:ml-100">I'm a fourth year undergraduate student at the University of Colorado Boulder, pursuing a Bachelor of Science in Computer Science at the University of Colorado Boulder. I previously interned at Apple on the visionOS UI and Frameworks team where I did prototyping and exploratory work as well as learning about API development.</p>
        </div>
        <span>
            <h1 className="text-center font-bold text-5xl mb-5">Projects</h1>
            <div className="grid grid-rows-3 md:grid-rows-1 md:grid-cols-3 gap-10 p-10 place-items-center inset-shadow-[0px_8px_5px_rgba(0,0,0,0.1),0px_-8px_5px_rgba(0,0,0,0.1)] mb-10 md:mb-100"> {/*Projects*/}
                {projects.map((project) => (
                    <ProjectCard key={project.id} id={project.id} info={project.info}/>
                ))}
            </div>
        </span>
    </div>
);}
