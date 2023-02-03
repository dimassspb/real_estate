import { Link } from "react-router-dom";

const Header = () => {
  return (
      <nav className='grey lighten-5'>
          <div className='nav-wrapper'>
              <Link to='/' className='brand-logo'>
                  <div className='black-text'>
                      Y•E GROUP®️ Real Estate & Construction
                  </div>
              </Link>
              <ul id='nav-mobile' className='right hide-on-med-and-down'>
                  <li>
                      <Link className='black-text' to='/about'>
                          About
                      </Link>
                  </li>
                  <li>
                      <Link className='black-text' to='/contacts'>
                          Contacts
                      </Link>
                  </li>
              </ul>
          </div>
      </nav>
  );
}
 
export default Header;