import React from "react";
import {FaTimes, FaPen, FaRegCircle} from "react-icons/fa";

const Icon = ({name})=>{
    // return(
    //     <h1>
    //         <FaTimes className="icon" />
    //         <FaPen className="icon" />
    //         <FaRegCircle className="icon" />
    //     </h1>
    // );
    switch (name){
        case 'circle':
            return <FaRegCircle className="icons" />
        case 'cross':
            return <FaTimes className="icons" />
        default:
            return <FaPen className="icons" />
    }
};

export default Icon;
