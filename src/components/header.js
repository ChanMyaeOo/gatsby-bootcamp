import React from 'react'
import { Link } from 'gatsby'
import headerStyles from './header.module.scss'

const Header = () => {
    return(
        <header>
            <h1>
                <Link to="/" className={headerStyles.title}>Chan Myae Oo</Link>
            </h1>
            <nav>
                <ul className={headerStyles.navList}>
                    <li><Link to="/" className={headerStyles.navItem} activeClassName={headerStyles.activeItem}>Home</Link></li>
                    <li><Link to="/blog" className={headerStyles.navItem} activeClassName={headerStyles.activeItem}>Blog</Link></li>
                    <li><Link to="/about" className={headerStyles.navItem} activeClassName={headerStyles.activeItem}>About</Link></li>
                    <li><Link to="/contact" className={headerStyles.navItem} activeClassName={headerStyles.activeItem}>Contact</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header