import React from 'react';
import './styles.css';
const Header:React.FC<any> =  () => {
    return (
        <div className={'div'}>
            <nav className='nav'>
                <ul className="nav-links">
                    <li className={"li"}><a href="#">Home</a> </li>
                    <li className={"li"}><a href="#">About</a> </li>
                    <li className={"li"}><a href="#">Contact Me</a> </li>
                </ul>
            </nav>
        </div>
    )
}
export default Header;