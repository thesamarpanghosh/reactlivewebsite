import React from 'react'

const Footer = () => {

    const date = new Date().getFullYear();

    return (
        <>
            <footer className="w-100 bg-light text-center">
                <p>&copy; {date} Imagination Redefined. All Rights Reserved</p>
            </footer>
        </>
    )
}

export default Footer
