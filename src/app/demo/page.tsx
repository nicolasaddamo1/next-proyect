import React from "react";

//components
import { Card } from "../../components/card";
const Demo: React.FC = () => {
    return (

        <div>
            <Card title="title" description1="description1" description2="description2"/>
            <Card title="card" description1="description1 optional" description2="description2 optional"/>
        </div>
    )
};  

export default Demo;