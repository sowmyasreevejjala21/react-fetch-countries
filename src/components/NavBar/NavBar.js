import Navigation from "./Navigation";
import MobileNavigation from "./MobileNavigation";
import './NavBar.scss';

const NavBar = () => {
    return (
        <div className="navbar">
            <Navigation />
            <MobileNavigation />
        </div>
    )
}

export default NavBar;