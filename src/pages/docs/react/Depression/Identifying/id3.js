import React from "react"
import { Link } from "gatsby"
import { Div, Text, Row, Col, Container, Image, Tag } from "atomize"
import Header from "../../../../../components/common/header"
import Layout from "../../../../../components/layout"

import intro1 from "../../../../../images/Depression/Identifying/id6.png"
import intro2 from "../../../../../images/Depression/Identifying/id5.png"
import intro3 from "../../../../../images/Depression/Identifying/id7.png"

const list = [
  {
    icon: intro1,
    heading: "Mental Health America",
    subheading: "Take this short test by Mental Health America to find out if you might have depression.",
    link: "https://screening.mhanational.org/screening-tools/depression/",
  },
  {
    icon: intro2,
    heading: "Mind Diagnostics",
    subheading: "Take this mental health test. It’s quick, free and you’ll get your confidential results instantly.",
    link: "https://www.mind-diagnostics.org/depression-test",
  },

  {
    icon: intro3,
    heading: "My Health",
    subheading: "This interactive tool can help you assess your symptoms and find out if you might have depression. ",
    link: "https://myhealth.alberta.ca/Health/Pages/conditions.aspx?hwid=tx4369",
  },
]

class id3 extends React.Component {
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
            Depression Test
          </Text>
          <Text
            textSize="subheader"
            textColor="medium"
            maxW="70rem"
            m={{ b: "2rem" }}
          >
            We all go through ups and downs during life. We have those moments of elation and those moments when we feel sad or down.
            Feeling down from time to time is not unusual, but when those moments seem to hang on and just won’t let go, it might mean you have depression.<br/> <br/>

            Depression is one of the most common widespread mental health conditions in the world and one of the most misunderstood. 
            It’s more than just feeling down. Some people describe depression as feeling numb or “living in a black hole.” <br/> <br/>

            You don’t necessarily have to experience every one of the symptoms as mentioned in the previous section to be diagnosed with depression. Depression can look different from person to person, and the intensity of each symptom can also vary.
            If you think you might have depression, consider taking any of the below available quiz to help you determine if you might benefit from an evaluation by a mental health professional. <br/> <br/>
            
            Note: Only a mental health professional can accurately diagnose depression and recommend treatment if needed. These online screenings are not diagnostic tools. Only a trained medical professional, like a doctor or mental health professional, can help you determine the next best steps for you.
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
                          Take Test
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

export default id3
