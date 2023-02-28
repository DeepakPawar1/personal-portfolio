import {Container,Row,Col,Tab} from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
// import { Tab } from "bootstrap";
import ProjectCard from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png"
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import porjImg4 from "../assets/img/deliveryserv.png";
import Carousel from 'react-bootstrap/Carousel'
function Projects () {
    const projectErun = [
    {
        title: "Business Startup",
        description:"Backend work in python with Frappe/Erpnext framework.",
        imageUrl: porjImg4,
        projectItems: ["Developed and maintained payments system that used to deploy live payments to field workers based on various calculation and location dependencies integrated with Banks payment apis.","Developed ticketing system dispatching dispatching for incoming payment requests  using Redis in memory database and Python.","Mostly  worked with JavaScript as frontend."]
     }]
     const projectFreelance = [{
        title: "Freelancer",
        description:"Backend Projects for Inventory Management.",
        imageUrl: projImg2,
        projectItems: ["Developed a dashboard for handling stocks within the system using JavaScript.","Developed reports for data about remaining stocks and future requirements using Pandas library .","Providing the user the ability to punch future orders and edit future orders whereas not allowing to edit previous date data."]
     }]
     const projectDeloitte=[
     {
        title: "Business Startup",
        description:"Design & Development",
        imageUrl: projImg3,
        projectItems: ["Worked on Python project where Cloud platform was to be migrated for HP.","Handled backend apis for access controls.","Developed backed in django for a product which dealt with providing loan to people.","Scraping of data from linkedin and generating models for user based on their credit history."]
     }]
    

    

    return (<section className="project" id="project">
<Container>
    <Row>
        <Col>
        <h2>Projects</h2>
        <p style={{margin: "auto" }}>My work on professional projects is mostly in backend. Following are the details.</p>
        <Tab.Container id="projects-tabs" defaultActiveKey="first">
        <Nav variant="pills"  defaultActiveKey="/home" className="projectsClass">
            <Nav.Item className="item">
              <Nav.Link eventKey="first"><div>ElasticRUN Pune</div>
             
              </Nav.Link>
              
            </Nav.Item>
            <Nav.Item className="item">
              <Nav.Link eventKey="second"><div>FreeLancing</div>
             
              
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="item">
              <Nav.Link eventKey="third"><div>HashedIN by DELOITTE</div>
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <Tab.Content>
              <Tab.Pane eventKey="first">
               2018-2020 ElasticRUN 
                  <Row >
                      {
                          projectErun.map((project,index)=>{
                              return(
                                  <ProjectCard 
                                  key={index} 
                                  {...project}
                                  />
                              )
                          })
                      }
                  </Row>
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                  2020-2021 Freelancing
                  <Row >
                      {
                          projectFreelance.map((project,index)=>{
                              return(
                                  <ProjectCard 
                                  key={index} 
                                  {...project}
                                  />
                              )
                          })
                      }
                  </Row>
              </Tab.Pane>
              <Tab.Pane eventKey="third">
                 2021-2023 HashedIN by DELOITTE
                  <Row >
                      {
                          projectDeloitte.map((project,index)=>{
                              return(
                                  <ProjectCard 
                                  key={index} 
                                  {...project}
                                  />
                              )
                          })
                      }
                  </Row>     
              </Tab.Pane>
          </Tab.Content>
          </Tab.Container>
       </Col>
    </Row>
</Container>
<img className="background-image-right" src={colorSharp2} alt="Immg" />
    </section>)
}

export default Projects;