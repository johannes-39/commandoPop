import React from 'react';
import './styles.css';
const Header:React.FC<any> =  () => {
    return (
        <div className={'div'}>
            <nav className='nav'>
                <ul className="nav-links">
                    <li className={"li"}><a href="/shop">SHOP</a> </li>
                    <li className={"li"}><a href="/">NEWS</a> </li>
                    <li className={"li"}><a href="/about">About</a> </li>
                </ul>
            </nav>
        </div>
    )
}
export default Header;