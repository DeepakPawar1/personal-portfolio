import {Container,Row,Col} from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
function Banner (){

return (
    <section className="banner" id="home">
        <Container>
            <Row className="align-items-center">
                <Col xs={12} md={6} xl={7}>

                    <span className="tagline">Welcome to my Portfolio</span>
                    <h1>{`Hi I'm Deepak Pawar `}
                    {/* <span className="wrap">{text}</span> */}
                    </h1>
                    <div style={{textAlign:"justify", fontFamily:"monospace"}}>
                    <p >I am a <b>Computer Engineer</b> graduated in 2018. I have had a chance to work with multiple firms since then. I have been extensively working on Backend , Frontend and DevOps as per the requirements of the project.</p><p> I have worked as Python Developer for most of my working experience and I have levelled up as Frontend developer after working on series of personal projects, this portfolio website being one of them.  </p></div>
                    {/* <button onClick={()=> console.log('connect')} style={{backgroundColor:"Black"}}>
                            Lets Connect <ArrowRightCircle size={25}/>
                    </button> */}
                </Col>
                <Col xs={12} md={6} xl={5}> 
                <img src={headerImg} alt="Header Img" style={{maxWidth: "100%",height: "auto"}} id="fadeshow1"/>
                
                </Col>
            </Row>
        </Container>
    </section>
)

}
export default Banner;