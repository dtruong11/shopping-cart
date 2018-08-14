import React from 'react'
const Footer = ({year}) => {
    return (
        <nav className="navbar navbar-dark bg-dark">
            <a className="navbar-brand" href="#">&copy; {year}</a>
        </nav>
    )
}

export default Footer 