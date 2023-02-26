import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {Container,Row,Col} from "react-bootstrap";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import colorSharp from "../assets/img/color-sharp.png";
import SvgIcon from "./SvgIcon";
import {SquareSvg} from "./SvgIcon";
import {useState} from 'react';
import { FileX } from "react-bootstrap-icons";

function Skills  () {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
      const [isShown, setIsShown] = useState(false);
      const [isShownBackend, setIsShownBackend] = useState(false);
      const [isShownDevOps,setIsShownDevops] = useState(false);
    return (<section>   
        <Container>
        <Row>
            <Col>
            <div  className="skill-bx">
                <h2>
                    Skills
                </h2>
                <p>Following is the skillset that I posses in my arsenal. I believe there is always an area for IMPROVEMENT.</p>
            <Carousel responsive={responsive} infiite={true} className="skill-slider" >
            <div className="item" onMouseEnter={() => setIsShownBackend(true)}  onMouseLeave={() => setIsShownBackend(false)}>
                    {isShownBackend ? <SquareSvg isopen={isShownBackend} skills={["Python","Django","FastApi"]}/> : <SvgIcon percentage="80"/>}
                    <h5>Backend</h5>
                </div>
                
                <div className="item"  onMouseEnter={() => setIsShown(true)}  onMouseLeave={() => setIsShown(false)}>
                    {isShown ? <SquareSvg isopen={isShown} skills={["React","Javascript","HTML"]}/> : <SvgIcon percentage="70"/>}

                    <h5>Frontend</h5>
                </div>
                <div className="item" onMouseEnter={() => setIsShownDevops(true)}  onMouseLeave={() => setIsShownDevops(false)}>
                    {isShownDevOps ? <SquareSvg isopen={isShownDevOps} skills={["Docker","Kubernetes","Jenkins"]}/> : <SvgIcon percentage="60"/>}
                    <h5>DevOps</h5>
                </div>
            </Carousel>
            </div>
            </Col>
        </Row>
        </Container>
        <img className="background-image-left" src={colorSharp} alt="React Logo"/>

    </section>)
}

export default Skills;