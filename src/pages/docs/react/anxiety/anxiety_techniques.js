import React from "react"
import { Link } from "gatsby"
import { Div, Text, Row, Col, Container, Image, Tag } from "atomize"
import Header from "../../../../components/common/header"
import Layout from "../../../../components/layout"

import intro1 from "../../../../images/anxiety/grounding_technique.png"
import intro2 from "../../../../images/anxiety/urge-surfing.png"
import intro3 from "../../../../images/anxiety/gamee.png"

const list = [
  {
    icon: intro1,
    heading: "Grounding Technique",
    subheading: "Control intense emotional experiences and regain mental focus",
    link: "/docs/react/anxiety/grounding_technique",
  },
  {
    icon: intro2,
    heading: "Urge Surfing",
    subheading: "Distress Tolerance Skill - Manage unwanted behaviors",
    link: "/docs/react/anxiety/urge_surfing",
  },
  {
    icon: intro3,
    heading: "Play a Game!",
    subheading: "Adventures with Anxiety - An Interactive Story",
    link: "https://ncase.itch.io/anxiety",
  },

]
const Anxiety = () => {
  return (
    <>
      <Layout>
        <Header />

        <Div tag="section" id="features" p={{ t: "8rem" }}>
          <Container d="flex" align="center">
            <Div p={{ b: "6rem" }} align="center">
              <Div m={{ b: "1rem" }}>
              <Text textSize="title" textWeight="500" m={{ b: "1rem" }}>
                                    Anxiety
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

export default Anxiety