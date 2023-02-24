import {Container,Row,Col,Tab} from "react-bootstrap";
import Nav from 'react-bootstrap/Nav';
// import { Tab } from "bootstrap";
import ProjectCard from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png"
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";

function Projects () {
    const projects = [
    {
        title: "Business Startup",
        description:"Design & Development",
        imageUrl: projImg1,
     },
     {
        title: "Business Startup",
        description:"Design & Development",
        imageUrl: projImg2,
     },
     {
        title: "Business Startup",
        description:"Design & Development",
        imageUrl: projImg3,
     },
    ]
    return (<section className="project" id="project">
<Container>
    <Row>
        <Col>
        <h2>Projects</h2>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text  </p>
        <Tab.Container id="projects-tabs" defaultActiveKey="first">
        <Nav variant="pills"  defaultActiveKey="/home" className="flex-row">
            <Nav.Item>
              <Nav.Link eventKey="first">Tab 1</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">Tab 2</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="third">Tab 3</Nav.Link>
            </Nav.Item>
          </Nav>
          <Tab.Content>
              <Tab.Pane eventKey="first">
                  <Row>
                      {
                          projects.map((project,index)=>{
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
                  LoremIpsum
              </Tab.Pane>
              <Tab.Pane eventKey="third">
                 Lorem Ipsum       
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