import React from "react"
import NavLink, { NavLinkProps } from "./NavLink"

interface NavLinkData {
    title: string,
    path: string
}

interface MenuOverlayProps {
    links: NavLinkData[]
    // links: NavLinkProps[]
}

const MenuOverlay = ({ links }: MenuOverlayProps) => {
    return (
        <ul className="flex flex-col py-4 items-center">
            {links.map((link, index) => (
                <li key={index}>
            <NavLink href={link.path} title={link.title}/>
            </li>
            ))}
        </ul>
    )
}

export default MenuOverlay