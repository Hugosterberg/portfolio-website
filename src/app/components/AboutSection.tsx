"use client"
import React, { useTransition, useState } from "react"
import Image from "next/image"
import TabButton from "./TabButton"

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className="list-disc pl-2">
                <li>C# / .NET</li>
                <li>SQL</li>                
                <li>React</li>
                <li>Typescript</li>
                <li>CI / CD</li>
                <li>DevOps</li>
                <li>Azure</li>
            </ul>
        )
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className="list-disc pl-2">
                <li>Systemvetenskap, Örebro Universitet</li>
                <li>XXXX hours of self learning</li>
            </ul>
        )
    },
    {
        title: "Certifications",
        id: "certifications",
        content: (
            <ul className="list-disc pl-2">
                <li>Certified SAFe DevOps Practitioner</li>
                <li>Application Services Innovation</li>
                <li>Agile Explorer</li>
                <li>Enterprise Design Thinking Practitioner</li>
                <li>Cognitive Practitioner</li>
                <li>The IBM way</li>
                <li>IBM Consulting - Delivering Business Value</li>
                <li>IBM Consulting - Communicating Value</li>
            </ul>
        )
    }
]

const AboutSection = () => {
    const [tab, setTab] = useState("skills")
    const [isPending, startTransition] = useTransition()

    const handleTabChange = (id: string) => {
        startTransition(() => {
            setTab(id)
        })
    }

    return (
    <section className="text-white">
        <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
            <Image className="rounded-full" src="/images/aboutme.gif" width={500} height={500} alt={""}/>
            <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                <h2 className="text-4xl font-bold text-white mb-4">About me</h2>
                <p className="text-base md:text-lg">
                    I am a full stack developer with a passion for learning 
                    and creating creative applications. This is why i started 
                    this project as part of my goal in 2023. I think this will
                    be a good motivation to keep learning and developing new 
                    innovative projects.
                </p>
                <div className="flex flex-row justify-start mt-8">
                    <TabButton 
                        selectTab={() => handleTabChange("skills")} 
                        active={tab === "skills"}
                    >
                        {" "}Skills{" "}
                    </TabButton>
                    <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}>{" "}Education{" "}</TabButton>
                    <TabButton selectTab={() => handleTabChange("certifications")} active={tab === "certifications"}>{" "}Certifications{" "}</TabButton>       
                </div>
                <div className="mt-8">
                    {TAB_DATA.find((t) => t.id === tab)?.content}
                </div>
            </div>
        </div>
    </section>
    )
}

export default AboutSection