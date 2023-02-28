import { Container,Row,Col } from "react-bootstrap"
import {DevSvg} from "./SvgIcon";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import whatsapp from '../assets/img/whatsapp.svg';
export const Footer =()=>{

    return (
        <footer className="footer" id="footer">
        <Container>
            <Row>
                <Col sm={6} className={"text-center text-sm-end"}>
                    <div className="social-icon">
                        <a href="https://api.whatsapp.com/send?phone=8180935220"><img src={whatsapp} alt="React Logo"/></a>
                        <a className="grow" href="https://www.linkedin.com/in/deepak-pawar-566192140/"><img src={navIcon1} alt="React Logo"/></a>
                    </div>
                <p>CopyRight 2022. All Rights Reserved </p>
                </Col>
            </Row>
        </Container>
        </footer>
    )
}