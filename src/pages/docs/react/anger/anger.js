import React from "react";
import { Link } from "gatsby";
import { Div, Text, Row, Col, Container } from "atomize";
import Header from "../../../../components/common/header";
import Layout from "../../../../components/layout";

import intro1 from "../../../../images/anger/ice1.jpeg";
import intro2 from "../../../../images/anger/medi.jpeg";
import intro3 from "../../../../images/anger/paintball-game.jpg";

const item = {
    icon: intro1,
    heading: "Anger",
    subheading: "Coping with Anger Management",
};

const list = [
    {
        icon: intro1,
        heading: "Anger Iceberg",
        subheading: "Understand the underlying feelings that anger is protecting",
        link: "/docs/react/anger/anger-iceberg/anger-iceberg",
    },
    {
        icon: intro2,
        heading: "Relaxation Techniques",
        subheading: "Practice these anger management techniques and relax!",
        link: "/docs/react/anger/relaxation-tech/relaxation-tech",
    },
    {
        icon: intro3,
        heading: "Stress Relief Paintball",
        subheading: "Coping with anger through playing games",
        link: "/docs/react/anger/paintball-game/paintball-game",
    },
];

const Anger = () => {
    return (
        <>
            <Layout>
                <Header />

                <Div tag="section" id="features" p={{ t: "8rem" }}>
                    <Container d="flex" align="center">
                        <Div p={{ b: "6rem" }} align="center">
                            <Div m={{ b: "1rem" }}>
                                <Text textSize="title" textWeight="500" m={{ b: "1rem" }}>
                                    {item.heading}
                                </Text>
                                <Text textSize="subheader" textColor="medium" textWeight="500">
                                    {item.subheading}
                                </Text>
                            </Div>
                            <Row>
                                {list.map(item => (
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
                                                    bgImg={item.icon}
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
                                                        {item.heading}
                                                    </Text>
                                                </Div>
                                                <Text
                                                    textSize="subheader"
                                                    textColor="medium"
                                                    textWeight="500"
                                                >
                                                    {item.subheading}
                                                </Text>
                                                <Link to={item.link} className="btn-access">
                                                    <Text
                                                        textColor="info700"
                                                        hoverTextColor="info800"
                                                        textWeight="500"
                                                        m={{ t: "2rem" }}
                                                    >
                                                        See How
                                                    </Text>
                                                </Link>
                                            </Div>
                                        </Div>
                                    </Col>
                                ))}
                            </Row>
                        </Div>
                    </Container>
                </Div>
            </Layout>
        </>
    )
};

export default Anger;
