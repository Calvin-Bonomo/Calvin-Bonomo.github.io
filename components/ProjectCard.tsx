import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export interface ProjectInfo {
    id: number;
    info: {
        name: string;
        description: string;
        link: string;
        image_path: string;
        image_width: number;
        image_height: number;
    }
};

const ProjectCard: React.FC<ProjectInfo> = ({ info }: ProjectInfo) => { return (
    <div className="border-solid border-2 rounded-xl text-center my-10 p-5 h-full w-full grid transition duration-500 hover:shadow-2xl">
        <h1 className="font-bold text-xl">{info.name}</h1>
        <Image className="flex-grow"
            src={info.image_path}
            alt="Placeholder"
            width={info.image_width}
            height={info.image_height}
        />
        <p className="text-sm">{info.description}</p>
        <div className="content-end">   
            <Link className="p-2 rounded-md shadow inset-shadow transition ease-out duration-400 inset-shadow-[0px_0px_3px_rgba(0,0,0,0.2)] hover:inset-shadow-transparent not-hover:shadow-transparent hover:shadow-[0px_0px_10px_rgba(0,0,0,0.2)]" href={info.link}>Learn more</Link>
        </div>
    </div>
)};

export default ProjectCard;
