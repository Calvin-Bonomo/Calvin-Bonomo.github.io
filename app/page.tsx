import Image from 'next/image'
import type { ProjectInfo } from '../components/ProjectCard'
import ProjectCard from '../components/ProjectCard'
import projectData from '../public/Projects.json'

const projects: ProjectInfo[] = projectData.projects as ProjectInfo[]

export default function Home() {
  return (
      <div>
        <div className={`grid grid-cols-2 gap-4 h-fit items-center mx-4 md:mx-0 lg:h-screen`}> {/*Intro*/}
            <div className={`flex justify-end`}>
                <div className={`md:w-2/3 lg:w-1/2`}>
                    <h1 className={`text-4xl lg:text-6xl font-bold overflow-visible`}>Hi, I'm Calvin</h1>
                    <p className={`text-sm md:text-lg`}>I'm a fourth year undergraduate student at the University of Colorado Boulder, pursuing a Bachelor of Science in Computer Science at the University of Colorado Boulder. I previously interned at Apple on the visionOS UI and Frameworks team where I did prototyping and exploratory work as well as learning about API development.</p>
                </div>
            </div>
            <Image className={`sm:m-1 md:w-2/3 lg:w-1/3 rounded-2xl`}
            src="/Profile.jpg"
            width={599}
            height={599}
            alt="Picture of Calvin Bonomo"
            />
        </div>
        <div className="grid grid-cols-3 gaps-10 place-items-center px-10 my-10 inset-shadow-[0px_8px_5px_rgba(0,0,0,0.1),0px_-8px_5px_rgba(0,0,0,0.1)] max-h-2/3"> {/*Projects*/}
            {projects.map((project) => (
                <ProjectCard key={project.id} id={project.id} info={project.info}/>
            ))}
        </div>
    </div>
);}
