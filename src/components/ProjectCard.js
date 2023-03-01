
import {Col} from "react-bootstrap";
function ProjectCard ({title,description,imageUrl,projectItems}){
    const renderItem = projectItems.map((item,index)=>{
        return <li key={index}>{item}</li>
    })
    return (
        <div className="cardDiv">
            <Col sm={6} md={4}>
                <ul style={{listStyle: "square" ,textAlign:"justify", fontFamily:"monospace"}}>  
                {renderItem}
                </ul>
            </Col>
            <Col sm={6} md={4}>
                <div className="proj-imgbx">
                    <img src={imageUrl} alt="React Logo" className="projectCardImg"/>
                    <div className="proj-txtx">
                        <h4>{title}</h4>
                        <span>{description}</span>
                    </div>
                </div>
            </Col>
        </div>
    )
}

export default ProjectCard;