import React from "react";
import { Div, Text, Container } from "atomize";
import Header from "../../../../../components/common/header";
import Layout from "../../../../../components/layout";

import intro1 from "../../../../../images/insecurity/2048-game.jpg";

const item = {
    icon: intro1,
    heading: "2048",
    subheading: "2048 is an easy and fun puzzle game. Even if you don't love numbers you will love this game. It is played on a 4x4 grid using the arrows or W, A, S, D keys alternatively. Every time you press a key - all tiles slide. Tiles with the same value that bump into one-another are merged. Although there might be an optimal strategy to play, there is always some level of chance.",
    link: "https://www.mathsisfun.com/games/2048.html",
};

const CognitiveTriangle = () => (
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

export default CognitiveTriangle;
