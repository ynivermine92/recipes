import React, { useState } from 'react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
  return (
    <header>
    <div className="header">
        <div className="container">
            <div className={`navbar ${isMenuOpen ? 'active' : ''}`}>
                <div className="logo"> <a href="/">House Staff</a> </div>
                <nav>
                    <ul className={`menu ${isMenuOpen ? 'active' : ''}`}>

                    </ul>
                </nav>
                <button className={`burger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
                    <span></span>
                </button>
            </div>
        </div>
    </div>
</header>
  )
}

export default Header