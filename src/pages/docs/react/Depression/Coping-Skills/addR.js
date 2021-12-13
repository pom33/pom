import React from "react"
import { Link } from "gatsby"
import { Div, Text, Row, Col, Container, Image, Tag } from "atomize"
import Header from "../../../../../components/common/header"
import Layout from "../../../../../components/layout"

class addR extends React.Component {
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
            Additional Resources to help an individual living with depression or helping someone with depression.
          </Text>
          <Text
            textSize="subheader"
            textColor="medium"
            maxW="70rem"
            m={{ b: "2rem" }}
          >
            &bull; <a href = "https://psychcentral.com/depression/living-with-depression-guide#managing-depression">Learn more about living with depression.</a> <br/>
            &bull; <a href = "https://psychcentral.com/lib/how-can-i-help-someone-in-my-life-whos-depressed#1">How Can I Help Someone in My Life Who’s Depressed?</a> <br/>
            &bull; <a href = "https://psychcentral.com/blog/9-best-ways-to-support-someone-with-depression#1">9 Best Ways to Support Someone with Depression.</a> <br/>
            &bull; <a href = "https://psychcentral.com/blog/9-ways-to-help-a-friend-or-family-member-with-depression#1">9 Ways to Help a Friend or Family Member with Depression.</a> <br/>
            &bull; <a href = "https://psychcentral.com/blog/4-ways-to-support-someone-with-depression/">4 Ways to Support Someone with Depression.</a> <br/>
            &bull; <a href = "https://psychcentral.com/pro/new-therapist/2020/07/identifying-depression-in-the-elderly#1">Identifying Depression in the Elderly.</a> <br/>
            &bull; <a href = "https://psychcentral.com/blog/10-things-you-should-say-to-a-depressed-loved-one/">10 Things You Should Say to a Depressed Loved One.</a> <br/>
            &bull; <a href = "https://psychcentral.com/blog/what-not-to-say-to-a-depressed-person/">What Not to Say to a Depressed Person.</a> <br/>
            &bull; <a href = "https://psychcentral.com/lib/worst-things-to-say-to-someone-whos-depressed#1">Worst Things to Say to Someone Who’s Depressed.</a> <br/>
            &bull; <a href = "https://psychcentral.com/blog/6-things-to-say-to-someone-with-depression-or-whos-depressed#1">6 Things to Say to Someone with Depression or Who’s Depressed.</a> <br/>
            
          </Text>

          <Text
            textSize="display1"
            textWeight="700"
            fontFamily="secondary"
            m={{ b: "1rem" }}
          >
            Next steps
          </Text>
          <Text
            textSize="subheader"
            textColor="medium"
            maxW="70rem"
            m={{ b: "2rem" }}
          >
            Recovery from depression can take time, but there is hope. There are many steps you can take to manage depression.

            You can begin by talking with someone — anyone — about your feelings and finding some immediate emotional support through the sharing.

            Some people begin by talking with their family physician. A medical professional can also offer referrals or encourage you to continue your treatment with a mental health specialist.

            When it comes to managing depression, your first step can connect you with the resources you need to manage your symptoms and thrive. <br/><br/>

            <b>Suicide prevention</b> - Remember that you’re not alone and resources are available to you. If you need to talk to someone right away, you can:<br/>

            &bull; Call the <a href = "https://suicidepreventionlifeline.org/">National Suicide Prevention Lifeline</a> 24 hours a day at 800-273-8255. <br/>
            &bull; Text “HOME” to the <a href = "https://www.crisistextline.org/?gclid=EAIaIQobChMIsPDQrdXH5wIVBRx9Ch1YdQjIEAAYASAAEgJ_1_D_BwE">Crisis Textline</a> at 741741.

          </Text>
        
        </Container>
      </Div>
      </Layout>
    )
  }
}

export default addR
