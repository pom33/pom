import React from "react"
import { Link } from "gatsby"
import { Div, Text, Row, Col, Container, Image, Tag } from "atomize"
import Header from "../../../../components/common/header"
import Layout from "../../../../components/layout"

import intro1 from "../../../../images/stress/exploration.png"
import intro2 from "../../../../images/stress/selfcare.jpg"
import intro3 from "../../../../images/stress/plumberduck.jpg"


const list = [
  {
    icon: intro1,
    heading: "Stress Exploration",
    subheading: "Counteract feelings of despair by identifying factors that protect you from daily stressors.",
    link: "/docs/react/stress/exploration",
  },
  {
    icon: intro2,
    heading: "Self Care Assessment",
    subheading: "Learn about your self-care needs by spotting patterns and recognizing areas that need more attention.",
    link: "/docs/react/stress/selfcare",
  },
  {
    icon: intro3,
    heading: "Play a Game!",
    subheading: "Play an engaging game to help focus a wandering mind and avoid overthinking.",
    link: "/docs/react/stress/pduck",
  },

]
const Anxiety = () => (
<Layout>
  <Header />

  <Div tag="section" id="features" p={{ t: "8rem" }}>
      <Container d="flex" align="center">
          <Div p={{ b: "6rem" }} align="center">
              <Div m={{ b: "1rem" }}>
                  <Text textSize="title" textWeight="500" m={{ b: "1rem" }}>
                    Stress
                  </Text>
                  <Text textSize="subheader" textColor="medium" textWeight="500">
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
  
)

export default Anxiety