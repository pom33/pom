import React from "react"
import { Link } from "gatsby"
import { Div, Text, Row, Col, Container, Image, Tag } from "atomize"
import Header from "../../../../../components/common/header"
import Layout from "../../../../../components/layout"

import intro1 from "../../../../../images/Depression/Identifying/id1.jpg"
import intro2 from "../../../../../images/Depression/Identifying/id2.jpg"
import intro3 from "../../../../../images/Depression/Identifying/id3.jpg"

const list = [
  {
    icon: intro1,
    heading: "What is depression?",
    subheading: "Depression is a widespread mental health disorder. So if you have it, you’re definitely not alone.",
    link: "/docs/react/Depression/Identifying/id1",
  },
  {
    icon: intro2,
    heading: "Symptoms of depression",
    subheading: "Major depression can cause a range of symptoms that last 2 weeks or longer and appears differently for each person. ",
    link: "/docs/react/Depression/Identifying/id2",
  },

  {
    icon: intro3,
    heading: "Depression Test",
    subheading: "Consider taking quiz to help you determine if you might benefit from an evaluation by a mental health professional.",
    link: "/docs/react/Depression/Identifying/id3",
  },

]

class Identifying extends React.Component {
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
            Depression
          </Text>
          <Text
            textSize="subheader"
            textColor="medium"
            maxW="70rem"
            m={{ b: "2rem" }}
          >
            Depression is one of the most common mental health conditions, affecting more than 264 million people worldwide. 
            A sense of hopelessness, the feeling of being “weighed down,” and a loss of enjoyment in things that used to bring you joy — 
            these are some common signs of depression, one of the most widespread mental health issues in the world. 
            Clinical depression goes by many names, such as “the blues,” biological or clinical depression, and major depressive disorder (MDD). 
            The World Health Organization (WHO)Trusted Source estimates that over 264 million people live with depression. 
            Even simple things — like getting dressed in the morning or eating at mealtime — can feel like large obstacles when you have depression. 
            Depression symptoms take many forms, and no two people’s experiences are exactly alike. 
            A person with depression may not always seem sad to others. And when friends or family do notice signs of depression, they may want to help but not know how.
          </Text>
          <Div
            p={{ b: "6rem" }}
            border={{ b: "1px solid" }}
            borderColor="gray300"
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

export default Identifying
