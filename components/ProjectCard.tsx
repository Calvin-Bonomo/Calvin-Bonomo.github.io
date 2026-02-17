import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export interface ProjectInfo {
    id: number;
    info: {
        name: string;
        image_path: string;
        description: string;
        link: string;
        image_width: number;
        image_height: number;
    }
};

const ProjectCard: React.FC<ProjectInfo> = ({ info }: ProjectInfo) => { return (
    <div className="border-solid border-2 rounded-xl text-center my-10 p-5">
        <h1 className="font-bold text-xl pb-4">{info.name}</h1>
        <Image className="flex-grow pb-2"
            src={info.image_path}
            alt="Placeholder"
            width={info.image_width}
            height={info.image_height}
        />
        <p className="text-justify text-sm">{info.description}</p>
        <Link className="underline" href={info.link}>Learn more</Link>
    </div>
)};

export default ProjectCard;
