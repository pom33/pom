import React from "react";
import { Div, Text, Container } from "atomize";
import Header from "../../../../../components/common/header";
import Layout from "../../../../../components/layout";

import intro1 from "../../../../../images/anger/paintball-game.jpg";

const item = {
    icon: intro1,
    heading: "Stress Relief Paintball",
    subheading: "Here's some light relief to put a smile on your face. Zap a smiley, score a point. Just like paintball. Maximum points will take you to the next level. Simply use your mouse to shoot the smiley.",
    link: "https://www.flashgamesplayer.com/free/paintball/play.html",
};

const Paintball = () => (
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

export default Paintball;
