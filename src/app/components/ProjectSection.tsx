import React from "react"
import ProjectCard from "./ProjectCard"

const projectsData = [
    {
        id: 1,
        title: "React Portfolio Website",
        description: "Project 1 description",
        image: "/images/coder.png",
        tag: ["All", "Web"]
    },
    {
        id: 2,
        title: "Bitcoin with Stacks Website",
        description: "Project 2 description",
        image: "/images/stacks-btc.webp",
        tag: ["All", "Web", "Web3/Blockchain"]
    },
    {
        id: 3,
        title: "Upcoming home automation project",
        description: "Project 3 description",
        image: "/images/projects/coder.png",
        tag: ["Automation"]
    },
    {
        id: 4,
        title: "Upcoming 'Infra As Code' project",
        description: "Project 4 description",
        image: "/images/projects/coder.png",
        tag: ["IaC"]
    },
]

const ProjectSection = () => {
    return (
        <>
        <h2 className="text-white">My Projects</h2>
        <div>{projectsData.map((project) => <ProjectCard key={project.id} title={project.title} description={project.description} imgUrl={project.image} />)}</div>
        </>
    )
}

export default ProjectSection