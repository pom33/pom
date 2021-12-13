import React from "react"
import { Link } from "gatsby"

import { Button, Row, Col, Container, Text, Div, Icon, Input, Anchor } from "atomize"

import boy from "../../images/avatar/boy.png"
import anxietyImage from "../../images/hero-illustration/anxiety.png"
import angerImage from "../../images/hero-illustration/anger.png"
import depressionImage from "../../images/hero-illustration/depression.png"
import stressImage from "../../images/hero-illustration/stress.png"
import insecurityImage from "../../images/hero-illustration/insecurity.png"
import FollowCard from "./uicomponents/FollowCard"
import UserEdit from "./uicomponents/UserEdit"
import Buttons from "./uicomponents/Buttons"
import CardComponent from "./uicomponents/CardComponent"
import LoginForm from "./uicomponents/LoginForm"
import intro3 from "../../images/anxiety/gamee.png"
import "./craft.css"

// import Notification from './uicomponents/Notification'
class HeroSection extends React.Component {
  render() {
    return (
      <>
        <Div tag="section" p={{ t: { xs: "6rem", md: "5rem" } }}>
          <Container d="flex" flexDir="column" align="center">
            <Text
              tag="h1"
              textWeight="500"
              textAlign="center"
              textSize="display3"
              fontFamily="secondary"
              m={{ b: "1rem" }}
            >
              Peace Of Mind
            </Text>
            <Text
              tag="h2"
              textWeight="400"
              maxW="36rem"
              textSize="subheader"
              textAlign="center"
              fontFamily="secondary"
              textColor="medium"
              m={{ b: "2.5rem" }}
            >
              Atomize React is a UI framework that helps developers collaborate
              with designers and build consistent user interfaces effortlessly.
            </Text>

            
          </Container>
        </Div>
        <Div
          tag="section"
          w="100vw"
          p={{ t: { xs: "3rem", md: "1rem" } }}
          overflow="hidden"
        >
          <Container>
            <Div
              d="flex"
              justify="center"
            >
                <Div
                  minW={{ xs: "auto", md: "44rem", sm: "auto", lg: "59rem" }}
                  d="flex"
                  align="center"
                  
                  flexDir="row"
                  h={{ xs: "auto", md: "21rem",sm: "auto", lg: "20rem" }}
                  pos="relative"
                >
                  <Link to="/docs/react/anxiety/anxiety_techniques" className="btn-access">
                    <CardComponent key="anxiety" cardImg={anxietyImage} title="Anxiety"/>
                  </Link>

                  <CardComponent key="anger" cardImg={angerImage} title="Anger" />

                  <CardComponent key="depression" cardImg={depressionImage} title="Depression"/>
                </Div>
             
            </Div>
          </Container>
          <Container>
            <Div
              d="flex"
              justify="center"
            >
              <Div
                minW={{ xs: "auto", md: "44rem", sm: "auto",lg: "5rem" }}
                d="flex"
                align="right"
                flexDir="row"
                h={{ xs: "auto", md: "21rem",sm: "auto", lg: "20rem" }}
                pos="relative"
              >
                <Link to="/docs/react/stress/stress" className="btn-access">
                <CardComponent key="stress" cardImg={stressImage} title="Stress" />
                </Link>
                <CardComponent key="insecurity" cardImg={insecurityImage} title="Insecurity"/>

              </Div>
            </Div>
          </Container>
        </Div>
      </>
    )
  }
}

export default HeroSection
