import React from "react";
import ServiceCard from "./ServiceCard";
import { Col } from "reactstrap";

import weatherImg from "../assets/images/weather.png";
import guidImg from "../assets/images/guide.png";
import customizationImg from "../assets/images/customization.png";

const servicesData = [
    {
        title: "Calculate Weather",
        imgUrl: weatherImg,
        desc: "Lorem ipsum door sit amet, conserteur adipisicing elit"
    },
    {
        title: "Best Tour Guid",
        imgUrl: guidImg,
        desc: "Lorem ipsum door sit amet, conserteur adipisicing elit"
    },
    {
        title: "Customization",
        imgUrl: guidImg,
        desc: "Lorem ipsum door sit amet, conserteur adipisicing elit"
    }
];

const ServiceList = () => {
    return <>
        {
            servicesData.map((item, index) => <Col lg="3" key={index}>
                <ServiceCard item={item}></ServiceCard>
            </Col>
            )
        }
    </>
}
export default ServiceList;