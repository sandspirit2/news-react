import React, { Component } from 'react'
import { Nav, Navbar, Container, Row } from 'react-bootstrap';
import FontAwesome from "react-fontawesome"
export default class componentName extends Component {





    render() {


        return ( <Container className = "my-3" >
            <Row >
            <Navbar className = "w-100 shadow-bottom"expand = "lg" >

            <img src = "https://www.itworx.com/wp-content/uploads/2019/05/ITWorx_logo.svg"
            alt = "logo"
            width = "15%"
            height = "auto"
            className = "img-responsive" >
            </img> <Navbar.Toggle aria-controls = "basic-navbar-nav" / >
            <Navbar.Collapse id = "basic-navbar-nav" >
            <Nav className = "mx-auto" >
            <ul className = "list-unstyled list-inline text-uppercase" >
            <li className = "list-inline-item dropdown" > <a href = "#link"
            className = "text-black p-2" > Corporate Os </a> 
            <ul className = "list-unstyled dropdown-content  " >
            <li className = "my-2" > < a className = "text-white ml-2 "
            href = "#" > Customer experience </a></li >
            <li className = "my-2" > < a className = "text-white ml-2 "
            href = "#" > Customer self - serviece </a></li >
            <li className = "my-2" > < a className = "text-white ml-2 "
            href = "#" > employee experience </a></li >
            <li className = "my-2" > < a className = "text-white ml-2 "
            href = "#" > knowledge training </a></li >
            <li className = "my-2" > < a className = "text-white ml-2 "
            href = "#" > strategy management </a></li >
            <li className = "my-2" > < a className = "text-white ml-2 "
            href = "#" > managed services </a></li >
            </ul> </li> 
            <li className = "list-inline-item dropdown" > < a href = "#link"
            className = "text-black p-2" > ShowCase </a> 
            <ul className = "list-unstyled dropdown-content  " >
            <li className = "my-2" > < a className = "text-white ml-2 "
            href = "#" > Clinets </a></li >
            <li className = "my-2" > < a className = "text-white ml-2 "
            href = "#" > Partners </a></li >
            <li className = "my-2" > < a className = "text-white ml-2 "href = "#" > Case Studies </a></li >
            <li className = "my-2" > < a className = "text-white ml-2 " href = "#" > Awards </a></li >
            <li className = "my-2" > < a className = "text-white ml-2 " href = "#" > Certifications </a></li >
            </ul></li >
            <li className = "list-inline-item dropdown" > < a href = "#link" className = "text-disabled p-2" > Company </a> <ul className = "list-unstyled dropdown-content  " >
            <li className = "my-2" > < a className = "text-white ml-2 " href = "#" > News & events </a></li >
            <li className = "my-2" > < a className = "text-white ml-2  " href = "#" > Case Studies </a></li >
            <li className = "my-2" > < a className = "text-white ml-2 " href = "#" > careers </a></li >
            <li className = "my-2" > < a className = "text-white ml-2 " href = "#" > community involvment </a></li >
            </ul> 
            </li>
             <li className = "list-inline-item" > < a href = "#link" className = "text-black p-2" > Contact </a></li >
            </ul>
             </Nav> 
            <a href = "#" >
            <FontAwesome className = "fas d-inline-block  fa-search ml-auto" name="search"/ >
            </a>
             </Navbar.Collapse>
              </Navbar> 
              </Row>
               </Container>
        )
    }
}