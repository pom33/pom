import React from "react"
import { Link } from "gatsby"
import { Div, Text, Row, Col, Container, Image, Tag } from "atomize"
import Header from "../../../../../components/common/header"
import Layout from "../../../../../components/layout"

class id1 extends React.Component {
  render() {
    return (
      <Layout>
        <Header />
      <Div tag="section" id="features" p={{ t: "6rem" }}>
        <Container>
          <Text
            textSize="display1"
            textWeight="700"
            fontFamily="secondary"
            m={{ b: "1rem" }}
          >
            What is Depression?
          </Text>
          <Text
            textSize="subheader"
            textColor="medium"
            maxW="70rem"
            m={{ b: "2rem" }}
          >
            Depression is a widespread mental health disorder. So if you have it, you’re definitely not alone.<br/> <br/>

            In fact, depression is one of the leading causes of disability in the United States and worldwide. It affects around 264 million people and 17.3 million adults.
            Other names for depression include major depressive disorder, major depression, and clinical depression. <br/> <br/>

            We all feel sad or lonely from time to time. That’s part of being human.
            But if you feel low or hopeless often — like almost daily — it might be depression. This is especially true if you’ve been experiencing symptoms for 2 weeks or longer.
            You might not know what’s causing these lingering symptoms. You might not even know when they began. All you know is that you just haven’t felt like yourself in a while. <br/> <br/>
            
            “Depression is something that doesn’t have much to do with outside circumstances,” says Rachelle Heinemann, a licensed mental health counselor in Brooklyn, New York. “There doesn’t seem to be a reason for it.”
            In other cases, depression has an identifiable cause. A stressful life event, such as a sudden loss or a relationship change, might trigger low moods.
            If these moods last a long time or are relatively severe, this might be considered depression, especially in someone who has a history of depressive episodes. <br/> <br/>
            
            The loss of a loved one, or even the ending of a relationship, can lead to deep feelings of sadness or grief, but those feelings aren’t the same as having depression.
            The grieving process tends to go in waves: Some moments, you might have positive memories or feel OK. Other times, you’ll feel down or lose interest in things you once loved. You also don’t usually suffer from low self-esteem or self-loathing during grief — but those are common symptoms of depression. 
            However, grief can lead to complicated grief or depression, especially if you find it difficult to move on from the loss. <br/> <br/>
          </Text>

          <Text
            textSize="display1"
            textWeight="700"
            fontFamily="secondary"
            m={{ b: "1rem" }}
          >
            Are there different kinds of depression?
          </Text>
          <Text
            textSize="subheader"
            textColor="medium"
            maxW="70rem"
            m={{ b: "2rem" }}
          >
            Yes. Depression isn’t a one-size-fits-all.<br/> <br/>

            “Many people with depression don’t even know they have it,” says Adrienne Meier, a clinical psychologist and telehealth practitioner. “Symptoms are often misattributed to fatigue or stress or even just ‘getting older.'” <br/> <br/>

            These are different kinds of depression: <br/> <br/>

            &bull; Major depression: Also known as clinical depression, this is the most common kind of depression.<br/>
            &bull; Persistent depressive disorder (Dysthymia): This condition is not as intense, but it drags on for two years or longer.<br/>
            &bull; Depressive psychosis: This is a combination of severe depression and delusions or hallucinations.<br/>
            &bull; Bipolar disorder: You alternate between periods of high energy and risky behavior (mania) and severe depression in which you find it difficult to cope.<br/>
            &bull; Atypical depression: You might feel better for short periods in response to positive events. It can start earlier in life and last a long time.<br/>
            &bull; Premenstrual dysphoric disorder (PMDD): This condition causes severe irritability, depression, or anxiety during the time between ovulation and your period.<br/>
            &bull; Seasonal affective disorder: Most common in winter or regions where the days are particularly short in fall and winter. It’s believed to be caused by changes in circadian rhythms, serotonin, and melatonin in response to reduced light exposure.<br/>
            &bull; Situational depression (or adjustment disorder): Begins with a stressful life event, such as a death, move, or family change. It usually begins within 3 months of the event and tends to resolve within 6 months.<br/>
            &bull; Postpartum depression: Occurs during pregnancy or within 12 months of giving birth. It usually coincides with the hormonal and physical changes that come with parenthood.<br/>
            
          </Text>
        
        </Container>
      </Div>
      </Layout>
    )
  }
}

export default id1
