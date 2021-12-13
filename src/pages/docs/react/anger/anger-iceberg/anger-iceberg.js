import React, { useState } from "react";
import { Div, Text, Container, Image } from "atomize";
import Header from "../../../../../components/common/header";
import Layout from "../../../../../components/layout";

import intro1 from "../../../../../images/anger/icebergmain.jpg";

const item = {
    icon: intro1,
    heading: "Anger Iceberg",
    subheading: "Anger Iceberg represents the idea that, although anger is displayed outwardly, other emotions may be hidden beneath the surface. By exploring what is beneath the surface you can gain an insight into your anger and work towards it accordingly.",
    secondSubHeader: "Take this quick anger assessment test:",
    link: "https://www.gracepointwellness.org/116-anger-management/article/3396-anger-quiz",
};

const Iceberg = () => {
    return (
        <Layout>
            <Header />

            <Div tag="section" id="features" p={{ t: "6rem" }}>
                <Container d="flex" align="center">
                    <Div p={{ b: "2rem" }} align="center">
                        <Text textSize="title" textWeight="500" m={{ b: "1rem" }}>
                            {item.heading}
                        </Text>
                        <Text textSize="subheader" textColor="medium" textWeight="500">
                            {item.subheading}
                        </Text>
                        <Div align="center" d="flex" flexDir="column">
                            <Image
                                src={item.icon}
                                alt="Anger Iceberg Image"
                                h="100vh"
                                w="auto"
                            />
                        </Div>
                        
                        <Text
                            textSize="subheader"
                            textColor="medium"
                            textWeight="500"
                            m={{ t: "4rem", b: "1rem" }}
                        >
                            {item.secondSubHeader}
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
    )
};

export default Iceberg;
