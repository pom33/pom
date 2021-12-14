import React, { useState } from "react"
import { Link } from "gatsby"
import { Div, Text, Row, Col, Container, Image, Tag, Input, Button, Icon } from "atomize"
import Header from "../../../../components/common/header"
import Layout from "../../../../components/layout"
import { userState } from 'react';
import intro1 from "../../../../images/anxiety/urge_surfing2.png"

// import intro1 from "../../../../images/anxiety/grounding_technique.png"
// import intro2 from "../../../../images/anxiety/urge-surfing.png"
// import intro3 from "../../../../images/anxiety/gamee.png"

const list = [
  {
    icon: intro1,
    heading: "Urge Surfing",
    subheading: "Urge surfing is a technique for managing your unwanted behaviors, Rather than giving in to an urge, you will ride it out, like a surfer riding a wave. After a short time, the urge will pass on its own.",
    subheading2: "",
  },
  {
    // icon: intro2,
    heading: "Urge Surfing",
    subheading: "How to Practice Urge Surfing",
    subheading2: "1. Acknowledge you are having an urge",
  },
  {
    // icon: intro3,
    heading: "Urge Surfing",
    subheading: "How to Practice Urge Surfing",
    subheading2: "2. Notice your thoughts and feelings without trying to change or suppress them.",
  },
  {
    
    heading: "Urge Surfing",
    subheading: "How to Practice Urge Surfing",
    subheading2: "3. Remind yourself..."
   
  },

]
const Ground = () => {
    const [active, setactive] = useState(0);
 
    const onNext = () => {
      if (active === list.length-1)
        window.location.href='/docs/react/anxiety/anxiety_techniques'
      setactive(active + 1);
      
    }

    const onBack = () => {
      if (active > 0)
        setactive(active - 1);
      
    }
    console.log(active)
    var data = list[active]
    
    return( 

<Layout>
  <Header />

<Div d="flex" align={{ xs: "space-around", lg: "center" }} tag="section" id="features" p={{ t: "8rem" }}>
        <Container d="flex" align="center">
          <Div 
            p={{ b: "6rem" }}
            d="flex"
            align="center"
            m={{ l: "10%", t:"5%"}}>
            {/* minW="200rem" */}

            
            <Row>
                 {/* <Col size={{ xs: 12, sm: 12, lg: 12 }}> */}
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
                      minW= {data.icon? "0rem" :"40rem"}
                    >
                    
                      <Div flexGrow="1"
                      
                        p={{ b: "8%" }}>
                        
                        <Text
                          textSize="title"
                          textWeight="500"
                          m={{ b: "0rem" }}
                        >
                          {/* {item.heading} */}
                          {data.heading}
                        </Text>
                        
                      </Div>
                     
                      <Text
                           textSize="subheader"
                           textColor="medium"
                          textWeight="500"
                        >
                          {/* {item.subheading} */}
                          {data.subheading}
                        </Text>
                        {data.icon? <Image src={data.icon}
                     w="70%" m={{l:"auto" , r:"auto" }} d="block"
                     /> : null}
                        <Text
                           textSize="subheader"
                           textColor="medium"
                          textWeight="400"
                        >
                          {/* {item.subheading2} */}
                          {data.subheading2}
                        </Text>
                       
                        { active===3 ? <ul>
                        <li>It is okay to have urges. They are natural reactions to addictions and habits.</li>
                        <li>Some discomfort is okay. I don't have to change it</li>
                        <li>An urge is a feeling, not a must. 'I can have this feeling and choose not to act.'</li>
                        <li>An urge is temporary, Like any other feeling, it will pass on its own.</li>
                        </ul>
                        : null}
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
                        <Button className="btn-access" onClick={() => onNext()} suffix={
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
                    >
                        {active === 3 ? "Finish":"Next"}
                    </Button>
                    

                    </Div>
                        

                    </Div>
                    
                  </Div>
                 {/* </Col> */}
 
            </Row>
          </Div>
        </Container>
      </Div>
      </Layout>
  
        )
}

export default Ground