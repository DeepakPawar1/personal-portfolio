
import {useState} from 'react';
import {MenuData} from './MenuData'
import './Navbar1Styles.css'
function NavBar(){
    const [clicked,setClicked] = useState(false);

    const handleClick=()=>{
        setClicked((current)=>{
            return !current;
        })
    }
    const renderData = MenuData.map((data,index)=>{
        return (<li key={index} onClick={handleClick}>
            <a href={data.url} className={data.cName}>
                <i className={data.icon}></i>
                {data.title}
            </a>
        </li>)
    })
    return (
        <nav className="NavbarItems">
            <h1 className="logo"> Portfolio <i className="fab fa-react"></i>
            </h1>
            <div onClick={handleClick}className="menu-icons">
                <i className={clicked ? "fas fa-times" : "fas fa-bars"}>

                </i>
            </div>
            <ul className={clicked ? "nav-menu active" : "nav-menu"}>
                {renderData}
            </ul>
        </nav>
    )
}

export default NavBar;