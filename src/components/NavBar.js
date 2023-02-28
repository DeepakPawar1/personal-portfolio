import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {useState,useEffect} from 'react';
import logo from '../assets/img/logo.svg';
import {DevSvg} from "./SvgIcon";
// import cdev from '../assets/img/cdev.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import whatsapp from '../assets/img/whatsapp.svg';


function NavBar(){
   const [activeLink,setActiveLink] = useState('home');
   const [scrolled,setScrolled] = useState(false);
  
   useEffect(()=>{
    const onScroll = () =>{
        if(window.scrollY > 50){
            setScrolled(true);
        }else{
            setScrolled(false);
        }
    }
    window.addEventListener("scroll",onScroll);
    return ()=>{
        window.removeEventListener("scroll",onScroll);
    }
   },[])

   const onUpdateActiveLink = (link)=>{
       setActiveLink(link);
    //    console.log(link);

   }
      return (
        <Navbar bg="light" expand="lg" className={scrolled ? "scrolled" : ""}>
          <Container>
            <Navbar.Brand href="#home">
                {/* <img src={devsvg} alt="Logo"/> */}
                <DevSvg/>
            </Navbar.Brand>
            
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link' } onClick={()=> onUpdateActiveLink('home')}>Home</Nav.Link>
                <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={()=> onUpdateActiveLink('skills')} >Skills</Nav.Link>
                <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}  onClick={()=> onUpdateActiveLink('projects')} >Projects</Nav.Link>
                <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}>
                        <div className="social-icon">
                            <a className="grow" href="https://api.whatsapp.com/send?phone=8180935220"><img src={whatsapp} alt="React Logo"/></a>
                            <a className="grow" href="https://www.linkedin.com/in/deepak-pawar-566192140/"><img src={navIcon1} alt="React Logo"/></a>
                            {/* <a className="grow" href="#insta"><img src={navIcon3} alt="React Logo"/></a>  */}
                        </div>
                </Nav.Link>
              </Nav>
              
            </Navbar.Collapse>
            <Navbar.Toggle aria-controls="basic-navbar-nav" >
                <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
          </Container>
        </Navbar>
      );
}

export default NavBar;


{/* <span className="navbar-text">
                
                <div className="connection" onClick={()=>{ console.log('connect')}}> 
                <div className="social-icon">
                    <a className="grow" href="https://api.whatsapp.com/send?phone=8180935220"><img src={whatsapp} alt="React Logo"/></a>
                    <a className="grow" href="https://www.linkedin.com/in/deepak-pawar-566192140/"><img src={navIcon1} alt="React Logo"/></a>
                </div>
                </div>
              </span> */}