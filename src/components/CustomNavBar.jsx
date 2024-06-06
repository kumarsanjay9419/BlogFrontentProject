import React, { useEffect, useState } from 'react';
import { NavLink as ReactLink, useNavigate } from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText,
  } from 'reactstrap';
const CustomNavBar = () =>{

    const [showSearchAlert, setShowSearchAlert] = useState(false);

    let navigate=useNavigate()

    const [isOpen,setIsOpen] = useState(false)

    const [login,setLogin]=useState(false)
    const [user,setUser]=useState(undefined)

    return(

        <div>
        <Navbar 
        color="dark" dark 
        expand="md" 
        fixed = ""
        className='px-3'
        >
          <NavbarBrand tag={ReactLink} to="/">MyBlogs</NavbarBrand>
            <NavbarToggler onClick={()=>setIsOpen(!isOpen)} />
          <Collapse isOpen={isOpen}  navbar>
          <Nav className="me-auto" navbar>
            
                <NavItem>
                <NavLink tag={ReactLink} to="/about" >About</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink tag={ReactLink} to="/login" >Login</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink tag={ReactLink} to="/signup" >Signup</NavLink>
                </NavItem>
               
                
                <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                    More
                </DropdownToggle>
                <DropdownMenu right>
                
                    <DropdownItem tag={ReactLink} to="/services">Services</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Contact Us</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem tag="a" href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
                       Youtube
                      </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem tag={ReactLink} to="/others">Others</DropdownItem>
                    
                </DropdownMenu>
                </UncontrolledDropdown>
            </Nav>
            <Nav>

            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
    

}

export default CustomNavBar;
