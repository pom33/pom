import React from "react";
import { Div, Text, Container, Image, Row, Col } from "atomize";
import Header from "../../../../../components/common/header";
import Layout from "../../../../../components/layout";

import intro1 from "../../../../../images/anger/breathe.jpg";
import intro2 from "../../../../../images/anger/pmr.png";
import intro3 from "../../../../../images/anger/beach.jpg";

const item = {
    icon: intro1,
    heading: "Different Relaxation Techniques",
    subheading: "Relaxation skills are excellent tools for treatment of anger. In addition to being easy to use, these techniques are some of the few tools that offer an immediate sense of relief from any rage that you might be feeling.",
    videoTitle1: "Here are a few videos to get you started:",
    link1: "https://www.youtube.com/embed/dHzS_RBtnXE",
    link2: "https://www.youtube.com/embed/1nZEdqcGVzo",
};

const list = [
    {
        icon: intro1,
        heading: "Deep Breathing",
        subheadinglist: ["Sit in a comfortable position.", "Breathe in slowly through your nose.", "Hold the air within your lungs but without strain, ideally 4 seconds.", "Pucker your lips and slowly exhale. Time the exhalation to last 6 seconds. TIP: For practice try exhaling through a straw, this will help slow exhalation.", "Repeat the cycle for atleast 2 minutes."],
    },
    {
        icon: intro2,
        heading: "Progressive Muscle Relaxation",
        subheadinglist: ["Sit in a comfortable position.", "Tightly tense the muscles in your feet by curling your toes. Hold the tension for 5-10 seconds.", "Now release the tension from feet and allow them to relax", "Move up your body, repeating the cycle of tensing and relaxing each group of muscles: legs, pelvis, stomach, chest, back, arms and neck", "Practice daily for positive effect."],
    },
    {
        icon: intro3,
        heading: "Guided Imagery",
        subheadinglist: ["Sit back and close your eyes.", "Think of a place or a memory that is calming to you like a warm beach, a mountaintop or a cozy coffee shop.", "Begin to imagine that scene. Imagine what would you hear, smell, feel and taste.", "Set a timer for 5-10 minutes and allow yourself to get lost in the scene. Remember this time is only about your relaxation."],
    },
];

const Relaxation = () => (
    <Layout>
        <Header />

        <Div tag="section" id="features" p={{ t: "6rem" }}>
            <Container d="flex" align="center">
                <Div p={{ b: "0rem" }} w="100%" align="center">
                    <Div m={{ b: "1rem" }}>
                        <Text textSize="title" textWeight="500" m={{ b: "1rem" }}>
                            {item.heading}
                        </Text>
                        <Text textSize="subheader" textColor="medium" textWeight="500">
                            {item.subheading}
                        </Text>
                    </Div>
                    <Row>
                            {list.map((elem, index) => (
                                <Col size={{ xs: 12, sm: 6, lg: 4 }}>
                                    <Div m={{ b: { xs: "1rem", lg: "0" } }}>
                                        <Div
                                            border="1px solid"
                                            borderColor="gray200"
                                            h="100%"
                                            d="flex"
                                            flexDir="column"
                                            p="2rem"
                                            shadow="3"
                                            rounded="xl"
                                        >
                                            <Div
                                                flexGrow="1"
                                                bgImg={elem.icon}
                                                bgSize="contain"
                                                bgPos="center"
                                                bgRepeat="no-repeat"
                                                p={{ b: "84%" }}
                                            >
                                                <Text
                                                    textSize="title"
                                                    textWeight="500"
                                                    m={{ b: "0rem" }}
                                                >
                                                    {elem.heading}
                                                </Text>
                                            </Div>
                                            {elem.subheadinglist
                                                ? 
                                                <ol>
                                                    {elem.subheadinglist.map(text => {
                                                        return (
                                                            <li>
                                                                <Text
                                                                    tag="h5"
                                                                    textWeight="400"
                                                                    textSize="subheader"
                                                                    fontFamily="secondary"
                                                                    textColor="medium"
                                                                    m={{ b: "0.5rem" }}
                                                                >
                                                                    {text}
                                                                </Text>
                                                            </li>
                                                        )
                                                    })}
                                                </ol>
                                                : null}
                                            {elem.subheading 
                                                ? 
                                                <Text
                                                    textSize="subheader"
                                                    textColor="medium"
                                                    textWeight="500"
                                                >
                                                    {elem.subheading}
                                                </Text>
                                                : null}
                                            
                                        </Div>
                                    </Div>
                                </Col>
                            ))}
                        </Row>

                    <Div
                        border="0.25px solid"
                        borderColor="lightgrey"
                        w="100%"
                        m={{ t: "2rem", b: "2rem" }}
                    ></Div>
                    <Text textSize="title" textWeight="500">
                        {item.videoTitle1}
                    </Text>
                    <Div h="100vh" w="100%" m={{ b: { xs: "1rem", lg: "0" } }}>
                        <Div
                            border="1px solid"
                            borderColor="gray200"
                            h="100%"
                            w="100%"
                            d="flex"
                            flexDir="column"
                            p="2rem"
                            shadow="3"
                            rounded="xl"
                        >
                            <Div flexGrow="1" bgPos="center" h="100%" w="100%">
                                <iframe width="100%" height="100%" src={item.link2} />
                            </Div>
                        </Div>
                    </Div>
                    <Div h="100vh" w="100%" m={{ b: { xs: "1rem", lg: "0" } }}>
                        <Div
                            border="1px solid"
                            borderColor="gray200"
                            h="100%"
                            w="100%"
                            d="flex"
                            flexDir="column"
                            p="2rem"
                            shadow="3"
                            rounded="xl"
                        >
                            <Div flexGrow="1" bgPos="center" h="100%" w="100%">
                                <iframe width="100%" height="100%" src={item.link1} />
                            </Div>
                        </Div>
                    </Div>
                </Div>
            </Container>
        </Div>
    </Layout>
);

export default Relaxation;
