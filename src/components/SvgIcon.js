
import {motion} from 'framer-motion';
import useCheckMobileScreen from './MobileViewChecker';
const svgVariants ={
    // hidden : {rotate : 0},
    visible:{
        rotate: 0,
        transition : {duration : 1}
    }
}


const pathVariants = {
    hidden: {
        opacity: 0,
        pathLength: 0
    },
    visible:{
        opacity: 1,
        pathLength: 1,
        transition:{
            duration: .5,
            ease: "easeInOut"
        }
    }
}

function SvgIcon ({percentage}) {
    const str = `${percentage},100`
    return (<svg viewBox="0 0 36 36" width="150" height="160" className="skilllSvg">
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%"   stopColor="#AA367C"/>
          <stop offset="100%" stopColor="#4A2FBD"/>
        </linearGradient>
        <path
            d="M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831
            a 15.9155 15.9155 0 0 1 0 -31.831"
            fill="#121212"
            stroke="url(#gradient)"
            strokeWidth="3.7"
            strokeLinecap="round"
            strokeDasharray= {str}
        />
        <text x="11" y="20" fill="white" style={{fontSize:7}}>{percentage}%</text> 
        </svg>)
        
    }
    

    export const DevSvg = ()=>{

        return (
<svg fill="#121212" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" 
	 width="50px" height="50px" viewBox="0 0 256 170" xmlSpace="preserve" >
<path d="M127.7,34.7c0,17.9-14.5,32.4-32.4,32.4C77.5,67,63,52.5,63,34.7C63,16.8,77.5,2.3,95.3,2.3c2.1,0,4.3,0.2,6.3,0.6L94,19.2
	c-0.3,0-0.6,0-1,0c-7.6,0-13.8,6.2-13.8,13.8c0,7.6,6.2,13.8,13.8,13.8c7.6,0,13.8-6.2,13.8-13.8c0-3.7-1.5-7.1-3.9-9.6l8-17.1
	C120.9,11.8,127.7,22.4,127.7,34.7z M254,147.9h-23.3c4.9-1.4,9.1-4.6,12-8.9c4-6.2,4.6-13.8,1.6-20.5l-24.8-55.5l-11.3-4.3
	l15.2-52.1l-14.9-4.3l-32.2,110.6l14.9,4.3l13.5-46.3l5.4,2l22.7,50.7c1.3,2.8,1,5.9-0.7,8.5c-1.7,2.6-4.4,4.1-7.5,4.1H191v11.8
	h-31.5c-0.3-11.1-9-19.7-19.7-19.7H96.5c0,0-19.2-50.5-19.6-51.3c-4-10.5-12.9-18.1-24.4-18.1c-14.7,0-25.9,12.2-33.9,29.8
	C7.9,112.2,2.1,140.4,2,167.8l252-0.1V147.9z" />
</svg>
        )
    }

    export const  SquareSvg = ( {isOpen,skills})=>{

        const isMobile = useCheckMobileScreen();
        let yCoOrdinate = 10;
        const renderText = skills.map((skill,index)=>{
            yCoOrdinate = yCoOrdinate + (isMobile ? 35 : 40)
           const  xCoOrdinate = (isMobile ? 30 : 40)
            return (<text x={xCoOrdinate.toString()} y={yCoOrdinate.toString()} fill="white" key={skill}>{skill} </text> )
        })
        const pathstring = isMobile ? "M25,10 h80 a20,20 0 0 1 20,20 v80 a20,20 0 0 1 -20,20 h-80 a20,20 0 0 1 -20,-20 v-80 a20,20 0 0 1 20,-20 z" : "M25,10 h100 a20,20 0 0 1 20,20 v100 a20,20 0 0 1 -20,20 h-100 a20,20 0 0 1 -20,-20 v-100 a20,20 0 0 1 20,-20 z"
        return (
    
    <motion.svg width="150" height="160" className="squareSvg" variants={svgVariants} initial="hidden" animate="visible">
    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%"   stopColor="#AA367C"/>
          <stop offset="100%" stopColor="#4A2FBD"/>
        </linearGradient>
        <motion.path d={pathstring}
        fill="#121212" 
        stroke="url(#gradient)"
        strokeWidth="3"  variants={pathVariants}/>
        {renderText}  
    </motion.svg>
        )
    }

export const LmkJ =() =>{
//     <div className="abc">
//     <p>
//         2018
//     </p>
//     <span className="bcd"></span>
//     <p>
//         2023
//     </p>
// </div>
    return (

<div id="line">
    <div id="gray"></div>
    <div id="red"></div>
    <div id="black"></div>
</div>

    )
}
    
    
    export default SvgIcon;



   