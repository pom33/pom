import React, { useState } from "react"
import { Link } from "gatsby"
import { Div, Text, Row, Col, Container, Image, Tag, Input, Button, Icon } from "atomize"
import Header from "../../../../components/common/header"
import Layout from "../../../../components/layout"
import { userState } from 'react';



const list = [
  {
    heading: "Daily Uplifts",
    subheading: "What are some positive experiences that make you happy?",
    subheading2: "Examples: eating a good meal, spending time with friends, leisure activities, spending time in nature",
  },
  {
    heading: "Healthy Coping Strategies",
    subheading: "What are some positive actions that help to reduce or manage stress and other uncomfortable emotions?",
    subheading2: "Examples: exercise, talking about problems, self-care, journaling, relaxation techniques",
  },
  {
    heading: "Protective Factors",
    subheading: "List any individual characteristics or life circumstances that protect you from stress.",
    subheading2: "Examples: financial stability, good physical health, supportive family, motivation to succeed, education",
  },

]


const Ground = () => {
    const [active, setactive] = useState(0);
    const [inValues, setInValues] = useState({
      0:["","","",""],
      1:["","","",""],
      2:["","","",""],
      3:["","","",""]
    });

    const handleChange = (event) => {
      const temp = inValues
      temp[active][event.target.id] = event.target.value
      setInValues({...temp});
    }
    const onNext = () => {
      if (active == list.length-1)
        window.location.href='/docs/react/stress/stress';
      setactive(active + 1);
    }

    const onBack = () => {
      setactive(active - 1);
    }
  
    var data = list[active]
    var next = '';
    if (active < list.length-1){
      next = 'Next'
    } else {
      next = 'Finish'
    }
    
    return( 

<Layout>
  <Header />

<Div d="flex" align={{ xs: "space-around", lg: "center" }} tag="section" id="features" p={{ t: "8rem" }}>
        <Container d="flex" align="center">
          <Div 
            p={{ b: "6rem" }}
            d="flex"
            align="center"
            m={{ l: "20%", t:"5%"}}>
            
            <Row>
                  <Div m={{ b: { xs: "1rem", lg: "0" } }}>
                    <Div 
                      border="1px solid"
                      borderColor="gray200"
                      h="100%"
                      d="flex"
                      flexDir="column"
                      p="2rem"
                      shadow="4"
                      rounded="xl"
                    >
                    
                      <Div flexGrow="1"
                        bgPos="center"
                        bgRepeat="no-repeat"
                        p={{ b: "3%" }}>
                        
                        <Text
                          textSize="title"
                          textWeight="500"
                          m={{ b: "0rem" }}
                        >
                          {data.heading}
                        </Text>
                        <Text>
                        Stress is a feeling of being tense, overwhelmed, worn out, or exhausted. 
                        A small amount of stress can be motivating, but too much stress makes even small tasks seem daunting. 
                        Sometimes stress is the accumulation of many small hassles, while other times it is the result of major life changes or long-term problems.
                        Things that protect against stress include daily uplifts, healthy coping strategies, and protective factors.
                        </Text>
                      </Div>
                      <Text
                           textSize="subheader"
                           textColor="medium"
                          textWeight="500"
                        >
                          {data.subheading}
                        </Text>
                        <Text
                           textColor="medium"
                          textWeight="200"
                        >
                          {data.subheading2}
                        </Text>
                        <Div p="0.5rem">
                        <Input id ="0" placeholder="1."  onChange={handleChange} value={inValues[active][0]}/>
                        </Div>
                        <Div p="0.5rem">
                        <Input id ="1" onChange={handleChange} placeholder="2." value={inValues[active][1]}/>
                        </Div>
                        <Div p="0.5rem">
                        <Input id ="2" onChange={handleChange} placeholder="3." value={inValues[active][2]}/>
                        </Div>
                        <Div p="0.5rem">
                        <Input id ="3" onChange={handleChange} placeholder="4." value={inValues[active][3]}/>
                        </Div>
                        <Div d="flex" p="1rem"  m={{ l: "auto", r:"auto" }}>
                        {active > 0 ? 
                        <Button onClick={() => onBack()} prefix={
                        <Icon
                        name="LongLeft"
                        size="16px"
                        color="white"
                        m={{ r: "1rem" }}
                        />
                    }
                    shadow="3"
                    hoverShadow="4"
                    m={{ r: "1rem" }}
                    align="left"
                    >
                        Back
                    </Button> : null}
                        <Button onClick={() => onNext()} suffix={
                        <Icon
                        name="LongRight"
                        size="16px"
                        color="white"
                        m={{ l: "1rem" }}
                        />
                    }
                    shadow="3"
                    hoverShadow="4"
                    m={{ r: "1rem" }}
                    align="right"
                    >{next}
                    </Button>      
                    </Div>
                    </Div>
                  </Div>
            </Row>
          </Div>
        </Container>
      </Div>
      </Layout>
    )
}

export default Ground