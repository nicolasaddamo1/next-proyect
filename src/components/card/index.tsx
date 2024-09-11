import React from "react";
//types
import { CardProps } from "./types";
export const Card: React.FC<CardProps> = ({title, description1, description2}) => {
    return (

    <div>
        <h2>{title}</h2>
        {description1 && <p>{description1}</p>}
        {description2 ? <p>{description2}</p>: null}
    </div>
    )
}

export default Card
