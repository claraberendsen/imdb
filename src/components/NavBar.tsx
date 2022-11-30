import React from 'react'
import { SearchBar, SearchBarProps } from "./SearchBar"

export type NavBarProps = {title?: string} & SearchBarProps

export const NavBar = ({title, ...props}: NavBarProps) => {
    return (
    <div className="Navbar">
        {title && <h3 className='header'>{title}</h3>}
        <SearchBar {...props}/>
    </div>
    )
}