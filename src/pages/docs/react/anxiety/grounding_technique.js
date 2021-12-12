import React, { useState } from "react"
import { Link } from "gatsby"
import { Div, Text, Row, Col, Container, Image, Tag, Input, Button, Icon } from "atomize"
import Header from "../../../../components/common/header"
import Layout from "../../../../components/layout"
import { userState } from 'react';

// import intro1 from "../../../../images/anxiety/grounding_technique.png"
// import intro2 from "../../../../images/anxiety/urge-surfing.png"
// import intro3 from "../../../../images/anxiety/gamee.png"

const list = [
  {
    // icon: intro1,
    heading: "5-4-3-2-1 Technique",
    subheading: "Write the 5 things you can see?",
    subheading2: "Look for small details such as patterns on the ceiling, the way light reflects off a surface, or an object you never noticed",
  },
  {
    // icon: intro2,
    heading: "5-4-3-2-1 Technique",
    subheading: "Write are 4 things you can feel?",
    subheading2: "Notice the sensation of clothing on your body, the sun on your skin, or the feeling of the chait you are sitting in. Pick up an object and examine its weight, texture, and other physical qualities.",
  },
  {
    // icon: intro3,
    heading: "5-4-3-2-1 Technique",
    subheading: "Write are 3 things you can hear?",
    subheading2: "Pay special attention to the sounds your mind has tuned out, such as a ticking clock, distant traffic, or trees blowing in the wind.",
  },
  {
    // icon: intro3,
    heading: "5-4-3-2-1 Technique",
    subheading: "What are 2 things you can smell?",
    subheading2: "Try to notice smells in the air around you, like an air freshener or freshly mowed grass. You may also look around for something that has a scent, such as a flower or an unlit candle.",
  },
  {
    // icon: intro3,
    heading: "5-4-3-2-1 Technique",
    subheading: "What is 1 thing you can taste?",
    subheading2: "Carry gum, candy, or small snacks for this step. Pop one in your mouth and focus your attention closely on the flavors.",
  },

]
const Ground = () => {
    const [active, setactive] = useState(0);
   
    const [inValues, setInValues] = useState({
      0:["","","","",""],
      1:["","","","",""],
      2:["","","","",""],
      3:["","","","",""],
      4:["","","","",""]
    });
    // if(active==list.length){
    //   setactive(0);
    // }
    const handleChange = (event) => {
      console.log(event.target.id)
      const temp = inValues
      temp[active][event.target.id] = event.target.value
      setInValues({...temp});
    }
    const onNext = (e) => {
      if (active == list.length-1)
        window.location.href='/docs/react/anxiety/anxiety_techniques'
    
      setactive(active + 1);
      console.log(inValues)
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
                    >
                    
                      <Div flexGrow="1"
                        // bgImg={item.icon}
                        // bgSize="contain"
                        bgPos="center"
                        bgRepeat="no-repeat"
                        p={{ b: "3%" }}
                        >
                        
                        <Text
                          textSize="title"
                          textWeight="500"
                          m={{ b: "0rem" }}
                        >
                          {/* {item.heading} */}
                          {data.heading}
                        </Text>
                        <Text>
                          Grounding techniques help control anxiety symptoms by turning attention away from
thoughts, memories, or worries, and refocusing on the present moment. Using the 5-4-3-2-1 technique, you will purposefully take in the details of your surroundings
using each of your senses. Strive to notice small details that your mind would usually tune out,
such as distant sounds, or the texture of an ordinary object.
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
                        <Text
                           textColor="medium"
                          textWeight="200"
                        >
                          {/* {item.subheading2} */}
                          {data.subheading2}
                        </Text>
                        {5- active >= 0 ?  <Div p="0.5rem">
                        {/* <Input placeholder="1."/> value={inValues.active[0]}*/}
                        <Input id ="0" placeholder="1."  onChange={handleChange} value={inValues[active][0]}/>
                        </Div> : null}
                      
                        {5- active > 1 ?
                        <Div p="0.5rem">
                        <Input id ="1" onChange={handleChange} placeholder="2." value={inValues[active][1]}/>
                        </Div> : null }

                        {5- active > 2 ?
                        <Div p="0.5rem">
                        <Input id ="2" onChange={handleChange} placeholder="3." value={inValues[active][2]}/>
                        </Div> : null }

                        {5- active > 3 ?
                        <Div p="0.5rem">
                        <Input id ="3" onChange={handleChange} placeholder="4." value={inValues[active][3]}/>
                        </Div> : null }

                        {5- active > 4 ?
                        <Div p="0.5rem">
                        <Input id ="4" onChange={handleChange} placeholder="5." value={inValues[active][4]}/>
                        </Div> : null }

                        <Div d="flex" p="1rem"  m={{ l: "auto", r:"auto" }}>
                        {active > 0 ? 
                        <Button className="btn-access" onClick={() => onBack()} suffix={
                        <Icon
                        name="LongLeft"
                        size="16px"
                        color="white"
                        m={{ l: "1rem" }}
                        />
                    }
                    shadow="3"
                    hoverShadow="4"
                    m={{ r: "1rem" }}
                    align="left"
                    >
                        Back
                    </Button> : null}
                        <Button className="btn-access" onClick={(e) => onNext(e)} suffix={
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
                       {active === 4 ? "Finish":"Next"}
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