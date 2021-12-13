import React from "react";
import { Div, Text, Container, Image } from "atomize";
import Header from "../../../../../components/common/header";
import Layout from "../../../../../components/layout";

import intro1 from "../../../../../images/depression/identifying/id2.jpg";

const item = {
    icon: intro1,
    heading: "Depression symptoms and diagnosis",
    subheading: "You’ll likely speak with a mental health professional such as a psychologist, psychiatrist, or clinical social worker, who could diagnose your condition. Though a general practitioner or family doctor can make an initial diagnosis, a specialist can provide complete follow-up and treatment. ",
    secondSubHeader: "If you’ve experienced most of the following symptoms every day over 2 or more weeks, you might meet the criteria for a depression diagnosis:",
    videoTitle: "A Video on Depression and it's symptoms",
    link: "https://www.youtube.com/embed/f9NH2MJixjU",
};

const list = [
        "a persistent feeling of loneliness or sadness",
        "lack of energy",
        "feelings of hopelessness",
        "getting too much or too little sleep",
        "eating too much or too little",
        "difficulties with concentration or attention",
        "loss of interest in enjoyable activities or socializing",
        "feelings of guilt and worthlessness",
        "thoughts of death or suicide"
];

const id2 = () => (
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
                    <Div align="center" d="flex" flexDir="column">
                        <Image
                            src={item.icon}
                            alt="Cognitive Triangle diagram"
                            h="100vh"
                            w="auto"
                        />
                    </Div>
                    <Div
                        border="0.25px solid"
                        borderColor="lightgrey"
                        w="100%"
                        m={{ t: "1rem", b: "2rem" }}
                    ></Div>
                    <Text textSize="subheader" textColor="medium" textWeight="500">
                        {item.secondSubHeader}
                    </Text>
                    <ul>
                        {list.map(text => {
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
                    </ul>
                    <Div
                        border="0.25px solid"
                        borderColor="lightgrey"
                        w="100%"
                        m={{ t: "2rem", b: "2rem" }}
                    ></Div>
                    <Text textSize="title" textWeight="500">
                        {item.videoTitle}
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
                                <iframe width="100%" height="100%" src={item.link} />
                            </Div>
                        </Div>
                    </Div>
                </Div>
            </Container>
        </Div>
    </Layout>
);

export default id2;