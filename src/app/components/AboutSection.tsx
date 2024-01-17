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
            </ul>
        )
    },
    {
        title: "Certifications",
        id: "certifications",
        content: (
            <ul className="list-disc pl-2">
                <li>Certified SAFe DevOps Practitioner</li>
            </ul>
        )
    },
    {
        title: "Me",
        id: "me",
        content: (
            <ul className="list-disc pl-2">
                <li>Namn: Hugo</li>
                <li>Ålder: 27</li>
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
        <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">AboutSection
            <Image src="/images/coder.png" width={500} height={500} alt={""}/>
            <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
                <h2 className="text-4xl font-bold text-white mb-4">About me</h2>
                <p className="text-base md:text-lg">
                    I am blablablablablablabla
                    blublublu
                    bleblebleble bla
                    slal all lal
                </p>
                <div className="flex flex-row justify-start mt-8">
                    <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>{" "}Skills{" "}</TabButton>
                    <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}>{" "}Education{" "}</TabButton>
                    <TabButton selectTab={() => handleTabChange("certifications")} active={tab === "certifications"}>{" "}Certifications{" "}</TabButton>
                    <TabButton selectTab={() => handleTabChange("me")} active={tab === "me"}>{" "}Me{" "}</TabButton>            
                </div>
                <div className="mt-8">{TAB_DATA.find((t) => t.id === tab)?.content}</div>
            </div>
        </div>
    </section>
    )
}

export default AboutSection