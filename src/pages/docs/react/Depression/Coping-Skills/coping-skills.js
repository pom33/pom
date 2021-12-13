import React from "react";
import { Div, Text, Container, Image } from "atomize";
import Header from "../../../../../components/common/header";
import Layout from "../../../../../components/layout";

import intro1 from "../../../../../images/depression/identifying/id8.jpg";

const item = {
    icon: intro1,
    heading: "Depression treatment",
    subheading: "According to the NIMH and countless research studies over the past 6 decades, clinical depression is readily treated with short-term, goal-oriented psychotherapy or talk therapy and antidepressant medications. ",
    secondSubHeader: "For most people, a combination of the two works best and is often recommended by healthcare professionals.",
    thirdSubHeader: "Effective treatment depends on recognizing there’s a problem, seeking to address it, and following a treatment plan. This can be challenging when you have depression, but patience is key when beginning treatment. No matter how hopeless things may feel, you can get better with treatment — many people do. You can learn more about the benefits of psychotherapy and medications and whether you should consider one or both in our in-depth depression treatment guide below.",
    videoTitle: "Depression Treatment Options",
    link: "https://www.youtube.com/embed/lAdp3nT4BFA",
    link1: "https://www.youtube.com/embed/HBVACtJCN3M",
};

const list = [
        "Psychotherapy - Psychotherapy approaches scientifically proven to work with depression include: cognitive behavioral therapy (CBT), interpersonal therapy, psychodynamic therapy. Therapy is one of the most effective treatments for all types of depression, and it has very few side effects. It’s also typically covered by all insurers.",
        "Self-help strategies - For mild depression, many people begin with self-help strategies and emotional support. Research also indicates some herbal remedies, including St. John’s wort and saffron, may help relieve certain depression symptoms. Exercise and diet are other factors to consider when building a routine to manage depression. Though it can be difficult to practice consistent self-care habits when experiencing a depressive episode, small steps can help.",
        "Medication - Antidepressants such as selective serotonin reuptake inhibitors (SSRIs) are the most commonly prescribed medications for depression. When psychotherapy and antidepressants don’t work, clinicians may consider other treatment options. Usually, additional medication to support the existing antidepressant medication is considered.",
        "Additional treatment options such as electroconvulsive therapy (ECT) or repetitive transcranial magnetic stimulation (rTMS) may be tried in more serious cases."
];

const list1 = [
    "Living with depression - If you live with depression, simply waking up in the morning and getting out of bed can feel like a struggle. Everyday tasks — like showering, eating, or going to work or school — can sometimes feel like large hurdles to a person living with depression. One key to managing living with depression is ensuring you’re receiving treatment or taking steps to build a solid self-care routine. Treatment could include therapy, medication, or both. Also, being an active participant in your own wellness plan can be helpful. While this can require effort, it can be done. For some people with depression, leaning on a support network or trusted loved one can help. Establishing self-care routines is important in managing depression. Getting regular emotional support — for instance, through an online support group — can also be beneficial.",
    "Helping someone with depression - When you see a family member or friend experiencing an episode of depression, it’s normal to want to reach out and lend a hand. But when it comes to depression, what you can do to help isn’t always clear. Loved ones of a person with depression may remain silent, fearful of making the situation worse or alienating the person they care about. And while more people are becoming aware of depression and its effects, stigma tied to the condition persists and prevents people from discussing it. If you think a loved one could be experiencing a depressive episode, there are ways you can offer support.",

];

const CopingSkills = () => (
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
                            h="50vh"
                            w="50"
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
                        m={{ t: "1rem", b: "2rem" }}
                    ></Div>
                    <Text textSize="subheader" textColor="medium" textWeight="500">
                        {item.thirdSubHeader}
                    </Text>
                    <ul>
                        {list1.map(text => {
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

export default CopingSkills;