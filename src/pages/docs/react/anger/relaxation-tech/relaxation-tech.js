import React from "react";
import { Div, Text, Container, Image } from "atomize";
import Header from "../../../../../components/common/header";
import Layout from "../../../../../components/layout";

import intro1 from "../../../../../images/anger/medi.jpeg";

const item = {
    icon: intro1,
    heading: "The Cognitive Triangle: What it is and How it Works",
    subheading: "Cognitive Triangle emphasizes the relationship between our thoughts, our feelings, and our behaviors. More specifically, how our thoughts change the way that we feel, which subsequently changes the way that we act, which then influences our thoughts.",
    secondSubHeader: "Here is how the Cognitive Triangle plays out in our day to day life:",
    videoTitle: "A Video on Thoughts, Feelings and Behaviors",
    link: "https://www.youtube.com/embed/PcFmrVZ0e-I",
};

const list = [
    "You wake up feeling tired, groggy, and insecure. You have a massive presentation today and you hate having to speak in front of groups.",
    "Your thoughts start up: “I’m going to mess up”, “No one is going to like my presentation”, “I can’t even talk in front of a group, how am I going to achieve anything?”, “I’m worthless”, “I’m a loser”, “I should just stay home so I don’t make a fool out of myself”. These thoughts often make up the internal dialogue that we have with ourselves. How many times have you found yourself saying similar things?",
    "Now enter feelings. After a morning filled with internal verbal assault, you’re feeling even worse. You feel extremely anxious about your upcoming presentation (AKA the now impending doom). Overall, you’re feeling really bad about yourself and the last thing you want to do is present. Let’s step back for a minute. Is it any surprise that our thoughts so directly influence our feelings? The things that we tell ourselves matter.",
    "Here comes the behavior. After time spent grappling back and forth and procrastinating going, you make it out the door and now you’re just starting your presentation. As you begin, your thoughts are running rampant and you’re feeling as anxious as ever. Even though you know your presentation subject matter very well, you can’t seem to articulate your thoughts in the way you want to. You barely scrape through your presentation, stumbling on your words and failing to connect the points you worked so hard to create. In common terms, you choked up. How many times have we done this? Gotten ourselves so worked up that we can barely make it through something that is typically well within our capabilities.",
    "This presentation put another dent in your confidence. The event seems to justify all of those negative thoughts you had about yourself. The cycle repeats. And repeats. And repeats.",
];

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

export default CognitiveTriangle;
