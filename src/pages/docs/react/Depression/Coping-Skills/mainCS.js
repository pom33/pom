import React from "react"
import { Link } from "gatsby"
import { Div, Text, Row, Col, Container, Image, Tag } from "atomize"
import Header from "../../../../../components/common/header"
import Layout from "../../../../../components/layout"

import intro1 from "../../../../../images/Depression/Identifying/id8.jpg"
import intro2 from "../../../../../images/Depression/Identifying/id4.png"


const list = [
  {
    icon: intro1,
    heading: "Coping Skills",
    subheading: "Depression is a widespread mental health disorder. So if you have it, you’re definitely not alone.",
    link: "/docs/react/Depression/Coping-Skills/coping-skills",
  },
  {
    icon: intro2,
    heading: "Additional Resources",
    subheading: "Your Depression treatment options are almost limitless.",
    link: "/docs/react/Depression/Coping-Skills/addR",
  },
]

class mainCS extends React.Component {
  render() {
    return (
      <Layout>
        <Header />
      <Div tag="section" id="features" p={{ t: "6rem" }}>
        <Container>
          {/* <Tag
            bg="black"
            textColor="white"
            h="2rem"
            p={{ x: "1rem" }}
            rounded="circle"
            m={{ b: "2rem" }}
          >
            Key features
          </Tag> */}
          <Text
            textSize="display1"
            textWeight="700"
            fontFamily="secondary"
            m={{ b: "1rem" }}
          >
            What causes depression and how to treat it?
          </Text>
          <Text
            textSize="subheader"
            textColor="medium"
            maxW="70rem"
            m={{ b: "2rem" }}
          >
            Sometimes, people become depressed due to difficulties coping with many things over a period of time. Many find that work stress, relationship problems, and other issues accumulate over time.
            Life events or major life changes, like moving away, can also cause depression and related conditions.
            Feeling a lack of meaning or purpose can be one of the most common causes of depression, especially when you lose contact with activities that provide a sense of meaning, purpose, or sense of self.<br/> <br/>
            
            A number of things that can cause or contribute to depression, including:
            &bull; Brain structure: Research suggests that the hippocampus is smaller in some people with depression. A less active frontal lobe could also cause it.<br/>
            &bull; Biochemistry: Differences in certain brain chemicals could contribute to depression.<br/>
            &bull; Family history: You are more likely to have depression if depression or another mental health condition runs in your family.<br/>
            &bull; Trauma: Stressful or traumatic events can impact how your body reacts to fear and stress in the future, which raises your risk of depression. This is especially true for childhood trauma.<br/>
            &bull; Medical conditions: Chronic illness or pain, insomnia, and attention-deficit hyperactivity disorder (ADHD) are some of the conditions that could put you at a higher risk of developing depression.<br/>
            &bull; Environmental factors: Exposure to abuse, violence, poverty, or trauma could make you more vulnerable to depression.<br/> <br/> 

            Feeling better will be a process: It won’t happen overnight. But with time, you’ll notice an improvement in the way that you feel.
          </Text>
          <Div
            p={{ b: "6rem" }}
            border={{ b: "1px solid" }}
            borderColor="gray300"
          >
            <Row>
              {list.map(item => (
                <Col size={{ xs: 12, sm: 6, lg: 3 }}>
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
                      <Div flexGrow="1">
                        <Image
                          src={item.icon}
                          m={{ t: "0.5rem", b: "0.5rem" }}
                          w="10rem"
                          h="10rem"
                        />
                        <Text
                          textSize="title"
                          textWeight="700"
                          m={{ b: "1rem" }}
                        >
                          {item.heading}
                        </Text>
                        <Text
                          textSize="subheader"
                          textColor="medium"
                          m={{ b: "1rem" }}
                        >
                          {item.subheading}
                        </Text>
                      </Div>
                      <Link to={item.link}>
                        <Text
                          textColor="info700"
                          hoverTextColor="info800"
                          textWeight="500"
                        >
                          Learn more
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
    )
  }
}

export default mainCS
