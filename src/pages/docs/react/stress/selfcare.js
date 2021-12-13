import React, { useState } from "react";
import { Link } from "gatsby"
import { Div, Text, Row, Col, Container, Image, Tag, Input, Button, Icon } from "atomize"
import Header from "../../../../components/common/header"
import Layout from "../../../../components/layout"
import Radiobox1 from "../../../../components/stress/RadioBox1";
import Radiobox2 from "../../../../components/stress/RadioBox2";
import { Component } from 'react';


const heading = 'Physical Self-Care'
const lis = ['Eat healthy foods', 'Take care of personal hygiene', 'Exercise', 'Wear clothes that help me feel good about myself', 'Eat regularly', 
    'Participate in fun activities (e.g. walking, swimming, dancing, sports)', 'Get enough sleep', 'Go to preventative medical appointments (e.g. checkups, teeth cleanings)', 
    'Rest when sick', 'Overall physical self-care']

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
                        <Row d="flex" align="center" p="1rem">1    I do this poorly    I do this rarely or not at all</Row>
                        <Row d="flex" align="center" p="1rem">2    I do this OK        I do this sometimes</Row>
                        <Row d="flex" align="center" p="1rem">3    I do this well      I do this often</Row>
                        <Row d="flex" align="center" p="1rem">★ I would like to improve at this I would like to do this more frequently</Row>
            
                        </Div>
                        {lis.map(item => (
                        <Row>
                            <Col size={{ xs: "auto" }}>
                                <Row><Radiobox1 /> <Radiobox2 /> </Row></Col>
                            <Col> {item}</Col>
                        </Row>
                        ))}
                    </Div>
                    </Div>
                  </Container>
              </Div>
          </Layout></>
      );
    }
  }
   
  export default App;