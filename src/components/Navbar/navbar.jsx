import './navbar.css'

const AppNavbar = () => {
    return (  
        <div className='nav'>
           <div className="nav-logo">ABDULAZEEZ</div> 
            <ul className="nav-menu">
                <li>Home</li>
                <li>Explore</li>
                <li>About</li>
                <li className='nav-contact'>Contact</li>
            </ul>
        </div>
    );
}
 
export default AppNavbar;