"use client"
import React, { useState } from "react"
import ProjectCard from "./ProjectCard"
import ProjectTag from "./ProjectTag"

const projectsData = [
    {
        id: 1,
        title: "React Portfolio Website",
        description: "A portfolio of created and upcoming projects",
        image: "/images/coder.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/Hugosterberg/portfolio-website",
        previewUrl: "/"
    },
    {
        id: 2,
        title: "Bitcoin with Stacks",
        description: "An upcoming project made on the Bitcoin blockchain",
        image: "/images/stacks-btc.webp",
        tag: ["All", "Web", "Web3/Blockchain", "Bitcoin/Stacks"],
        gitUrl: "/",
        previewUrl: "/"
    },
    {
        id: 3,
        title: "Home automation assistant",
        description: "An upcoming project for home automation",
        image: "/images/automation.png",
        tag: ["All", "Automation"],
        gitUrl: "/",
        previewUrl: "/"
    },
    {
        id: 4,
        title: "'Infra As Code' - Ready to deploy",
        description: "A potential project to deploy infrastructure",
        image: "/images/iac.png",
        tag: ["All", "IaC"],
        gitUrl: "/",
        previewUrl: "/"
    },
]

const ProjectSection = () => {
    const [tag, setTag] = useState("All")

    const handleTagChange = (newTag: string) => {
        setTag(newTag)
    }

    const filteredProjects = projectsData.filter((project) => project.tag.includes(tag))

    // const filteredProjects = projectsData.filter((project) => {
    //     return project.tag.includes(tag)
    // })

    return (
        <>
            <h2 className="text-center text-4xl font-bold text-white mt-4">
                My Projects
            </h2>
            <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
                <ProjectTag 
                    onClick={handleTagChange} 
                    name="All" 
                    isSelected={tag === "All"} 
                />
                <ProjectTag 
                    onClick={handleTagChange} 
                    name="Web" 
                    isSelected={tag === "Web"} 
                />
                <ProjectTag 
                    onClick={handleTagChange} 
                    name="Bitcoin/Stacks" 
                    isSelected={tag === "Bitcoin/Stacks"} 
                />
                <ProjectTag 
                    onClick={handleTagChange} 
                    name="Automation" 
                    isSelected={tag === "Automation"} 
                />
            </div>
            <div className="grid md:grid-cols-3 gap-8 md:gap-12">
                {filteredProjects.map((project) => (
                <ProjectCard 
                    key={project.id} 
                    title={project.title} 
                    description={project.description} 
                    imgUrl={project.image} 
                    gitUrl={project.gitUrl}
                    previewUrl={project.previewUrl}
                />
                ))}
            </div>
        </>
    )
}

export default ProjectSection