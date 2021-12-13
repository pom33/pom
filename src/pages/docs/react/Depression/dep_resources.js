import React from "react"
import { Link } from "gatsby"
import { Div, Text, Row, Col, Container, Image, Tag } from "atomize"
import Header from "../../../../components/common/header"
import Layout from "../../../../components/layout"

import intro1 from "../../../../images/depression/dep1.jpg"
import intro2 from "../../../../images/depression/dep2.jpg"
import intro3 from "../../../../images/depression/dep4.jpg"

const list = [
  {
    icon: intro1,
    heading: "Identifying Depression",
    subheading: "The Viscious Cycle of Depression: Learn about it and find treatment",
    link: "/docs/react/Depression/Identifying/Identifying",
  },
  {
    icon: intro2,
    heading: "Treating Depression",
    subheading: "How to deal with it? - Treatment and Beyond",
    link: "/docs/react/Depression/Coping-Skills/mainCS",
  },
  {
    icon: intro3,
    heading: "Depression Quest",
    subheading: "A game to help user understand what depression is like.",
    link: "http://www.depressionquest.com/dqfinal.html",
  },

]
const Depression = () => (
<Layout>
  <Header />

<Div tag="section" id="features" p={{ t: "8rem" }}>
        <Container d="flex" align="center">
          <Div
            p={{ b: "6rem" }}
            d="flex"
            align="center"
          >
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
                      <Div flexGrow="1"
                        bgImg={item.icon}
                        bgSize="contain"
                        bgPos="center"
                        bgRepeat="no-repeat"
                        p={{ b: "84%" }}>
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
                      <Link to={item.link}>
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
  
)

export default Depression