import NavLinks from "./NavLinks"
import './NavBar.scss';
import {CgMenu} from 'react-icons/cg';
import  {useState} from 'react';

const MobileNavigation = () =>{
    const [open, setOpen] = useState(false)
    return (
        <nav className="mobile-navigation">
            <CgMenu className = "mobile-navigation_hamburger" size="30" onClick={()=> setOpen(!open)} />
            {open && <NavLinks /> }
        </nav>
    )
}
export default MobileNavigation