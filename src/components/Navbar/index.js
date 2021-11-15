import React from 'react'
import {Bars, Nav, NavIcon, NavLink} from './NavBarElents';
 const NavBar=({toggle})=> {
    return (
        // fragment
        <> 
         <Nav>
             <NavLink to='/'>BurgersForever</NavLink>
             <NavIcon onClick={toggle}>
                 <p>Meniu</p>
                 <Bars/>
             </NavIcon>
         </Nav>
     


        </>
    )
}

export default NavBar
