import React from "react";
import { Link } from "gatsby"
import { Div, Text, Row, Col, Container,Button, Icon } from "atomize"
import Header from "../../../../components/common/header"
import Layout from "../../../../components/layout"
import Radiobox1 from "../../../../components/stress/RadioBox1";
import Radiobox2 from "../../../../components/stress/RadioBox2";
import { Component } from 'react';


const heading = 'Psychological / Emotional Self-Care'
const lis = [
    'Take time off from work, school, and other obligations',
    'Participate in hobbies',
    'Get away from distractions (e.g. phone, email)',
    'Learn new things, unrelated to work or school',
    'Express my feelings in a healthy way (e.g. talking, creating art, journaling)',
    'Recognize my own strengths and achievements',
    'Go on vacations or day-trips',
    'Do something comforting (e.g. re-watch a favorite movie, take a long bath)',
    'Find reasons to laugh',
    'Talk about my problems',
    'Overall psychological and emotional self-care']

class App extends Component {

    render() {
      return (
        <><Layout><Header />
            <Div d="flex" align={{ xs: "space-around", lg: "center" }} tag="section" id="features" p={{ t: "8rem" }}>
            <Container d="flex" align="center">
            <Div
                p={{ b: "2rem" }}
                d="flex"
                align="center"
                m={{ l: "10%", t: "5%", r : "10%" }}>
                    <Div
                        border="1px solid"
                        borderColor="gray200"
                        h="100%"
                        d="flex"
                        flexDir="column"
                        p="2rem"
                        shadow="4"
                        rounded="xl">
                            <Text
                          textSize="title"
                          textWeight="500"
                          m={{ b: "0rem" }}
                        >
                        {heading}
                        </Text>
                        <Div d="flex" align="center" p="1rem">
                        <Row d="flex" align="center" p="1rem">1    I do this rarely or not at all</Row>
                        <Row d="flex" align="center" p="1rem">2    I do this sometimes</Row>
                        <Row d="flex" align="center" p="1rem">3    I do this often</Row>
                        <Row d="flex" align="center" p="1rem">★    I would like to improve at this</Row>
                        </Div>
                        <Div p={{ t: "1rem" }}>
                        {lis.map(item => (
                        <Row>
                            <Col size={{ xs: "auto" }}>
                                <Row><Radiobox1 /> <Radiobox2 /> </Row></Col>
                            <Col> {item}</Col>
                        </Row>
                        ))}
                        <Div d="flex" p="1rem"  m={{ l: "auto", r:"auto" }}>
                        <Div d="flex" align="center" m={{l: "43%"}}><Button onClick={event =>  window.location.href='/docs/react/stress/stress'}   suffix={
                        <Icon name="LongRight" size="16px" color="white" m={{ l: "1rem" }}/>}
                        shadow="3"
                        hoverShadow="4"
                        m={{ r: "1rem" }}
                        align="right">
                       Finish
                    </Button>
                    </Div>
                </Div>
                </Div>
                </Div>   
                </Div>
                </Container>
              </Div>
          </Layout></>
      );
    }
}
  export default App;