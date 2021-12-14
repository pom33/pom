import React from "react"
import { Link } from "gatsby"
import { Div, Text, Row, Col, Container, Anchor, Icon } from "atomize"

const footerLinks = {
  docs: [
    {
      name: "Installation",
      link: "/docs/react/setup",
    },
    {
      name: "Theme Setup",
      link: "/docs/react/theme",
    },
    {
      name: "Grid",
      link: "/docs/react/grid",
    },
    {
      name: "Atoms",
      link: "/docs/react/atoms",
    },
    {
      name: "Molecules",
      link: "/docs/react/molecules",
    },
    {
      name: "Functions",
      link: "/docs/react/functions",
    },
  ],
  atomize: [
    {
      name: "Features",
      link: "#features",
    },
    {
      name: "Design",
      anchor: true,
      link: "http://www.atomizedesign.com/",
    },
    {
      name: "Development",
      link: "/docs/react/intro",
    },
    // {
    //   name: "Github",
    //   anchor: true,
    //   link: "https://github.com/Proksh/atomize",
    // },
  ],
  resources: [
    {
      name: "Sketch File",
      anchor: true,
      link: "https://gumroad.com/l/atomize",
    },
    {
      name: "Github",
      anchor: true,
      link: "https://github.com/Proksh/atomize",
    },
  ],
  about: [
    // {
    //   name: "Introduction",
    //   link: "/docs/react/intro",
    // },
    {
      name: "Showcase",
      link: "/docs/react/showcase",
    },
    {
      name: "Contribute",
      link: "/docs/react/contributing",
    },
  ],
  extras: [
    {
      name: "Blog",
      anchor: true,
      link:
        "https://hashnode.com/post/getting-started-with-react-atomize-and-gatsby-cjyfgtj0m001obzs19cobmogi",
    },
    // {
    //   name: "Product Hunt",
    //   anchor: true,
    //   link: "/",
    // },
    {
      name: "Need Help?",
      anchor: true,
      link: "mailto:proksh@atomizedesign.com",
    },
    {
      name: "Give Feedback",
      anchor: true,
      link: "mailto:proksh@atomizedesign.com",
    },
  ],
}

const mediaLinks = [
  {
    icon: "Github",
    link: "https://github.com/pom33/pom33.github.io",
  }
]

const Footer = () => {
  return (
    <Div
      tag="footer"
      p={{ t: { xs: "12rem", md: "8rem" }, b: { xs: "4rem", md: "1rem" } }}
      pos="relative"
    >
      <Container>
        

        <Div d="flex" align="center" justify="center" flexDir="column">
          <Text
            tag="h2"
            textWeight="400"
            textSize="body"
            textAlign="center"
            m={{ b: "1rem" }}
          >
            If you believe you or another individual is suffering a mental health crisis or other medical emergency, contact your doctor immediately, seek medical attention immediately in an emergency room or call 911. 
          </Text>
          <Div d="flex" align="center" justify="center">
            {mediaLinks.map((link, index) => (
              <Anchor href={link.link} target="_blank">
                <Icon
                  name={link.icon}
                  size="20px"
                  hoverColor="info800"
                  m={{ r: index !== mediaLinks.length - 1 && "1rem" }}
                  cursor="pointer"
                />
              </Anchor>
            ))}
          </Div>
        </Div>
      </Container>
    </Div>
  )
}

export default Footer
