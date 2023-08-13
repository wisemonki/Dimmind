import { GiHamburgerMenu } from "react-icons/gi";
import './navbar.css';
import { useState } from "react";

const Navbar = () => {
  const [showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
     <div className='sign-in'>Sign in
      </div>
     <nav className='main-nav'>
        <div className='menu'>
          <div className={showMediaIcons ? "menu-link mobile-menu-link":'menu-link'}>
             <ul>
               <li>
                 <a href='#'>Home</a>
               </li>
               <li>
                 <a href='#'>Sales</a>
               </li>
               <li>
                  <a href='#'>Brand</a>
                </li>
             </ul>
            </div>
          </div>
          <div className='logo'>
            <h2>
              <span>D</span>IMMIND
            </h2>
          </div>

        <div className='search'>
          <input type="text" placeholder="Search.."/>
          <i className="fa-solid fa-cart-shopping"></i>
        </div>
        
        <div className="hamburger-menu">
          <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}>
            <GiHamburgerMenu className="hamburger-icon" />
          </a>
        </div>
     </nav>
    </>
  );
}

export default Navbar;
