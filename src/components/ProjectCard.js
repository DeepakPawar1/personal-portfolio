
import {Col} from "react-bootstrap";
function ProjectCard ({title,description,imageUrl}){
    return (
        <div className="cardDiv">
            <Col sm={6} md={4}>
            <ul style={{listStyle: "square"}}>   <li>This project was about inventory management and business invoices handling. </li>   <li>The framework used was Frappe/Erpnext. </li> </ul>
        </Col>
        <Col sm={6} md={4}>
        <div className="proj-imgbx">
            <img src={imageUrl} alt="React Logo"/>
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