import { Container,Row,Col } from "react-bootstrap"
import {DevSvg} from "./SvgIcon";
export const Footer =()=>{

    return (
        <footer className="footer">
        <Container>
            <Row>
                <Col sm={6}>
                    <DevSvg/>
                </Col>
            </Row>
        </Container>
        </footer>
    )
}