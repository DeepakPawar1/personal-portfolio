import { Container,Row,Col } from "react-bootstrap"
import navIcon1 from '../assets/img/nav-icon1.svg';
import whatsapp from '../assets/img/whatsapp.svg';
export const Footer =()=>{

    return (
        <footer className="footer" id="footer">
        <Container>
            <Row  className={"footercol"}>
                <Col sm={6}>
                    <div className="social-icon">
                        <a  className={"grow"} href="https://api.whatsapp.com/send?phone=8180935220"><img src={whatsapp} alt="React Logo"/></a>
                        <a className="grow" href="https://www.linkedin.com/in/deepak-pawar-566192140/"><img src={navIcon1} alt="React Logo"/></a>
                    </div>
                <div className="FooterCP">
                    <p>Feel free to say Hi!! </p>
                </div>
                </Col>
            </Row>
        </Container>
        </footer>
    )
}