import React from "react";
import "../styles/home.css";
import { Container, Row, Col } from "reactstrap";
import Subtitle from "../shared/Subtitle";
import worldImg from "../assets/images/world.jpg";
import heroImg from "../assets/images/hero-img01.jpg";
import heroImg02 from "../assets/images/hero-img02.jpg";
import heroVideo from "../assets/images/hero-video.mp4";

const Home = () => {
    return <>
        <section>
            <Container>
                <Row>
                    <Col lg="6">
                        <div className="hero__content">
                            <div className="hero__subtitle d-flex align-items-center">
                                <Subtitle subtitle={"Know Before You Go"} />
                                <img src={worldImg} alt="" width={50} height={50} />
                            </div>
                        </div>
                        <h1>Traveling opens the door to creating{" "}<span className="hightlight"> memories</span></h1>
                        <p></p>
                    </Col>

                    <Col lg="2">
                        <div className="hero__img-box">
                            <img src={heroImg} alt=""></img>
                        </div>
                    </Col>

                    <Col lg="2">
                        <div className="hero__img-box mt-4">
                            <video src={heroVideo} alt="" controls></video>
                        </div>
                    </Col>

                    <Col lg="2">
                        <div className="hero__img-box mt-5">
                            <img src={heroImg02} alt=""></img>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    </>;
};

export default Home;