import React, { useState } from "react";
import { Div, Text, Container, Button, Textarea, Icon } from "atomize";
import Header from "../../../../../components/common/header";
import Layout from "../../../../../components/layout";
import TipsModal from "../../../../../components/common/TipsModal";

import intro1 from "../../../../../images/insecurity/journal-therapy.jpg";

const item = {
    icon: intro1,
    heading: "Journal Therapy",
    subheading: "Write away your thoughts",
    secondSubHeader: "Tips for Therapeutic Journal Writing",
};

const list = [
    "Ensure your privacy: Keep your journal materials in a safe place which in this case, it is. Trust us, we do not have your journal contents.",
    "Return to what you have written: Save everything you write, when appropriate, and review it often. The process of going back to what you have written can not only spark inspiration for future writing, but can offer perspective on how far you have come.",
    "Time yourself: Using timed writing exercises can help you avoid writer’s block and help you tap into relevant unconscious material.",
    "Write freely: Hush your inner critic and ignore the urge to edit your work. Therapeutic journal writing is not meant to be pretty or grammatically correct; it is meant to be real.",
    "Be honest with yourself: Honor your thoughts, feelings, and experiences with the authenticity they deserve. More work gets accomplished when you are your genuine self in your writing.",
];

const JournalTherapy = () => {
    const storedText = localStorage.getItem("text");
    const [text, setText] = useState(storedText || "");
    const [showModal, setShowModal] = useState(false);

    const storeText = () => {
        console.log("Saved", text);
        localStorage.setItem("text", text);
    };

    return (
        <Layout>
            <Header />

            <Div tag="section" id="features" p={{ t: "6rem" }}>
                <Container d="flex" align="center">
                    <Div p={{ b: "2rem", l: "2.5rem" }} align="center">
                        <Text textSize="title" textWeight="500" m={{ b: "1rem" }}>
                            {item.heading}
                        </Text>
                        <Icon
                            name="Question"
                            pos="absolute"
                            top="6.55rem"
                            right="63rem"
                            d="flex"
                            size="20px"
                            onClick={() => setShowModal(true)}
                            cursor="pointer"
                        />
                        <TipsModal
                            isOpen={showModal}
                            onClose={() => setShowModal(false)}
                        />
                        <Text textSize="subheader" textColor="medium" textWeight="500">
                            {item.subheading}
                        </Text>
                        <Textarea
                            textColor="info700"
                            hoverTextColor="info800"
                            textWeight="500"
                            d="flex"
                            flexGrow={{ xs: "1", sm: "4", md: "2", lg: "3", xl: "2" }}
                            h={{ xs: "auto", md: "45vh" }}
                            w={{ xs: "auto", md: "75vw" }}
                            m={{ t: "2rem" }}
                            value={text}
                            onChange={event => setText(event.target.value)}
                        ></Textarea>
                        <Button
                            h="3rem"
                            w={{ xs: "100%", sm: "11rem" }}
                            bg="transparent"
                            hoverBg="gray200"
                            border="1px solid"
                            borderColor="gray400"
                            hoverBorderColor="gray600"
                            className="btn-access"
                            rounded="lg"
                            p={{ l: "0.5rem", r: "1rem" }}
                            m={{ t: "1rem", b: "0rem" }}
                            textColor="medium"
                            onClick={() => storeText()}
                        >
                            Save
                        </Button>
                        {/* <Text
                            textSize="subheader"
                            textColor="medium"
                            textWeight="500"
                            m={{ t: "4rem", b: "1rem" }}
                        >
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
                        </ul> */}
                    </Div>
                </Container>
            </Div>
        </Layout>
    )
};

export default JournalTherapy;
